#!/bin/sh
# PostToolUse on git push: a green CI does not prove the deploy, so remind
# Claude to check the live site before calling it done. The hook sees every
# Bash call, so it stays silent unless the command actually pushed.
jq -r '.tool_input.command // ""' | grep -Eq '(^|[;&|[:space:]])git[[:space:]]+push([[:space:]]|$)' || exit 0
cat <<'EOF'
{"hookSpecificOutput":{"hookEventName":"PostToolUse","additionalContext":"Push ≠ деплой. Проверить: gh run watch (CI зелёный) → curl живого URL с изменением → при сомнении ssh … 'cd /var/www/kishatattoo && git log --oneline -1'. Webhook отвечает 200 до git fetch, зелёный CI не доказывает деплой. Если менялись страницы, отправить их в Bing (npm run bing) и сказать Стасу, какие URL запросить в GSC."}}
EOF
