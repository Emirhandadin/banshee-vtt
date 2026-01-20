// Banshee VTT Main Application Logic

// Canvas setup
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Player management
let players = [];

function addPlayer(player) {
    players.push(player);
}

function removePlayer(playerId) {
    players = players.filter(player => player.id !== playerId);
}

// Token system
let tokens = [];

class Token {
    constructor(id, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;
    }

    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, 50, 50);
    }
}

function addToken(token) {
    tokens.push(token);
}

// Tool handling
const tools = {
    select: 'select',
    draw: 'draw',
    erase: 'erase'
};

let currentTool = tools.select;

function setTool(tool) {
    currentTool = tool;
}

// Game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw tokens
    tokens.forEach(token => token.draw());

    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
