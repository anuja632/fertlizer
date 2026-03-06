
const products = [

/* ===== OUR MAIN PRODUCTS ===== */

{
name:"Scientific Master Mango Special Tonic",
category:"bio",
img:"assests/images/products/mango-special-tonic.jpeg",
desc:"Special bio tonic developed for mango crops to improve flowering, fruit size and yield."
},

{
name:"Scientific Master Crop Special Tonic",
category:"bio",
img:"assests/images/products/crop-special-tonic.jpeg",
desc:"Powerful crop tonic that promotes healthy plant growth and improves productivity."
},

{
name:"Radan Gold All Crops Special",
category:"special",
img:"assests/images/products/radan-gold.jpeg",
desc:"Premium nutrition product suitable for vegetables, fruits and all field crops."
},

{
name:"Kaveri Gold Soil Conditioner",
category:"secondary",
img:"assests/images/products/kaveri-gold.jpeg",
desc:"Soil conditioner enriched with Calcium, Magnesium and Sulphur for improving soil fertility."
},

/* ===== MICRO NUTRIENT MIXTURE ===== */

{
name:"Zinc Master",
category:"micro",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmXtVlYu3mbJhG19a1JFd53ynX5_-oKT1Pg&s",
desc:"All crops special micronutrient fertilizer that improves plant growth and increases crop yield."
},

{
name:"Zinc Sulphate",
category:"micro",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU3W0avsTpH0NzWa8KS-71x9CBTEDcf1Jm8Q&s",
desc:"Corrects zinc deficiency and improves plant metabolism and crop productivity."
},

{
name:"Ferrous Sulphate",
category:"micro",
img:"https://ases.in/cdn/shop/products/ferrous-sulphate-heptahydrate-granules-500x500.jpg?v=1617379045",
desc:"Essential iron nutrient for healthy chlorophyll formation and plant growth."
},

{
name:"Micronutrient Mixture",
category:"micro",
img:"https://tiimg.tistatic.com/fp/1/008/387/99-pure-granular-dried-micronutrient-fertilizer-for-agricultural-use-925.jpg",
desc:"Balanced mixture of micronutrients that supports plant development."
},

/* ===== SECONDARY NUTRIENTS ===== */

{
name:"Calcium Fertilizer",
category:"secondary",
img:"https://image.made-in-china.com/2f0j00kquoLOKEfpcm/Calcium-Nitrate-Fertilizer-Crystal-Granular-for-Agriculture-Crops.webp",
desc:"Strengthens plant cell walls and improves root development."
},

{
name:"Magnesium Sulphate",
category:"secondary",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmaiPuQsKszXIXwLxWNgJeQ-n6Zn3gyGVzcQ&s",
desc:"Essential nutrient required for chlorophyll production in plants."
},

/* ===== TECHNOLOGY PRODUCTS ===== */

{
name:"Crop Booster",
category:"technology",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRckvtiwUXuyBmOFcX77UVv9o8mFehGNF8Ocg&s",
desc:"Advanced technology fertilizer that enhances crop productivity."
},

{
name:"Yield Enhancer",
category:"technology",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQwN33OjCktMPigITujWyzTH5vJAN23_GnMQ&s",
desc:"Improves plant metabolism and increases harvest output."
},

/* ===== BIO STIMULANTS ===== */

{
name:"Seaweed Extract",
category:"bio",
img:"https://5.imimg.com/data5/SELLER/Default/2023/5/312153683/GE/RO/IY/49203737/seaweed-extract-organic-plant-fertilizer-500x500.jpg",
desc:"Natural plant growth stimulant that improves crop resistance and yield."
},

{
name:"Humic Acid",
category:"bio",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSO1zRSLvp4VOVqejzzQKXG3tAeAvUTd-K8A&s",
desc:"Improves soil structure and increases nutrient absorption."
},

/* ===== WETTING AGENTS ===== */

{
name:"Super Wet",
category:"wetting",
img:"https://i.ytimg.com/vi/lVw_kdumlis/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBui6f06MJ_Dru-fPWWOAt1n_O-iA",
desc:"Improves spreading and absorption of pesticides and fertilizers."
},

/* ===== GROWTH REGULATORS ===== */

{
name:"Plant Growth Booster",
category:"growth",
img:"https://5.imimg.com/data5/SELLER/Default/2024/10/460640793/AD/RL/XM/6258162/growth-booster-liquid-fertilizer-500x500.png",
desc:"Stimulates plant growth and improves flowering and fruit setting."
},

/* ===== NEEM BASED ===== */

{
name:"Neem Oil",
category:"neem",
img:"https://kalaguragampa.com/media/catalog/product/cache/bde31e1ff3b3df1c640a56baa1663e87/N/e/Neem-Oil-Fertilizer1.jpg",
desc:"Organic pest control solution derived from neem extracts."
},

{
name:"Neem Cake",
category:"neem",
img:"https://5.imimg.com/data5/SELLER/Default/2023/5/308161215/OY/TJ/SQ/29408605/brown-neem-cake-fertilizer.jpg",
desc:"Organic fertilizer that enriches soil and controls pests."
},

/* ===== VIRUS CONTROLLER ===== */

{
name:"Virus Guard",
category:"virus",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvt3JHf55du1Gg_RLZ82i1R9tDhK5Nnr9IWw&s",
desc:"Protects crops from viral infections and improves plant immunity."
},

/* ===== EDTA PRODUCTS ===== */

{
name:"EDTA Zinc",
category:"edta",
img:"https://ases.in/cdn/shop/products/Hacf78b33b0ee438d8f4b1b2bf57d0440p.jpg?v=1621095579",
desc:"Chelated zinc fertilizer for fast nutrient absorption."
},

{
name:"EDDHA Iron",
category:"edta",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjpu0OYPxOKx4ipC8g6t-PcdOxpwyhEIoAJg&s",
desc:"Highly effective iron fertilizer for correcting iron deficiency."
},

/* ===== FCO GRADE ===== */

{
name:"Boron 20%",
category:"fco",
img:"https://cpimg.tistatic.com/08731530/b/4/Boron-20-Powder.jpg",
desc:"Improves pollination, fruit setting and crop quality."
},

{
name:"Copper Sulphate",
category:"fco",
img:"https://m.media-amazon.com/images/I/61AZ6v6n78L._AC_UF1000,1000_QL80_.jpg",
desc:"Essential micronutrient for plant enzyme activity."
},

/* ===== SPECIAL PRODUCTS ===== */

{
name:"Root Booster",
category:"special",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNfxLGkYKVJKbvJ54I5Pm6a8CSW94FvjgqTg&s",
desc:"Promotes strong root development and improves nutrient uptake."
},

{
name:"Yield Max",
category:"special",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiqkuAPbtxh5udLliNLPACGMI41dJR_lpWOQ&s",
desc:"Special crop enhancer that improves productivity and crop quality."
}

];


let currentCategory="all";

const container=document.getElementById("productContainer");
const searchInput=document.getElementById("searchInput");

function displayProducts(){

container.innerHTML="";

let filtered=products.filter(p=>

(currentCategory==="all" || p.category===currentCategory) &&
p.name.toLowerCase().includes(searchInput.value.toLowerCase())

);

filtered.forEach((product,index)=>{

container.innerHTML+=`

<div class="col-md-4 mb-4">

<div class="product-card" onclick="openProduct(${index})">

<img src="${product.img}">
<h5>${product.name}</h5>

</div>

</div>

`;

});

}

displayProducts();

document.querySelectorAll(".category-menu a").forEach(btn=>{

btn.addEventListener("click",function(e){

e.preventDefault();

document.querySelectorAll(".category-menu a").forEach(a=>a.classList.remove("active"));

this.classList.add("active");

currentCategory=this.dataset.category;

displayProducts();

});

});

searchInput.addEventListener("keyup",displayProducts);

function openProduct(i){

localStorage.setItem("product",JSON.stringify(products[i]));

window.location.href="product-details.html";

}
