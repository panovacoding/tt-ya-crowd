document.addEventListener('DOMContentLoaded', () => {
    initSwipers();
})

function initSwipers(){
    if(window.innerWidth < 991){
        const stepsSwiper = new Swiper('.steps-swiper', {
            slidesPerView: 'auto',
            spaceBetween: 20,
            pagination: {
                el: '.steps-swiper__bullets'
            },
            navigation: {
                prevEl: '.steps-swiper-prev',
                nextEl: '.steps-swiper-next'
            }
        })
    }

    const membersSwiper = new Swiper('.members-swiper', {
        loop: true,
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 4000,
          },
        pagination: {
            el: '.members-swiper-bullets',
            type: 'fraction',
			formatFractionCurrent: function(number){
				return number
			},
			formatFractionTotal: function(number){
				return number
			},
			renderFraction: function (currentClass, totalClass) {
				return '<span class="' + currentClass + '"></span>' + '/ ' + '<span class="' + totalClass + '"></span>';
			}
        },
        navigation: {
            prevEl: '.members-swiper-prev',
            nextEl: '.members-swiper-next'
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 'auto'
            }
        }
    })
}