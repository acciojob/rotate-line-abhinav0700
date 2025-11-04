//your JS code here. If required.
const line = document.getElementById("line");

let angle = 0;

// Center the line and set base styles
line.style.width = "200px";
line.style.height = "2px";
line.style.backgroundColor = "#000";
line.style.position = "absolute";
line.style.top = "50%";
line.style.left = "50%";
line.style.transformOrigin = "center center"; // rotate around the center

// Rotate continuously
setInterval(() => {
  angle = (angle + 2) % 360; // increase by 2° every 20ms
  line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}, 20);
