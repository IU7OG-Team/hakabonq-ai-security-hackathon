const getModelData = () => {
  fetch("http://localhost:8080/wine", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fixedAcidity: document.getElementById("facid").value,
      volatileAcidity: document.getElementById("vacid").value,
      citricAcid: document.getElementById("cacid").value,
      residualSugar: document.getElementById("rsugar").value,
      chlorides: document.getElementById("chlorides").value,
      freeSO2: document.getElementById("fsdioxide").value,
      totalSO2: document.getElementById("tsdioxide").value,
      density: document.getElementById("density").value,
      ph: document.getElementById("ph").value,
      sulphates: document.getElementById("sulphates").value,
      alcohol: document.getElementById("alcohol").value,
    }),
  })
    .then((res) => res.json())
    .then((resData) => {
      const markDiv = document.querySelector(".mark");
      if (markDiv) {
        markDiv.remove();
      }

      const resMark = resData.mark;
      let backgroundColor;

      if (resMark >= 3 && resMark <= 4) {
        backgroundColor = "#ffc800";
      } else if (resMark >= 5 && resMark <= 6) {
        backgroundColor = "#ffea00";
      } else {
        backgroundColor = "#1eff00";
      }

      const msgField = document.body.querySelector("h2");
      msgField.textContent = "Your wine quality is";

      const resField = document.createElement("h2");
      resField.classList.add("matter-h2", "mark");
      resField.style.backgroundColor = backgroundColor;
      resField.textContent = resMark;

      msgField.after(resField);

      window.scrollTo({ top: 0, behavior: "smooth" });
    })
    .catch((err) => {
      console.log(document.getElementById("facid"));
      console.log(err);
    });
};

document.getElementById("get-data-btn").addEventListener("click", getModelData);
