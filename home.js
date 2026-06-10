// Toggles the visibility of the search input
function toggleSearch() {
    const searchBox = document.querySelector('.search-box');
    const searchInput = document.getElementById('searchInput');

    // Add or remove the 'active' class to animate open/close
    searchBox.classList.toggle('active');

    if (searchBox.classList.contains('active')) {
        // Automatically put the typing cursor inside the input when it opens
        searchInput.focus();
    } else {
        // Clear text and show all items again when closing the search bar
        searchInput.value = '';
        filterItems();
    }
}

// Keep your existing filtering logic intact below:
function filterItems() {
    const searchInputValue = document.getElementById('searchInput').value.toLowerCase();
    const listItems = document.querySelectorAll('.search-item');

    listItems.forEach(item => {
        const textValue = item.textContent || item.innerText;
        if (textValue.toLowerCase().includes(searchInputValue)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}