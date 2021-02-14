
(function () {

    // Here we use the .requestAnimationFrame to set a interval for the animation (this is the workaround we found for touchscreen)
    window.requestAnimationFrame = (function (callback) {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 1000);
            };
    })();
    // setting the context for the canvas
    const canvas = document.getElementById("canvas");

    const context = canvas.getContext('2d');
    /*  canvas.width = window.innerWidth;
     canvas.height = window.innerHeight; */

    const gradient = context.createLinearGradient(10, 0, 390, 0);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(1 / 6, 'orange');
    gradient.addColorStop(2 / 6, 'yellow');
    gradient.addColorStop(3 / 6, 'green')
    gradient.addColorStop(4 / 6, 'aqua');
    gradient.addColorStop(5 / 6, 'blue');
    gradient.addColorStop(1, 'purple');

    color = document.getElementById("colourInput").value;

    context.strokeStyle = color;
    context.lineJoin = context.lineCap = 'round';
    context.shadowBlur = 3;
    context.shadowColor = 'rgb(0, 0, 0)';
    context.lineWidth = 4;

    // adding the buttons in to clear and post
    let drawData = document.getElementById("draw_dataURL");
    let clearBtn = document.getElementById("clearCanvas");
    let submitBtn = document.getElementById("postCanvas");
    clearBtn.addEventListener("click", function (event) {
        clearCanvas();
    }, false);

    submitBtn.addEventListener("click", function (event) {
        let dataUrl = canvas.toDataURL();
        drawData.innerHTML = dataUrl;
        drawDataImage.setAttribute("src", dataUrl);
        clearCanvas();
    }, false);

    // Set up mouse events for drawing
    let drawing = false;
    let mousePosition = { x: 0, y: 0 };
    let lastPosition = mousePosition;
    // allow drawing when mouse is down and track
    canvas.addEventListener("mousedown", function (event) {
        drawing = true;
        lastPosition = getMousePosition(canvas, event);
    }, false);
    // stop drawing when mouse is up 
    canvas.addEventListener("mouseup", function (event) {
        drawing = false;
    }, false);
    //look for when it is moving and track 
    canvas.addEventListener("mousemove", function (event) {
        mousePosition = getMousePosition(canvas, event);
    }, false);

    // Set up touch events for drawing
    // look for when it is touched and use the mousedown
    canvas.addEventListener("touchstart", function (event) {
        mousePosition = getTouchPosition(canvas, event);
        let touch = event.touches[0];
        let mouseEvent = new MouseEvent("mousedown", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
    }, false);
    // look for when it is not touched and use the mouseup
    canvas.addEventListener("touchend", function (event) {
        let mouseEvent = new MouseEvent("mouseup", {});
        canvas.dispatchEvent(mouseEvent);
    }, false);
    // look for when it is moving and touching and use mousemove
    canvas.addEventListener("touchmove", function (event) {
        let touch = event.touches[0];
        let mouseEvent = new MouseEvent("mousemove", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
    }, false);
    // Prevent scrolling when touching the canvas
    canvas.addEventListener("touchstart", function (event) {
        if (event.target == canvas) {
            event.preventDefault();
        }
    }, false);
    canvas.addEventListener("touchend", function (event) {
        if (event.target == canvas) {
            event.preventDefault();
        }
    }, false);
    canvas.addEventListener("touchmove", function (event) {
        if (event.target == canvas) {
            event.preventDefault();
        }
    }, false);
    // Get the position of the mouse on the canvas
    function getMousePosition(canvasDom, mouseEvent) {
        let canvasPosition = canvasDom.getBoundingClientRect();
        return {
            x: mouseEvent.clientX - canvasPosition.left,
            y: mouseEvent.clientY - canvasPosition.top
        };
    }

    // Get the position of a touch on the canvas
    function getTouchPosition(canvasDom, touchEvent) {
        let canvasPosition = canvasDom.getBoundingClientRect();
        return {
            x: touchEvent.touches[0].clientX - canvasPosition.left,
            y: touchEvent.touches[0].clientY - canvasPosition.top
        };
    }

    // here you draw on the canvas 
    function drawCanvas() {
        if (drawing) {
            context.moveTo(lastPosition.x, lastPosition.y);
            context.lineTo(mousePosition.x, mousePosition.y);
            context.stroke();
            lastPosition = mousePosition;
        }
    }
    // Clear the canvas and reset the brush properties, clearRect was not doing what I wanted it to do
    // so I set to the canvas.width and reset the brushes
    function clearCanvas() {
        canvas.width = canvas.width;
        gradient.addColorStop(0, 'red');
        gradient.addColorStop(1 / 6, 'orange');
        gradient.addColorStop(2 / 6, 'yellow');
        gradient.addColorStop(3 / 6, 'green')
        gradient.addColorStop(4 / 6, 'aqua');
        gradient.addColorStop(5 / 6, 'blue');
        gradient.addColorStop(1, 'purple');
        context.strokeStyle = gradient;
        context.lineJoin = context.lineCap = 'round';
        context.shadowBlur = 3;
        context.shadowColor = 'rgb(0, 0, 0)';
        context.lineWidth = 4;
    }
    // Start the animation to draw (this is the only way I can get it work on touchscreen)
    (function drawLoop() {
        requestAnimationFrame(drawLoop);
        drawCanvas();
    })();
})();