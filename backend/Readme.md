## Структура проекта

[Алина Вдовиченко](https://up.htmlacademy.ru/nodejs-2/7/user/1837789).

---
_Не удаляйте и не изменяйте папки и файлы:_
_`.editorconfig`, `.gitattributes`, `.gitignore`._

## Алгоритм работы над бэкендом

1. Перейдите в диретокрию `backend\project`.

2. Установите зависимости, выполнив команду `npm install`.

3. npx nx run app:serve

4. docker compose \
--file ./apps/blog/docker-compose.dev.yml \
--env-file ./apps/blog/blog.env \
--project-name "typoteka-blog" \
up \
-d