const plusBtns = document.querySelectorAll(".fa-plus-circle")
const minusBtns = document.querySelectorAll(".fa-minus-circle")
const deleteBtns = document.querySelectorAll(".fa-trash-alt")
const heartBtns = document.querySelectorAll(".fa-heart")

function updateTotal() {
    let total = 0

    const cards = document.querySelectorAll(".card")

    cards.forEach(card => {
        const price = parseInt(card.querySelector(".unit-price").textContent)
        const quantity = parseInt(card.querySelector(".quantity").textContent)

        total += price * quantity
    })

    document.querySelector(".total").textContent = total + " $"
}

plusBtns.forEach(btn => {
    btn.addEventListener("click", function () {

        const quantity = this.nextElementSibling

        quantity.textContent = parseInt(quantity.textContent) + 1

        updateTotal();
    })
})

minusBtns.forEach(btn => {
    btn.addEventListener("click", function () {

        const quantity = this.previousElementSibling

        if (parseInt(quantity.textContent) > 0) {
            quantity.textContent = parseInt(quantity.textContent) - 1

            updateTotal()
        }

    })
})

deleteBtns.forEach(btn => {
    btn.addEventListener("click", function () {

        this.closest(".card-body").remove()

        updateTotal()

    })
})

heartBtns.forEach(btn => {
    btn.addEventListener("click", function () {

        this.classList.toggle("text-danger")

    })
})

updateTotal()