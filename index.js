const images=[
    {
        Name:"lemone",
        image:'./lemone.jpg',

    },

    {
        Name:"orange",
        image:'./orange.jpg',

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
    
];

const photo=document.getElementById('photo');
const Name=document.getElementById('Name')
{images.map((image)=>{
        photo.innerHTML += `<img src='${image.image}'>`
    })
}