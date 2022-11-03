import {canvas,ctx} from './canvas';
import {bucket} from './bucket';

export const rain = {
  fallSpeed : 20,
  windSpeed : 2,
  raindrops : [
    {x:200, y:0},
    {x:220, y:10}
  ],
  add (number) {
    for (let i=0; i<number; i++) {
      this.raindrops.push(
        {
          x : Math.random()*canvas.width,
          y : Math.random()*canvas.height
        }
      )
    }
  },
  remove (number) {
    for (let i=0; i<number; i++) {
      this.raindrops.pop()
    }
  },
  move () {
    this.raindrops.forEach(
      (drop)=>{
        drop.x += this.windSpeed/10;
        drop.y += this.fallSpeed/10;
        if (bucket.isInBucket(drop.x,drop.y)) {
          bucket.waterAmount += 1;
          drop.y = -10;
        }
        if (drop.y > canvas.height) {
          drop.y = -10;
        }
        if (drop.x > canvas.width) {
          drop.x = 0;
        }
        if (drop.x < 0) {
          drop.x = canvas.width;
        }
      }
    )
  },  
  
  draw () {
    this.raindrops.forEach(
      (drop)=>{
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'navy';
        ctx.beginPath();
        ctx.moveTo(
          drop.x-this.windSpeed,
          drop.y-this.fallSpeed,
        )
        ctx.lineTo(
          drop.x,drop.y
        )
        ctx.stroke();
      }
    )
  }
}

setInterval(
  function () {
    //rain.add(2);
    rain.fallSpeed += 1;
    rain.windSpeed = Math.random()*6 - 3;
    if (rain.fallSpeed > 30) {
      rain.fallSpeed = 15;
    }
    if (rain.raindrops.length < 50) {
      rain.add(1);
    }
    if (Math.random() < 0.3) {
      rain.remove(1);
    }
  },
  1000 // run every second
)
