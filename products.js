'use strict';

function my_initiation() {
    const buttonShowWindow = document.getElementById("show");
    const wrapper = document.querySelector(".wrapper");

    buttonShowWindow.addEventListener('click', function() {
        let windowIsHidden = wrapper.classList.contains("hidden");
        if (windowIsHidden) {
            wrapper.classList.remove("slit-out-vertical");
            wrapper.classList.add("slit-in-vertical");
            wrapper.classList.toggle("hidden");
            buttonShowWindow.textContent = "Hide window";
        } else {
            wrapper.classList.remove("slit-in-vertical");
            wrapper.classList.add("slit-out-vertical");
            wrapper.classList.toggle("hidden");
            buttonShowWindow.textContent = "Show window";
        }

    });

    const buttons = wrapper.querySelectorAll("button");
    buttons.forEach(function(button) {
        button.addEventListener('click', buttonClickHandler);
    });

    function buttonClickHandler(event) {
        let element = event.target;
        let elemParent = event.target.parentNode;
        let spanDescr = elemParent.querySelector(".productCardDescription");
        let imgCard = elemParent.querySelector("img");
        if (element.textContent.trim() == "Details") {
            spanDescr.setAttribute("style", "display: block");
            imgCard.setAttribute("style", "display: none");
            element.textContent = "Cancel";

        } else {
            imgCard.setAttribute("style", "display: display: block");
            spanDescr.setAttribute("style", "display: none");
            element.textContent = "Details";
        }

    }

}
Window.onload = my_initiation;
my_initiation();