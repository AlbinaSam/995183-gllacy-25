var link = document.querySelector(".address-card-button");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector(".feedback-form");
var firstField = popup.querySelector("[name=name]");
var secondField = popup.querySelector("[name=email]");
var storage = localStorage.getItem("firstField");
var isStorageSupport = true;
var storage = "";
var overlay = document.querySelector(".feedback-overlay");

try {
    storage = localStorage.getItem("firstField");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("overlay-show");

    if (storage) {
        firstField.value = storage;
        secondField.focus();
    } else {
        firstField.focus();
    }
});


close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("overlay-show");
});

form.addEventListener("submit", function (evt) {
    if (!firstField.value || !secondField.value) {
        evt.preventDefault();
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("firstField", firstField.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
    }
});