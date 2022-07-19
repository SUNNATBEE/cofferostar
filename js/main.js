var elModalBtn = document.querySelector(".js-modal-btn");
var elModal = document.querySelector(".modal")
var elOpenBtn = document.querySelector(".modal-btn")
var elHiddenBtn = document.querySelector(".modal-hidden")
var elCloseModalBtn = document.querySelector(".modal-btn-info")
var elBodyModalBody = document.querySelector("body")

elOpenBtn.addEventListener("click" , function(evt){
    evt.preventDefault()
    elModalBtn.classList.add("modal-open")
    elBodyModalBody.classList.add("modal-hidden");

})
elCloseModalBtn.addEventListener("click" , function(){
    elModalBtn.classList.remove("modal-open");
    elBodyModalBody.classList.remove("modal-hidden");
})