### Importancia de los comentarios

### Comentarios no pueden excusar un código incorrecto

### Comentario de calidad

- README.md
- (Exp. personal): mantenerse lejos del detalle.
- (Exp. personal): explicar las regex siempre con ejemplos

### Comentarios TODOs y FIXMEs

- TODO: Algo que te dejas a sabiendas
- FIXME: Aquí puede haber un issue/bug

- (Exp. personal): Poner el ID de la herramienta de tracking
- (Exp. personal): Dejar enlaces de la investigación que has hecho, en el futuro sabrás por dónde tirar.
- Extensiones para el vsCode

```js
// TODO LAM-2950
// Fix deprecated warning (error for storybook >= v7)
// @see https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators
addDecorator(literalsDecorator);
```

```js
// FIXME LAM-3258
// <ScreenList /> depends on <ScreenCardController /> */
```

### Comentarios informativos y legales

### Comentario de mala calidad, confuso, redundantes, sobrantes

```js
/**
 * @param {itemId} itemId
 */
function getItemPrice(itemId) {}
```

```js
/**
 * fetch item name
 */
function getItemPrice(itemId) {}
```

***

```js
function getFileInfoFromFolder(path) => {
  const files = fs.readdirSync(path, 'utf8');
  const response = [];
  for (let file of files) {
    const extension = path.extname(file);
    const fileSizeInBytes = fs.statSync(file).size;
    response.push({ name: file, extension, fileSizeInBytes });
  }
  return response;
}
```
