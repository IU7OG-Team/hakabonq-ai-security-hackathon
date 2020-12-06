const getModelData = () => {
  fetch("http://195.19.36.69:8080/wine", {
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
      const markDivs = document.querySelectorAll(".mark,.mark-img");
      if (markDivs) {
        for (const el of markDivs) {
          el.remove();
        }
      }

      const resMark = resData.mark;
      let backgroundColor;
      let death;

      if (resMark >= 3 && resMark <= 4) {
        backgroundColor = "#e33e5c";
        death = true;
      } else if (resMark >= 5 && resMark <= 6) {
        backgroundColor = "#ffd782";
      } else {
        backgroundColor = "#3cd782";
      }

      const msgField = document.body.querySelector("h2");
      msgField.textContent = "Your wine quality is";

      const resField = document.createElement("h2");
      resField.classList.add("matter-h2", "mark");
      resField.style.backgroundColor = backgroundColor;
      resField.textContent = resMark;

      msgField.after(resField);
      if (death) {
        const imgField = document.createElement("img");
        imgField.src = "/img/death.png";
        imgField.classList.add("mark-img");
        resField.after(imgField);
        imgField.after(document.createElement("br"));
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    })
    .catch((err) => {
      console.log(document.getElementById("facid"));
      console.log(err);
    });
};

document.getElementById("get-data-btn").addEventListener("click", getModelData);
