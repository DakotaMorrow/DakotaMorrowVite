//calc(var(--vh, 1vh) * 100);

let elementPageLanding;
let elementPageAbout;
let currentPageId = "pageLanding";

window.onload = function() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    elementPageLanding = document.getElementById(pageLanding);
    elementPageAbout = document.getElementById(pageAbout);
    let allPages = document.getElementsByClassName("page");
    console.log(allPages);
    console.log("Inner  " + window.innerHeight);
    console.log("Client " + window.clientHeight);
    console.log(vh);

    window.addEventListener("resize", () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
        console.log("Inner  " + window.innerHeight);
        console.log("Client " + window.clientHeight);
        console.log(vh);
    });

    setTimeout(showReturnMessage, 5000);
    setTimeout(hideReturnMessage, 8000);
};

function clickDesktopMenu(pageId, sectionId) {

    let allPages = document.getElementsByClassName("page");
    for (page = 0; page < allPages.length; page = page + 1) {
        console.log(page, allPages[page]);
        allPages[page].style.display = "none";
    }
    let newPage = document.getElementById(pageId);
    newPage.style.display = "block";

    if (sectionId != '') document.getElementById(sectionId).scrollIntoView();

    window.scrollBy(0, -60);

}

function clickMobileMenuItem(pageId, sectionId) {

    let allPages = document.getElementsByClassName("page");
    for (page = 0; page < allPages.length; page = page + 1) {

        allPages[page].style.display = "none";
    }

    let newPage = document.getElementById(pageId);

    newPage.style.display = "block";

    if (sectionId != '' && sectionId != null) {
        // document.getElementById(sectionId).scrollIntoView();
        let section = document.getElementById(sectionId);
        section.scrollIntoView();
    }

    hideMobileMenu();
}

function clickMobileMenuItemPage(page) {
    location.href = page;
    hideMobileMenu();
}

function menuHamburgerClick() {
    showMobileMenu();
}

function menuXClick() {
    hideMobileMenu();
}

function hideMobileMenu() {
    var r = document.querySelector(":root");
    var rs = getComputedStyle(r);
    var orange = rs.getPropertyValue("--orange");

    menuElement = document.getElementById("menuMobileScreenID");
    hamburgerMenuElement = document.getElementById("hamburgerMenuID");
    xMenuElement = document.getElementById("xMenuID");
    menuElement.classList.add("menuMobileScreenMakeInvisible");
    menuElement.classList.remove("menuMobileScreenMakeVisible");
    hamburgerMenuElement.style.color = "white";
    xMenuElement.style.color = "transparent";
    hamburgerMenuElement.style.zIndex = "100";
    xMenuElement.style.zIndex = "99";
}

function showMobileMenu() {
    var r = document.querySelector(":root");
    var rs = getComputedStyle(r);
    var orange = rs.getPropertyValue("--orange");

    menuElement = document.getElementById("menuMobileScreenID");
    hamburgerMenuElement = document.getElementById("hamburgerMenuID");
    xMenuElement = document.getElementById("xMenuID");
    menuElement.classList.add("menuMobileScreenMakeVisible");
    menuElement.classList.remove("menuMobileScreenMakeInvisible");
    hamburgerMenuElement.style.color = "transparent";
    xMenuElement.style.color = orange;
    hamburgerMenuElement.style.zIndex = "99";
    xMenuElement.style.zIndex = "100";
}