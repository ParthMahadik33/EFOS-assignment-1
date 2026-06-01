// Simple form submission handling
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate sending (in production, you'd send to a backend)
    setTimeout(() => {
        submitBtn.textContent = 'Message sent!';
        this.reset();
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }, 500);
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Chatbase initialization (already loaded via script tag, this ensures it's available)
window.chatbase = window.chatbase || function(command) {
    const args = Array.from(arguments);
    if (!window.chatbase.q) window.chatbase.q = [];
    window.chatbase.q.push(args);
};
