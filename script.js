const bulb = document.getElementById('bulb');
const companyName = document.getElementById('company-name');

let isDragging = false;

bulb.addEventListener('mousedown', () => {
    isDragging = true;
});

document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        const x = event.clientX;
        const y = event.clientY;

        // Update bulb position
        bulb.style.left = x - bulb.clientWidth / 2 + 'px';
        bulb.style.top = y - bulb.clientHeight / 2 + 'px';
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    // Show the company name when the bulb is released
    companyName.style.display = 'block';
});
