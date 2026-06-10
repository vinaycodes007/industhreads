document.addEventListener("DOMContentLoaded", () => {
    const categoryFilter = document.getElementById("categoryFilter");
    
    if(categoryFilter) {
        categoryFilter.addEventListener("change", (e) => {
            const selectedCategory = e.target.value;
            const productCards = document.querySelectorAll(".filter-item");

            productCards.forEach(card => {
                if (selectedCategory === "all" || card.classList.contains(selectedCategory)) {
                    card.style.display = "flex"; // Restores card layout structure safely
                } else {
                    card.style.display = "none"; // Eliminates unmatched cards from layout view
                }
            });
        });
    }
});

// Connected Search Logic Filter mapping back to user inputs
function filtersearch() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const productCards = document.querySelectorAll(".filter-item");
    const categoryValue = document.getElementById("categoryFilter").value;

    productCards.forEach(card => {
        const productName = card.querySelector(".product-name").textContent.toLowerCase();
        const matchesSearch = productName.includes(query);
        const matchesCategory = categoryValue === "all" || card.classList.contains(categoryValue);

        // Grid cards only show when matching both categories and search strings
        if (matchesSearch && matchesCategory) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}

function toggleSearch() {
    const searchBox = document.querySelector('.search-box');
    searchBox.classList.toggle('active');
}
