// Battery Status function
function batteryImage(batteryLevel, sustainableEnergyLevel) {
    var image = document.getElementById("battery");
    var batteryImgUrl = 'assets/images/battery-';
    
    console.log(batteryLevel);
    console.log(sustainableEnergyLevel);

    switch (sustainableEnergyLevel) {
        // all of the battery is using sustainable energy
        case 100:
            batteryImgUrl += '100';
            break;
        // half of the batter is using sustainable energy
        case 50:
            batteryImgUrl += '50';
            break;
        // none of the battery is using sustainable energy
        default:
            batteryImgUrl += '0';
            break;
    }

    // battery level
    switch (batteryLevel) {
        case 100:
            batteryImgUrl += '-100';
            break;
        case 50:
            batteryImgUrl += '-50';
            break;
        default:
            batteryImgUrl += '-0';
            break;
    }
    
    batteryImgUrl += '.png';
    image.src = batteryImgUrl;
    image.alt = "Battery Image";
}
