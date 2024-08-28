window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    var logoImage = document.getElementById("logo-image");

    if (window.scrollY > 0) {
        header.classList.add("sticky");
        logoImage.src = "logo 2.png";
    } else {
        header.classList.remove("sticky");
        logoImage.src = "logo 1.png";
    }
});
window.onload = function() {
    const importanceElement = document.getElementById("banner");
    if (importanceElement) {
        importanceElement.scrollIntoView({ behavior: "smooth" });
    }
};