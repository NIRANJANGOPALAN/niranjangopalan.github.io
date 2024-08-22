document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.getElementById('name');
    const rolesElement = document.getElementById('roles');
    const name = 'Niranjan Gopalan';
    const roles = ['Software Engineer', 'Consultant', 'Data Analyst', 'Full-Stack Developer'];

    // Typing effect for name
    let i = 0;
    const typeWriter = () => {
        if (i < name.length) {
            nameElement.innerHTML += name.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(typeRoles, 1000);
        }
    };

    // Typing effect for roles
    let j = 0;
    let currentRole = 0;
    const typeRoles = () => {
        if (j < roles[currentRole].length) {
            rolesElement.innerHTML += roles[currentRole].charAt(j);
            j++;
            setTimeout(typeRoles, 100);
        } else {
            setTimeout(() => {
                eraseRole();
            }, 1000);
        }
    };

    const eraseRole = () => {
        if (rolesElement.innerHTML.length > 0) {
            rolesElement.innerHTML = rolesElement.innerHTML.slice(0, -1);
            setTimeout(eraseRole, 50);
        } else {
            currentRole = (currentRole + 1) % roles.length;
            j = 0;
            setTimeout(typeRoles, 500);
        }
    };

    typeWriter();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const menuItems = document.querySelectorAll('nav ul li a'); // Select all menu items

    // Toggle the navigation menu when the menu toggle button is clicked
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Close the menu when a menu item is clicked
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            nav.classList.remove('active'); // Remove the active class to hide the menu
        });
    });
});