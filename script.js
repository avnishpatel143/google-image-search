document.getElementById('searchBtn').addEventListener('click', function() {
    var searchQuery = document.getElementById('searchQuery').value.trim();
    if (searchQuery !== '') {
        searchImages(searchQuery);
    }
});

function searchImages(query) {
    var apiKey = 'AIzaSyAs79KlAyjj_DOWsRaEzx_rKCYgKwm2klc';
    var cx = 'c6338a2d8fac74479';
    var url = 'https://www.googleapis.com/customsearch/v1?q=' + query + '&cx=' + cx + '&searchType=image&key=' + apiKey;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayImages(data.items);
        })
        .catch(error => console.error('Error fetching images:', error));
}

function displayImages(images) {
    var imageResults = document.getElementById('imageResults');
    imageResults.innerHTML = '';

    var indicesToDisplay = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    indicesToDisplay.forEach(index => {
        if (index < images.length) {
            var image = images[index];
            var imgContainer = document.createElement('div');
            imgContainer.classList.add('image');

            var img = document.createElement('img');
            img.src = image.link;

            var title = document.createElement('p');
            title.textContent = image.title;

            imgContainer.appendChild(img);
            imgContainer.appendChild(title);
            imageResults.appendChild(imgContainer);
        }
    });
}
