const gabarytu = $('a.gabarytu')

gabarytu.click(function () {
    $('#gabarity').css('display', 'flex')
})

$('#gabarity .close').click(function () {
    $('#gabarity').css('display', 'no')
})

const colors = document.querySelectorAll('.color_item')
const mainImg = document.querySelector('.main_img img')

colors.forEach((color) => {
    color.addEventListener('click', function () {
        colors.forEach(color => color.classList.remove('active'))
        color.classList.add('active')
        mainImg.setAttribute('src', color.getAttribute('main-src'))
    })
})

