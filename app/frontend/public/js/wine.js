const getModelData = () => {
  fetch("http://localhost:8080/wine")
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
    .catch((err) => console.log(err));
};

document.getElementById("get-data-btn").addEventListener("click", getModelData);
