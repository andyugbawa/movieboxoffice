const imageFolder = document.querySelectorAll(".image-item");
const preBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("for-btn");
const menuFile = document.getElementById("menu-list");
const menuBar  = document.querySelector(".fa-bars");
const upcomingFile = document.getElementById("upcoming");
const topDirect = document.getElementById("top")

menuBar.addEventListener("click",menuAction);

menuFile.style.maxWidth="0px";

function menuAction(){
    if(menuFile.style.maxWidth == "0px"){
        menuFile.style.maxWidth = "100%"
    }else{
        menuFile.style.maxWidth = "0px"
    }
    if(menuBar.classList.contains("fa-bars")){
        menuBar.classList.replace("fa-bars","fa-x")
    }else{
        menuBar.classList.replace("fa-x","fa-bars")
    }
}



preBtn.addEventListener("click",preAction);
nextBtn.addEventListener("click",forAction);
upcomingFile.addEventListener("click",upcomeAction);
topDirect.addEventListener("click",topTrigger)



let imageIndex = 2;
let flowImage = imageFolder.length;

let coupleShow = [
    "image-item-1",
    "image-item-2",
    "image-item-3",
    "image-item-4",
    "image-item-5",
]



function carryImage(){
    imageFolder.forEach((item,index)=>{
        const pull =(index-imageIndex+flowImage)%flowImage;
        item.className = `image-item ${coupleShow[pull]}`
    })
}

function preAction(){
    imageIndex = (imageIndex-1+flowImage)%flowImage;
    carryImage();
    updateLargeImage();
    rotate()
    
}

function forAction(){
    imageIndex =(imageIndex+1)%flowImage;
    carryImage();
    updateLargeImage();
    rotate()

}
carryImage();

// Function to update the large image based on the current imageIndex
// line 73  // Update the large image source
// Line 79 // Update the imageIndex when an image is clicked
// line 81 // Update the large image source


function updateLargeImage() {
    const largeImage = document.querySelector(".large-item");
    largeImage.src = imageFolder[imageIndex].src; 
}

function rotate() {
    imageFolder.forEach((image, index) => {
        image.addEventListener("click", () => {
            imageIndex = index; 
            updateLargeImage();  
        });
    });
}

rotate();

function upcomeAction(){
    window.location.href = "./upcomingpage.html"
}
 
function topTrigger(){
     window.location.href = "./toppage.html"
}










