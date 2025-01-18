const themeBtn = document.getElementById('changeThemeBtn');
const cssLink = document.getElementById('theme');

themeBtn.addEventListener("click", () =>{
    const currentTheme = cssLink.getAttribute('href');
    const currentIcon = themeBtn.getAttribute('class');
    const newTheme = currentTheme === 'src/styles/main-light.css' ? 'src/styles/main.css' : 'src/styles/main-light.css';
    const iconMoon = currentIcon === 'bx bxs-moon' ? 'bx bxs-sun' : 'bx bxs-moon'
    cssLink.setAttribute('href', newTheme)
    themeBtn.setAttribute('class', iconMoon) 
    localStorage.setItem('theme', newTheme)
    localStorage.setItem('icon', iconMoon)
})

window.addEventListener('load', () => {
    const saveTheme = localStorage.getItem('theme') || 'styles/main.css'
    const icon = localStorage.getItem('icon') || 'bx bxs-sun'
    cssLink.setAttribute('href', saveTheme);
    themeBtn.setAttribute('class', icon);
})