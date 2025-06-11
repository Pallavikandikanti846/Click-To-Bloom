import {message} from './messages.js';
window.onload = pageReady;


function pageReady() {
  let hPosition;
  let vPosition;
  const tree = document.querySelector("#imgDiv");
  const counter=document.querySelector("#clickCount");
  const reset=document.querySelector("#resetBtn");
  const msg=document.querySelector("#tagLine");
  let clickCounter=0;
  reset.style.display="none";
  tree.addEventListener("click", (event) => {
     if(clickCounter>=20){
    return;
  }
    clickCounter++;
    counterDisplay();
    for (let i = 0; i < 8; i++) {
      const flowerDiv = document.createElement("div");
      flowerDiv.className = "flower";
      flowerDiv.textContent = "🌸";

      const randomX = Math.random() * 50 - 25;
      const randomY = Math.random() * 50 - 25;

       hPosition = event.pageX + randomX;
       vPosition = event.pageY + randomY;

      // flowerDiv.style.left = `${hPosition}px`;
      // flowerDiv.style.top = `${vPosition}px`;
      flowerDiv.style.left = `${event.offsetX + randomX}px`;
      flowerDiv.style.top = `${event.offsetY + randomY}px`;
      tree.appendChild(flowerDiv);

      // document.body.appendChild(flowerDiv);

      setTimeout(() => {
        flowerDiv.remove();
      }, 1000);
    }
    if(clickCounter===20){
        tree.style.backgroundImage="url(./images/cherry_blossom_tree.png)";
        msg.textContent="You made it! The tree is in full bloom! 🌸✨";
         reset.style.display="block";
       
    }
     setTimeout(() => {
        displayMessage();
      }, 1000);
  });
   function counterDisplay(){
        counter.textContent="Clicks : "+clickCounter+ " /20";
      }
  function displayMessage(){
    const messageElement=document.createElement("p");
    const messageToDispaly=Math.floor(Math.random()*message.length); 
    messageElement.textContent=message[messageToDispaly];

    messageElement.className="message";

    document.body.appendChild(messageElement);

     setTimeout(() => {
        messageElement.remove();
      }, 1050);
  }
  reset.addEventListener("click",()=>{
    clickCounter=0;
    counterDisplay();
    tree.style.backgroundImage="url(./images/bare_image.png)";
    tree.innerHTML="";
      msg.textContent=" Cherry blossoms bloom only for a moment—appreciate it while it lasts.";
      reset.style.display = "none";
  });
}
