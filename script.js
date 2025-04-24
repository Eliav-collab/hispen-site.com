var inputName

function inputUserNext() {
    inputName = document.getElementById('inputName').value;
    document.getElementById('inputDiv1').style.display = 'none';
    if (inputName != '') {
        document.getElementById('inputDiv1').style.display = 'none';
        document.getElementById('inputDiv2').style.display = 'inline-block';

    } else {
        document.getElementById('inputDiv').style.border = '0px';
        document.getElementById('inputH3').innerHTML = `
            <div>
                <p> לא הכנסת נתונים <a href="https://eliav-collab.github.io/hispen.site/">חזרה לדף הבית</a></p>
            </div>
        `;
    }
}


function inputUser() {
    let inputPassword = document.getElementById('inputPassword').value;
    document.getElementById('inputDiv2').style.display = 'none';
    if (inputPassword != '') {
        document.getElementById('inputH2').innerText = inputName;
        document.getElementById('inputDiv').style.border = '0px';

    } else {
        document.getElementById('inputDiv').style.border = '0px';
        document.getElementById('inputH3').innerHTML = `
            <div>
                <p> לא הכנסת נתונים <a href="https://eliav-collab.github.io/hispen.site/">חזרה לדף הבית</a></p>
            </div>
        `;
    }

}

let index = 1;
const totalImages = 3;

function changeImage() {
    document.getElementById('imgs').src = "images/img" + index + ".jpg";


    index = (index % totalImages) + 1;
}


let colors = ['red', 'green', 'blue']

let colorIndex = 0;

function colorsReplace() {
    document.getElementById('pStam').innerHTML = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}


function div2() {
    document.getElementById('map').style.display = 'none';
    document.getElementById('sectionVideo').style.display = 'none';
    document.getElementById('inputDiv').style.display = 'none';
    document.getElementById('linkDiv1').style.display = 'none';
    document.getElementById('linkDiv2').style.display = 'inline-block';
    document.getElementById('linkDiv3').style.display = 'none';
    document.getElementById('linkDiv4').style.display = 'none';
    document.getElementById('linkDiv5').style.display = 'none';
    document.getElementById('linkDiv6').style.display = 'none';

}

function div3() {
    document.getElementById('map').style.display = 'none';
    document.getElementById('inputDiv').style.display = 'none';
    document.getElementById('sectionVideo').style.display = 'none';
    document.getElementById('inputDiv').style.display = 'none';
    document.getElementById('linkDiv1').style.display = 'none';
    document.getElementById('linkDiv2').style.display = 'none';
    document.getElementById('linkDiv3').style.display = 'inline-block';
    document.getElementById('linkDiv4').style.display = 'none';
    document.getElementById('linkDiv5').style.display = 'none';
    document.getElementById('linkDiv6').style.display = 'none';

}

function div4() {
    document.getElementById('map').style.display = 'none';
    document.getElementById('sectionVideo').style.display = 'none';
    document.getElementById('inputDiv').style.display = 'none';
    document.getElementById('linkDiv1').style.display = 'none';
    document.getElementById('linkDiv2').style.display = 'none';
    document.getElementById('linkDiv3').style.display = 'none';
    document.getElementById('linkDiv4').style.display = 'inline-block';
    document.getElementById('linkDiv5').style.display = 'none';
    document.getElementById('linkDiv6').style.display = 'none';

}

function div5() {
    document.getElementById('map').style.display = 'none';
    document.getElementById('sectionVideo').style.display = 'none';
    document.getElementById('inputDiv').style.display = 'none';
    document.getElementById('linkDiv1').style.display = 'none';
    document.getElementById('linkDiv2').style.display = 'none';
    document.getElementById('linkDiv3').style.display = 'none';
    document.getElementById('linkDiv4').style.display = 'none';
    document.getElementById('linkDiv5').style.display = 'inline-block';
    document.getElementById('linkDiv6').style.display = 'none';

}

function div6() {
    document.getElementById('map').style.display = 'none';
    document.getElementById('sectionVideo').style.display = 'none';
    document.getElementById('inputDiv').style.display = 'none';
    document.getElementById('linkDiv1').style.display = 'none';
    document.getElementById('linkDiv2').style.display = 'none';
    document.getElementById('linkDiv3').style.display = 'none';
    document.getElementById('linkDiv4').style.display = 'none';
    document.getElementById('linkDiv5').style.display = 'none';
    document.getElementById('linkDiv6').style.display = 'inline-block';
}

window.onload = function () {
    changeImage();
    setInterval(changeImage, 2000);
    setInterval(colorsReplace, 1000);
};



