import {ctx, canvas} from './canvas';
import {bucket} from './bucket';
import {rain} from './rain';

function animate () {
  // Erase  
  ctx.clearRect(0,0,canvas.width, canvas.height);
  // Do Updates
  doUpdates();
  // Do Drawings
  doDrawings();
  window.requestAnimationFrame(animate);
}

function doUpdates () {  
  bucket.update()
  rain.move();
}

function doDrawings () {
  bucket.draw();
  rain.draw();
}

export function startAnimation () {
  window.requestAnimationFrame(animate);
}

