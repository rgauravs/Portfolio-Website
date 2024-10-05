
const gridContainer = document.querySelector('.lcd-grid-container');
const row = 12;
const column = 30;
let cells = [];

for (let i = 0; i < row * column; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    gridContainer.appendChild(cell);
    cells.push(cell);
}

// Pixel representation for each letter of "TEST" (scaled up to 8x10 for a 12x30 grid)
const letters = {
    'T': [
        '11111111',
        '00110000',
        '00110000',
        '00110000',
        '00110000',
        '00110000',
        '00110000',
        '00110000',
        '00110000',
        '00110000'
    ],
    'E': [
        '11111111',
        '11000000',
        '11000000',
        '11000000',
        '11111111',
        '11000000',
        '11000000',
        '11000000',
        '11000000',
        '11111111'
    ],
    'S': [
        '01111111',
        '11000000',
        '11000000',
        '01111111',
        '00000011',
        '00000011',
        '00000011',
        '11000011',
        '11000011',
        '01111110'
    ]
};

// Function to turn on grid cells based on the letter's pixel data
function displayLetter(letter, startCol) {
    const letterPixels = letters[letter];
    for (let row = 0; row < letterPixels.length; row++) {
        for (let col = 0; col < letterPixels[row].length; col++) {
            if (letterPixels[row][col] === '1') {
                const cellIndex = (row + 1) * cols + (startCol + col); // Adjust row for centering
                if (cellIndex >= 0 && cellIndex < rows * cols) {
                    cells[cellIndex].classList.add('on');
                }
            }
        }
    }
}

// Function to clear the display
function clearDisplay() {
    cells.forEach(cell => cell.classList.remove('on'));
}

// Function to display the word "TEST"
function displayWordTest(startCol) {
    clearDisplay();
    displayLetter('T', startCol);        // Display "T"
    displayLetter('E', startCol + 8);    // Display "E" after "T"
    displayLetter('S', startCol + 16);   // Display "S" after "E"
    displayLetter('T', startCol + 24);   // Display the second "T"
}

// Animate the word "TEST" moving from right to left
let startCol = cols; // Start at the far right (off-screen)
const stepSize = 1;  // Number of columns to move per interval

function animateWord() {
    displayWordTest(startCol);
    startCol -= stepSize;

    // Reset position when the word is fully off-screen on the left
    if (startCol + 32 < 0) {
        startCol = cols; // Reset to start off-screen on the right again
    }
}

// Run the animation at a set interval (e.g., 100ms per step)
setInterval(animateWord, 100);
