
import { Swiper, Pagination, Scrollbar, Navigation, Controller, Autoplay, Mousewheel, Parallax, EffectFade, EffectCoverflow, Thumbs, EffectCreative,} from 'swiper'
Swiper.use([ Pagination, Scrollbar, Navigation, Controller, Autoplay, Mousewheel, Parallax, EffectFade, EffectCoverflow, Thumbs, EffectCreative])

$(window).on('load', () => {
    const swiper = new Swiper(".aboutUs", {
        direction: "vertical",
        speed:  3000,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        transformEl: {

        },
        // touchAngle: 60,
        edgeSwipeThreshold:300,
        navigation: {
            nextEl: ".swiper-button-next__aboutUs",
            prevEl: ".swiper-button-prev__aboutUs",
        },
        mousewheel: true,
        on: {
            slideChange : function() {
                let workSliderDesc = document.querySelectorAll(".aboutUs")
                workSliderDesc.forEach(elem => {
                    let idex = elem.swiper.realIndex
                    menuCheck(elem.swiper.slides[idex])
                    ShowUpElement(idex)
                });
            }, 
        }
    });
    function ShowUpElement (n) {
        let idexUpElement = n;
        let UpElement1 = document.querySelector(".UpElement__1")
        let UpElement2 = document.querySelector(".UpElement__2")
        let UpElement3 = document.querySelector(".UpElement__3")
        let UpElement4 = document.querySelector(".UpElement__4")
        if (!UpElement1) return;

        switch (idexUpElement) {
            case 0:
                UpElement1.classList.add("showUpElement");
                UpElement2.classList.remove("showUpElement");
                UpElement3.classList.remove("showUpElement");
                UpElement4.classList.remove("showUpElement");
                break;
            case 1:
                UpElement1.classList.remove("showUpElement");
                UpElement2.classList.add("showUpElement");
                UpElement3.classList.remove("showUpElement");
                UpElement4.classList.remove("showUpElement");
                break;
            case 2:
                UpElement1.classList.remove("showUpElement");
                UpElement2.classList.add("showUpElement");
                UpElement3.classList.remove("showUpElement");
                UpElement4.classList.remove("showUpElement");
                break;
            case 3:
                UpElement1.classList.remove("showUpElement");
                UpElement2.classList.remove("showUpElement");
                UpElement3.classList.remove("UpElement__3__delay");
                UpElement3.classList.add("showUpElement");
                UpElement4.classList.remove("showUpElement");
                break;
            case 4:
                UpElement1.classList.remove("showUpElement");
                UpElement2.classList.remove("showUpElement");
                UpElement3.classList.remove("showUpElement");
                UpElement4.classList.add("showUpElement");
                UpElement4.style.transform = "translateY(-70%)"
                // UpElement4.classList.add("UpElement__4__delay");
                UpElement3.classList.add("UpElement__3__delay");
                break;
            case 5:
                UpElement1.classList.remove("showUpElement");
                UpElement2.classList.remove("showUpElement");
                UpElement3.classList.remove("showUpElement");
                UpElement4.classList.remove("UpElement__4__delay");
                UpElement4.classList.add("showUpElement");
                if (document.documentElement.clientWidth < 425) {
                    UpElement4.style.transform = "translateY(-350%)";
                } else if(document.documentElement.clientWidth < 576){
                    UpElement4.style.transform = "translateY(-200%)";
                } else {
                    UpElement4.style.transform = "translateY(-110%)";
                }
                break;
            case 6:
                UpElement1.classList.remove("showUpElement");
                UpElement2.classList.remove("showUpElement");
                UpElement3.classList.remove("showUpElement");
                UpElement4.classList.remove("showUpElement");
                UpElement4.classList.add("UpElement__4__delay");
                break;
            default:
                UpElement1.classList.remove("showUpElement");
                UpElement2.classList.remove("showUpElement");
                UpElement3.classList.remove("showUpElement");
                UpElement4.classList.remove("showUpElement");
                UpElement4.classList.remove("UpElement__4__delay");
        }

    }
    function menuCheck(elSlide) {
        if (document.querySelector('.aboutUs')) {
            const topMenu = document.querySelector(".section__topMenu")
            if (elSlide?.classList.contains('menuBlack')) {
                topMenu.classList.remove('darkTheme')
            } else {
                topMenu.classList.add('darkTheme')
            }
        }
    }

    menuCheck();
    ShowUpElement(0);
});