window.addEventListener("DOMContentLoaded", () => {
    let userRating = null
    const ratingsContainer = document.querySelector(".rating")
    const submitBtn = document.querySelector(".btn-submit")

    ratingsContainer.addEventListener("click", event => {
        Array.from(ratingsContainer.children).forEach(element => {
            element.classList.remove('selected')
        });
        userRating = Number(event.target.dataset.value)
        event.target.classList.toggle("selected")
    })
    // console.log(ratingsContainer.querySelectorAll("button"))
//    ratingsContainer.children.forEach(el => {
//     el.addEventListener("mouseenter", (e) => {
//         console.log(e.target)
//     })
//    })

    submitBtn.addEventListener("click", () => {
        if (!userRating) return
        const parent = submitBtn.closest(".card")
        const siblingParent = parent.nextElementSibling
        parent.classList.add("hide")
        parent.style.display = "none"
        siblingParent.classList.remove('hide')
        siblingParent.querySelector(".rating-number").textContent = userRating
    })
})