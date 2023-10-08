const btn =document.querySelector(".title");
const add= document.querySelector(".add");
let like = `<span class="material-symbols-outlined material-symbols-outlined-fill">favorite</span>`;
let count =`<span class="material-symbols-outlined material-symbols-outlined-fill">favorite</span>`;
btn.addEventListener("click",function(e){
    count+=like;
    

    add.innerHTML = count;
});