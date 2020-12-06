const validateParameter = (val, max, min) => {
  if (isNaN(val)) {
    alert("Parameter should be a number");
    return false;
  }
  if (val > max || val < min) {
    alert(`Invalid parameters provided. Allowed values are from ${min} to ${max}`);
    return false;
  }
  return true;
};

const validateParameterListener = (id, max, min) => {
  const parameter = document.getElementById(id);
  if (!validateParameter(parameter.value.trim(), max, min)) {
    parameter.style.backgroundColor = "#ff726b";
  } else {
    parameter.style.backgroundColor = "#ffffff";
  }

  const getDataBtn = document.getElementById("get-data-btn");
  const inputs = document.querySelectorAll("input");
  let disable = false;
  for (const el of inputs) {
    if (el.style.backgroundColor == "rgb(255, 114, 107)" || !el.value) {
      disable = true;
      break;
    }
  }

  if (disable) {
    getDataBtn.disabled = true;
  } else {
    getDataBtn.disabled = false;
  }
};

document
  .getElementById("facid")
  .addEventListener("change", validateParameterListener.bind(null, "facid", 15.6, 4.9));

document
  .getElementById("vacid")
  .addEventListener("change", validateParameterListener.bind(null, "vacid", 1.58, 0.12));

document
  .getElementById("cacid")
  .addEventListener("change", validateParameterListener.bind(null, "cacid", 1, 0));

document
  .getElementById("rsugar")
  .addEventListener("change", validateParameterListener.bind(null, "rsugar", 15.5, 0.9));

document
  .getElementById("chlorides")
  .addEventListener("change", validateParameterListener.bind(null, "chlorides", 0.61, 0.01));

document
  .getElementById("fsdioxide")
  .addEventListener("change", validateParameterListener.bind(null, "fsdioxide", 72, 1));

document
  .getElementById("tsdioxide")
  .addEventListener("change", validateParameterListener.bind(null, "tsdioxide", 289, 6));

document
  .getElementById("density")
  .addEventListener("change", validateParameterListener.bind(null, "density", 1, 0.99));

document
  .getElementById("ph")
  .addEventListener("change", validateParameterListener.bind(null, "ph", 4, 2.74));

document
  .getElementById("sulphates")
  .addEventListener("change", validateParameterListener.bind(null, "sulphates", 2, 0.33));

document
  .getElementById("alcohol")
  .addEventListener("change", validateParameterListener.bind(null, "alcohol", 14.9, 8.4));

document.getElementById("get-data-btn").addEventListener("mouseenter", validateAll);
