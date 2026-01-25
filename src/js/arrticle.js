import '../css/arrticle.css';


const Carousel = {
    init() {
        const $elements = $('.owl-carousel');
        if ($elements.length === 0) return;

        $elements.each((_, element) => {
            let config = $(element).data('config') || {};
    
            $(element).owlCarousel({
                loop: true,
                margin: 0,
                nav: false,
                dots: true,
                navText: [`
                    <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2L2 10L10 18" stroke="#005EAA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    `, 
                    `<svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2L2 10L10 18" stroke="#005EAA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`],
                responsive: {
                    0: {
                        items: 1
                    }
                },
                ...config,
            });
        });
    }
}

Carousel.init();