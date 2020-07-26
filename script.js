console.log("Hello JS")

let button = document.getElementById('click-me')

button.addEventListener('click', function () {
    document.body.classList.toggle('rounded')
})
