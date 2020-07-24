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
<div id="app">
  <chessboard></chessboard>
</div>

<link rel="stylesheet" href="vue-chessboard/dist/vue-chessboard.css"/>

<script src="vue.js"></script>
<script src="vue-chessboard/dist/vue-chessboard.browser.js"></script>

<script>
new Vue({
  el: '#app',
  components: {
    VueChessboard
  }
});
</script>
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

  #### Simple Chessboard with black orientation. Default is white
  ```html
    <chessboard orientation="black"/>
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

  #### Chessboard with onmove callback. Returns positional info { "legal_black": 20, "checks_black": 0, "threat_black": 0, "turn": "black" } after each move.
  It also returns the fen and the history data. 
  ```html
    <chessboard @onMove="showInfo"/>
    <div>
      {{this.positionInfo}}
    </div>
  ```
  ```js
showInfo(data) {
    this.positionInfo = data
}
  ```

  #### Chessboard with onpromote callback
  When there is a promotion it will execute the callback. Just return the first letter of the piece: q:Queen, r:Rook, k:Knight, b:Bishop
  ```html
    <chessboard :onPromotion="promote"/>
  ```
  ```js
promote() {
    return 'r' // This will promote to a rook
}
  ```

  #### Extended Component (Play vs random AI). 
  <p> You can extend the chessboard component to add new methods</p>
  
  ```html
    // newboard.vue
    <script>
    import { chessboard }  from 'vue-chessboard'

    export default {
      name: 'newboard',
      extends: chessboard,
      methods: {
        userPlay() {
          return (orig, dest) => {
            if (this.isPromotion(orig, dest)) {
              this.promoteTo = this.onPromotion()
            }
            this.game.move({from: orig, to: dest, promotion: this.promoteTo}) // promote to queen for simplicity
            this.board.set({
              fen: this.game.fen()
            })
            this.calculatePromotions()
            this.aiNextMove()
          };
        },
        aiNextMove() {
          let moves = this.game.moves({verbose: true})
          let randomMove = moves[Math.floor(Math.random() * moves.length)]
          this.game.move(randomMove)

          this.board.set({
            fen: this.game.fen(),
            turnColor: this.toColor(),
            movable: {
              color: this.toColor(),
              dests: this.possibleMoves(),
              events: { after: this.userPlay()},
            }
          });
        },
      },
      mounted() {
        this.board.set({
          movable: { events: { after: this.userPlay()} },
        })
      }
    }
    </script>
  ```
---

## Want to see all my chess related projects? 

Check [My projects](http://vitomd.com/blog/projects/) for a full detailed list.

## License

GPL-3.0 
