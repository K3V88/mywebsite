import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["articles", "prevPage", "nextPage", "currentPage", "pageNumbers"]

  initialize() {
    this.currentArticleIndex = 0;
    this.articlesPerPage = 1; // Adjust as needed
    this.articles = this.articlesTarget.querySelectorAll('.article');
    this.totalPages = Math.ceil(this.articles.length / this.articlesPerPage); // Calculate total pages
    this.generatePageNumbers();
    this.showPage();
  }

  showPage() {
    const startIndex = this.currentArticleIndex * this.articlesPerPage;
    const endIndex = startIndex + this.articlesPerPage;

    this.articles.forEach((article, index) => {
      if (index >= startIndex && index < endIndex) {
        article.style.display = 'block';
      } else {
        article.style.display = 'none';
      }
    });

    this.currentPageTarget.textContent = this.currentArticleIndex + 1;
    this.prevPageTarget.disabled = this.currentArticleIndex === 0;
    this.nextPageTarget.disabled = this.currentArticleIndex === this.totalPages - 1;
  }

  prevPage() {
    if (this.currentArticleIndex > 0) {
      this.currentArticleIndex--;
      this.showPage();
    }
  }

  nextPage() {
    if (this.currentArticleIndex < this.totalPages - 1) {
      this.currentArticleIndex++;
      this.showPage();
    }
  }

  generatePageNumbers() {
    // Clear existing page numbers
    this.pageNumbersTarget.innerHTML = "";

    // Generate page numbers dynamically
    for (let i = 1; i <= this.totalPages; i++) {
      const pageNumber = document.createElement('span');
      pageNumber.textContent = i;
      pageNumber.dataset.action = "click->pagination#gotoPage";
      pageNumber.dataset.index = i - 1;
      pageNumber.classList.add('page-number');
      this.pageNumbersTarget.appendChild(pageNumber);
    }
  }

  gotoPage(event) {
    const index = event.target.dataset.index;
    this.currentArticleIndex = parseInt(index);
    this.showPage();
  }
}
