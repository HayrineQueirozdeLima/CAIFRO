let counter = 0;

function show_menu(){
    let nav = document.getElementById("nav");
    counter++;

    if (counter%2==0){
        nav.style.display ="none";
    }else{
        nav.style.display="flex";
    }

}

function open_dropdown(){
    let dp_content = document.querySelector(".dropdown_content");

    dp_content.classList.toggle("active");
}