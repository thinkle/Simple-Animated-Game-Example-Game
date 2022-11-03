import {ctx, canvas} from './canvas';
/* 
* A bucket that can move back and forth.
* It only has an X position since it can
* only move in one direction.
*
* The bucket can "fill" with rain, so it also
* has a property for how much water it  
* contains.
*/

export const bucket = {
  x : 200,
  waterAmount : 10,
  width : canvas.height/9,
  height : canvas.height / 12,
  top : canvas.height - canvas.height/12,
  momentum : 0,
  draw () {        
    // Draw water
    ctx.fillStyle = 'blue';
    ctx.fillRect(
      this.x - this.width/2,
      canvas.height - this.waterAmount/5,
      this.width,
      this.waterAmount      
    )
    // Draw bucket
    ctx.strokeRect(
      this.x - this.width/2,
      this.top,
      this.width,
      this.height
    )
  },
  push (amount) {
    this.momentum += amount;    
  },
  update () {    
    let delta = this.momentum / 5;
    this.x += delta;
    this.momentum -= delta;
  },
  isInBucket (x : number, y: number) {
    if ( // If...
      y >= this.top // it's past our "lid"
      && // and
      y <= this.top + 30 //  + but not too far under
      &&  // and
      x >= this.x - this.width/2// + right of our start
      && // and
      x <= this.x + this.width/2 // left of our edge
    ) {
      return true
    } else {
      return false
    }
  }
}