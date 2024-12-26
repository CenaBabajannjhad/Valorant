const hero = document.querySelector("#hero");
const header = document.querySelector(".header");
const newHeight = Math.abs(header.clientHeight - window.innerHeight);
hero.style.height = `${newHeight}px`;

const API = "https://valorant-api.com/v1/agents";

getAgents();
async function getAgents() {
  try{
    const res = await fetch(API);

    if(res.ok){
      const json = await res.json();
      return json;

    }else{
      throw new Error(res.status)
    }
    
  }catch(err){
    console.err(err)
  }

}

async function setData() {
  const json = await getAgents();
  console.log(json.data);

  json.data.map((item) => {
    if(item.fullPortraitV2 === null) return false;
    
    const root = document.querySelector(".slider-wrapper");
    const slide = document.createElement("div");
    slide.className = "slide";
    const slideContainer = document.createElement("div");
    slideContainer.className = "slide-container";
    const agentsName = document.createElement("h3");
    agentsName.className = "agent-name";
    agentsName.innerHTML = item.displayName;
    const agentImageWrapper = document.createElement("div");
    agentImageWrapper.className = "agent-image-wrapper";
    const agentImage = document.createElement("img");
    agentImage.className = "agent-img";
    agentImage.src = item.fullPortraitV2;
    const agentPowerContainer = document.createElement("div");
    agentPowerContainer.className = "powers-logo";


    item.abilities.map((abi, index) => {
      if (index < 4) {
        const agentPowerImg = document.createElement("img");
        agentPowerImg.style.width = "30px";
        agentPowerImg.src = abi.displayIcon;

        agentPowerContainer.appendChild(agentPowerImg);
      }
    });


    slide.appendChild(slideContainer);
    slideContainer.appendChild(agentsName);
    agentImageWrapper.appendChild(agentImage);
    slideContainer.appendChild(agentImageWrapper);
    slideContainer.appendChild(agentPowerContainer);
    root.appendChild(slide);
  });
}
setData();
