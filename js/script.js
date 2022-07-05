// _____________________________ SHOW MENU __________________________________//
const showMenu = (toggleId,navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // Validate that variables exist
    if (toggle&&nav){
        toggle.addEventListener('click',()=>{
            //we add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle','nav-menu')

// _____________________________ REMOVE MENU MOBILE __________________________________//
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // when click in each nav__link, we remove the show-menu classlist
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))


// _____________________________ SCROLL SECTION ACTIVE LINK __________________________________//
const sections = document.querySelectorAll('section[id]')


function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 50,
              sectionId = current.getAttribute('id')

        const test = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    

    })
    
}
window.addEventListener('scroll',scrollActive)

// _____________________________ CHANGE BACKGROUND ACTIVE HEADER __________________________________//
function scrollHeader(){
    const header = document.getElementById('header')
    // when the scroll greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80){
        header.classList.add('scroll-header')
    }else{
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll',scrollHeader)

// _____________________________ SHOW SCROLL UP __________________________________//
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    //when the scroll higher than 560 viewport ,add show-scroll class on scroll-top tag
    if(this.scrollY >= 560){
        scrollUp.classList.add('show-scroll')
    }else{
        scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll',scrollUp)

// _____________________________ DARK LIGHT THEME __________________________________//
const toggleSwitch = document.querySelector('input[type = "checkbox" ]');

// image mode
const homeSvg = document.getElementById('home-svg')
const aboutSvg = document.getElementById('about-svg')
const appSvg = document.getElementById('app-svg')
function svgMode(color){
    homeSvg.src = `./img/home-main-${color}.svg`
    aboutSvg.src=`./img/about-message-${color}.svg`
    appSvg.src = `./img/undraw-app-${color}.svg`
}

function toggleDarkLight(isDark){
    isDark ? svgMode('dark') :  svgMode('light');
  }

// switch theme
function switchTheme(event){
    if (event.target.checked){
      document.documentElement.setAttribute('data-theme','dark');
      localStorage.setItem('theme','dark');
      console.log(localStorage)
      toggleDarkLight(true);
    } else{
      document.documentElement.setAttribute('data-theme','blob');
      localStorage.setItem('theme','light');
      console.log(localStorage)
      toggleDarkLight(false);
    }
  }
  
//event listener
toggleSwitch.addEventListener('change',switchTheme);

// local storage check
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark'){
    document.documentElement.setAttribute('data-theme','dark');
    toggleSwitch.checked = true;
    toggleDarkLight(true);
}


// _____________________________ SCROLL ANIMATION__________________________________//

//------------------------- about --------------------------------//
function scrollAboutAnimation(){
    let aboutAnim = document.querySelectorAll('#about')

    for (let i=0; i < aboutAnim.length; i++){
        let windowHeight = window.innerHeight;
        let elementTop = aboutAnim[i].getBoundingClientRect().top;

        if (elementTop < windowHeight){
            aboutAnim[i].classList.add('active')
        }else{
            aboutAnim[i].classList.remove('active')

        }
    }

}
window.addEventListener("scroll", scrollAboutAnimation);

//-------------------------services--------------------------------//
function scrollServicesAnimation(){
    let servicesFadeIn = document.querySelectorAll('.services-fadeIn')

    for (let i=0; i < servicesFadeIn.length; i++){
        let windowHeight = window.innerHeight;
        let elementTop = servicesFadeIn[i].getBoundingClientRect().top;

        if (elementTop < windowHeight - 150){
            servicesFadeIn[i].classList.add('services-fadeIn-active')
        }else{
            servicesFadeIn[i].classList.remove('services-fadeIn-active')

        }
    }

}
window.addEventListener("scroll", scrollServicesAnimation);

//------------------------- app --------------------------------//
function scrollAppAnimation(){
    let appFadeIn = document.querySelectorAll('.app-fadeIn')

    for (let i=0; i < appFadeIn.length; i++){
        let windowHeight = window.innerHeight;
        let elementTop = appFadeIn[i].getBoundingClientRect().bottom;

        if (elementTop < windowHeight- 200){
            appFadeIn[i].classList.add('app-fadeIn-active')
        }else{
            appFadeIn[i].classList.remove('app-fadeIn-active')

        }
    }

}
window.addEventListener("scroll", scrollAppAnimation);








