let hamburgerMenu = document.querySelector('.hamburger-menu');
let navigation = document.querySelector('.navigation');

   hamburgerMenu.addEventListener('click', function(){
  hamburgerMenu.classList.toggle('active');
  navigation.classList.toggle('active');
    })

    let mainFilter = document.querySelector('.main__filter button');
let filter= document.querySelector('.filter');

   mainFilter.addEventListener('click', function(){
  mainFilter.classList.toggle('active');
  filter.classList.toggle('active');
    })

    let mainFilter1 = document.querySelector('.filt');
let filter1= document.querySelector('.filter');

   mainFilter1.addEventListener('click', function(){
  mainFilter1.classList.toggle('active');
  filter1.classList.toggle('active');
    })