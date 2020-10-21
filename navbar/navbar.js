

const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelector(".navbar-toggle");

function openMobileNavbar() {
  navbar.classList.add("opened");
  navbarToggle.setAttribute("aria-label", "Close navigation menu.");
}

function closeMobileNavbar() {
  navbar.classList.remove("opened");
  navbarToggle.setAttribute("aria-label", "Open navigation menu.");
}

navbarToggle.addEventListener("click", () => {
  if (navbar.classList.contains("opened")) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});
const navbarMenu = navbar.querySelector(".navbar-menu");
const navbarLinksContainer = navbar.querySelector(".navbar-links");

navbarLinksContainer.addEventListener("click", (clickEvent) => {
  clickEvent.stopPropagation();
});

navbarMenu.addEventListener("click", closeMobileNavbar);

const navlink= document.getElementById("navbar-links");
const newlink = document.createElement("li");
const anchor= document.createElement("a");
const link = document.createTextNode("gallery");
addlink= ()=>{
  anchor.appendChild(link);
  anchor.title = "gallery";
  anchor.href = "#";
  anchor.className= "navbar-link";
  newlink.appendChild(anchor);
  navlink.appendChild(newlink);
};
removeLink= ()=>{
  anchor.classList.remove("navbar-link")
  newlink.innerHTML=""


}

let navlinkclick = navbar.querySelector("#navbar-links");
navlinkclick.addEventListener("click",()=>{
  if(anchor.classList.contains("navbar-link")){
    removeLink();
  }else{
    addlink()
  }

});