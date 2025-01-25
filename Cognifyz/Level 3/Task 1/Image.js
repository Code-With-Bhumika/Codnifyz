const thumbnails = document.querySelectorAll('.thumbnail');
const enlarged = document.getElementById('enlarged');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        enlarged.style.backgroundImage = `url(${this.src})`;
    });
});
