// Dummy search functionality
const searchBar = document.getElementById("destinationSearch");

searchBar.addEventListener("input", function () {
  const query = searchBar.value.toLowerCase();
  if (query.length > 0) {
    // Here, you would normally send an API request or filter results based on the query.
    console.log(`Searching for: ${query}`);
    // For now, we're just logging the input.
  }
});
