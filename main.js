window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApi = 'https://visitorscount.azurewebsites.net/api/HttpTrigger1?code=MToOWt/DrkPf6691/5HNogU0uN6XsdYiHjrQ5y7emqZU53Y/7hsVDA=='; 

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called function API.");
        count = response;
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}