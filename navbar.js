const linkContainer = document.querySelector(".linkContainer");

const Pages = ["Home","About Us", "Gallery", "Holiday Packages","Contact"];
const pageLinks = ["index.html","aboutus.html","gallery.html","holidays.html","contact.html"]
for(var i = 0; i <Pages.length; i++)
{
    let link = document.createElement("a");
    link.textContent = Pages[i];
    link.classList.add("link");
    link.setAttribute("href", pageLinks[i]);
    linkContainer.append(link);
}