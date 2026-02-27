# M3 Mobile — SolutionBuilder

Кастомный HTML/CSS/JS блок, вынесенный из Tilda.

## Структура

```
m3-mobile/
├── index.html     # Разметка
├── style.css      # Стили (~27k)
├── app.js         # JavaScript логика
└── README.md      # Этот файл
```

## Деплой на GitHub Pages

1. Создай репозиторий на GitHub (например `m3-mobile-builder`)
2. Загрузи все файлы
3. Settings → Pages → Source: `main` branch / `root`
4. Твой сайт будет на: `https://USERNAME.github.io/m3-mobile-builder/`

## Подключение в Tilda (блок T123 — HTML)

Вставь в HTML-блок на Tilda:

```html
<iframe 
  src="https://USERNAME.github.io/m3-mobile-builder/" 
  style="width:100%;border:none;min-height:100vh;" 
  scrolling="no"
  id="m3-iframe">
</iframe>
<script>
  // Автоподбор высоты iframe
  window.addEventListener('message', function(e) {
    if (e.data && e.data.type === 'resize') {
      document.getElementById('m3-iframe').style.height = e.data.height + 'px';
    }
  });
</script>
```

Добавь в конец `app.js` для авторесайза:

```js
// Отправляем высоту родителю (Tilda)
function sendHeight() {
  window.parent.postMessage({ type: 'resize', height: document.body.scrollHeight }, '*');
}
window.addEventListener('load', sendHeight);
window.addEventListener('resize', sendHeight);
```

## Workflow разработки

```bash
# Редактируй локально
# Закоммить изменения
git add .
git commit -m "feat: описание изменений"
git push

# GitHub Pages автоматически обновится за ~30 сек
# Tilda подтянет новую версию через iframe без каких-либо действий с твоей стороны
```
