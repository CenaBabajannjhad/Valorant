const hero = document.querySelector("#hero");
const header = document.querySelector(".header");
const newHeight = Math.abs(header.clientHeight - window.innerHeight);
hero.style.height = `${newHeight}px`;



const API = "https://valorant-api.com/v1/agents";

getAgents()
async function getAgents() {
  const res = await fetch(API);
  const json = await res.json();
  
  return json;
};

async function setData() {
    const json = await getAgents();
    console.log(json.data)
 
    json.data.map(item => {
        const root = document.querySelector('.slider-wrapper');
        const slide = document.createElement('div');
        slide.className = 'slide';
        const slideContainer = document.createElement('div');
        slideContainer.className = 'slide-container';
        const agentsName = document.createElement('h3');
        agentsName.className = 'agent-name';
        agentsName.innerHTML = item.displayName;
        const agentImage = document.createElement('img');
        agentImage.className = 'agent-img';
        agentImage.src = item.fullPortraitV2;
        const agentPowerContainer = document.createElement('div');
        agentPowerContainer.className = 'powers-logo';
        const agentPowerImg = document.createElement('img');
        agentPowerImg.className = 'powers-logo';
    
        slide.appendChild(slideContainer);
        slideContainer.appendChild(agentsName);
        slideContainer.appendChild(agentImage);
        slideContainer.appendChild(agentPowerContainer);
        agentPowerContainer.appendChild(agentPowerImg);
        root.appendChild(slide)

    })

}
setData()







