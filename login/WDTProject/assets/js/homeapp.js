function changeNav(){
    let navBar=document.getElementById("navbar");
    let scrollValue=window.scrollY;
    if(scrollValue<150){
        navBar.classList.remove("fixedbar");
        document.getElementById("removeborder").style.border="1px solid rgba(48,146,85,0.25)";
    }else{
        navBar.classList.add("fixedbar");
        document.getElementById("removeborder").style.border="none";
        document.getElementById("removeborder").style.marginTop="0";
    }
}
window.addEventListener("scroll",changeNav);

let openMenu=document.getElementById("open");
let closeMenu=document.getElementById("close");

openMenu.addEventListener('click',openAside);
closeMenu.addEventListener('click',closeAside);

function openAside(){
document.getElementById("aside").style.left="0"
};
function closeAside(){
    document.getElementById("aside").style.left="-305px"
    };




    let elementor=document.getElementById("elementor-title__div");
    let elementorTwo=document.getElementById("elementor-title__div-two");
    let elementorThree=document.getElementById("elementor-title__div-three");
    let elementorFour=document.getElementById("elementor-title__div-four");
    let showElementor=document.getElementById("elementor-content");
    let showElementorTwo=document.getElementById("elementor-content-two");
    let showElementorThree=document.getElementById("elementor-content-three");
    let showElementorFour=document.getElementById("elementor-content-four");
    let pluse=document.getElementById("pluse");
    let pluseTwo=document.getElementById("pluse-two")
    let pluseThree=document.getElementById("pluse-three")
    let pluseFour=document.getElementById("pluse-four")
    let minus=document.getElementById("minus");
    let minusTwo=document.getElementById("minus-two")
    let minusThree=document.getElementById("minus-three");
    let minusFour=document.getElementById("minus-four");
    elementor.addEventListener("click",toggleElementor);
    elementorTwo.addEventListener("click",toggleElementorTwo);
    elementorThree.addEventListener("click",toggleElementorThree);
    elementorFour.addEventListener("click",toggleElementorFour);

    function toggleElementor(){
        showElementor.classList.toggle("elementor-active");
        showElementorTwo.classList.remove("elementor-active");
        showElementorThree.classList.remove("elementor-active");
        showElementorFour.classList.remove("elementor-active");
        pluse.classList.toggle("fa-plus-none");
        minus.classList.toggle("fa-minus-active");
        pluseTwo.classList.remove("fa-plus-none");
        minusTwo.classList.remove("fa-minus-active");
        pluseThree.classList.remove("fa-plus-none");
        minusThree.classList.remove("fa-minus-active");
        pluseFour.classList.remove("fa-plus-none");
        minusFour.classList.remove("fa-minus-active");
    };
    function toggleElementorTwo(){
        showElementorTwo.classList.toggle("elementor-active");
        showElementor.classList.remove("elementor-active");
        showElementorThree.classList.remove("elementor-active");
        showElementorFour.classList.remove("elementor-active");
        pluseTwo.classList.toggle("fa-plus-none");
        minusTwo.classList.toggle("fa-minus-active");
        pluse.classList.remove("fa-plus-none");
        minus.classList.remove("fa-minus-active");
        pluseThree.classList.remove("fa-plus-none");
        minusThree.classList.remove("fa-minus-active");
        pluseFour.classList.remove("fa-plus-none");
        minusFour.classList.remove("fa-minus-active");
    };
    function toggleElementorThree(){
        showElementorThree.classList.toggle("elementor-active");
        showElementor.classList.remove("elementor-active");
        showElementorTwo.classList.remove("elementor-active");
        showElementorFour.classList.remove("elementor-active") ;
        pluseThree.classList.toggle("fa-plus-none");
        minusThree.classList.toggle("fa-minus-active");
        pluse.classList.remove("fa-plus-none");
        minus.classList.remove("fa-minus-active");
        pluseTwo.classList.remove("fa-plus-none");
        minusTwo.classList.remove("fa-minus-active");
        pluseFour.classList.remove("fa-plus-none");
        minusFour.classList.remove("fa-minus-active");
        };
        function toggleElementorFour(){
            showElementorFour.classList.toggle("elementor-active");
            showElementor.classList.remove("elementor-active");
            showElementorTwo.classList.remove("elementor-active");
            showElementorThree.classList.remove("elementor-active");
            pluseFour.classList.toggle("fa-plus-none");
            minusFour.classList.toggle("fa-minus-active");
            pluse.classList.remove("fa-plus-none");
            minus.classList.remove("fa-minus-active");
            pluseTwo.classList.remove("fa-plus-none");
            minusTwo.classList.remove("fa-minus-active");
            pluseThree.classList.remove("fa-plus-none");
            minusThree.classList.remove("fa-minus-active");
            };