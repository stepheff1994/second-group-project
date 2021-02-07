const canvas = document.querySelector('#canvas');
// Context for the canvas for 2 dimensional operations 
const context = canvas.getContext('2d');
// const uploadMiddleware = require('../middleware/upload.js');


//best practice to wait for content of window element to load

window.addEventListener('load', () => {
    // adjustSize();
    document.addEventListener('mousedown', startDrawing);
    document.addEventListener('mouseup', stopDrawing);
    document.addEventListener('mousemove', sketch);
    // window.addEventListener('adjustSize', adjustSize);
});

/* function adjustSize() {
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
} */

//initial position of cursor
let position = { x: 0, y: 0 };
// flag to trigger drawing on and off
let draw = false;

// updates position of cursor on event to current coordinates
function currentPosition(event) {
    position.x = event.clientX - canvas.offsetLeft;
    position.y = event.clientY - canvas.offsetTop;
}

function startDrawing(event) {
    draw = true;
    currentPosition(event);
}
function stopDrawing() {
    draw = false;
}
function sketch(event) {
    if (!draw) return;
    context.beginPath();
    context.lineWidth = 4;
    context.lineCap = 'round';
    context.strokeStyle = 'skyblue';
    context.moveTo(position.x, position.y);
    currentPosition(event);
    context.lineTo(position.x, position.y);
    context.stroke();
}

function clearSketch() {
    canvas.height = 200;
}


async function submitToServer() {
    let imageBlob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));

    let formData = new FormData();
    formData.append("image", imageBlob, "image.png");

    // modify the url accordingly
    let response = await fetch('http://localhost:3001/drawing', {
        method: 'POST',
        body: formData
    });

    // convert the response to json, modify it accordingly based on the returned response from your remote server
    let result = await response.json();
}

document.getElementById("clearCanvas").addEventListener("click", clearSketch);
document.getElementById("postCanvas").addEventListener("click", submitToServer);


