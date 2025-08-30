// Example JS to simulate live updates (replace with ESP32 data later)
function updateReadings() {
  const vata = Math.floor(Math.random() * 20) + 60;
  const pitta = Math.floor(Math.random() * 20) + 60;
  const kapha = Math.floor(Math.random() * 20) + 60;
  const temp = (Math.random() * 2 + 97).toFixed(1);

  // Update DOM
  document.getElementById("vata-bpm").textContent = vata + " bpm";
  document.getElementById("pitta-bpm").textContent = pitta + " bpm";
  document.getElementById("kapha-bpm").textContent = kapha + " bpm";

  document.getElementById("vata-gauge").style.width = vata + "%";
  document.getElementById("pitta-gauge").style.width = pitta + "%";
  document.getElementById("kapha-gauge").style.width = kapha + "%";

  document.getElementById("temperature").textContent = temp + " °F";

  // Health status logic
  let status = "Balanced";
  if (vata > 80 || pitta > 80 || kapha > 80) status = "Imbalanced";
  document.getElementById("status").textContent = status;
  document.getElementById("status").className =
    status === "Balanced" ? "text-green-600 font-bold" : "text-red-600 font-bold";
}

// Refresh every 5 seconds
setInterval(updateReadings, 5000);
