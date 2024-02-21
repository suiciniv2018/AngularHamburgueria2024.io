const mybutton = document.getElementById('myBtn');

if (mybutton !== null) {
    mybutton.addEventListener("click", topFunction, false);
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        if (mybutton !== null) {
            mybutton.style.display = 'block';
        }
    } else {
        if (mybutton !== null) {
            mybutton.style.display = 'none';
        }
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}