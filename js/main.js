document.addEventListener('DOMContentLoaded', function() {
    // Default keyword and number of images
    const defaultKeyword = 'wild west'; // Example default keyword
    const defaultNumberOfImages = 20; // Example default number of images

    // Set default values in the input fields
    document.getElementById('search_input').value = defaultKeyword;
    document.getElementById('number_input').value = defaultNumberOfImages;

    // Function to fetch GIFs
    const fetchGIFs = (keyword, numberOfGifs) => {
        const apiKey = "R4Gyd0JwudBxeXIQu6TGY0xscNYSSBrv";
        const url = `https://api.giphy.com/v1/gifs/search?q=${keyword}&limit=${numberOfGifs}&api_key=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const gifs = data.data;
                const gifContainer = document.getElementById('gif_container');
                gifContainer.innerHTML = '';
                gifs.forEach(gif => {
                    const img = document.createElement('img');
                    img.src = gif.images.fixed_height.url;
                    gifContainer.appendChild(img);
                });
            })
            .catch(error => {
                console.error('Error fetching GIFs:', error);
            });
    };

    // Fetch GIFs with default values when the page is loaded
    fetchGIFs(defaultKeyword, defaultNumberOfImages);

    // Find the submit button
    var submitButton = document.getElementById('submit_button');

    // Add event listener to the submit button
    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get the values from the form fields
        var keyword = document.getElementById('search_input').value;
        var numberOfGifs = document.getElementById('number_input').value;

        // Fetch GIFs with new values
        fetchGIFs(keyword, numberOfGifs);
    });
});


