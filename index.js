const mobileNav = document.getElementById('mobileNav');
const menuToggleBtn = document.getElementById('menuToggleBtn');

let isToggle = false;
menuToggleBtn.addEventListener('click', () => {
    if (isToggle === false) {
        mobileNav.style.display = "block";
        isToggle = true;
    } else {
        mobileNav.style.display = "none";
        isToggle = false;
    }
});