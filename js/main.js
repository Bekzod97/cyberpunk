let wrapper = document.querySelector(".wrapper");
let index = 0;

let wrapArr = [

    "img/inner/inner-1.jpg",
    "img/inner/inner-2.jpg",
    "img/inner/inner-3.jpg",

]


function interval() {

    wrapper.style.backgroundImage = `url(${wrapArr[index]})`;
    
    index++;

    if(index > 2){
        index = 0;
    }
    console.log("hahda");
    // index = (index + 1) % wrapArr.length;
}

// interval();

setInterval(interval, 3000);

