var btn_menu = document.getElementsByClassName('class-btn-menu')[0],
    btn_login_mob = document.getElementsByClassName('class-btn-profile')[0],
    btn_login_desk = document.getElementById('btn-login-desk'),
    btn_close_login = document.querySelector('.container-modal .icon-close'),
    btn_close_stadistic = document.querySelector('#modal_stadistic .container-modal .icon-close'),
    btn_stadistic = document.getElementById('see-stadistic');

btn_menu.addEventListener('click', openMenu)
btn_login_mob.addEventListener('click', openLogin)
btn_login_desk.addEventListener('click', openLogin)
btn_stadistic.addEventListener('click', openStadistic)

btn_close_login.addEventListener('click', closeLogin)
btn_close_stadistic.addEventListener('click', closeStadistic)

function openStadistic(evt) {
    evt.preventDefault()
    toggleModal('stadistic', 'open')
}
function openLogin(evt) {
    evt.preventDefault()
    toggleModal('login', 'open')
}
function closeLogin(evt) {
    evt.preventDefault()
    toggleModal('login', 'close')
}
function closeStadistic(evt) {
    evt.preventDefault()
    toggleModal('stadistic', 'close')
}
function toggleModal (modal, action) {
    var overlay = document.getElementsByClassName('overlay')[0],
        login = document.getElementById('modal_login'),
        stadistic = document.getElementById('modal_stadistic'),
        register = document.getElementById('modal_register');

    if (action == 'open'){
        overlay.style.display = 'block';
        document.body.classList.add('bodyNoScroll');
        if (modal == 'login') login.style.display = 'flex';
        if (modal == 'register') register.style.display = 'flex';
        if (modal == 'stadistic') stadistic.style.display = 'flex';
    }
    if (action == 'close') {
        overlay.style.display = 'none';
        document.body.classList.remove('bodyNoScroll');
        if (modal == 'login') login.style.display = 'none';
        if (modal == 'register') register.style.display = 'none';
        if (modal == 'stadistic') stadistic.style.display = 'none';
    }
}
function openMenu(evt) {
    evt.preventDefault();
    var overlay = document.getElementsByClassName('overlay')[0],
        menu = document.getElementsByClassName('menu')[0];

    overlay.style.display = 'block';
    menu.style.display = 'block';
    document.body.classList.add('bodyNoScroll');
}