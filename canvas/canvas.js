(function () {

    // A regular interval to the screen for the animation to draw
    window.requestAnimationFrame = (function (callback) {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 1000);
            };
    })();
    // context for the canvas
    const canvas = document.querySelector('#canvas');

    const context = canvas.getContext('2d');

    const gradient = context.createLinearGradient(0, 0, 170, 0);
    gradient.addColorStop("0", "blue");
    gradient.addColorStop("0.5", "magenta");
    gradient.addColorStop("1.0", "lightblue");

    context.strokeStyle = gradient;
    context.lineWidth = 2;

    // adding the buttons in to clear and post
    let drawData = document.getElementById("draw_dataURL");
    let clearBtn = document.getElementById("clearCanvas");
    let submitBtn = document.getElementById("postCanvas");
    clearBtn.addEventListener("click", function (event) {
        clearCanvas();
        drawData.innerHTML = "Data URL for your drawing should be here...";
    }, false);

    submitBtn.addEventListener("click", function (event) {
        let dataUrl = canvas.toDataURL();
        drawData.innerHTML = dataUrl;
        drawDataImage.setAttribute("src", dataUrl);
        clearCanvas();
    }, false);

    // Set up mouse events for drawing
    let drawing = false;
    let mousePos = { x: 0, y: 0 };
    let lastPos = mousePos;
    document.addEventListener("mousedown", function (event) {
        drawing = true;
        lastPos = getMousePos(canvas, event);
    }, false);
    document.addEventListener("mouseup", function (event) {
        drawing = false;
    }, false);
    document.addEventListener("mousemove", function (event) {
        mousePos = getMousePos(canvas, event);
    }, false);

    // Set up touch events for drawing
    document.addEventListener("touchstart", function (event) {
        mousePos = getTouchPos(canvas, event);
        let touch = event.touches[0];
        let mouseEvent = new MouseEvent("mousedown", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        document.dispatchEvent(mouseEvent);
    }, false);
    document.addEventListener("touchend", function (event) {
        let mouseEvent = new MouseEvent("mouseup", {});
        document.dispatchEvent(mouseEvent);
    }, false);
    document.addEventListener("touchmove", function (event) {
        let touch = event.touches[0];
        let mouseEvent = new MouseEvent("mousemove", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        document.dispatchEvent(mouseEvent);
    }, false);

    // Get the position of the mouse on the canvas
    function getMousePos(canvasDom, mouseEvent) {
        let rect = canvasDom.getBoundingClientRect();
        return {
            x: mouseEvent.clientX - rect.left,
            y: mouseEvent.clientY - rect.top
        };
    }

    // Get the position of a touch on the canvas
    function getTouchPos(canvasDom, touchEvent) {
        let rect = canvasDom.getBoundingClientRect();
        return {
            x: touchEvent.touches[0].clientX - rect.left,
            y: touchEvent.touches[0].clientY - rect.top
        };
    }

    // Draw to the canvas
    function renderCanvas() {
        if (drawing) {
            context.moveTo(lastPos.x, lastPos.y);
            context.lineTo(mousePos.x, mousePos.y);
            context.stroke();
            lastPos = mousePos;
        }
    }
    // Clear the canvas and reset the brush properties, clearRect was not doing what I wanted it to do
    // so I set to the canvas.width and reset the brushes
    function clearCanvas() {
        canvas.width = canvas.width;
        const gradient = context.createLinearGradient(0, 0, 170, 0);
        gradient.addColorStop("0", "blue");
        gradient.addColorStop("0.5", "magenta");
        gradient.addColorStop("1.0", "lightblue");

        context.strokeStyle = gradient;
        context.lineWidth = 2;

    }

    // Allow for animation
    (function drawLoop() {
        requestAnimationFrame(drawLoop);
        renderCanvas();
    })();
})();  