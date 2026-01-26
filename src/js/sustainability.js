import '../css/sustainability.css';

const VideoModal = {
  init() {
    $('#videoModal').on('hidden.bs.modal', function () {
      const $iframe = $(this).find('iframe');
      const src = $iframe.attr('src');
      $iframe.attr('src', src);
    });
  }
}

const ScrollCard = {
  init() {
    const $practices = $('.fuse-sustainability-practice');
    if ($practices.length === 0) return;

    $practices.each((_, element) => {
      const $subtitle = $(element).find('small');
      const $h2 = $(element).find('h2');
      const $p = $(element).find('p');
      const $img = $(element).find('img');
      const $scrollSteps = $(element).find('.scroll-step');
      const dataContent = $(element).data('content');

      function updateCard(index) {
        $subtitle.html(dataContent[index].subtitle);
        $h2.html(dataContent[index].title);
        $p.html(dataContent[index].desc);
        $img.attr('src', dataContent[index].image);
      }

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const step = entry.target.dataset.step;
              updateCard(step);
            }
          });
        },
        { threshold: 0.6 }
      );

      $scrollSteps.each((_, stepElement) => {
        observer.observe(stepElement);
      });
    });
  },
}

VideoModal.init();
// ScrollCard.init();
