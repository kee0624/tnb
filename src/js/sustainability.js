import '../css/sustainability.css';

const VideoModal = {
  init(config) {
    $(config.element).on('hidden.bs.modal', function () {
      const $iframe = $(this).find('iframe');
      const src = $iframe.attr('src');
      $iframe.attr('src', src);
    });
  }
}

const ScrollCard = {
  desktopWidth: 851,

  init(config) {
    this.setActive(config.headerContentListItems, 0);
    this.updateHeight(config.headerContentListItems, config.headerContentList);
    this.updateHeaderBarHeight(config.headerContentListItems, config.barElement, 0);
    this.resize(config);
    this.scrollAnimation(config);
  },

  resize(config) {
    let resizeTimeout;

    $(window).on('resize', () => {
      clearTimeout(resizeTimeout);
      
      resizeTimeout = setTimeout(() => {
        this.updateHeight(config.headerContentListItems, config.headerContentList);
        // Find the currently active item and update header bar height
        // const activeIndex = $(config.headerContentListItems).index($('.is-active'));
        this.updateHeaderBarHeight(config.headerContentListItems, config.barElement, activeIndex >= 0 ? activeIndex : 0);
        ScrollTrigger.refresh();
      }, 150);
    });
  },

  setActive(elements, barElement, index) {
    $(elements).each((elementIndex, element) => {
      element.classList.toggle('is-active', elementIndex === index);
    });
    
    this.updateHeaderBarHeight(elements, barElement, index);
  },

  updateHeaderBarHeight(elements, barElement, activeIndex) {
    const headerBar = $(barElement);
    const totalElements = $(elements).length;
    
    if (headerBar.length && totalElements > 0 && activeIndex >= 0) {
      const percentage = ((activeIndex + 1) / totalElements) * 100;
      headerBar.css('height', percentage + '%');
    }
  },

  updateHeight(elements, targetElement) {
    let maxHeight = 0;

    $(elements).each((_, element) => {
      if ($(element).outerHeight() > maxHeight) {
        maxHeight = $(element).outerHeight();
      }
    });

    $(targetElement).height(maxHeight);
  },

  scrollAnimation(config) {
    const totalImageListItems = $(config.imageListItems).length;

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(config.imageListItems, {
      yPercent: -100 * (totalImageListItems - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: config.imageListItems,
        start: "top center",
        end: 'center center',
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: self => {
          if (window.innerWidth >= this.desktopWidth) {
            const index = Math.min(totalImageListItems - 1, Math.round(self.progress * (totalImageListItems - 1)));
            this.setActive(config.headerContentListItems, config.barElement, index);
          }
        }
      }
    });

    ScrollTrigger.matchMedia({
      // 📱 Mobile
      "(max-width: 850px)": () => {
        $(config.headerContentListItems).each((index, element) => {
          ScrollTrigger.create({
            trigger: element,
            start: () => `top+=${index * 60} center`,
            end: () => `top+=${(index + 1) * 60} center`,
            onEnter: () => this.setActive(config.headerContentListItems, config.barElement, index),
            onEnterBack: () => this.setActive(config.headerContentListItems, config.barElement, index),
            invalidateOnRefresh: true
          });
        });
      }
    });
  }
}

VideoModal.init({ element: '#videoModal' });
ScrollCard.init({
  headerContentListItems: '.practice-header-content li',
  headerContentList: '.practice-header ul',
  imageListItems: '.practice-img li',
  barElement: '.practice-header-bar span'
});
