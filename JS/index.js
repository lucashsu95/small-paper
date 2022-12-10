// navbar
var elements = document.getElementsByClassName("none");
var progress_bar_btn = document.querySelector('.progress-bar-btn')
progress_bar_btn.style.transform = 'rotate(90deg) scaleY(4) scaleX(3) translateY(0px)';
var hidden_menu = document.getElementById('hidden-menu');
function show_progress_bar() {
    if (progress_bar_btn.style.transform == 'rotate(90deg) scaleY(4) scaleX(3) translateY(0px)') {
        progress_bar_btn.style.transform = 'rotate(-90deg) scaleY(4) scaleX(3) translateY(0.5px)';
        hidden_menu.style.transform = 'scale(1)'
    } else {
        progress_bar_btn.style.transform = 'rotate(90deg) scaleY(4) scaleX(3) translateY(0px)';
        hidden_menu.style.transform = 'scale(0)'
    }
    // console.log(progress_bar_btn.style.transform);
    console.log(hidden_menu.style.transform);

}

var Lonclick = document.getElementById('hidden-menu');
Lonclick.addEventListener('click', () => {
    console.log(document.documentElement.scrollWidth)
    if (document.documentElement.scrollWidth <= 900) {
        hidden_menu.style.transform = 'scale(0)';
        progress_bar_btn.style.transform = 'rotate(90deg) scaleY(4) scaleX(3) translateY(0px)';

    }
})

// line
const popularity = document.querySelector('#popularity');
const decline = document.querySelector('#decline');
const now = document.querySelector('#now');
function ff_show() {
    window.onscroll = () => {
        // console.log(orgin.offsetTop…, orgin.offsetLeft);
        var nowTop = document.documentElement.scrollTop + 300;

        // console.log(nowTop);
        if (nowTop > now.offsetTop) fs_updateLine('line-fourth');
        else if (nowTop > decline.offsetTop) fs_updateLine('line-third');
        else if (nowTop > popularity.offsetTop) fs_updateLine('line-second');
        else if (nowTop > 0) fs_updateLine('line-first');


        function fs_updateLine(Ltext) {
            document.querySelector('.active').classList.remove('active');
            document.querySelector(`.${Ltext}`).classList.add('active');
        }
    }
}