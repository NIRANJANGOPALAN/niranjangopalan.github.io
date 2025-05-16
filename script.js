document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
});

// Skills section category interaction
document.addEventListener('DOMContentLoaded', function() {
    // Show the first category by default
    const firstCategory = document.querySelector('.category-item');
    const firstSkillCategory = document.querySelector('.skill-category');
    
    if (firstCategory && firstSkillCategory) {
        firstCategory.classList.add('active');
        firstSkillCategory.classList.add('active');
    }
    
    // Add click event to all category items
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all categories
            categoryItems.forEach(cat => cat.classList.remove('active'));
            
            // Add active class to clicked category
            this.classList.add('active');
            
            // Get the category ID
            const categoryId = this.id;
            
            // Hide all skill categories
            const skillCategories = document.querySelectorAll('.skill-category');
            skillCategories.forEach(cat => cat.classList.remove('active'));
            
            // Show the corresponding skill category
            const targetCategory = document.querySelector(`.skill-category[data-category="${categoryId}"]`);
            if (targetCategory) {
                targetCategory.classList.add('active');
            }
        });
    });
});