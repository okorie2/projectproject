//dropdown links for "About"
const navbar= document.getElementById('navbar');
const navlink= document.getElementById("navbar-links");
const newlist = document.createElement("li");
const anchor= document.createElement("a");
const link = document.createTextNode("about us");
addlink= ()=>{
  anchor.appendChild(link);
  anchor.title = "about us";
  anchor.href = "/about pages/about";
  anchor.className= "navbar-link";
  anchor.style.paddingLeft="2rem";
  newlist.appendChild(anchor);
  navlink.appendChild(newlist);
};
const link2 = document.createTextNode("partners");
const newlist2 = document.createElement("li");
const anchor2= document.createElement("a");
addlink2=()=>{
  anchor2.appendChild(link2);
  anchor2.title="partners";
  anchor2.href="#";
  anchor2.className= "navbar-link";
  anchor2.style.paddingLeft="2rem";
  newlist2.appendChild(anchor2);
  newlist.appendChild(newlist2);
}
removeLink= ()=>{
  anchor.classList.remove("navbar-link")
  newlist.innerHTML=""


}

let navlinkclick = navbar.querySelector("#navbar-links");
navlinkclick.addEventListener("click",()=>{
  if(anchor.classList.contains("navbar-link")){
    removeLink();
  }else {
    addlink()
    addlink2()
  }

});
//dropdown links for "our work" linnk
const navlink2= document.getElementById("navbar-links2");
const worklist = document.createElement("li");
const workAnchor= document.createElement("a");
const Worklink = document.createTextNode("project");
addWorkLink= ()=>{
  workAnchor.appendChild(link);
  workAnchor.title = "project";
  workAnchor.href = "#";
  workAnchor.className= "navbar-link";
  workAnchor.style.paddingLeft="2rem";
  worklist.appendChild(workAnchor);
  navlink2.appendChild(worklist);
};
removeWorkLink= ()=>{
  workAnchor.classList.remove("navbar-link")
  worklist.innerHTML=""
}
let worklinkclick = navbar.querySelector("#navbar-links2");
worklinkclick.addEventListener("click",()=>{
  if(workAnchor.classList.contains("navbar-link")){
    removeWorkLink();
  }else {
    addWorkLink();
    
    
  }

});
