class App {
 constructor() {
  this.canvas = document.getElementById('canvas');
  this.ctx = this.canvas.getContext('2d');
  this.paramsCanvas = {
   width: null,
   height: null,
  };
  this.block = {
   startX: 0,
   startY: 0,
   width: 100,
   height: 100,
  };
  this.velocity = 20;
  this.findBlock = {
   startX: 200,
   startY: 200,
   width: 100,
   height: 100,
  };
  this.direction = {
   up: false,
   down: false,
   left: false,
   right: false,
  };
 }
 randomFunc(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
 }
 randomFindBlock(x, y) {
  this.findBlock.startX = this.randomFunc(
   200,
   this.paramsCanvas.width - this.findBlock.width
  );
  this.findBlock.startY = this.randomFunc(
   200,
   this.paramsCanvas.height - this.findBlock.height
  );
 }
 setParams() {
  const setFucn = () => {
   this.paramsCanvas.width = window.innerWidth - 10;
   this.paramsCanvas.height = window.innerHeight - 10;
   this.canvas.width = this.paramsCanvas.width;
   this.canvas.height = this.paramsCanvas.height;
   this.block.startX = 0;
   this.block.startY = 0;
   this.randomFindBlock();
  };
  window.addEventListener('DOMContentLoaded', setFucn);
  window.addEventListener('resize', setFucn);
 }
 drawCanvas() {
  if (this.direction.up && this.block.startY > 0)
   this.block.startY -= this.velocity;
  if (
   this.direction.down &&
   this.block.startY + this.block.height < this.paramsCanvas.height
  )
   this.block.startY += this.velocity;
  if (
   this.direction.right &&
   this.block.startX + this.block.width < this.paramsCanvas.width
  )
   this.block.startX += this.velocity;
  if (this.direction.left && this.block.startX > 0)
   this.block.startX -= this.velocity;
  this.ctx.clearRect(0, 0, this.paramsCanvas.width, this.paramsCanvas.height);
  this.ctx.fillRect(...Object.values(this.block));
  this.ctx.fillRect(...Object.values(this.findBlock));
  requestAnimationFrame(() => {
   this.drawCanvas();
  });
 }
 controlPanel() {
  const handleClick = (e) => {
   if (e.type === 'keydown') {
    if (e.code === 'ArrowUp') this.direction.up = true;
    if (e.code === 'ArrowDown') this.direction.down = true;
    if (e.code === 'ArrowRight') this.direction.right = true;
    if (e.code === 'ArrowLeft') this.direction.left = true;
   }
   if (e.type === 'keyup') {
    if (e.code === 'ArrowUp') this.direction.up = false;
    if (e.code === 'ArrowDown') this.direction.down = false;
    if (e.code === 'ArrowRight') this.direction.right = false;
    if (e.code === 'ArrowLeft') this.direction.left = false;
   }
  };
  window.addEventListener('keydown', handleClick);
  window.addEventListener('keyup', handleClick);
 }
 start() {
  if (this.canvas) {
   this.setParams();
   this.controlPanel();
   this.drawCanvas();
  }
 }
}
const app = new App().start();
