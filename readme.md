## Структура проекта

### markup

В директории находится вёрстка проекта: примеры страниц, ui-kit и карта сайта (`sitemap.html`). Начинать знакомство с проектом лучше с карты.

### frontend

Директория для фронтенда проекта.

#### public

Директория для размещения статичных ресурсов (шрифты, стили, изображения и так далее).

#### src

В директории размещается исходный код проекта: компоненты, файлы с тестами, модули и так далее. Структура директории `src` может быть произвольной.

## Алгоритм работы над фронтендом

1. Перейдите в диретокрию `frontend`.

2. Установите зависимости, выполнив команду `npm install`.

3. Проверьте работу приложения, выполнив команду `npm start`.

4. Перейдите по адресу, указанному в терминале (скорее всего, это будет `http://localhost:5173/`). Если сборка прошла успешно, то на странице вашего приложения вы увидите `Рабочее приложение FitFriends`.

5. Ссылка на этот проект https://github.com/alinavdovichenko/fit-friends

### backend

## Алгоритм работы над бэкендом

1. Перейдите в диретокрию `backend\project`.

2. Установите зависимости, выполнив команду `npm install`.

3. Запуск проекта `npx nx run app:serve`.

4. docker compose \
--file ./apps/app/docker-compose.ayml \
--env-file ./apps/app/app.env \
--project-name "fitfriends" \
up \
-d

5. Удалите все данные из базы данных: `npx nx run app:db:reset`

6. Сгенерируйте базу: `npx nx run app:db:generate`

7. Заполните базу данными: `npx nx run app:db:seed`