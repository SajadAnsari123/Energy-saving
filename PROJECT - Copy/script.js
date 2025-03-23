function calculateBill() {
    let power = document.getElementById("power").value;
    let hours = document.getElementById("hours").value;
    let rate = document.getElementById("rate").value;

    if (power && hours && rate) {
        let energyConsumed = (power / 1000) * hours * 30; // kWh per month
        let cost = energyConsumed * rate;

        document.getElementById("result").innerHTML = `Estimated Monthly Cost: NPR ${cost.toFixed(2)}`;
    } else {
        document.getElementById("result").innerHTML = "Please enter all values!";
    }
}

function resetFields() {
    document.getElementById("power").value = "";
    document.getElementById("hours").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("result").innerHTML = "";
}
