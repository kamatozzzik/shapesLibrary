!function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);class i{constructor(e,t,r){this.setPosition(e,t),this.setSize(r)}setSize(e){this.size=e<0?0:e}setPosition(e,t){this.x=e,this.y=t}setStrokeColor(e){this.strokeColor=e}setFillColor(e){this.fillColor=e}setStrokeWidth(e){this.strokeWidth=e}checkPosition(){}canRender(){return Number.isFinite(this.size)&&Number.isFinite(this.x)&&Number.isFinite(this.y)}render(e){throw Error("This method cannot be called")}}const n={circle:class extends i{render(e){e.beginPath(),e.arc(0,0,this.size/2,0,2*Math.PI,!1),e.fillStyle=this.fillColor,e.fill(),e.lineWidth=this.strokeWidth,e.strokeStyle=this.strokeColor,e.stroke()}},square:class extends i{render(e){e.beginPath(),e.rect(-this.size/2,-this.size/2,this.size,this.size),e.fillStyle=this.fillColor,e.fill(),e.lineWidth=this.strokeWidth,e.strokeWidth=this.strokeColor,e.stroke()}}};const s={currentFillColor:"#000",currentStrokeColor:"#000",currentStrokeWidth:1,currentSize:100,currentDistance:100};const o=document.querySelector("#main-canvas"),h=new class{constructor(e){this.canvas=e,this.ctx=e.getContext("2d"),this.shapes=[],this.lines=[],this.positions=[],this.render()}addPosition(e,t){this.positions.push({x:e,y:t})}checkPositions(e,t,r){if(this.positions.length>0)for(let i of this.positions)if(!((2*r)**2<=(e-i.x)**2+(t-i.y)**2))return!1;return!0}addShape(e){e&&!this.shapes.includes(e)&&this.shapes.push(e)}addLine(e){e&&!this.lines.includes(e)&&this.lines.push(e)}setCurrentShape(e){this.currentShape=e}setCurrentLine(e){this.currentLine=e}clear(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}renderShape(e){e.canRender()&&(this.ctx.save(),this.ctx.translate(e.x,e.y),e.render(this.ctx),this.ctx.restore())}renderLine(e){this.ctx.save(),e.render(this.ctx),this.ctx.restore()}render(){requestAnimationFrame(()=>{this.clear(),this.lines.forEach(e=>{this.renderLine(e)}),this.shapes.forEach(e=>{this.renderShape(e)}),this.currentShape&&this.renderShape(this.currentShape),this.currentLine&&this.renderLine(this.currentLine),this.render()})}}(o);function c(e,t,r){const i=new e(t,r,s.currentSize);return i.setFillColor(s.currentFillColor),i.setStrokeColor(s.currentStrokeColor),i.setStrokeWidth(s.currentStrokeWidth),i}function l(){o.width=window.innerWidth,o.height=window.innerHeight}o.addEventListener("mousemove",e=>{h.currentShape&&h.currentShape.setPosition(e.clientX,e.clientY)}),o.addEventListener("click",e=>{if(h.currentShape&&h.checkPositions(e.clientX,e.clientY,s.currentDistance)){const t=h.currentShape.constructor;h.addShape(h.currentShape),h.addPosition(e.clientX,e.clientY),h.setCurrentShape(c(t,e.clientX,e.clientY))}}),document.addEventListener("click",e=>{const t=e.target.dataset.shape;t&&n.hasOwnProperty(t)&&h.setCurrentShape(c(n[t]))}),document.addEventListener("keydown",e=>{27===e.keyCode&&h.setCurrentShape(null)}),window.addEventListener("load",l),window.addEventListener("resize",l)}]);