function scrollRow(gridId, amount) {
    const grid = document.getElementById(gridId);
    if (grid) {
        grid.scrollBy({
            left: amount,
            behavior: "smooth"
        });
    }
}

function filterPlatform(platform, clickedBtn) {
    const sections = document.querySelectorAll(".platform-section");
    const buttons = document.querySelectorAll(".plat-btn");

    buttons.forEach(btn => btn.classList.remove("active"));
    if (clickedBtn) {
        clickedBtn.classList.add("active");
    }

    sections.forEach(sec => {
        if (platform === "all" || sec.getAttribute("data-platform") === platform) {
            sec.style.display = "block";
        } else {
            sec.style.display = "none";
        }
    });
}