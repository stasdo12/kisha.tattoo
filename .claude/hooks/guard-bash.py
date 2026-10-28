#!/usr/bin/env python3
# PreToolUse guard for Bash. Blocks the commands this project has learned the
# hard way never to run. Exit 2 = block, the stderr text goes back to Claude.
import json
import re
import sys

cmd = json.load(sys.stdin).get("tool_input", {}).get("command", "")

SECRETS = r"(\.env\.local|\.google-sa\.json|\.pinterest-token[^\s]*\.json|gutscheine/)"

RULES = [
    # PLAN-*.md, Arieta/, analiz/ and secrets live untracked next to the code.
    (r"\bgit\s+add\s+(?:[^|;&]*\s)?(-A|--all|-u|--update|\.|\*|:/)(?=\s|$|[;&|])",
     "git add целиком запрещён: в корне лежат PLAN-*.md, Arieta/, analiz/ и ключи. Добавляй файлы по имени."),
    (r"\bgit\s+(add|commit)\b[^|;&]*" + SECRETS,
     "Это файл с ключами или персональными данными, в git он не попадает никогда."),
    (r"\bgit\s+push\b[^|;&]*(\s-f\b|--force)",
     "Force-push в main запрещён: деплой идёт с main через CI."),
    # Deploy is git push → GitHub Actions → webhook. Anything else breaks it.
    (r"\b(rsync|scp)\b[^|;&]*(94\.130\.96\.166|kishatattoo)",
     "Деплой только через git push. rsync/scp на сервер ломает webhook CI/CD."),
    (r"\bssh\b.*94\.130\.96\.166.*(git\s+(reset|pull|checkout|commit)|npm\s+run\s+build|rm\s+-rf|pm2\s+(delete|stop))",
     "Сервер не правим руками: изменения только через git push → CI → webhook. Чтение (git log, pm2 logs) можно."),
    # `board` creates a board on the live account, `unboard` deletes one with its pins.
    (r"(pinterest(\.mjs)?|npm\s+run\s+pinterest)\b[^|;&]*\s(board|unboard)\b",
     "pinterest board создаёт доску, unboard удаляет её вместе с пинами, оба пишут в живой аккаунт. Только по прямой просьбе Стаса, руками."),
    (r"\b(cat|less|more|head|tail|bat)\b[^|;&]*" + SECRETS,
     "Ключи в чат не выводим. Скрипты читают их сами."),
]

for pattern, reason in RULES:
    if re.search(pattern, cmd):
        print(f"Заблокировано хуком проекта: {reason}", file=sys.stderr)
        sys.exit(2)

sys.exit(0)
