const colors = ['lightblue', 'pink', 'lightgreen', 'orange'];
let currentIndex = 0;

document.getElementById('colorButton').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % colors.length;
    this.style.backgroundColor = colors[currentIndex];
});
