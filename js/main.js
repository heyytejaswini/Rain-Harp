// main.js : sets up the canvas, runs the animation loop and listens to the pointer
// It loads last so everything ddfined in other files are ready to use

const canvas = document.getElementById(canvas);
const ctx = canvas.getContext('2d');

let W = 0; // window width in css pixels
let H = 0; // window height
let DPR = 1; // device pixel ratio: 2 on retina screens so the drawing stays sharp
let grain = null; //paper grain, drawn once and laid over the sky every frame
let time = 0; // the seconds since the page has loaded
let P = DAY; // the current palatte, every color comes from here

// the cursor is an object that remembers what we know about the pointer
const cursor = { x: 0, y: 0, speed: 0, active: false, r: 58}; // radius-58 creates an invisible hitbox around the cursor

/* ---------- paper grain ----------- */

function makeGrain() {
    const c = document.createElement('canvas'); // a hidden canvas to draw on once
    c.width = Math.round(W * DPR); // if a screen has a dpr of 2 then 500px wide canvas will be allocated 100px
    c.height = Math.round(H * DPR); // math.round makes sure- no fraction
    const g = c.getContext('2d'); // g-graphics: grabs 2d rendering context
    g.scale(DPR, DPR); // acts like a magnifying glass that automatically stretches drawing to match high-resolution screen to look sharp instead of blurry

    // thousands of tiny pale and dark specks, on a see-through background
    const specks = Math.min(7000, (W * H) / 220); // max 7k specks, calculates how many based on screen size
    for (let i = 0; i < specks; i++) {
        g.fillStyle = Math.random() < 0.5 ? `rgba(90, 80, 50, ${rand(0.02, 0.06)})` : `rgba(255, 252, 240, ${rand(0.05, 0.12)})` ; // 1st-dark, 2nd-light | opacity 5% and 12%
        g.fillRect(Math.random() * W, Math.random() * H, rand(0.6, 1.6), rand(0.6, 1.6)); // radomply picks an (x,y) coordinate with rand(width, height)
    }
    return c; // returns fully piainted grain canvas
}

// resizes accordingly to the browser window/webpage
function resize () {
    DPR = Math.min(window.devicePixelRatio || 1,2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = Math.round(W * DPR);
    canvas.height = Math.round(H * DPR);
    grain = makeGrain();
    cursor.r = W < 600 ? 44 : 58;
} 

/* ----- pointer inputs (mouse, pen and touch all arrive as "pointer" events) ------- */

let lastMoveTime = 0; // in milli seconds

function movepointer(e) { // core func that runs when the poiner moves and 'e' is event obj (coordinates)
    const now = performance.now();
    if(cursor.active) {
        const seconds =  Math.max(1, now - lastMoveTime) / 1000;
        const instant = Math.hypot(e.clientX - cursor.x, e.clientY - cursor.y) / seconds ;
    }
}