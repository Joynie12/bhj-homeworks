const div = Array.from(document.querySelectorAll('.reveal'));

function showDiv(block) {
    const{top, bottom} = block.getBoundingClientRect();
    if(bottom <= window.innerHeight && top > 0) {
        return true; 
    }
    return false;
}

div.forEach(block => {
    window.addEventListener('scroll', e => {
        if(showDiv(block)) {
            block.classList.add('reveal_active');
        } else {
            block.classList.remove('reveal_active');
        }
    });
});

