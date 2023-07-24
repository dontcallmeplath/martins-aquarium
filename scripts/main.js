import { getFishies } from "./database.js";
import { FishList } from "./FishList.js";

const parentHTMLElement = document.querySelector("#fishBox");
parentHTMLElement.innerHTML = FishList();
