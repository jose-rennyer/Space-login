function abrirmenu(){
    let menu2 = document.querySelector(".menu2")
    
    if(menu2.classList.contains("menuaberto")){
        menu2.classList.remove("menuaberto")
    } else {
        menu2.classList.add("menuaberto")
    }
}