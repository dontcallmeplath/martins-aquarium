import { getFishies } from "../database.js";

export const FishList = () => {
  const fishes = getFishies();
  let htmlString = "";
  for (const fish of fishes) {
    htmlString += `<section class="fish-card">
            <img  class="fish__image image--card" src="${fish.image}" />
            <div class="fish__name">Name: ${fish.name}</div>
            <div class="fish__family">Family: ${fish.family}</div>
            <div class="fish__length">Length: ${fish.length}</div>
            <div class="fish__location">Found: ${fish.found}</div>
            <div class="fish__diet">Eats: ${fish.food}</div>
        </section>`;
  }
  return htmlString;
};
