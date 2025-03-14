async function fetchData() {
    let tableBody = document.getElementById("carrosCadastrados")

    tableBody.innerHTML = "<td colspan='5' class='text-center'>Carregando Carros...</td>";

    try {
        const response = await fetch("https://carangas.herokuapp.com/cars")

        const data = await response.json()
        const cars = data
        console.log(cars);

        tableBody.innerHTML = "";

        cars.reverse().forEach((car)=> {
            const row = `
            <tr data-id="${car.id}">
                <td>${car.brand}</td>
                <td>${car.name}</td>
                <td>${car.price}</td>
                <td>${car.gasType}</td>
            `            
            tableBody.innerHTML += row;
        });
        
    } catch (error) {
        
    }  
}

fetchData();