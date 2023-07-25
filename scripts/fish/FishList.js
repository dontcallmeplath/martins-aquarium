import { getFishies } from "../database.js";
const fishes = getFishies();
let filteredFishArray = [];

export const filteredFishList = () => {
  let htmlString = "";
  for (const fish of filteredFishArray) {
    htmlString += `<section class="fish-card">
            <img  class="fish__image image--card" src="${fish.image}" />
            <div class="fish__name">Name: ${fish.name}</div>
            <div class="fish__family">Family: ${fish.family}</div>
            <div class="fish__length">Length in cm: ${fish.length}</div>
            <div class="fish__location">Found: ${fish.found}</div>
            <div class="fish__diet">Eats: ${fish.food}</div>
        </section>`;
  }
  return htmlString;
};

export const filterHolyFish = () => {
  for (const fish of fishes) {
    if (fish.length % 5 === 0) {
      filteredFishArray.push(fish);
    } else if (fish.length % 3 === 0) {
      filteredFishArray.unshift(fish);
    }
  }
  for (const fish of fishes) {
    if (fish.length % 5 !== 0 && fish.length % 3 !== 0) {
      filteredFishArray.push(fish);
    }
  }
  return filteredFishList(filteredFishArray);
};
