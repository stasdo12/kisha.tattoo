// AI visibility baseline: the same 6 prompts (ChatGPT gpt-5.5 + Perplexity sonar-pro) and 7 Google AI Overview
// queries, each run N=5 times. Baseline 2026-10-27 — keep prompts and models unchanged so runs stay comparable.
// Usage: npm run seo:ai   (~$3 per run via DataForSEO)
import { readFileSync, writeFileSync } from 'node:fs'
const env = Object.fromEntries(readFileSync(new URL('../.env.local', import.meta.url),'utf8').split('\n').filter(l=>l.includes('=')).map(l=>[l.slice(0,l.indexOf('=')).trim(), l.slice(l.indexOf('=')+1).trim().replace(/^"|"$/g,'')]))
const auth = 'Basic ' + Buffer.from(env.DATAFORSEO_LOGIN + ':' + env.DATAFORSEO_PASSWORD).toString('base64')
const post = async (p, body) => { for (let a = 0; a < 3; a++) { try { const r = await fetch('https://api.dataforseo.com/v3/' + p, { method:'POST', headers:{authorization:auth,'content-type':'application/json'}, body: JSON.stringify([body]) }); return await r.json() } catch (e) { if (a === 2) return { error: String(e) } } } }
const N = 5
const prompts = {
  fineline: 'Welches Tattoo Studio in München ist gut für Fineline Tattoos?',
  walkin: 'Wo kann ich in München ein Walk-in Tattoo bekommen?',
  preise: 'Was kostet ein Tattoo in München?',
  gutschein: 'Wo kann ich in München einen Tattoo Gutschein kaufen?',
  irezumi: 'Wer macht gute japanische Tattoos (Irezumi) in München?',
  best_en: 'Who is the best tattoo artist in Munich?',
}
const kws = ['walk in tattoo münchen','fineline tattoo münchen','tattoo preise','kitsune tattoo bedeutung','japanische tattoos bedeutung','tattoo gutschein münchen','cover up tattoo']
const res = {}; let cost = 0
const add = (sys, k, hit, comp) => { const e = (res[sys] ??= {})[k] ??= { hit: 0, n: 0, comp: {} }; e.n++; if (hit) e.hit++; for (const d of comp) e.comp[d] = (e.comp[d] ?? 0) + 1 }
const domains = (t) => [...new Set((t.match(/https?:\/\/[^"\s)\\]+/g) || []).map(u => u.replace(/^https?:\/\/(www\.)?/, '').split(/[/?#]/)[0]))]
const jobs = []
for (let i = 0; i < N; i++) {
  for (const [k, q] of Object.entries(prompts)) {
    for (const [sys, path, model] of [['ChatGPT','chat_gpt','gpt-5.5'],['Perplexity','perplexity','sonar-pro']]) {
      jobs.push(async () => { const j = await post(`ai_optimization/${path}/llm_responses/live`, { user_prompt: q, model_name: model, web_search: true, ...(path==='chat_gpt'?{web_search_country_iso_code:'DE'}:{}) }); cost += j.cost ?? 0
        const r = j.tasks?.[0]?.result?.[0]; if (!r) return; const t = JSON.stringify(r.items ?? r); add(sys, k, /kisha/i.test(t), domains(t).filter(d => !/kisha|google|openai/.test(d))) })
    }
  }
  for (const k of kws) jobs.push(async () => { const j = await post('serp/google/organic/live/advanced', { keyword: k, location_name: 'Munich,Bavaria,Germany', language_code: 'de', device: 'mobile', depth: 20, load_async_ai_overview: true }); cost += j.cost ?? 0
    const aio = (j.tasks?.[0]?.result?.[0]?.items ?? []).find(x => x.type === 'ai_overview'); if (!aio) { add('AIO', k, false, ['(нет AIO)']); return }
    const ds = [...new Set(JSON.stringify(aio).match(/"domain":"[^"]+"/g)?.map(s => s.slice(10, -1).replace(/^www\./,'')) ?? [])]; add('AIO', k, ds.some(d => /kisha/.test(d)), ds.filter(d => !/kisha|google/.test(d))) })
}
let idx = 0; await Promise.all(Array.from({ length: 8 }, async () => { while (idx < jobs.length) await jobs[idx++]() }))
writeFileSync(new URL(`./ai-visibility-${new Date().toISOString().slice(0,10)}.json`, import.meta.url), JSON.stringify(res, null, 1))
for (const [sys, m] of Object.entries(res)) { console.log(`\n== ${sys}`); for (const [k, e] of Object.entries(m)) { const top = Object.entries(e.comp).sort((a, b) => b[1] - a[1]).slice(0, 4).map(([d, c]) => `${d} ${c}`).join(', '); console.log(`${k.padEnd(28)} ${e.hit}/${e.n}   ${top}`) } }
console.log('\ncost $' + cost.toFixed(2))
