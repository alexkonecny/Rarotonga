document.querySelector("#popup-open-btn").addEventListener("click" ,function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .popup-close-btn").addEventListener("click" ,function(){
    document.querySelector(".popup").classList.remove("active");
});