// palette.js : every color in the scene lives here, grouped into a palette 
// The rest of the code never writes a color directly. it asks the current palette
// so changing the mood of the whole peice means swapping one object

// a palatte is an object that holds every color one mood.

const DAY = {
    skyTop: '#f4f0df',
    skyBottom: '#e8e3c4',
    waterTop: '#d3e0da',
    waterBottom: '#b9cfd0',
    thread: '#5c7ca0',
    beads: ['#1f3a78','#34588f','#7c9ec0','#c9553f'], // deep, mid, soft and the rare red drop
    ripple: '#4f7396',
    ink: '#1b1a18',
    inksoft: '#66644f',
    night: 0  // 0 = broaddaylight, 1 = deep night 
};

// beads: [] is an array of colors inside the object DAY.