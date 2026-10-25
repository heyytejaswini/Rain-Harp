// utils.js : small helpers that every other file uses

const TAU = Math.PI * 2; // one full turn (360) in radians while MATH.PI = 180

const rand = (min,max) => min + Math.random() * (max - min); // random number b/w min and max. Math.random() gives any decimal from 0 and 1
const clamp = (v,lo,hi) => Math.min(hi, Math.max(lo,v)); // keeps the value between maxlow and maxhigh (limits)
const lerp = (a,b,t) => a + (b-a) * t; // smooth animation from a to b. t=0 gives a, t=1 gives b, t=0.5 gives middle
const pick = list => list[Math.floor(Math.random() * list.length)]; // random item from the list | Math.floor: rounds dowm | eg: list[3] 
