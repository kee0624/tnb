import"./modulepreload-polyfill-B5Qt9EMX.js";const s={init(){const o=$(".owl-carousel");o.length!==0&&o.each((n,t)=>{let e=$(t).data("config")||{};if($(t).find(".item").length<=1){$(t).addClass("owl-loaded").addClass("is-alone");return}$(t).owlCarousel({loop:!0,margin:0,nav:!1,dots:!0,autoHeight:!0,navText:[`
                    <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2L2 10L10 18" stroke="#005EAA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    `,`<svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2L2 10L10 18" stroke="#005EAA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`],responsive:{0:{items:1}},...e})})}},i={init(){$("body").scrollspy({target:".fuse-article-aside .navbar"})}};s.init();i.init();
