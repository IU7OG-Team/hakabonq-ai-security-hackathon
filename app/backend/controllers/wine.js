exports.getWineMark = (_req, res, _next) => {
  res.status(200).json({ message: "OK", mark: 5 });
};
