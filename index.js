const images=[
    {
        Name:"lemone",
        image:'./lemone.jpg',

    },

    {
        Name:"oranges",
        image:'./oranges.jpg',

    },
    

    {
        Name:"coca-cola",
        image:'./coca-cola.jpg',

    },
    

    {
        Name:"mandalene",
        image:'./mandalene.jpg',

    },

    {
        Name:"oranges",
        image:'./oranges.jpg',

    },
    
    {
        Name:"apple",
        image:'./apple.jpg',

    },
    {
        Name:"stilo",
        image:'./stilo.jpg',

    },
    {
        Name:"mandalene",
        image:'./mandalene.jpg',

    },
    
];

// const photo=document.getElementById('photo');
// const Name=document.getElementById('Name')
// {images.map((image)=>{
//         photo.innerHTML += `<img src=${image.image}>`
//         photo.innerHTML +=`${image.Name}

//         `
//     })
    

function image(image,Name){

const photos=`

<div class="card">
  <div class="card-body"><img src=${image} </div>
  <div class="card-footer">${Name}</div>
</div>
`
  photo.innerHTML+=photos;  
}


images.map(data=>{
    image(data.image,data.Name);
})
 const data=document.getElementById("seach");

 const search=document.getElementById("cocktail");

 const grass=(value)=>{
    photo.innerHTML=" ";
const items=images.filter(datas=>datas.Name.toLowerCase().includes(value.toLowerCase()))
items.map(item=>image(item.image,item.Name))
 }


 data.addEventListener("keyup",e=>{
    grass(data.value)
 })

 search.addEventListener("keyup",e=>{
    console.log(e.keyCode);
    if(e.keyCode==13){
        grass(search.value)
    }
 })

