// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page refresh

        const from = document.getElementById('fromCity').value;
        const to = document.getElementById('toCity').value;
        const date = document.getElementById('travelDate').value;

        console.log(`Searching for buses from ${from} to ${to} on ${date}`);
        
        // Step 2 logic: Redirect to results page
        // window.location.href = `search-results.html?from=${from}&to=${to}&date=${date}`;
        alert("Search triggered! Moving to results...");
    });
});
