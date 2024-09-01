// Adding a click event listener to the rating buttons and saving the selected rating to local storage
document.querySelectorAll(".rating-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        localStorage.setItem("selected", e.target.textContent);
    });
});

// Displaying the selected rating on the thank you page by getting the selected rating from local storage
document.addEventListener("DOMContentLoaded", () => {
    const selectedRating = localStorage.getItem("selected");
    document.querySelector(
        ".selected"
    ).textContent = `You selected ${selectedRating} out of 5`;
});
