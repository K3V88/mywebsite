document.addEventListener("DOMContentLoaded", function() {
  // Share buttons
  const facebookBtns = document.querySelectorAll('.facebook-share');

  // Share functionality for Facebook
  facebookBtns.forEach(function(facebookBtn) {
    facebookBtn.addEventListener('click', function() {
      console.log('Facebook share button clicked');

      // Get the parent article element of the clicked share button
      const article = this.closest('.article');
      const articleTitle = article.querySelector('h2').innerText;
      const articleImage = article.querySelector('.art-image').getAttribute('src'); // Updated class to 'art-image'

      // Construct the share URL with article title and image
      const facebookShareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href) +
                               '&title=' + encodeURIComponent(articleTitle) +
                               '&picture=' + encodeURIComponent(articleImage); // Append image URL

      // Open the Facebook share dialog
      window.open(facebookShareUrl, '_blank');
    });
  });
});
