const btn =document.querySelector(".title");
const add= document.querySelector(".add");
let like = `<span class="material-symbols-outlined material-symbols-outlined-fill">favorite</span>`;
let count =`<span class="material-symbols-outlined material-symbols-outlined-fill">favorite</span>`;
btn.addEventListener("click",function(e){
    count+=like;
    add.innerHTML = count;
});
const link = document.querySelector(".introo");
link.addEventListener("click",function(e){
    e.preventDefault();
});
$(document).ready(function() {
   
    
    
   
    $( ".touch" ).on( "click", function() {
    $( ".showw" ).toggle( "slow", function() {
        // Animation complete.
    });
    });
  });

// const profile = document.querySelector(".profile-text");
// profile.addEventListener("click",function(e){
//     console.log(profile);
//     console.log(e.target.nodeName);
//     if(e.target.nodeName == "SPAN"){
//         add.textContent = "點到了一個span"
//     }
// });

const myLink = document.querySelector(".mylink");
console.log(myLink);



//讀取.list的ul，跑forEach更改li的值
let recipe= [
    {
        name:"花生可可燕麥鬆餅",
        protein:20,
    },
    {
        name:"藍莓燕麥鬆餅",
        protein:10,
    },
    {
        name:"芝麻鬆餅",
        protein:20,
    },
    {
        name:"抹茶燕麥蛋糕",
        protein:10,
    },
    {
        name:"芋泥起司蛋吐司",
        protein:10,
    },
    {
        name:"肉鬆起司蛋吐司",
        protein:10,
    },
];
const list = document.querySelector(".list");
const option= document.querySelectorAll("li");
const filter = document.querySelector(".filter");

function init(){
    let str ="";
    recipe.forEach(function(item,index){
        let content=`<li>${item.name},有${item.protein}克蛋白質</li>`;
        console.log(content);
        str += content; 
    })
    list.innerHTML= str;
};
init();


//<li>xx有${item.protein}克蛋白質</li>


filter.addEventListener("click",function(e){
    
    if(e.target.value == undefined){
        console.log("點到空的地方");
        return
    };
    let recipeList="";
    recipe.forEach(function(item,index){
        if(e.target.value == item.protein){
        let content=`<li>${item.name}，${item.protein}</li>`;
        recipeList+=content
        list.innerHTML = recipeList
    }else if(e.target.value == "all"){
        recipeList += `<li>${item.name}，${item.protein}</li>`;
        list.innerHTML = recipeList

    }
    })
     
});
const recipeName = document.querySelector(".recipeName");
const recipeProtein = document.querySelector(".recipeProtein");
const recipeBtn = document.querySelector(".recipeBtn");
console.log(recipeName);
console.log(recipeProtein);
console.log(recipeBtn);
recipeBtn.addEventListener("click",function(e){
    let recipeObj ={};
    recipeObj.name=recipeName.value;
    recipeObj.protein=recipeProtein.value;

    recipe.push(recipeObj);
    console.log(recipe);
    init();
});

// {
//     name:"肉鬆起司蛋吐司",
//     protein:10,
// },


  









