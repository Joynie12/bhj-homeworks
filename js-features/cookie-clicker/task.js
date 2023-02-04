const score = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");
let counter = 0;
image.addEventListener('click', function() {
    counter++;
    score.textContent = counter;
    if (counter % 2 == 0) {
        image.width = `250`;
    } else {
        image.width = `200`;
    }
})