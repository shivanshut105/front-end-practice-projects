async function getData(url){
    let fetchData = [];
    await fetch(url)
        .then((response) => response.json())
        .then((json) => {fetchData = json;});

    return fetchData;
}
let sample = getData('./data.json');
console.log(sample);
let createElement = (elementType, classesAssigned, text = '', src = '')=>{
    let element = document.createElement(elementType);
    element.setAttribute('class', classesAssigned);

    if(elementType=='img'){
        element.alt = text;
        element.src = src;
    }
    else{
        element.innerHTML = text;
    }

    return element;
}


window.onload = async function(){
    let fetchData = await getData('./data.json');
    let mainContainer = document.getElementById('subject-section');
    let fragment = new DocumentFragment();
    let totalScore = 0;
    let subjectCount = 0;
    let maxMarks = 0;

    console.log(fetchData);

    // fetchData.forEach(element => {
    //     console.log(element.score)
    // });
    let i = 1;
    fetchData.forEach((data) => {
        
        let container = createElement('div', 'subject subject-'+i);
        
        let labelContainer = createElement('div', 'subject-flex-container');
        
        let scoreContainer = createElement('p', 'subject-score');

        let img = createElement('img', 'subject-img', data.category, data.icon);

        let name = createElement('p', 'subject-name', data.category);
        
        let score = createElement('span', 'subject-marks-acquired', data.score);

        let total = createElement('span', 'subject-total', ' / 100');

        
        labelContainer.appendChild(img);
        labelContainer.appendChild(name);
        
        scoreContainer.appendChild(score);
        scoreContainer.appendChild(total);

        container.appendChild(labelContainer);
        container.appendChild(scoreContainer);

        fragment.appendChild(container);
        maxMarks+=100;
        totalScore+=data.score;
        subjectCount++;
        i++;
    });
    
    document.getElementById('marks-acquired').innerHTML = parseInt(totalScore/subjectCount);
    document.getElementById('maximum-marks').innerHTML = 'of ' + parseInt(maxMarks/subjectCount);
    mainContainer.appendChild(fragment);
}