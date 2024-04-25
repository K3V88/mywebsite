let currentPage = 1;

const articlesPerPage = 3;
let totalArticles = document.querySelectorAll('.articlecard').length;
let totalPages = 3;

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
  const newTotalArticles = document.querySelectorAll('.articlecard').length;
  if (currentPage > 1) {
      totalPages = Math.ceil(newTotalArticles / articlesPerPage);
  }
  if (currentPage > totalPages) {
      currentPage = totalPages; // Ensure currentPage does not exceed totalPages
  }
  showArticles();
  updateButtonVisibility();
  window.scrollTo(0, 0); // Scroll to top of the page
}

function previousPage() {
    currentPage--;
    if (currentPage < 1) {
        currentPage = 1; // Ensure currentPage does not go below 1
    }
    showArticles();
    updateButtonVisibility();
    window.scrollTo(0, 0); // Scroll to top of the page
}
