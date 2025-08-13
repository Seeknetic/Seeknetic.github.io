function setLanguage(lang) {
    // Hide all content divs
    const allContent = document.querySelectorAll('.content');
    allContent.forEach(content => {
        content.style.display = 'none';
    });
    
    // Show the selected language content
    const selectedContent = document.querySelector(`[data-lang="${lang}"]`);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
    
    // Update active language button
    const allButtons = document.querySelectorAll('.lang-btn');
    allButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    event.target.classList.add('active');
    
    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Load preferred language on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    
    // Find and activate the correct button
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if ((savedLang === 'en' && btn.textContent === 'EN') ||
            (savedLang === 'zh-tw' && btn.textContent === '繁') ||
            (savedLang === 'zh-cn' && btn.textContent === '简')) {
            btn.classList.add('active');
        }
    });
    
    // Show the correct content
    const allContent = document.querySelectorAll('.content');
    allContent.forEach(content => {
        content.style.display = 'none';
    });
    
    const selectedContent = document.querySelector(`[data-lang="${savedLang}"]`);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
});