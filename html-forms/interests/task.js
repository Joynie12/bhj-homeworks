const checkbox = document.querySelector('.interests_main');

checkbox.addEventListener('click', (e) => {
    const checklist = Array.from(e.target.closest('.interest').querySelectorAll('.interest__check'));
    checklist.forEach(element => {
        e.target.checked ? element.checked = true : element.checked = false;
    });
});
