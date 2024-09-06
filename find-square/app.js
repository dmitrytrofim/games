class App {
 constructor() {
  this.canvas = document.getElementById('canvas');
  this.ctx = this.canvas.getContext('2d');
  this.paramsCanvas = {
   width: window.innerWidth - 10,
   height: window.innerHeight - 10,
  };
  this.block = {
   startX: 0,
   startY: 0,
   width: 100,
   height: 100,
  };
 }
 setParams() {
  const setFucn = () => {
   this.canvas.width = this.paramsCanvas.width;
   this.canvas.height = this.paramsCanvas.height;
   this.drawCanvas();
  };
  window.addEventListener('load', setFucn);
  window.addEventListener('resize', setFucn);
 }
 drawCanvas() {
  this.ctx.fillRect(...Object.values(this.block));
  this.canvas.addEventListener('click', (e) => {
   if (
    e.offsetX >= this.block.startX &&
    e.offsetX <= this.block.width &&
    e.offsetY >= this.block.startY &&
    e.offsetY <= this.block.height
   ) {
    console.log('yep');
   }
  });
 }
 start() {
  if (this.canvas) {
   this.setParams();
  }
 }
}
const app = new App().start();
