const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];

getData();

filter.addEventListener('input', (e) => filterData(e.target.value));

// async: allows the keyword await to be used inside function
async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50');

    // await: pause the execution of function until the response is received
    // res.json(): reads the response body and parse it as JSON
    // { results }: assume the res.json has an object named results, use {} to just get this certain object
    const { results } = await res.json();

    // Clear result
    result.innerHTML = '';

    results.forEach(user => {
        const li = document.createElement('li');

        listItems.push(li);

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}>"
            <div class="user-info"
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;

        result.appendChild(li);
    }) 
    
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    })
}