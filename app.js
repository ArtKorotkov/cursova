$('.gabarytu, .closemodal').click(function (e) {
    e.preventDefault();
    $('.kadobagud').toggleClass('midsalod');
});
// $('.close modal').click(function (e) {
//     e.preventDefault();
//     $('.kadobagud').removeClass('midsalod');
// });


const colors = document.querySelectorAll('.color_item')
const mainImg = document.querySelector('.main_img img')

colors.forEach((color) => {
    color.addEventListener('click', function () {
        colors.forEach(color => color.classList.remove('active'))
        color.classList.add('active')
        mainImg.setAttribute('src', color.getAttribute('main-src'))
    })
})

