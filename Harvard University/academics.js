document.getElementById('search-toggle').addEventListener('click', function () {
  const searchBar = document.getElementById('search-bar');
  searchBar.style.display = searchBar.style.display === 'none' ? 'flex' : 'none';
});


document.getElementById('menu-toggle').addEventListener('click', function () {
  const menu = document.getElementById('mobile-menu');
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
});


document.getElementById('search-button').addEventListener('click', function () {
  const input = document.getElementById('search-input').value.toLowerCase();
  const resultsContainer = document.getElementById('search-results');
  if (!resultsContainer) {
    const div = document.createElement('div');
    div.classList.add('search-results');
    div.id = 'search-results';
    document.body.appendChild(div);
  }
  const results = document.querySelectorAll('.research-item');
  let found = false;

  document.getElementById('search-results').innerHTML = '';

  results.forEach(item => {
    const title = item.querySelector('h2').textContent.toLowerCase();
    const description = item.querySelector('h6').textContent.toLowerCase();
    if (title.includes(input) || description.includes(input)) {
      const result = document.createElement('div');
      result.innerHTML = `<h3>${item.querySelector('h2').textContent}</h3><p>${item.querySelector('h6').textContent}</p>`;
      document.getElementById('search-results').appendChild(result);
      found = true;
    }
  });

  if (!found) {
    document.getElementById('search-results').innerHTML = '<div class="no-results">No matching research topics found.</div>';
  }
  document.getElementById('search-results').style.display = 'block';
});

document.addEventListener('click', function (e) {
  const searchBar = document.getElementById('search-bar');
  const searchResults = document.getElementById('search-results');
  if (!searchBar.contains(e.target) && searchResults && !searchResults.contains(e.target)) {
    if (searchResults) searchResults.style.display = 'none';
  }
});