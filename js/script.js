document.addEventListener('DOMContentLoaded', () => {
    
    // --- Preloader Animation ---
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        
        // Start zoom animation after a short delay
        setTimeout(() => {
            preloader.classList.add('zoom-out-start');
            
            // Hide preloader container completely after animation
            setTimeout(() => {
                preloader.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
            }, 1000); 
            
        }, 800); 
    });
    
    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const logoText = document.getElementById('nav-logo');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white', 'shadow-md');
            navbar.classList.remove('bg-transparent', 'py-4');
            // Change text colors to dark for light background
            navLinks.forEach(link => link.classList.replace('text-gray-100', 'text-gray-800'));
            logoText.classList.replace('text-white', 'text-brand-dark');
        } else {
            navbar.classList.remove('bg-white', 'shadow-md');
            navbar.classList.add('bg-transparent');
            // Revert text colors
            navLinks.forEach(link => link.classList.replace('text-gray-800', 'text-gray-100'));
            logoText.classList.replace('text-brand-dark', 'text-white');
        }
    });

    // --- Mobile Menu Toggle ---
    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Close mobile menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });

    // --- Scroll Reveal Animation ---
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;
        
        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on load
    revealOnScroll();

    // --- Menu Tabs Logic ---
    const tabs = document.querySelectorAll('.menu-tab');
    const contents = document.querySelectorAll('.menu-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active styles from all tabs
            tabs.forEach(t => {
                t.classList.remove('bg-brand-dark', 'text-white');
                t.classList.add('bg-white', 'text-gray-600');
            });
            
            // Hide all content
            contents.forEach(c => c.classList.add('hidden'));

            // Add active style to clicked tab
            tab.classList.remove('bg-white', 'text-gray-600');
            tab.classList.add('bg-brand-dark', 'text-white');

            // Show target content
            const targetId = tab.getAttribute('data-target');
            document.getElementById(targetId).classList.remove('hidden');
        });
    });
});

// --- Form Submission Handler ---
function showSuccessMessage() {
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('success-msg');
    const btn = form.querySelector('button[type="submit"]');
    
    // Change button state
    const originalText = btn.innerHTML;
    btn.innerHTML = 'Memproses...';
    btn.disabled = true;
    btn.classList.add('opacity-75');

    // Simulate API call/processing time
    setTimeout(() => {
        form.reset();
        btn.innerHTML = originalText;
        btn.disabled = false;
        btn.classList.remove('opacity-75');
        
        // Show message
        successMsg.classList.remove('hidden');
        
        // Hide message after 5 seconds
        setTimeout(() => {
            successMsg.classList.add('hidden');
        }, 5000);
    }, 1000);
}
