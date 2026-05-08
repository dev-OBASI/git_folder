const notDisplayed = document.querySelector('.box');
const notDisplayed1 = document.querySelector('.box1');
const notDisplayed2 = document.querySelector('.box2');
const notDisplayedImg = document.querySelector('.box-img');
const notDisplayedImg1 = document.querySelector('.box-img1');
const notDisplayedImg2 = document.querySelector('.box-img2');

let showBox = [notDisplayed, notDisplayed1, notDisplayed2];
let showImg = [notDisplayedImg, notDisplayedImg1, notDisplayedImg2];

let count = 0;

function showCurrentBox(index) {

    // TO PICK THE BOXES ONE AFTER THE OTHER... ELSE THEY WILL ALL SHOW AT THE SAME TIME
    showBox.forEach((box) => {
        box.style.display = 'none';

    });
    //DISPLAYS THE BOXES ONE AFTER THE OTHER AS THE INDEX INCREASES
    showBox[index].style.display = 'flex';
    showBox[index].style.flexDirection = 'column';
}
    //ASSIGNS THE VARIABLE 'COUNT' AS A PARAMETER TO THE FUNCTION
    showCurrentBox(count);

    // SETS AN INTERVAL OF 5 SECONDS TO INCREMENT THE VALUE OF 'COUNT' AND,
    // CALLS THE FUNCTION TO SHOW THE CURRENT BOX AND IMAGE PER INCREMENT.
    setInterval(() => {
        count++; 
        
         if (count >= showBox.length) {

            count = 0;
            
        
    }

        showCurrentBox(count);
    
    }, 5000);

