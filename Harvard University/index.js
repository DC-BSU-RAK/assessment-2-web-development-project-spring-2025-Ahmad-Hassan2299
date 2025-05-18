document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      console.log('Menu toggle clicked');
      mobileMenu.style.display = mobileMenu.style.display === 'none' ? 'block' : 'none';
    });
  } else {
    console.error('Menu toggle or mobile menu element not found');
  }

  const searchToggle = document.getElementById('search-toggle');
  const searchBar = document.getElementById('search-bar');

  if (searchToggle && searchBar) {
    searchToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      searchBar.style.display = searchBar.style.display === 'none' ? 'flex' : 'none';
      if (mobileMenu) mobileMenu.style.display = 'none';
    });
  }

  const searchButton = document.getElementById('search-button');
  if (searchButton) {
    searchButton.addEventListener('click', function () {
      const input = document.getElementById('search-input').value.toLowerCase();
      let resultsContainer = document.getElementById('search-results');
      if (!resultsContainer) {
        resultsContainer = document.createElement('div');
        resultsContainer.classList.add('search-results');
        resultsContainer.id = 'search-results';
        document.body.appendChild(resultsContainer);
      }
      resultsContainer.innerHTML = '';

      const results = document.querySelectorAll('.research-item');
      let found = false;

      results.forEach(item => {
        const title = item.querySelector('h2').textContent.toLowerCase();
        const description = item.querySelector('h6').textContent.toLowerCase();
        if (title.includes(input) || description.includes(input)) {
          const result = document.createElement('div');
          result.innerHTML = `<h3>${item.querySelector('h2').textContent}</h3><p>${item.querySelector('h6').textContent}</p>`;
          resultsContainer.appendChild(result);
          found = true;
        }
      });

      if (!found) {
        resultsContainer.innerHTML = '<div class="no-results">No matching research topics found.</div>';
      }
      resultsContainer.style.display = 'block';
    });
  }

  document.addEventListener('click', function (e) {
    const searchResults = document.getElementById('search-results');
    if (searchBar && !searchBar.contains(e.target) && searchResults && !searchResults.contains(e.target)) {
      searchResults.style.display = 'none';
    }
    if (mobileMenu && !mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      mobileMenu.style.display = 'none';
    }
  });
});
