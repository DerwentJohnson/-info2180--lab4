window.onload = function(){
	let wallone = document.getElementById("boundary1");
	let status = document.getElementById("status");
	let winOrlose = document.getElementsByClassName("boundary example");
	let allwalls = document.querySelectorAll(".boundary");
	let starter = document.getElementById("start");
	let ender = document.getElementById("end");
	let maze = document.getElementById("maze");
	let colorIndicator = false;

	function changeboundary(){
	
	allwalls.forEach((item,index)=>{
		allwalls[index].addEventListener("mouseover",function(){
			allwalls.forEach((item,index)=>{
				item.classList.add("youlose");
				colorIndicator = true;
			});
			status.innerHTML = "You Lose!";
			
	});
	
});
}
	function start(){
		starter.addEventListener("click",function(){
			
			if (colorIndicator===true) {
				status.innerHTML= "Move your mouse over the \"S\" to begin."
				allwalls.forEach((item,index)=>{
					item.classList.remove("youlose");
					colorIndicator = false
				});
			};
		});

	}
	function end(){
		ender.addEventListener("mouseover",function(){
			if (colorIndicator === false) {
				status.innerHTML = "You win!";

			};
		});
	};
	function mousleave(){
		maze.addEventListener("mouseleave",function(){
			if (colorIndicator === false){
				allwalls.forEach((item,index)=>{
				item.classList.add("youlose");
				colorIndicator = true;
			});
			status.innerHTML = "You Lose!";
			};
		});
	};

	changeboundary();
	start();
	end();
	mousleave();
};


// function changeboundary1(){

// }
	
