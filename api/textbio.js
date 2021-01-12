module.exports = (req, res) => {
  let data = {
	name: "Paolo",
	surname: "LadyOscar",
	role: "Boss"
  }
  res.json(data)
}
