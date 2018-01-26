# vue-chessboard

[![npm](https://img.shields.io/npm/v/vue-chessboard.svg) ![npm](https://img.shields.io/npm/dm/vue-chessboard.svg)](https://www.npmjs.com/package/vue-chessboard)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

Chessboard vue component to load positions, create positions and see threats

- It uses [chess.js](https://github.com/jhlywa/chess.js) for chess movements and validations
- It uses chessground for chessboard UI  [chessground](https://github.com/ornicar/chessground)

![http://g.recordit.co/40JDuy8tAk.gif](http://g.recordit.co/40JDuy8tAk.gif)

Check live examples: [http://vitomd.com/vue-chessboard-examples/](http://vitomd.com/vue-chessboard-examples/)

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)

# Installation

```
npm install --save vue-chessboard
```

## Default component import


```javascript
import {chessboard} from 'vue-chessboard'
import 'vue-chessboard/dist/vue-chessboard.css'
```

Then use it in your template
```html
    <chessboard/>
```

## Browser

```html
<link rel="stylesheet" href="vue-chessboard/dist/vue-chessboard.css"/>

<script src="vue.js"></script>
<script src="vue-chessboard/dist/vue-chessboard.browser.js"></script>
```

# Examples

  Check live examples: [http://vitomd.com/vue-chessboard-examples/](http://vitomd.com/vue-chessboard-examples/)
  
  Check live examples repository: [https://github.com/vitogit/vue-chessboard-examples](https://github.com/vitogit/vue-chessboard-examples)
  
  Check full application using the component: [Chess Guardian](http://vitomd.com/vue-chess-guardian/)

  #### Simple Chessboard with legal moves
  ```html
    <chessboard/>
  ```
  #### Simple Chessboard with free moves
  ```html
    <chessboard :free="true"/>
  ```
  
  #### Simple Chessboard that shows threats for current position and player
  ```html
    <chessboard :showThreats="true"/>
  ```
  
  #### Fen binded to the chessboard (load position when click on a new position)
  ```html
    <chessboard :fen="currentFen"/>
    <button class="button is-light" @click="loadFen(fen)" v-for="fen in fens">
      {{fen}}
    </button>
  ```
  
  #### Simple Chessboard with legal moves
  ```html
    <chessboard @onMove="showInfo"/>
    <div>
      {{this.positionInfo}}
    </div>
  ```
---

## License

[MIT](http://opensource.org/licenses/MIT)
