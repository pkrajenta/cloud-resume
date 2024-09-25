const counter = document.querySelector(".counter-number")
async function updateCounter(){
    let response = await fetch("https://ilxohwloodyhxldaua2pq6qbpu0ldfdj.lambda-url.eu-central-1.on.aws/")
    let data = await response.json();
    CountQueuingStrategy.innerHTML = ' Views: ${data}';
}

updateCounter();