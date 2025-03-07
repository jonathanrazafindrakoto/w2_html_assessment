let box = document.querySelector('.box');
let container = document.querySelector('.container');
let speedControl = document.getElementById('speedControl');

let position = 0;
let speed = 5; // Default speed
let direction = 1; // Moving right/down
let axis = 'horizontal'; // Default movement axis
let animation;

// Start the animation automatically when the page loads
window.onload = function() {
    startAnimation('horizontal');
};

function startAnimation(newAxis) {
    if (animation) clearInterval(animation); // Clear any previous animation
    axis = newAxis; // Set the new axis for movement
    position = (axis === 'horizontal') ? 0 : container.clientHeight / 2; // Reset position
    animation = setInterval(moveBox, 20); // Start the animation
}

function stopAnimation() {
    clearInterval(animation); // Stop the animation
}

function moveBox() {
    let maxPosition = (axis === 'horizontal') 
        ? container.clientWidth - box.clientWidth 
        : container.clientHeight - box.clientHeight;

    position += speed * direction; // Update position

    // Reverse direction if box hits boundary
    if (position >= maxPosition || position <= 0) {
        direction *= -1;
        changeColor(); // Change color on bounce
    }

    // Update position based on axis
    if (axis === 'horizontal') {
        box.style.left = position + "px";
    } else {
        box.style.top = position + "px";
    }
}

function changeColor() {
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    box.style.backgroundColor = randomColor; // Change the color
}

speedControl.addEventListener('input', function() {
    speed = parseInt(this.value); // Update speed based on the input
});
