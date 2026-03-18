/*=============== OJT LIGHTBOX ===============*/

document.addEventListener('DOMContentLoaded', function () {

    /*===== MIXITUP FILTER =====*/
    const mixer = mixitup('.ojt__container', {
        selectors: { target: '.mix' },
        animation: { duration: 300 }
    });

    document.querySelectorAll('.work__item').forEach(filter => {
        filter.addEventListener('click', function () {
            document.querySelectorAll('.work__item')
                .forEach(f => f.classList.remove('active-work'));
            this.classList.add('active-work');
            mixer.filter(this.dataset.filter);
        });
    });

    /*===== LIGHTBOX =====*/
    const cards = document.querySelectorAll('.ojt__img-wrap');
    const lightbox = document.getElementById('ojt-lightbox');
    const lightboxImg = document.getElementById('ojt-lightbox-img');
    const lightboxDesc = document.getElementById('ojt-lightbox-desc');
    const closeBtn = document.getElementById('ojt-close');

    cards.forEach(function(card) {
        card.addEventListener('click', function () {
            const img = card.querySelector('.ojt__img');
            const desc = card.querySelector('.ojt__desc');
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightboxDesc.textContent = desc.textContent;
            lightbox.classList.add('ojt__lightbox--active');
        });
    });

    closeBtn.addEventListener('click', function () {
        lightbox.classList.remove('ojt__lightbox--active');
    });

    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('ojt__lightbox--active');
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            lightbox.classList.remove('ojt__lightbox--active');
        }
    });

});

/*=============== OJT MIXITUP FILTER ===============*/

const mixer = mixitup('.ojt__container', {
    selectors: {
        target: '.mix'
    },
    animation: {
        duration: 300
    }
});

const workFilters = document.querySelectorAll('.work__item');

workFilters.forEach(filter => {
    filter.addEventListener('click', function () {
        workFilters.forEach(f => f.classList.remove('active-work'));
        this.classList.add('active-work');
        mixer.filter(this.dataset.filter);
    });
});

/*=============== OJT LIGHTBOX ===============*/

document.addEventListener('DOMContentLoaded', function () {
    // ... your existing lightbox code
});