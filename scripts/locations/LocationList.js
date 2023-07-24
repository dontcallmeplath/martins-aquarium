import { getLocations } from "../database.js";

export const LocationList = () => {
  const locations = getLocations();
  let htmlString = "";
  for (const locale of locations) {
    htmlString += `<section class="locale-card">
            <img class="locale__image image--card" src="${locale.image}" />
            <div class="locale__name">Name: ${locale.place}</div>
            <div class="locale__family">Harvested: ${locale.fishFound}</div>
         </section>`;
  }
  return htmlString;
};
