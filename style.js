document.addEventListener("DOMContentLoaded", function() {
  const images = [
    'url(img/IMG_2369.JPG)', // 新しい背景画像のパス
    'url(img/IMG_2406.JPG)', // もう一つの背景画像のパス
    'url(img/IMG_2422.JPG)',
    'url(img/IMG_2450.JPG)',
    'url(img/IMG_2470.JPG)',
    
    // 必要に応じて他の背景画像のパスを追加
  ];

  let currentImageIndex = 0;
  const heroElement = document.querySelector('.hero');
  heroElement.style.backgroundImage = images[currentImageIndex];

  function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    heroElement.style.backgroundImage = images[currentImageIndex];
  }

  setInterval(changeBackgroundImage, 3000); // 5秒ごとに背景画像を変更
});
document.addEventListener('DOMContentLoaded', function() {
  var section = document.querySelector('.self-introdaction');
  var fadeInElements = section.querySelectorAll('.fade-in');

  function checkScroll() {
      fadeInElements.forEach(function(element) {
          if (isElementInViewport(element)) {
              element.classList.add('active');
          }
      });
  }

  function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  window.addEventListener('scroll', checkScroll);
  window.addEventListener('resize', checkScroll);
  checkScroll();
});




document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.fade-in');

  function checkVisible() {
      elements.forEach(element => {
          if (isElementInViewport(element)) {
              element.classList.add('show');
          }
      });
  }

  function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  // 初期表示をチェック
  checkVisible();

  // スクロール時に表示チェック
  window.addEventListener('scroll', checkVisible);
});