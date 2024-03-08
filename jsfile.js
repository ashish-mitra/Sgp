const myslide = document.querySelectorAll('.myslide');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}

function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	
}



// numsection javascript 



var numSecVisible = false;

function checkVisibility() {
    if (!numSecVisible) {
        var numSec = document.getElementById("num-sec");
        var bounding = numSec.getBoundingClientRect();

        if (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ) {
            let num = document.querySelectorAll('.numbers');
            let time = 4000;
            num.forEach((numelement) => {
                let start = 0;
                let end = parseInt(numelement.getAttribute('data-value'));
                let duration = Math.floor(time / end);
                let counter = setInterval(() => {
                    start += 1;
                    numelement.textContent = start;
                    if (start == end) {
                        clearInterval(counter);
                    }
                }, duration);

            });
            numSecVisible = true;
        }
    }
}

document.addEventListener("DOMContentLoaded", checkVisibility); 
document.addEventListener("scroll", checkVisibility); 


