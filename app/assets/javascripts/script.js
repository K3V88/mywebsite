function shareArticle(platform, shareButton) {
  // Get the parent article card element of the clicked share button
  const article = shareButton.closest('.articlecard');
  const articleTitle = article.querySelector('h2').innerText;
  const articleUrl = encodeURIComponent(window.location.href);

  let shareUrl = '';

  // Construct the share URL based on the selected platform
  switch(platform) {
    case 'whatsapp':
      shareUrl = 'https://api.whatsapp.com/send?text=' + encodeURIComponent(articleTitle + '\n' + articleUrl);
      break;
    case 'facebook':
      const articleImage = article.querySelector('.art-image').getAttribute('src'); // Updated class to 'art-image'
      shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href) +
                 '&title=' + encodeURIComponent(articleTitle) +
                 '&picture=' + encodeURIComponent(articleImage); // Append image URL
      break;
    case 'twitter':
      shareUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(articleTitle + '\n' + articleUrl);
      break;
    default:
      console.error('Unsupported platform: ' + platform);
      return;
  }

  // Open the share dialog
  window.open(shareUrl, '_blank');
}
