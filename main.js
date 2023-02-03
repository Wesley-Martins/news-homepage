const links = document.querySelectorAll(".link");
const sidebar = document.querySelector(".sidebar");
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");

// verifica se o mouse esta em cima do elemento e aumenta o width do ::after dele
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.setProperty('--after-width', '100%');
    })
})

links.forEach(link => {
    link.addEventListener('mouseleave', () => {
        link.style.setProperty('--after-width', '0');
    })
})

// esconde e mostra a sidebar 
openIcon.addEventListener("click", () => {
    sidebar.style.setProperty("right", "0");
})

closeIcon.addEventListener("click", () => {
    sidebar.style.setProperty("right", "-230px");
});
