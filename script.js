//your code here

let touristSpots=['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
function strip(bandname){
	return bandname.replace(/^(a|the|an)/i,'').trim();
	
}
const sortedBands=touristSpots.sort((a,b)=>strip(a)>strip(b)?1:-1);
document.querySelector('#bands').innerHTML=sortedBands.map(band=>
	`<li>${band}</li>`).join(``)
console.log(sortedBands);