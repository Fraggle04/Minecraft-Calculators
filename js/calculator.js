function loadClassCalculator(className, abilities) {
  const strInput = document.getElementById("strInput");
  const output = document.getElementById("output");

  function calculate() {
    const strLvl = parseFloat(strInput.value);
    if (isNaN(strLvl) || strLvl < 0) {
      output.innerHTML = "<p>Please enter a valid Strength Level.</p>";
      return;
    }

    let html = `<h2>${className} Abilities</h2><ul>`;
    for (const ability of abilities) {
      const dmg = (ability.dmg * strLvl).toFixed(2);
      const stam = (ability.stam * strLvl).toFixed(2);
      html += `<li><strong>${ability.name}</strong>: <br>• ${dmg} DMG <br>• ${stam} stamina</li>`;
    }
    html += "</ul>";
    output.innerHTML = html;
  }

  strInput.addEventListener("input", calculate);
  calculate(); // Run once on load
}
