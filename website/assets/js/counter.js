const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        let response = await fetch("https://ilxohwloodyhxldaua2pq6qbpu0ldfdj.lambda-url.eu-central-1.on.aws/");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        let data = await response.json();
        counter.innerHTML = `Views: ${data.views}`; // Assuming data contains a 'views' field
    } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
        counter.innerHTML = "Error loading views.";
    }
}

updateCounter();