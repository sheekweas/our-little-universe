# Romantic Countdown Site

Готовый сайт для GitHub Pages.

## Как добавить музыку
1. Положи mp3-файлы в папку `music`.
2. Открой `script.js`.
3. В `playlist` поменяй:
   - `title`
   - `artist`
   - `file`

Пример:
```js
{ title: "Perfect", artist: "Ed Sheeran", file: "music/perfect.mp3" }
```

## Как добавить картинки
1. Положи картинки в папку `images`.
2. Назови их, например:
   - `hero.jpg`
   - `day-1.jpg`
   - `day-2.jpg`
3. Или вставь ссылку из интернета в поле `image`.

## Где менять дату
В `script.js`:
```js
const returnDate = new Date(2026, 8, 12, 0, 0, 0);
```
Сентябрь = 8, потому что месяцы в JavaScript начинаются с 0.
