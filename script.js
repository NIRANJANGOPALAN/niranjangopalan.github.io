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

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const progress = document.getElementById('progress');
    const progressBar = document.querySelector('.progress-bar');
    const currentTimeSpan = document.getElementById('currentTime');
    const durationSpan = document.getElementById('duration');

    playPauseBtn.addEventListener('click', togglePlay);
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', setDuration);
    progressBar.addEventListener('click', seek);

    function togglePlay() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audio.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    }

    function updateProgress() {
        const percent = (audio.currentTime / audio.duration) * 100;
        progress.style.width = percent + '%';
        currentTimeSpan.textContent = formatTime(audio.currentTime);
    }

    function setDuration() {
        durationSpan.textContent = formatTime(audio.duration);
    }

    function seek(e) {
        const percent = e.offsetX / progressBar.offsetWidth;
        audio.currentTime = percent * audio.duration;
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
});


const expandBtn = document.getElementById('expandBtn');
const closeBtn = document.getElementById('closeBtn');
const musicPlayer = document.getElementById('musicPlayer');

expandBtn.addEventListener('click', () => {
    musicPlayer.classList.toggle('expanded');
    expandBtn.innerHTML = musicPlayer.classList.contains('expanded') ? 
        '<i class="fas fa-compress"></i>' : 
        '<i class="fas fa-expand"></i>';
});

