let fetchdata = async () => {
    let url = 'http://localhost:3000/movieticket';
    let res = await fetch(url, { method: 'GET' });
    let data = await res.json();

    const tbody = document.querySelector('#hii tbody');
    tbody.innerHTML = ''; // Clear previous rows

    data.forEach((e) => {
        tbody.innerHTML += `
            <tr>
                <td>${e.name}</td>
                <td>${e.age}</td>
                 <td>${e.location}</td>
                  <td>${e.person}</td>
                   <td>${e.price *e.person}</td>
                
                <td onclick="delet('${e.id}')">Delete</td>
            </tr>
        `;
    });
};

let delet = async (id) => {
    let url = `http://localhost:3000/movie%20ticket/${id}`;
    let res = await fetch(url, { method: 'DELETE' });
}



// POST
let book = () => {
    let Name = document.querySelector("#name").value.trim();
    let Age = document.querySelector("#age").value.trim();
    let Location = document.querySelector("#location").value.trim();
    let Person = document.querySelector("#person").value.trim();
    
    let url =  'http://localhost:3000/movieticket';

   fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: Name,
            age: Age,
            location: Location,
            person: Person,
            price: 500,
            
        })
    })
    
    location.href='index.html'
    return false
}