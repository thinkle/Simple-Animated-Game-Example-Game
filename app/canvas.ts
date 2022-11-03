export const canvas : HTMLCanvasElement = document.querySelector('#app canvas');
canvas.width = 600;
canvas.height = 600;
canvas.style.width = `${canvas.width}px`;
canvas.style.height = `${canvas.height}px`;
canvas.style.border = '1px solid black';
export const ctx = canvas.getContext('2d')