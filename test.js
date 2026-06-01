function filterSearch() {
    // 1. Get the text entered by the user
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    
    // 2. Grab all the list items
    const items = document.querySelectorAll('.searchable-item');

    // 3. Loop through each item and check if it matches the query
    items.forEach(item => {
        const textValue = item.textContent.toLowerCase();
        
        if (textValue.includes(searchInput)) {
            item.style.display = ""; // Show matching item
        } else {
            item.style.display = "none"; // Hide non-matching item
        }
    });
}
