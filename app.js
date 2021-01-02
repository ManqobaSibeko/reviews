const review = [{
    
    id:1,
    name:"Sara Jones",
    job:"UX designer",
    img:"./img/pic1.jpg",
    text:`"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dicta quia quaerat provident amet quibusdam nemo vero ullam nobis minus fuga laborum, ab, illum deleniti possimus tempore saepe iure nisi! Dicta quisquam culpa ullam repudiandae corrupti repellat sit atque nihil temporibus quasi officiis velit aperiam fugiat dolores assumenda aliquam, praesentium impedit maiores molestias"`,
},
{
    
    id:2,
    name: "John Mike",
    job:"Software develop",
    img:"./img/pic2.jpeg",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit asperiores, possimus quis fugiat saepe explicabo ipsa esse quasi illum atque iste animi adipisci, commodi amet sit cum laborum mollitia, facere quos repudiandae! Omnis, reiciendis.",
},
{
    
    id:3,
    name: "Susan Smith",
    job:"web develop",
    img:"./img/pic3.jpg",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit asperiores, possimus quis fugiat saepe explicabo ipsa esse quasi illum atque iste animi adipisci, commodi amet sit cum laborum mollitia, facere quos repudiandae! Omnis, reiciendis.",
},
{
    
    id:3,
    name: "Tumi Semanya",
    job:"Design Lead",
    img:"./img/pic4.jpg",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit asperiores, possimus quis fugiat saepe explicabo ipsa esse quasi illum atque iste animi adipisci, commodi amet sit cum laborum mollitia, facere quos repudiandae! Omnis, reiciendis.",
},
{
    
    id:3,
    name: "Sdumo Dlamini",
    job:"front-End",
    img:"./img/pic5.jpg",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit asperiores, possimus quis fugiat saepe explicabo ipsa esse quasi illum atque iste animi adipisci, commodi amet sit cum laborum mollitia, facere quos repudiandae! Omnis, reiciendis.",
},
{
    
    id:3,
    name: "Qiniso Sibeko",
    job:"Back-end",
    img:"./img/pic6.jpg",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit asperiores, possimus quis fugiat saepe explicabo ipsa esse quasi illum atque iste animi adipisci, commodi amet sit cum laborum mollitia, facere quos repudiandae! Omnis, reiciendis.",
},
]
 //set items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


//set starting item

let currentItem = 0; //my first array 


//load inital item

window.addEventListener('DOMContentLoaded',function(){

    showPerson(currentItem);
})

//show persom based on item 
function showPerson(person){
    const items = review[person];

    img.src = items.img;
     author.textContent = items.name;
     job.textContent = items.job;
     info.textContent = items.text;
    console.log(items);
}

//show next person based on item 
nextBtn.addEventListener('click', function(){
    currentItem++;
    console.log(currentItem);


        if(currentItem > review.length - 1 ){
        currentItem = 0;
    }
    showPerson(currentItem) ;
})

//show prevous person based on item 

prevBtn.addEventListener('click', function(){
    currentItem--;
    console.log(currentItem);


        if(currentItem <0 ){
        currentItem = 2;
    }
    showPerson(currentItem) ;
})

//show random person based on item 

randomBtn.addEventListener('click',function(){
    currentItem = Math.floor(Math.random() * review.length);
     console.log(currentItem);

     showPerson(currentItem)
})
