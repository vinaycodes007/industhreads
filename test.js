const filterDropdown = document.getElementById('categoryFilter');
const items = document.querySelectorAll('.item');

// Listen for dropdown changes
filterDropdown.addEventListener('change', function() {
  const selectedValue = this.value;

  items.forEach(item => {
    // If "Show All" is selected, or the item matches the selection, show it
    if (selectedValue === 'all' || item.getAttribute('data-category') === selectedValue) {
      item.classList.remove('hidden');
    } else {
      // Otherwise, hide the item
      item.classList.add('hidden');
    }
  });
});