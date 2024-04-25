let currentPage = 1;
const articlesPerPage = 2;
const totalArticles = document.querySelectorAll('.articlecard').length;
const totalPages = Math.ceil(totalArticles / articlesPerPage);



function updateButtonVisibility() {
    // Show or hide previous and next buttons based on current page
    const previousButton = document.getElementById('previousButton');
    const nextButton = document.getElementById('nextButton');

    previousButton.style.display = currentPage === 1 ? 'none' : 'block';
    nextButton.style.display = currentPage === totalPages ? 'none' : 'block';

    // Disable the buttons when there are no more articles
    previousButton.disabled = currentPage === 1;

}

function showArticles() {
  const articles = document.querySelectorAll('.articlecard');
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;

  const totalArticles = articles.length;
  const totalPages = Math.ceil(totalArticles / articlesPerPage);

  articles.forEach((article, index) => {
      if (index >= startIndex && index < endIndex) {
          article.style.display = 'block';
      } else {
          article.style.display = 'none';
      }
  });

  const pageNumberDisplay = document.getElementById('pageNumber');
  pageNumberDisplay.textContent = `Page ${currentPage} of ${totalPages}`;

}

document.addEventListener("DOMContentLoaded", function() {
    showArticles();
    updateButtonVisibility();
});

function nextPage() {
    currentPage++;
    showArticles();
    updateButtonVisibility();
    window.scrollTo(0, 0); // Scroll to top of the page
}

function previousPage() {
    currentPage--;
    showArticles();
    updateButtonVisibility();
    window.scrollTo(0, 0); // Scroll to top of the page
}
