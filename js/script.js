var feedbackLink = document.querySelector(".contacts-button");
var feedbackModal = document.querySelector(".modal-feedback");
var feedbackClose = feedbackModal.querySelector(".modal-close-button");
var feedbackForm = feedbackModal.querySelector(".feedback");
var feedbackField = feedbackModal.querySelector(".feedback-field");
var feedbackName = feedbackModal.querySelector(".feedback-name");
var feedbackEmail = feedbackModal.querySelector(".feedback-email");
var feedbackText = feedbackModal.querySelector(".feedback-textarea");
var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("name");
} catch (err) {
    isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackModal.classList.add("modal-show");
    if (storage) {
        feedbackName.value = storage;
        feedbackEmail.focus();
    } if (storage) {
        feedbackEmail.value = storage;
        feedbackText.focus();
    }
    else {
        feedbackName.focus();
    }
});

feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackModal.classList.remove("modal-show");
});

feedbackForm.addEventListener("submit", function (evt) {
    if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
        evt.preventDefault();
        feedbackField.classList.add("feedback-invalid");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", feedbackName.value);
            localStorage.setItem("email", feedbackEmail.value);
        }
    }
    
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (feedbackModal.classList.contains("modal-show")) {
            evt.preventDefault();
            feedbackModal.classList.remove("modal-show");
            feedbackModal.classList.remove("feedback-invalid");
        }
    }
});
