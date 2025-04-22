let calculation = localStorage.getItem("calculation") || "";

displayCalculation();

function updateCalculation(value) {
  calculation += value;
  displayCalculation();
  localStorage.setItem("calculation", calculation);
}

function displayCalculation() {
  document.querySelector(".js-calculation").innerHTML =
    calculation.length > 0 ? calculation : "0";
}

document.querySelector(".blue-button").onclick = function () {
  if (calculation.length > 0) {
    calculation = calculation.slice(0, -1);
  }
  displayCalculation();
  localStorage.setItem("calculation", calculation);
};

document.querySelector(".large-button").onclick = function () {
  calculation = "";
  displayCalculation();
  localStorage.setItem("calculation", calculation);
};

document.querySelector(".red-button").onclick = function () {
  try {
    const result = eval(calculation);
    calculation = result !== undefined ? result.toString() : "";
  } catch (e) {
    calculation = "Error";
  }
  displayCalculation();
  localStorage.setItem("calculation", calculation);
};

// Add the ability to perform calculations using the keyboard, which enhances the user experience.
document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
    updateCalculation(key);
  } else if (key === "Backspace") {
    document.querySelector(".blue-button").click();
  } else if (key === "Enter") {
    document.querySelector(".red-button").click();
  } else if (key === "Escape") {
    document.querySelector(".large-button").click();
  }
});

// "use strict"; is a directive used in JavaScript that activates strict mode in the code.
("use strict");
// Theme change function
function init() {
  const effects = {
    1: "effect1",
    2: "effect2",
    3: "effect3",
  };

  document.getElementById("option").addEventListener(
    "change",
    function () {
      Object.values(effects).forEach((effect) =>
        document.body.classList.remove(effect)
      );

      const selectedEffect = effects[this.value];
      if (selectedEffect) {
        document.body.classList.add(selectedEffect);
      }
    },
    false
  );
}

init();
