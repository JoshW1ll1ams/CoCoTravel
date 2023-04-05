const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");



const images = ["/galleryImages/gallery1.jpg",
                "/galleryImages/gallery2.jpg",
                "/galleryImages/gallery3.jpg",
                "/galleryImages/gallery4.jpg",
                "/galleryImages/gallery5.jpg",
                "/galleryImages/gallery6.jpg",
                "/galleryImages/gallery7.jpg",
                "/galleryImages/gallery8.jpg",
                "/galleryImages/gallery9.jpg",
                "/galleryImages/gallery10.jpg",
                "/galleryImages/gallery11.jpg",
                "/galleryImages/gallery12.jpg",
                "/galleryImages/gallery13.jpg",
                "/galleryImages/gallery14.jpg",
                "/galleryImages/gallery15.jpg",
                "/galleryImages/gallery16.jpg",
                "/galleryImages/gallery17.jpg",
                ];

let counter =  Math.round((images.length/2)-2);
img1.setAttribute("src",images[counter])
img2.setAttribute("src",images[counter+1])
img3.setAttribute("src",images[counter+2])
img4.setAttribute("src",images[counter+3])

let movingRight = false;
let movingLeft = false;



img1.addEventListener("mouseover", function() 
    {
    movingLeft = true;
    img1.style.opacity = 0.5;
    });
img1.addEventListener("mouseout", function() {
    movingLeft = false;
    img1.style.opacity = 1;
    });

img4.addEventListener("mouseover", function() 
    {
    movingRight = true;
    img4.style.opacity = 0.5;
    });
img4.addEventListener("mouseout", function() {
    movingRight = false;
    img4.style.opacity = 1;
    });

function checkCounter()
{
    if(movingRight == true && counter < (images.length-4))
    {
        counter ++;
    }
    if(movingLeft == true && counter > 0)
    {
        counter --;
    }
}


function shiftImages()
{
    checkCounter();

    if (window.innerWidth >= 600) 
    {
        img1.setAttribute("src",images[counter])
        img2.setAttribute("src",images[counter+1])
        img3.setAttribute("src",images[counter+2])
        img4.setAttribute("src",images[counter+3])
    }
    if (window.innerWidth <= 600 && counter < images.length-1) 
    {
        counter++;
        if(counter == images.length-1) counter = 0;
        img2.setAttribute("src",images[counter])
    }

}


setInterval(shiftImages, 2000);
  
