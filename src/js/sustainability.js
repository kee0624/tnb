import '../css/sustainability.css';

$('#videoModal').on('hidden.bs.modal', function () {
  const $iframe = $(this).find('iframe');
  const src = $iframe.attr('src');
  $iframe.attr('src', src);
});
