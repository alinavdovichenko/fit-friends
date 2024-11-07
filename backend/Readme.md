## Структура проекта

[Алина Вдовиченко](https://up.htmlacademy.ru/nodejs-2/7/user/1837789).

---
_Не удаляйте и не изменяйте папки и файлы:_
_`.editorconfig`, `.gitattributes`, `.gitignore`._

## Алгоритм работы над бэкендом

1. Перейдите в диретокрию `backend\project`.

2. Установите зависимости, выполнив команду `npm install`.

3. Запуск проекта npx nx run app:serve

4. docker compose \
--file ./apps/app/docker-compose.dev.yml \
--env-file ./apps/app/app.env \
--project-name "fitfriends" \
up \
-d

5. npx nx run app:db:reset

6. npx nx run app:db:generate

7. npx nx run app:db:seed