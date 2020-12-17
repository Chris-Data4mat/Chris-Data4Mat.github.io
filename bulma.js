document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM');
    fetch("inc/navigation.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
            var burger = document.querySelector('.navbar-burger');
            var menu = document.querySelector('#' + burger.dataset.target);
            burger.addEventListener('click', () => {
                burger.classList.toggle('is-active');
                menu.classList.toggle('is-active');
            });
        })
});