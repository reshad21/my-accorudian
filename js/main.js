// how to catch sudo element in javascript? //
// var color = window.getComputedStyle(document.querySelector('.element'), ':before')

let itemheader = document.querySelectorAll("#item-header");
for (const item of itemheader) {
    item.addEventListener('click', function (e) {
        console.log(e.target);
        e.target.classList.toggle('active');
        e.target.nextElementSibling.classList.toggle('active');
    })
}