!function(x){function t(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return x[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var e={};t.m=x,t.c=e,t.i=function(x){return x},t.d=function(x,e,n){t.o(x,e)||Object.defineProperty(x,e,{configurable:!1,enumerable:!0,get:n})},t.n=function(x){var e=x&&x.__esModule?function(){return x.default}:function(){return x};return t.d(e,"a",e),e},t.o=function(x,t){return Object.prototype.hasOwnProperty.call(x,t)},t.p="/",t(t.s=14)}([function(x,t,e){"use strict";function n(x,t){if(!(x instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function x(x,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(x,n.key,n)}}return function(t,e,n){return e&&x(t.prototype,e),n&&x(t,n),t}}(),r=function(){function x(t,e){n(this,x),this.x=t,this.y=e}return i(x,[{key:"plus",value:function(t){return new x(this.x+t.x,this.y+t.y)}},{key:"times",value:function(t){return new x(this.x*t,this.y*t)}}]),x}();t.default=r},function(x,t,e){var n=e(10);"string"==typeof n&&(n=[[x.i,n,""]]);var i={};i.transform=void 0;e(12)(n,i);n.locals&&(x.exports=n.locals)},function(x,t,e){"use strict";function n(x){return x&&x.__esModule?x:{default:x}}e(1);var i=e(3),r=n(i),o=e(9),a=n(o),s=e(8),u=n(s);document.addEventListener("DOMContentLoaded",function(){(0,a.default)(u.default,r.default)})},function(x,t,e){"use strict";function n(x,t){if(!(x instanceof t))throw new TypeError("Cannot call a class as a function")}function i(x,t){x.translate(t,0),x.scale(-1,1),x.translate(-t,0)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function x(x,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(x,n.key,n)}}return function(t,e,n){return e&&x(t.prototype,e),n&&x(t,n),t}}(),o=40,a=document.createElement("img");a.src="./../dist/images/sprites.png";var s=document.createElement("img");s.src="./../dist/images/player.png";var u=function(){function x(t,e){n(this,x),this.canvas=document.createElement("canvas"),this.canvas.width=Math.min(1200,e.width*o),this.canvas.height=Math.min(800,e.height*o),t.appendChild(this.canvas),this.cx=this.canvas.getContext("2d"),this.level=e,this.animationTime=0,this.flipPlayer=!1,this.viewport={left:0,top:0,width:this.canvas.width/o,height:this.canvas.height/o},this.drawFrame(0)}return r(x,[{key:"clear",value:function(){this.canvas.parentNode.removeChild(this.canvas)}},{key:"drawFrame",value:function(x){this.animationTime+=x,this.updateViewport(),this.clearDisplay(),this.drawBackground(),this.drawActors()}},{key:"updateViewport",value:function(){var x=this.viewport,t=x.width/3,e=this.level.player,n=e.pos.plus(e.size.times(.5));n.x<x.left+t?x.left=Math.max(n.x-t,0):n.x>x.left+x.width-t&&(x.left=Math.min(n.x+t-x.width,this.level.width-x.width)),n.y<x.top+t?x.top=Math.max(n.y-t,0):n.y>x.top+x.height-t&&(x.top=Math.min(n.y+t-x.height,this.level.height-x.height))}},{key:"clearDisplay",value:function(){"won"===this.level.status?this.cx.fillStyle="rgb(68, 191, 255)":"lost"===this.level.status?this.cx.fillStyle="rgb(44, 136, 214)":this.cx.fillStyle="rgb(52, 166, 251)",this.cx.fillRect(0,0,this.canvas.width,this.canvas.height)}},{key:"drawBackground",value:function(){for(var x=this.viewport,t=Math.floor(x.left),e=Math.ceil(x.left+x.width),n=Math.floor(x.top),i=Math.ceil(x.top+x.height),r=n;r<i;r++)for(var s=t;s<e;s++){var u=this.level.grid[r][s];if(null!==u){var l=(s-x.left)*o,f=(r-x.top)*o,c="lava"===u?o:0;this.cx.drawImage(a,c,0,o,o,l,f,o,o)}}}},{key:"drawPlayer",value:function(x,t,e,n){var r=8,o=this.level.player;e+=16,x-=8,0!==o.speed.x&&(this.flipPlayer=o.speed.x<0),0!==o.speed.y?r=9:0!==o.speed.x&&(r=Math.floor(12*this.animationTime)%8),this.cx.save(),this.flipPlayer&&i(this.cx,x+e/2),this.cx.drawImage(s,r*e,0,e,n,x,t,e,n),this.cx.restore()}},{key:"drawActors",value:function(){this.level.actors.forEach(function(x){var t=x.size.x*o,e=x.size.y*o,n=(x.pos.x-this.viewport.left)*o,i=(x.pos.y-this.viewport.top)*o;if("player"===x.type)this.drawPlayer(n,i,t,e);else{var r=("coin"===x.type?2:1)*o;this.cx.drawImage(a,r,0,t,e,n,i,t,e)}},this)}}]),x}();t.default=u},function(x,t,e){"use strict";function n(x,t){if(!(x instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function x(x,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(x,n.key,n)}}return function(t,e,n){return e&&x(t.prototype,e),n&&x(t,n),t}}(),r=e(0),o=function(x){return x&&x.__esModule?x:{default:x}}(r),a=function(){function x(t){n(this,x),this.basePos=this.pos=t.plus(new o.default(.2,.1)),this.size=new o.default(.6,.6),this.wobble=Math.random()*Math.PI*2}return i(x,[{key:"act",value:function(x){this.wobble+=8*x;var t=.07*Math.sin(this.wobble);this.pos=this.basePos.plus(new o.default(0,t))}},{key:"type",get:function(){return"coin"}}]),x}();t.default=a},function(x,t,e){"use strict";function n(x,t){if(!(x instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function x(x,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(x,n.key,n)}}return function(t,e,n){return e&&x(t.prototype,e),n&&x(t,n),t}}(),r=e(0),o=function(x){return x&&x.__esModule?x:{default:x}}(r),a=function(){function x(t,e){n(this,x),this.pos=t,this.size=new o.default(1,1),"="===e?this.speed=new o.default(2,0):"|"===e?this.speed=new o.default(0,2):"v"===e&&(this.speed=new o.default(0,3),this.repeatPos=t)}return i(x,[{key:"act",value:function(x,t){var e=this.pos.plus(this.speed.times(x));t.obstacleAt(e,this.size)?this.repeatPos?this.pos=this.repeatPos:this.speed=this.speed.times(-1):this.pos=e}},{key:"type",get:function(){return"lava"}}]),x}();t.default=a},function(x,t,e){"use strict";function n(x){return x&&x.__esModule?x:{default:x}}function i(x,t){if(!(x instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function x(x,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(x,n.key,n)}}return function(t,e,n){return e&&x(t.prototype,e),n&&x(t,n),t}}(),o=e(0),a=n(o),s=e(7),u=n(s),l=e(5),f=n(l),c=e(4),h=n(c),p={"@":u.default,o:h.default,"=":f.default,"|":f.default,v:f.default},d=function(){function x(t){i(this,x),this.width=t[0].length,this.height=t.length,this.grid=[],this.actors=[];for(var e=0;e<this.height;e++){for(var n=t[e],r=[],o=0;o<this.width;o++){var s=n[o],u=null,l=p[s];l?this.actors.push(new l(new a.default(o,e),s)):"x"===s?u="wall":"!"===s&&(u="lava"),r.push(u)}this.grid.push(r)}this.player=this.actors.filter(function(x){return"player"===x.type})[0],this.status=this.finishDelay=null}return r(x,[{key:"isFinished",value:function(){return null!==this.status&&this.finishDelay<0}},{key:"obstacleAt",value:function(x,t){var e=Math.floor(x.x),n=Math.ceil(x.x+t.x),i=Math.floor(x.y),r=Math.ceil(x.y+t.y);if(e<0||n>this.width||i<0)return"wall";if(r>this.height)return"lava";for(var o=i;o<r;o++)for(var a=e;a<n;a++){var s=this.grid[o][a];if(s)return s}}},{key:"actorAt",value:function(x){for(var t=0;t<this.actors.length;t++){var e=this.actors[t];if(e!==x&&x.pos.x+x.size.x>e.pos.x&&x.pos.x<e.pos.x+e.size.x&&x.pos.y+x.size.y>e.pos.y&&x.pos.y<e.pos.y+e.size.y)return e}}},{key:"animate",value:function(x,t){var e=this;null!==this.status&&(this.finishDelay-=x);for(;x>0;)!function(){var n=Math.min(x,.05);e.actors.forEach(function(x){x.act(n,this,t)},e),x-=n}()}},{key:"playerTouched",value:function(x,t){"lava"===x&&null===this.status?(this.status="lost",this.finishDelay=1):"coin"===x&&(this.actors=this.actors.filter(function(x){return x!=t}),this.actors.some(function(x){return"coin"===x.type})||(this.status="won",this.finishDelay=1))}}]),x}();t.default=d},function(x,t,e){"use strict";function n(x,t){if(!(x instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function x(x,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(x,n.key,n)}}return function(t,e,n){return e&&x(t.prototype,e),n&&x(t,n),t}}(),r=e(0),o=function(x){return x&&x.__esModule?x:{default:x}}(r),a=function(){function x(t){n(this,x),this.pos=t.plus(new o.default(0,-.5)),this.size=new o.default(.8,1.5),this.speed=new o.default(0,0)}return i(x,[{key:"moveX",value:function(x,t,e){this.speed.x=0,e.left&&(this.speed.x-=7),e.right&&(this.speed.x+=7);var n=new o.default(this.speed.x*x,0),i=this.pos.plus(n),r=t.obstacleAt(i,this.size);r?t.playerTouched(r):this.pos=i}},{key:"moveY",value:function(x,t,e){this.speed.y+=30*x;var n=new o.default(0,this.speed.y*x),i=this.pos.plus(n),r=t.obstacleAt(i,this.size);r?(t.playerTouched(r),e.up&&this.speed.y>0?this.speed.y=-17:this.speed.y=0):this.pos=i}},{key:"act",value:function(x,t,e){this.moveX(x,t,e),this.moveY(x,t,e);var n=t.actorAt(this);n&&t.playerTouched(n.type,n),"lost"===t.status&&(this.pos.y+=x,this.size.y-=x)}},{key:"playerTouched",value:function(x,t){"lava"===x&&null===this.status?(this.status="lost",this.finishDelay=1):"coin"===x&&(this.actors=this.actors.filter(function(x){return x!==t}),this.actors.some(function(x){return"coin"===x.type})||(this.status="won",this.finishDelay=1))}},{key:"type",get:function(){return"player"}}]),x}();t.default=a},function(x,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=[["                                                                                ","                                                                                ","                                                                                ","                                                                                ","                                                                                ","                                                                                ","                                                                  xxx           ","                                                   xx      xx    xx!xx          ","                                    o o      xx                  x!!!x          ","                                                                 xx!xx          ","                                   xxxxx                          xvx           ","                                                                            xx  ","  xx                                      o o                                x  ","  x                     o                                                    x  ","  x                                      xxxxx                             o x  ","  x          xxxx       o                                                    x  ","  x  @       x  x                                                xxxxx       x  ","  xxxxxxxxxxxx  xxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxx     xxxxxxx   xxxxxxxxx  ","                              x   x                  x     x                    ","                              x!!!x                  x!!!!!x                    ","                              x!!!x                  x!!!!!x                    ","                              xxxxx                  xxxxxxx                    ","                                                                                ","                                                                                "],["                                      x!!x                        xxxxxxx                                    x!x  ","                                      x!!x                     xxxx     xxxx                                 x!x  ","                                      x!!xxxxxxxxxx           xx           xx                                x!x  ","                                      xx!!!!!!!!!!xx         xx             xx                               x!x  ","                                       xxxxxxxxxx!!x         x                                    o   o   o  x!x  ","                                                xx!x         x     o   o                                    xx!x  ","                                                 x!x         x                                xxxxxxxxxxxxxxx!!x  ","                                                 xvx         x     x   x                        !!!!!!!!!!!!!!xx  ","                                                             xx  |   |   |  xx            xxxxxxxxxxxxxxxxxxxxx   ","                                                              xx!!!!!!!!!!!xx            v                        ","                                                               xxxx!!!!!xxxx                                      ","                                               x     x            xxxxxxx        xxx         xxx                  ","                                               x     x                           x x         x x                  ","                                               x     x                             x         x                    ","                                               x     x                             xx        x                    ","                                               xx    x                             x         x                    ","                                               x     x      o  o     x   x         x         x                    ","               xxxxxxx        xxx   xxx        x     x               x   x         x         x                    ","              xx     xx         x   x          x     x     xxxxxx    x   x   xxxxxxxxx       x                    ","             xx       xx        x o x          x    xx               x   x   x               x                    ","     @       x         x        x   x          x     x               x   x   x               x                    ","    xxx      x         x        x   x          x     x               x   xxxxx   xxxxxx      x                    ","    x x      x         x       xx o xx         x     x               x     o     x x         x                    ","!!!!x x!!!!!!x         x!!!!!!xx     xx!!!!!!!!xx    x!!!!!!!!!!     x     =     x x         x                    ","!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxx     x!!!!!!!xx!     xxxxxxxxxxxxx xx  o o  xx                    ","!!!!x x!!!!!!x         x!!!!!x    o                 xx!!!!!!xx !                    xx     xx                     ","!!!!x x!!!!!!x         x!!!!!x                     xx!!!!!!xx  !                     xxxxxxx                      ","!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxxxxxx!!!!!!xx   !                                                  ","!!!!x x!!!!!!x         x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx    !                                                  ","!!!!x x!!!!!!x         x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     !                                                  "],["                                                                                                              ","                                                                                                              ","                                                                                                              ","                                                                                                              ","                                                                                                              ","                                        o                                                                     ","                                                                                                              ","                                        x                                                                     ","                                        x                                                                     ","                                        x                                                                     ","                                        x                                                                     ","                                       xxx                                                                    ","                                       x x                 !!!        !!!  xxx                                ","                                       x x                 !x!        !x!                                     ","                                     xxx xxx                x          x                                      ","                                      x   x                 x   oooo   x       xxx                            ","                                      x   x                 x          x      x!!!x                           ","                                      x   x                 xxxxxxxxxxxx       xxx                            ","                                     xx   xx      x   x      x                                                ","                                      x   xxxxxxxxx   xxxxxxxx              x x                               ","                                      x   x           x                    x!!!x                              ","                                      x   x           x                     xxx                               ","                                     xx   xx          x                                                       ","                                      x   x= = = =    x            xxx                                        ","                                      x   x           x           x!!!x                                       ","                                      x   x    = = = =x     o      xxx       xxx                              ","                                     xx   xx          x                     x!!!x                             ","                              o   o   x   x           x     x                xxv        xxx                   ","                                      x   x           x              x                 x!!!x                  ","                             xxx xxx xxx xxx     o o  x!!!!!!!!!!!!!!x                   vx                   ","                             x xxx x x xxx x          x!!!!!!!!!!!!!!x                                        ","                             x             x   xxxxxxxxxxxxxxxxxxxxxxx                                        ","                             xx           xx                                         xxx                      ","  xxx                         x     x     x                                         x!!!x                xxx  ","  x x                         x    xxx    x                                          xxx                 x x  ","  x                           x    xxx    xxxxxxx                        xxxxx                             x  ","  x                           x           x                              x   x                             x  ","  x                           xx          x                              x x x                             x  ","  x                                       x       |xxxx|    |xxxx|     xxx xxx                             x  ","  x                xxx             o o    x                              x         xxx                     x  ","  x               xxxxx       xx          x                             xxx       x!!!x          x         x  ","  x               oxxxo       x    xxx    x                             x x        xxx          xxx        x  ","  x                xxx        xxxxxxxxxxxxx  x oo x    x oo x    x oo  xx xx                    xxx        x  ","  x      @          x         x           x!!x    x!!!!x    x!!!!x    xx   xx                    x         x  ","  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ","                                                                                                              ","                                                                                                              "],["                                                                                                  xxx x       ","                                                                                                      x       ","                                                                                                  xxxxx       ","                                                                                                  x           ","                                                                                                  x xxx       ","                          o                                                                       x x x       ","                                                                                             o o oxxx x       ","                   xxx                                                                                x       ","       !  o  !                                                xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx       ","       x     x                                                x   x x   x x   x x   x x   x x   x x           ","       x= o  x            x                                   xxx x xxx x xxx x xxx x xxx x xxx x xxxxx       ","       x     x                                                  x x   x x   x x   x x   x x   x x     x       ","       !  o  !            o                                  xxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxxxx       ","                                                                                                              ","          o              xxx                              xx                                                  ","                                                                                                              ","                                                                                                              ","                                                      xx                                                      ","                   xxx         xxx                                                                            ","                                                                                                              ","                          o                                                     x      x                      ","                                                          xx     xx                                           ","             xxx         xxx         xxx                                 x                  x                 ","                                                                                                              ","                                                                 ||                                           ","  xxxxxxxxxxx                                                                                                 ","  x         x o xxxxxxxxx o xxxxxxxxx o xx                                                x                   ","  x         x   x       x   x       x   x                 ||                  x     x                         ","  x  @      xxxxx   o   xxxxx   o   xxxxx                                                                     ","  xxxxxxx                                     xxxxx       xx     xx     xxx                                   ","        x=                  =                =x   x                     xxx                                   ","        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!","                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","                                                                                                              "]];t.default=n},function(x,t,e){"use strict";function n(x){function t(t){if(x.hasOwnProperty(t.keyCode)){var n="keydown"===t.type;e[x[t.keyCode]]=n,t.preventDefault()}}var e=Object.create(null);return addEventListener("keydown",t),addEventListener("keyup",t),e}function i(x){function t(n){var i=!1;if(null!==e){var r=Math.min(n-e,100)/1e3;i=!i&&!1===x(r)}e=n,i||requestAnimationFrame(t)}var e=null;requestAnimationFrame(t)}function r(x,t,e){function r(x){"Escape"===x.key&&(a=!a)}var o=new t(document.body,x),a=!1,s=n(u);i(function(t){if(!a&&(x.animate(t,s),o.drawFrame(t),x.isFinished()))return o.clear(),e&&e(x.status),!1}),addEventListener("keyup",r)}function o(x,t){function e(i){r(new s.default(x[i]),t,function(t){"lost"===t?(n--,n?e(i):(alert("Game over!"),n=3,e(0))):i<x.length-1?e(i+1):alert("You win!")})}var n=3;e(0)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var a=e(6),s=function(x){return x&&x.__esModule?x:{default:x}}(a),u={37:"left",38:"up",39:"right"}},function(x,t,e){t=x.exports=e(11)(!1),t.push([x.i,'a,body,div,html,p,q{margin:0;padding:0;border:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;vertical-align:baseline}a{text-decoration:none}body{line-height:1.5}q{display:block}q:before{content:""}.background{background:#34a6fb;table-layout:fixed;border-spacing:0}.background td{padding:0}.lava{background:#ff6464}.wall{background:#fff}.actor{position:absolute}.coin{background:#f1e559}.player{background:#404040}.lost .player{background:#a04040}.won .player{-webkit-box-shadow:-4px -7px 8px #fff,4px -7px 8px #fff;box-shadow:-4px -7px 8px #fff,4px -7px 8px #fff}.game{overflow:hidden;max-width:600px;max-height:450px;position:relative;margin:auto}',""])},function(x,t){function e(x,t){var e=x[1]||"",i=x[3];if(!i)return e;if(t&&"function"==typeof btoa){var r=n(i);return[e].concat(i.sources.map(function(x){return"/*# sourceURL="+i.sourceRoot+x+" */"})).concat([r]).join("\n")}return[e].join("\n")}function n(x){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(x))))+" */"}x.exports=function(x){var t=[];return t.toString=function(){return this.map(function(t){var n=e(t,x);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(x,e){"string"==typeof x&&(x=[[null,x,""]]);for(var n={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(n[r]=!0)}for(i=0;i<x.length;i++){var o=x[i];"number"==typeof o[0]&&n[o[0]]||(e&&!o[2]?o[2]=e:e&&(o[2]="("+o[2]+") and ("+e+")"),t.push(o))}},t}},function(x,t,e){function n(x,t){for(var e=0;e<x.length;e++){var n=x[e],i=p[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(l(n.parts[r],t))}else{for(var o=[],r=0;r<n.parts.length;r++)o.push(l(n.parts[r],t));p[n.id]={id:n.id,refs:1,parts:o}}}}function i(x,t){for(var e=[],n={},i=0;i<x.length;i++){var r=x[i],o=t.base?r[0]+t.base:r[0],a=r[1],s=r[2],u=r[3],l={css:a,media:s,sourceMap:u};n[o]?n[o].parts.push(l):e.push(n[o]={id:o,parts:[l]})}return e}function r(x,t){var e=v(x.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=m[m.length-1];if("top"===x.insertAt)n?n.nextSibling?e.insertBefore(t,n.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),m.push(t);else{if("bottom"!==x.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");e.appendChild(t)}}function o(x){if(null===x.parentNode)return!1;x.parentNode.removeChild(x);var t=m.indexOf(x);t>=0&&m.splice(t,1)}function a(x){var t=document.createElement("style");return x.attrs.type="text/css",u(t,x.attrs),r(x,t),t}function s(x){var t=document.createElement("link");return x.attrs.type="text/css",x.attrs.rel="stylesheet",u(t,x.attrs),r(x,t),t}function u(x,t){Object.keys(t).forEach(function(e){x.setAttribute(e,t[e])})}function l(x,t){var e,n,i,r;if(t.transform&&x.css){if(!(r=t.transform(x.css)))return function(){};x.css=r}if(t.singleton){var u=b++;e=y||(y=a(t)),n=f.bind(null,e,u,!1),i=f.bind(null,e,u,!0)}else x.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=s(t),n=h.bind(null,e,t),i=function(){o(e),e.href&&URL.revokeObjectURL(e.href)}):(e=a(t),n=c.bind(null,e),i=function(){o(e)});return n(x),function(t){if(t){if(t.css===x.css&&t.media===x.media&&t.sourceMap===x.sourceMap)return;n(x=t)}else i()}}function f(x,t,e,n){var i=e?"":n.css;if(x.styleSheet)x.styleSheet.cssText=g(t,i);else{var r=document.createTextNode(i),o=x.childNodes;o[t]&&x.removeChild(o[t]),o.length?x.insertBefore(r,o[t]):x.appendChild(r)}}function c(x,t){var e=t.css,n=t.media;if(n&&x.setAttribute("media",n),x.styleSheet)x.styleSheet.cssText=e;else{for(;x.firstChild;)x.removeChild(x.firstChild);x.appendChild(document.createTextNode(e))}}function h(x,t,e){var n=e.css,i=e.sourceMap,r=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||r)&&(n=w(n)),i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([n],{type:"text/css"}),a=x.href;x.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}var p={},d=function(x){var t;return function(){return void 0===t&&(t=x.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),v=function(x){var t={};return function(e){return void 0===t[e]&&(t[e]=x.call(this,e)),t[e]}}(function(x){return document.querySelector(x)}),y=null,b=0,m=[],w=e(13);x.exports=function(x,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=d()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=i(x,t);return n(e,t),function(x){for(var r=[],o=0;o<e.length;o++){var a=e[o],s=p[a.id];s.refs--,r.push(s)}if(x){n(i(x,t),t)}for(var o=0;o<r.length;o++){var s=r[o];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete p[s.id]}}}};var g=function(){var x=[];return function(t,e){return x[t]=e,x.filter(Boolean).join("\n")}}()},function(x,t){x.exports=function(x){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!x||"string"!=typeof x)return x;var e=t.protocol+"//"+t.host,n=e+t.pathname.replace(/\/[^\/]*$/,"/");return x.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(x,t){var i=t.trim().replace(/^"(.*)"$/,function(x,t){return t}).replace(/^'(.*)'$/,function(x,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))return x;var r;return r=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")"})}},function(x,t,e){e(2),x.exports=e(1)}]);