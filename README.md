# Install
```js
npm i --save mini-piece-table
```
# Usage
```js
const PieceTable = require('mini-piece-table');

const document = new PieceTable('123');

document.insert('456', 3);

document.delete(2, 1);

const sequence = document.getSequence();
// sequence === '12456'
```
