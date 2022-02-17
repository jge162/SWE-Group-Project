import media1 from './apple.png';
import media2 from './orange.png';
import media3 from './banana.png';


export const media = [
    media1, 
    media2,
    media3
];

export const description = [
    "Apple", 
    "Orange",
    "Banana"
];

export const price = [
    "#1", 
    "#2",
    "#3"
];

export const id = [
    "#1", 
    "#2",
    "#3"
];

export const mediaByIndex = index => media[index % media.length];
export const descriptionByIndex = index => description[index % description.length];
export const priceByIndex = index => price[index % id.length];
export const idByIndex = index => id[index % id.length];