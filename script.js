const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');  
const btn = document.getElementById('btn');


btn.addEventListener('click', () => {

    const inputValue = inputBox.value;
    if(inputValue === ''){
        alert('Please enter a value');
    }
    else
    {
        const li = document.createElement('li');
        li.innerText = inputValue;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerText = '\u00D7';
        li.appendChild(span);
        inputBox.value = '';
        saveData()

    }
   
});

listContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.style.display = 'none';
        saveData()
    }});

    function saveData(){
        localStorage.setItem('data', listContainer.innerHTML);
    }

    function loadData(){
        listContainer.innerHTML = localStorage.getItem('data');
    }

    loadData();