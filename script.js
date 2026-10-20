console.log("Moon app is running");

const phaseName = document.getElementById("phase-name");
const moonShadow = document.getElementById("moon-shadow");
const illumination = document.getElementById("illumination");


function updateMoon(data) {
    phaseName.textContent = data.phase;
    moonShadow.style.left = data.shadowPosition;
    illumination.textContent = data.illumination + "% illuminated";
}


async function getLocation() {
    const url =
        "https://geocoding-api.open-meteo.com/v1/search?name=London&count=1&language=en&format=json";

    const response = await fetch(url);
    const data = await response.json();

    return data.results[0];
}


async function getMoonData(latitude, longitude) {
    const url =
        `https://daylighthours.app/api/v1/moon?lat=${latitude}&lng=${longitude}`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
}


async function startApp() {
    const city = await getLocation();

    console.log(city.name);
    console.log(city.latitude);
    console.log(city.longitude);

    const moon = await getMoonData(
        city.latitude,
        city.longitude
    );

    console.log(moon.phase.name);
    console.log(moon.phase.illuminationPercent);

    const shadowPosition = getShadowPosition(
        moon.phase.name,
        moon.phase.illuminationPercent
    );

    const moonForDisplay = {
        phase: moon.phase.name,
        shadowPosition: shadowPosition,
        illumination: moon.phase.illuminationPercent
    };

    updateMoon(moonForDisplay);
}

startApp();


function getShadowPosition(phaseName, illumination) {
    const phase = phaseName.toLowerCase();

    if (phase.includes("waxing") || phase.includes("first quarter")) {
        return `-${illumination}%`;

    } else if (phase.includes("waning") || phase.includes("last quarter")) {
        return `${illumination}%`;

    } else if (phase.includes("full")) {
        return "100%";

    } else {
        return "0%";
    }
}





