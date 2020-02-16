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

//FORMULAIRE----------------------------------------------------------------------------

    let submit = document.getElementById('submit');

    submit.addEventListener('click', function(){
        console.log('Hello ' + document.getElementById('name').value + 
        ' votre adresse mail est ' + document.getElementById('mail').value +
        ' et votre message ' + document.getElementById('msg').value);
    })

})