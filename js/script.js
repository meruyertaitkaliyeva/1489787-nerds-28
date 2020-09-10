var feedbackLink = document.querySelector(".contacts-button");
var feedbackModal = document.querySelector(".modal-feedback");
var feedbackClose = feedbackModal.querySelector(".modal-close-button");
var feedbackForm = feedbackModal.querySelector(".feedback");
var feedbackName = feedbackModal.querySelector(".feedback-name");
var feedbackEmail = feedbackModal.querySelector(".feedback-email");
var feedbackText = feedbackModal.querySelector(".feedback-textarea");
var firstSlide = document.querySelector(".first-slide");
var secondSlide = document.querySelector(".second-slide");
var thirdSlide = document.querySelector(".third-slide");
var firstControl = document.querySelector(".first-control");
var secondControl = document.querySelector(".second-control");
var thirdControl = document.querySelector(".third-control");
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

firstControl.addEventListener("click", function (evt) {
  evt.preventDefault();
  secondControl.classList.remove("control-current");
  thirdControl.classList.remove("control-current");
  firstControl.classList.add("control-current");
  secondSlide.classList.remove(".slider-current");
  thirdSlide.classList.remove(".slider-current");
  firstSlide.classList.add(".slider-current");
})

secondControl.addEventListener("click", function (evt) {
  evt.preventDefault();
  thirdControl.classList.remove("control-current");
  firstControl.classList.remove("control-current");
  secondControl.classList.add("control-current");
  thirdSlide.classList.remove(".slider-current");
  firstSlide.classList.remove(".slider-current");
  secondSlide.classList.add(".slider-current");
})

thirdControl.addEventListener("click", function (evt) {
  evt.preventDefault();
  firstControl.classList.remove("control-current");
  secondControl.classList.remove("control-current");
  thirdControl.classList.add("control-current");
  firstSlide.classList.remove(".slider-current");
  secondSlide.classList.remove(".slider-current");
  thirdSlide.classList.add(".slider-current");
})

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
    }
    if (storageEmail) {
        feedbackEmail.value = storageEmail;
        feedbackText.focus();
    } else {
        feedbackName.focus();
    }
});

feedbackForm.addEventListener("submit", function (evt) {
    if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
        evt.preventDefault();
        feedbackModal.classList.remove("modal-error");
        feedbackModal.offsetWidth = feedbackModal.offsetWidth;
        feedbackModal.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", feedbackName.value);
            localStorage.setItem("email", feedbackEmail.value);
        }
    }
});

feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackModal.classList.remove("modal-show");
    feedbackModal.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (feedbackModal.classList.contains("modal-show")) {
            evt.preventDefault();
            feedbackModal.classList.remove("modal-show");
            feedbackModal.classList.remove("modal-error");
        }
    }
});
