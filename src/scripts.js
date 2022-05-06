// THEME
function changeTheme(){
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    } else {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
    }
    
    document.querySelector(".dark-icon").classList.toggle("hidden");
    document.querySelector(".light-icon").classList.toggle("hidden");
}
