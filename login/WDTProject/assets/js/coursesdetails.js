let playVideo=document.getElementById("openVideo");
let youtube=document.getElementById("youtube");
let body=document.getElementById("body");
let closeVideo=document.getElementById("close");

playVideo.addEventListener("click",openYoutube);
closeVideo.addEventListener("click",closeYoutube);
youtube.addEventListener("click",closeYoutubeTwo);

function openYoutube(){
    youtube.style.display="block"
    body.style.overflowY="hidden"
};
function closeYoutube(){
    youtube.style.display="none"
    body.style.overflowY="scroll"
};
function closeYoutubeTwo(){
    youtube.style.display="none"
    body.style.overflowY="scroll"
};

let description=document.getElementById("description");
let review=document.getElementById("review");
let content=document.getElementById("content")

description.addEventListener("click",()=>{
    content.innerHTML=`<p class="courses-details-tap__title">Description:</p>
    <p class="first-info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    <p class="second-info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularsed in the 1960 with release containing Lorem Ipsum passages desktop publishing software.</p>`
    description.classList.add("button-active")
    review.classList.remove("button-active")
})
review.addEventListener("click",()=>{
    content.innerHTML=`<div class="reviews">
                
    <div class="review">
       <div class="head-review">
          <img class="rev-img" src="./assets/images/rev1.jpg" width="250px">
       </div>
       <div class="body-review">
          <div class="name-review">Mohamed</div>
          <div class="place-review">Egypt</div>
          <div class="rating">
             <i class="fas fa-star"></i>
             <i class="fas fa-star"></i>
             <i class="fas fa-star"></i>
             <i class="fas fa-star"></i>
             <i class="fas fa-star-half"></i>
          </div>
          <div class="desc-review">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati eligendi suscipit illum officia ex eos.</div>
       </div>
    </div>
    <div class="review">
       <div class="head-review">
          <img class="rev-img" src="./assets/images/rev2.jpg" width="250px">
       </div>
       <div class="body-review">
          <div class="name-review">Ahmed</div>
          <div class="place-review">Egypt</div>
          <div class="rating">
             <i class="fas fa-star"></i>
             <i class="fas fa-star"></i>
             <i class="fas fa-star"></i>
             <i class="fas fa-star"></i>
             <i class="fas fa-star"></i>
          </div>
          <div class="desc-review">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati eligendi suscipit illum officia ex eos.</div>
       </div>
    </div>
    </div>
    </div>`
    review.classList.add("button-active")
    description.classList.remove("button-active")
})