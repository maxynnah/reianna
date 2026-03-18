/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}    

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((mc) =>{
    mc.addEventListener('click', () =>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork))

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home__data')
sr.reveal('.home__handle', {delay: 700})
sr.reveal('home__social, .home__scroll', {delay: 900, origin})

 /*<!--=============== OJT LIGHTBOX JS ===============-->*/

        const cards = document.querySelectorAll('.ojt__img-wrap');
        const lightbox = document.getElementById('ojt-lightbox');
        const lightboxImg = document.getElementById('ojt-lightbox-img');
        const lightboxDesc = document.getElementById('ojt-lightbox-desc');
        const closeBtn = document.getElementById('ojt-close');

        cards.forEach(card => {
            card.addEventListener('click', () => {
                const img = card.querySelector('.ojt__img');
                const desc = card.querySelector('.ojt__desc');
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightboxDesc.textContent = desc.textContent;
                lightbox.classList.add('ojt__lightbox--active');
            });
        });

        closeBtn.addEventListener('click', () => {
            lightbox.classList.remove('ojt__lightbox--active');
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('ojt__lightbox--active');
            }
        });
