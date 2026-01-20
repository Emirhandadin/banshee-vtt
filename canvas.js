// canvas.js

// Function to render the canvas and map
function renderCanvas() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Render a simple map
    ctx.fillStyle = '#8BC34A'; // green for grass
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw a simple representation of a map
    ctx.fillStyle = '#3F51B5'; // blue for water
    ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2);

    // Add some features
    ctx.fillStyle = '#FF9800'; // orange for desert
    ctx.fillRect(100, 100, 200, 150);

    ctx.fillStyle = '#F44336'; // red for mountains
    ctx.beginPath();
    ctx.moveTo(300, 160);
    ctx.lineTo(350, 100);
    ctx.lineTo(400, 160);
    ctx.fill();
}

// Call the render function on window load
window.onload = function() {
    renderCanvas();
};