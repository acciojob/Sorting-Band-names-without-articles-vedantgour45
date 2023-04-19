let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

touristSpots.map((element)=>{
	let words=element.split(" ");	
	let reducedList=words.reduce((prev,current,index)=>{
		if(current!="The"&&current!="an"&&current!="a"){
			return prev+" "+current;
		}
		return prev;
	},"")
	return reducedList
})
console.log(touristSpots)