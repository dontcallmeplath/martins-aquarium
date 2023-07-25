// import { filteredFishList } from "./fish/FishList.js";
import { filterHolyFish } from "./fish/FishList.js";
import { LocationList } from "./locations/LocationList.js";
import { QuoteList } from "./tips/QuoteList.js";
import { TipList } from "./tips/TipList.js";

const fishParentElement = document.querySelector("#fishBox");
fishParentElement.innerHTML = filterHolyFish();

const locationParentElement = document.querySelector("#locationBox");
locationParentElement.innerHTML = LocationList();

const quoteParentElement = document.querySelector("#quoteBox");
quoteParentElement.innerHTML = QuoteList();

const careTipParentElement = document.querySelector("#careTipBox");
careTipParentElement.innerHTML = TipList();
