!function(t){var e={};function r(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);class i{constructor(t,e,r){this.setPosition(t,e),this.setSize(r)}setSize(t){this.size=t<0?0:t}setPosition(t,e){this.x=t,this.y=e}setStrokeColor(t){this.strokeColor=t}setFillColor(t){this.fillColor=t}setStrokeWidth(t){this.strokeWidth=t}checkPosition(){}canRender(){return Number.isFinite(this.size)&&Number.isFinite(this.x)&&Number.isFinite(this.y)}render(t){throw Error("This method cannot be called")}}class n{constructor(t,e){this.lineToPos=[],this.lineFromPos=[],this.setFromPosition(t,e)}addFromPos(t,e){this.lineFromPos.push({fromX:t,fromY:e})}addToPos(t,e){this.lineToPos.push({toX:t,toY:e})}setFromPosition(t,e){this.fromX=t,this.fromY=e}setToPosition(t,e){this.toX=t,this.toY=e}setStrokeColor(t){this.strokeColor=t}setStrokeWidth(t){this.strokeWidth=t}render(t){throw Error("Error")}}const s={circle:class extends i{render(t){t.beginPath(),t.arc(0,0,this.size/2,0,2*Math.PI,!1),t.fillStyle=this.fillColor,t.fill(),t.lineWidth=this.strokeWidth,t.strokeStyle=this.strokeColor,t.stroke()}},square:class extends i{render(t){t.beginPath(),t.rect(-this.size/2,-this.size/2,this.size,this.size),t.fillStyle=this.fillColor,t.fill(),t.lineWidth=this.strokeWidth,t.strokeWidth=this.strokeColor,t.stroke()}}},o={vector:class extends n{startDraw(t){t.beginPath(),t.moveTo(this.fromX,this.fromY)}endDraw(t){t.lineTo(this.toX,this.toY),t.stroke()}render(t){this.startDraw(t),this.endDraw(t)}}};const c={currentFillColor:"#000",currentStrokeColor:"#000",currentStrokeWidth:1,currentSize:100,currentDistance:100};const h=document.querySelector("#main-canvas"),l=new class{constructor(t){this.canvas=t,this.ctx=t.getContext("2d"),this.shapes=[],this.lines=[],this.positions=[],this.render()}addPosition(t,e){this.positions.push({x:t,y:e})}checkPositions(t,e,r){if(this.positions.length>0)for(let i of this.positions)if(!((2*r)**2<=(t-i.x)**2+(e-i.y)**2))return!1;return!0}addShape(t){t&&!this.shapes.includes(t)&&this.shapes.push(t)}addLine(t){t&&!this.lines.includes(t)&&this.lines.push(t)}setCurrentShape(t){this.currentShape=t}setCurrentLine(t){this.currentLine=t}clear(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}renderShape(t){t.canRender()&&(this.ctx.save(),this.ctx.translate(t.x,t.y),t.render(this.ctx),this.ctx.restore())}renderLine(t){t.render(this.ctx)}render(){requestAnimationFrame(()=>{this.clear(),this.lines.forEach(t=>{this.renderLine(t)}),this.shapes.forEach(t=>{this.renderShape(t)}),this.currentShape&&this.renderShape(this.currentShape),this.currentLine&&this.renderLine(this.currentLine),this.render()})}}(h);function a(t,e,r){const i=new t(e,r,c.currentSize);return i.setFillColor(c.currentFillColor),i.setStrokeColor(c.currentStrokeColor),i.setStrokeWidth(c.currentStrokeWidth),i}function d(){h.width=window.innerWidth,h.height=window.innerHeight}h.addEventListener("mousemove",t=>{l.currentShape&&l.currentShape.setPosition(t.clientX,t.clientY)}),h.addEventListener("click",t=>{if(l.currentShape&&l.checkPositions(t.clientX,t.clientY,c.currentDistance)){const e=l.currentShape.constructor;l.addShape(l.currentShape),l.addPosition(t.clientX,t.clientY),l.setCurrentShape(a(e,t.clientX,t.clientY))}}),document.addEventListener("click",t=>{const e=t.target.dataset.shape;e&&s.hasOwnProperty(e)&&l.setCurrentShape(a(s[e]))}),document.addEventListener("keydown",t=>{27===t.keyCode&&l.setCurrentShape(null)}),window.addEventListener("load",d),window.addEventListener("resize",d),document.addEventListener("click",t=>{const e=t.target.dataset.line;e&&o.hasOwnProperty(e)&&l.setCurrentLine(function(t,e,r){const i=new t(e,r);return i.setStrokeColor(c.currentStrokeColor),i.setStrokeWidth(c.currentStrokeWidth),i}(o[e]))}),h.addEventListener("click",t=>{l.currentLine&&(l.currentLine.lineFromPos.length>l.currentLine.lineToPos.length?(l.currentLine.addToPos(t.clientX,t.clientY),l.currentLine.setToPosition(t.clientX,t.clientY)):(l.currentLine.addFromPos(t.clientX,t.clientY),l.currentLine.setFromPosition(t.clientX,t.clientY)))})}]);