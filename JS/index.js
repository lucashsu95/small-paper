
// for (var i = 0; i < elements.length; i++) {
    //     elements[i].addEventListener('click', myFunction);
// }
// function myFunction() {
//     var old_value = document.querySelector('.active');
//     old_value.classList.remove('active');
//     this.classList.add('active');
//     // console.log(old_value);
//     // console.log(elements);
// }

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

function show() {
    window.onscroll = () => {
        var stop = document.documentElement.scrollTop;
        // console.log(stop);
        if (stop < 200) {
            var old_value = document.querySelector('.active');
            var new_value = document.querySelector('.line-first');
            old_value.classList.remove('active');
            new_value.classList.add('active');
        }
        if (stop >= 200) {
            var old_value = document.querySelector('.active');
            var new_value = document.querySelector('.line-second');
            old_value.classList.remove('active');
            new_value.classList.add('active');
        }
        if (stop >= 700) {
            var old_value = document.querySelector('.active');
            var new_value = document.querySelector('.line-third');
            old_value.classList.remove('active');
            new_value.classList.add('active');
        }
        if (stop >= 1300) {
            var old_value = document.querySelector('.active');
            var new_value = document.querySelector('.line-fourth');
            old_value.classList.remove('active');
            new_value.classList.add('active');
        }
    }
}
var Lonclick = document.getElementById('hidden-menu');
Lonclick.addEventListener('click', () => {
    console.log(document.documentElement.scrollWidth)
    if (document.documentElement.scrollWidth <= 900) {
        hidden_menu.style.transform = 'scale(0)';
        progress_bar_btn.style.transform = 'rotate(90deg) scaleY(4) scaleX(3) translateY(0px)';

    }
})