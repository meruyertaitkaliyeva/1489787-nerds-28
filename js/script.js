var feedbackLink = document.querySelector(".contacts-button");
var feedbackModal = document.querySelector(".modal-feedback");
var feedbackClose = feedbackModal.querySelector(".modal-close-button");
var feedbackForm = feedbackModal.querySelector(".feedback");
var feedbackField = feedbackModal.querySelector(".feedback-field");
var feedbackName = feedbackModal.querySelector(".feedback-name");
var feedbackEmail = feedbackModal.querySelector(".feedback-email");
var feedbackText = feedbackModal.querySelector(".feedback-textarea");
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
    storageName = localStorage.getItem("name");
    storageEmail = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackModal.classList.add("modal-show");
    if (storageName) {
        feedbackName.value = storageName;
        feedbackEmail.focus();
    } else {
        feedbackName.focus();
    }
    if (storageEmail) {
        feedbackEmail.value = storageEmail;
        feedbackText.focus();
    } else {
        feedbackName.focus();
    }
});

feedbackForm.addEventListener("submit", function (evt) {
    if (!feedbackName.value) {
        evt.preventDefault();
        feedbackName.classList.add("feedback-invalid");
    } 
    else if (!feedbackEmail.value) {
        evt.preventDefault();
        feedbackEmail.classList.add("feedback-invalid");
    } 
    else if (!feedbackText.value) {
        evt.preventDefault();
        feedbackText.classList.add("feedback-invalid");
    } 
    else {
        if (isStorageSupport) {
            localStorage.setItem("name", feedbackName.value);
            localStorage.setItem("email", feedbackEmail.value);
        }
    }
    
});

feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackModal.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (feedbackModal.classList.contains("modal-show")) {
            evt.preventDefault();
            feedbackModal.classList.remove("modal-show");
        }
    }
});
