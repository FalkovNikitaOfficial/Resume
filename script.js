// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Display last updated date automatically
const lastUpdatedElement = document.getElementById('last-updated');
const lastModified = new Date(document.lastModified);
lastUpdatedElement.textContent = `Last updated: ${lastModified.toLocaleDateString()} at ${lastModified.toLocaleTimeString()}`;