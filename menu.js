document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button");
    const menuItems = document.querySelectorAll(".fristmenu");
    const startmenu = document.querySelector(".startmenu");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            menuItems.forEach(item => {
                if (category === "all" || item.getAttribute("data-category") === category) {
                    item.style.display = "flex"; 
                } else {
                    item.style.display = "none"; 
                }
            });
            startmenu.style.marginLeft='20rem'
            startmenu.style.justifyContent = "flex-start"; 
            startmenu.style.alignContent = "flex-start"; 
            startmenu.style.flexWrap = "wrap";
        });
    });
});
