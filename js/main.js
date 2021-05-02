window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApi = 'https://craigtwall-functionapp.azurewebsites.net/api/HttpTrigger1?code=vslynYyIqCHFagj1gsKuxRdBiCyEl0a2bevFqaNI8K5Yy0hII6JxEA=='; 

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}