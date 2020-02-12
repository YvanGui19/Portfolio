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

//CAROUSEL XP----------------------------------------------------------------------------

document.getElementsByClassName('xp')[0].onclick = function () {
    //var show = 
    document.getElementById('xp1').style.display='flex';
    //var hidden = 
    document.getElementById('xp2').style.display='none';
    document.getElementById('xp3').style.display='none';
    document.getElementById('xp4').style.display='none';
    document.getElementById('xp5').style.display='none';
    document.getElementById('xp6').style.display='none';
    document.getElementById('but0').style.backgroundColor='#2D535C';
    document.getElementById('but1').style.backgroundColor='#1A2F34';
    document.getElementById('but2').style.backgroundColor='#1A2F34';
    document.getElementById('but3').style.backgroundColor='#1A2F34';
    document.getElementById('but4').style.backgroundColor='#1A2F34';
    document.getElementById('but5').style.backgroundColor='#1A2F34';
    event.preventDefault();
    }

document.getElementsByClassName('xp')[1].onclick = function () {
    document.getElementById('xp1').style.display='none';
    document.getElementById('xp2').style.display='flex';
    document.getElementById('xp3').style.display='none';
    document.getElementById('xp4').style.display='none';
    document.getElementById('xp5').style.display='none';
    document.getElementById('xp6').style.display='none';
    document.getElementById('but0').style.backgroundColor='#1A2F34';
    document.getElementById('but1').style.backgroundColor='#2D535C';
    document.getElementById('but2').style.backgroundColor='#1A2F34';
    document.getElementById('but3').style.backgroundColor='#1A2F34';
    document.getElementById('but4').style.backgroundColor='#1A2F34';
    document.getElementById('but5').style.backgroundColor='#1A2F34';
    event.preventDefault();
    }

document.getElementsByClassName('xp')[2].onclick = function () {
    document.getElementById('xp1').style.display='none';
    document.getElementById('xp2').style.display='none';
    document.getElementById('xp3').style.display='flex';
    document.getElementById('xp4').style.display='none';
    document.getElementById('xp5').style.display='none';
    document.getElementById('xp6').style.display='none';
    document.getElementById('but0').style.backgroundColor='#1A2F34';
    document.getElementById('but1').style.backgroundColor='#1A2F34';
    document.getElementById('but2').style.backgroundColor='#2D535C';
    document.getElementById('but3').style.backgroundColor='#1A2F34';
    document.getElementById('but4').style.backgroundColor='#1A2F34';
    document.getElementById('but5').style.backgroundColor='#1A2F34';
    event.preventDefault();
    }


document.getElementsByClassName('xp')[3].onclick = function () {
    document.getElementById('xp1').style.display='none';
    document.getElementById('xp2').style.display='none';
    document.getElementById('xp3').style.display='none';
    document.getElementById('xp4').style.display='flex';
    document.getElementById('xp5').style.display='none';
    document.getElementById('xp6').style.display='none';
    document.getElementById('but0').style.backgroundColor='#1A2F34';
    document.getElementById('but1').style.backgroundColor='#1A2F34';
    document.getElementById('but2').style.backgroundColor='#1A2F34';
    document.getElementById('but3').style.backgroundColor='#2D535C';
    document.getElementById('but4').style.backgroundColor='#1A2F34';
    document.getElementById('but5').style.backgroundColor='#1A2F34';
    event.preventDefault();
    }
    
document.getElementsByClassName('xp')[4].onclick = function () {
    document.getElementById('xp1').style.display='none';
    document.getElementById('xp2').style.display='none';
    document.getElementById('xp3').style.display='none';
    document.getElementById('xp4').style.display='none';
    document.getElementById('xp5').style.display='flex';
    document.getElementById('xp6').style.display='none';
    document.getElementById('but0').style.backgroundColor='#1A2F34';
    document.getElementById('but1').style.backgroundColor='#1A2F34';
    document.getElementById('but2').style.backgroundColor='#1A2F34';
    document.getElementById('but3').style.backgroundColor='#1A2F34';
    document.getElementById('but4').style.backgroundColor='#2D535C';
    document.getElementById('but5').style.backgroundColor='#1A2F34';
    event.preventDefault();
    }
    
document.getElementsByClassName('xp')[5].onclick = function () {
    document.getElementById('xp1').style.display='none';
    document.getElementById('xp2').style.display='none';
    document.getElementById('xp3').style.display='none';
    document.getElementById('xp4').style.display='none';
    document.getElementById('xp5').style.display='none';
    document.getElementById('xp6').style.display='flex';
    document.getElementById('but0').style.backgroundColor='#1A2F34';
    document.getElementById('but1').style.backgroundColor='#1A2F34';
    document.getElementById('but2').style.backgroundColor='#1A2F34';
    document.getElementById('but3').style.backgroundColor='#1A2F34';
    document.getElementById('but4').style.backgroundColor='#1A2F34';
    document.getElementById('but5').style.backgroundColor='#2D535C';
    event.preventDefault();
    }

//FORMULAIRE----------------------------------------------------------------------------
    let submit = document.getElementById('submit');

    submit.addEventListener('click', function(){
        console.log('Hello ' + document.getElementById('name').value + 
        ' votre adresse mail est ' + document.getElementById('mail').value +
        ' et votre message ' + document.getElementById('msg').value);
    })

})