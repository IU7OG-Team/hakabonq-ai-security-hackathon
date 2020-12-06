const path = require("path");
const exec = require("child-process-promise").exec;

exports.getWineMark = (req, res, _next) => {
  const fixedAcidity = +req.body.fixedAcidity;
  const volatileAcidity = +req.body.volatileAcidity;
  const citricAcid = +req.body.citricAcid;
  const residualSugar = +req.body.residualSugar;
  const chlorides = +req.body.chlorides;
  const freeSO2 = +req.body.freeSO2;
  const totalSO2 = +req.body.totalSO2;
  const density = +req.body.density;
  const ph = +req.body.ph;
  const sulphates = +req.body.sulphates;
  const alcohol = +req.body.alcohol;

  exec(
    `python ${path.join(
      __dirname,
      "..",
      "scripts",
      "evaluate.py"
    )} ${fixedAcidity} ${volatileAcidity} ${citricAcid} ${residualSugar} ${chlorides} ${freeSO2} ${totalSO2} ${density} ${ph} ${sulphates} ${alcohol}`
  )
    .then((data) => res.status(200).json({ message: "OK", mark: +data.stdout.trim() }))
    .catch((err) => res.status(500).json({ message: err.message, mark: 0 }));
};
