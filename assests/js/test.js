
const testimonials = [
{
  name:"Leslie Alexander",
  role:"Nursing Assistant",
  img:"https://randomuser.me/api/portraits/men/32.jpg",
  text:"Financial planners help people to knowledge in about how to invest and save their money the most efficient way."
},
{
  name:"Courtney Henry",
  role:"Farmer",
  img:"https://randomuser.me/api/portraits/women/44.jpg",
  text:"Agriculture is our passion. We ensure quality farming solutions for better growth and production."
},
{
  name:"Jacob Jones",
  role:"Agri Consultant",
  img:"https://randomuser.me/api/portraits/men/75.jpg",
  text:"Modern farming methods and innovation are shaping a stronger agricultural future."
}
];

let current = 0;

function updateSlide(){
  document.getElementById("userName").innerText = testimonials[current].name;
  document.getElementById("userRole").innerText = testimonials[current].role;
  document.getElementById("userImg").src = testimonials[current].img;
  document.getElementById("userText").innerText = testimonials[current].text;

  document.querySelectorAll(".dot").forEach(dot=>dot.classList.remove("active"));
  document.querySelectorAll(".dot")[current].classList.add("active");
}

function nextSlide(){
  current = (current+1) % testimonials.length;
  updateSlide();
}

function prevSlide(){
  current = (current-1+testimonials.length) % testimonials.length;
  updateSlide();
}

function setSlide(index){
  current = index;
  updateSlide();
}