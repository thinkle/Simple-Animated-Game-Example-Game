import {canvas} from './canvas';
import {bucket} from './bucket';


window.addEventListener(
  'keydown',
  function (event) {
    console.log('Key down!',event.key);
    if (event.key=='ArrowRight' || event.key=='l') {
      bucket.push(50);
    }
    if (event.key=='ArrowLeft' || event.key=='j') {
      bucket.push(-50);
    }
  }
)