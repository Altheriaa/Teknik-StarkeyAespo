
// Sejarah, timeline
document.addEventListener("DOMContentLoaded", function() {
    const timelineItems = document.querySelectorAll('.timeline-row');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    timelineItems.forEach(item => {
        observer.observe(item);
    });
});
//end Sejarah, timeline

// e-learning.php
 // Script untuk menangani navigasi e-learning
 document.querySelectorAll('.elearning-sidebar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.elearning-content > div').forEach(div => {
            div.style.display = 'none';
        });
        document.querySelector(this.getAttribute('href')).style.display = 'block';
        document.querySelectorAll('.elearning-sidebar a').forEach(a => a.classList.remove('elearning-active'));
        this.classList.add('elearning-active');
    });
});
// end e-learning.php




