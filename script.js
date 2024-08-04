$(window).on('load', function () {
    $(".preloader").fadeOut(1000);
    $(".container").fadeIn(1000);
});

//farming button

function changeText() {
    const button = document.querySelector("#btn");
    btn.innerHTML = "Farming";
}