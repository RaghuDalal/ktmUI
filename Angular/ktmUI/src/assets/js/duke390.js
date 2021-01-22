
window.addEventListener('load',()=>{
  function isMobile() {
    console.log("Mobile Mode Duke390")
return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobile()) {
  console.log("Desktop Mode Duke390")

  const card = document.querySelector(".duke390");
  const container = document.querySelector("#duke390");
  //Items
  const title = document.querySelector(".title");
  const sneaker = document.querySelector(".bike img");
  const purchase = document.querySelector(".purchase");
  const description = document.querySelector(".info h3");
  const sizes = document.querySelector(".sizes");
  
    container.addEventListener("mousemove", (e) => {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    //Animate In
    container.addEventListener("mouseenter", (e) => {
      card.style.transition = "none";
      //Popout
      title.style.transform = "translateZ(150px)";
      sneaker.style.transform = "translateZ(200px) ";
      description.style.transform = "translateZ(125px)";
      sizes.style.transform = "translateZ(100px)";
      purchase.style.transform = "translateZ(75px)";
    });
    //Animate Out
    container.addEventListener("mouseleave", (e) => {
      card.style.transition = "all 0.5s ease";
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;
      //Popback
      title.style.transform = "translateZ(0px)";
      sneaker.style.transform = "translateZ(0px) ";
      description.style.transform = "translateZ(0px)";
      sizes.style.transform = "translateZ(0px)";
      purchase.style.transform = "translateZ(0px)";
    });

}
  
});