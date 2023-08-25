let id = document.getElementById('advice-span-id');
let advice = document.getElementById('advice');

async function fetchData(){
    let fetchData;
    await fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
        .then((json) => {fetchData = json;});

    return fetchData;
}

let btn = document.getElementById('refresh-dice');
let img = document.getElementById('btn-img');

async function generateAdvice(){
    img.className = "rotateImg"
    let obj = await fetchData();
    id.innerHTML = obj.slip.id;
    advice.innerHTML = obj.slip.advice;
    setTimeout(()=>{
        img.className = "";
    }, 1000);
}

btn.addEventListener('click', generateAdvice);
