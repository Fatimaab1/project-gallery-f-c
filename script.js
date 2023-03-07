let noOfChar = 150;
let contents = document.querySelectorAll(".content");

contents.forEach(content => {
    if (content.textContent.length < noOfChar) {
        content.nextElementSibling.getElementsByClassName.style.display = "none";
    } else {
        let displayText = content.textContent.slice(0, noOfChar);
        let moreText = content.textContent.slice(noOfChar);
        content.innerHTML = `${displayText} <span class="dots">...</span> <span class="hide more">${moreText}</span>`
    }
});

function readMore(btn) {
    let cardbody = btn.parentElement;
    cardbody.querySelector(".dots").classList.toggle("hide");
    cardbody.querySelector(".more").classList.toggle("hide");
    btn.textContent == "Read More" ? btn.textContent = "Read Less" : btn.textContent = "Read More";
}