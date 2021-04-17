// local reviews data
const reviews=[
{

  id:1,
  name:"susan smith",
  job:"web developer",
  img:"https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
  text:"there will be attention in my class.if you will fail in exam then if your mother and father are come then i am not going to pass you playing slide guitar at an early age in juke joints and on the streetjuke joints and on the streetuke joints and on the street.."

},
{

  id:2,
  name:"jhony sens",
  job:"web designer",
  img:"https://images.unsplash.com/photo-1616596360470-ee341c2d00ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  text:"wilShines was born in the community of Frayser, in Memphis, Tennessee.[1] He was taught to play the guitar by his mother and spent most of his childhood in Memphis, playing slide guitar at an early age in juke joints and on the street. "

},
{

  id:3,
  name:"Designer salman",
  job:"Ui Ux designer",
  img:"https://images.unsplash.com/photo-1594999791384-9870ed78f6b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  text:"Unfortunately, you often can't call it a day when you're feeling uninspired or frustrated by your designs -- or lack thereof. Oftentimes, you're working on a strict deadline, keeping you up late into the night thinking, How can I make this design great? "

}


];

// select items

const img=document.getElementById("person");
const author=document.getElementById("author");
const job=document.getElementById("job");
const info=document.getElementById("info");

const prevBtn=document.querySelector(".btn-prev");
const nextBtn=document.querySelector(".btn-next");
const randomBtn=document.querySelector("#random-btn");


// set starting item

let currentItem=0;

// load initial item

window.addEventListener("DOMContentLoaded" ,function(){
  showPerson(currentItem);

})


// show person based on item

function showPerson(person){
  const item=reviews[currentItem];
  img.src=item.img;
  author.textContent=item.name;
  job.textContent=item.job;
  info.textContent=item.text;
}

// show next person

nextBtn.addEventListener("click",function(){
  currentItem++;
  if(currentItem>reviews.length -1){
    currentItem=0;
  }
  showPerson(currentItem);
});

// show prev person
prevBtn.addEventListener("click",function(){
  currentItem--;
  if(currentItem<0){
    currentItem=reviews.length -1;
  }
  showPerson(currentItem);
})

// random button

randomBtn.addEventListener("click",function(){
  currentItem=Math.floor(Math.random() * reviews.length) ;
  console.log(randomBtn)
  showPerson(currentItem);
});