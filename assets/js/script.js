document.addEventListener('DOMContentLoaded', function(event){
    console.log('load');

//DÉROULEMENT DES SECTIONS VIA LE MENU----------------------------------------------------------------------------

document.querySelectorAll('a[href^="#"]').forEach($anchor => {
    $anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start' //scroll to top of the target element
        });
    });
});

})