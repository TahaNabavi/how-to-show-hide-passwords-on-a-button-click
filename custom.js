$(document).on('click', '.input button', function () {
    const btn = document.querySelector(".input span");
    btn.classList.toggle("active");

    const btn1 = document.querySelector(".input button");
    btn1.classList.toggle("show");

    const input = document.querySelector(".input input");
    if (input.type === "password") {
        document.querySelector(".input input").type = "text";
    }
    else {
        document.querySelector(".input input").type = "password";
    }
})