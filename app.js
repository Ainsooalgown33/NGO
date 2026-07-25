// app.js
document.addEventListener("DOMContentLoaded", () => {
    // Select all elements that have animation classes
    const animatedElements = document.querySelectorAll('.animate-up, .animate-fade');

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'show' class to trigger the CSS transition
                entry.target.classList.add('show');
                // Optional: Stop observing once animated
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px" 
    });

    // Observe each element
    animatedElements.forEach(el => observer.observe(el));
});