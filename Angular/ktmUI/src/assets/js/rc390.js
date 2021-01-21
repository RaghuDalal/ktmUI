
window.addEventListener('load',()=>{
    const card = document.querySelector(".rc390");
    const container = document.querySelector("#rc390");
    //Items
    const title = document.querySelector("#title390");
    const sneaker = document.querySelector("#rc390 img");
    const purchase = document.querySelector("#purchase");
    const description = document.querySelector("#info390 h3");
    const sizes = document.querySelector("#sizes390");
    
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
  });
  
  
  //Moving Animation Event
  
      //Movement Animation to happen
  
  