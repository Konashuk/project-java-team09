document.addEventListener('DOMContentLoaded', function () {
  var scrollToTopButton = document.getElementById('scrollToTopButton');

  // Показуємо кнопку, коли сторінка прокручена до певної відстані від верху
  window.onscroll = function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  };

  // При кліку на кнопку прокручуємо сторінку до верхньої частини з плавним ефектом
  scrollToTopButton.addEventListener('click', function () {
    smoothScrollToTop(1000); // 1000 мілісекунд (1 секунда) для плавного скролу
  });

  function smoothScrollToTop(duration) {
    var start = performance.now();
    var from = window.scrollY;

    function step(timestamp) {
      var progress = (timestamp - start) / duration;
      if (progress < 1) {
        window.scrollTo(0, from + (0 - from) * easeInOutCubic(progress));
        requestAnimationFrame(step);
      } else {
        window.scrollTo(0, 0);
      }
    }

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

    requestAnimationFrame(step);
  }
});
