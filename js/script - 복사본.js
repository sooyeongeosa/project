const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul')

// show menu
menuBtn.addEventListener('click',()=>{
    menu.style.display ="block";
    menuBtn.style.display = "none";
    closeBtn.style.display = "inline-block"
    // closeBtn.style.display = "block"
})

// hide menu
closeBtn.addEventListener('click',()=>{
    menu.style.display ="none";
    menuBtn.style.display = "inline-block";
    closeBtn.style.display = "none"    
})

const navItems = menu.querySelectorAll('li');
const changeActiveItem = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove('active');
    })
}

navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click',()=>{
        changeActiveItem();
        link.classList.add('active');
    })
})

// read more about
const readMoreBtn = document.querySelector('.read-more')
const readMoreContent = document.querySelector('.read-more-content')

readMoreBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    readMoreContent.classList.toggle('show-content')
    if(readMoreContent.classList.contains('show-content')) {
        readMoreBtn.textContent = "Show less"
    }else {
        readMoreBtn.textContent = "Show more"

    }
})
// show/hide skills items
const skillItems = document.querySelectorAll('section.skills .skill');

skillItems.forEach((skill,index)=>{
    let index_num=index
    skill.querySelector('.head').addEventListener("click",() => {
        index_num=index_num.toString();
        console.log(index_num)
        let classname = "show-items"+index_num
        console.log(classname)
        skill.classList.add('on');
        skill.querySelector('.items').classList.toggle(classname)   
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
var mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});
/* Link active work */ 
const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(l=>l.classList.remove('active-work'))
    this.classList.add('active-work')

}
linkWork.forEach(l=> l.addEventListener('click', activeWork))
// add box shadow on scroll
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('show-box-shadow', window.scrollY>0)
})