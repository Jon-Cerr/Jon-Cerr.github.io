window.onscroll = function () {

    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");

    if (scroll > 20) {
        header.classList.add('nav_mod');
    } else if (scroll < 20) {
        header.classList.remove('nav_mod');
    }

}

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

menu = document.getElementById("header");
body = document.getElementById("content_all");
nav = document.getElementById("nav");
footer = document.getElementById("container_footer");
section = document.getElementById("section_skills");

function mostrar_menu() {

    menu.classList.toggle('move_content');
    body.classList.toggle('move_content');
    nav.classList.toggle('move_nav');
    footer.classList.toggle('move_content');
    section.classList.toggle('move_content');
}

window.addEventListener("resize", function () {

    if (window.innerWidth > 760) {
        menu.classList.remove('move_content');
        body.classList.remove('move_content');
        nav.classList.remove('move_nav');
        footer.classList.remove('move_content');
        section.classList.remove('move_content');
    }

});

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", esconder_menu);
})

function esconder_menu() {

    menu.classList.remove('move_content');
    body.classList.remove('move_content');
    nav.classList.remove('move_nav');
    footer.classList.remove('move_content');
    section.classList.remove('move_content');
}
