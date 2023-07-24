import { getCareTips } from "../database.js";

export const TipList = () => {
  const tips = getCareTips();
  let careString = "";
  for (const tip of tips) {
    careString += `<section class="tip-card">
            <div class="tip">${tip.tip}</div>
            </section>`;
  }
  return careString;
};
