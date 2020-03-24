const log = async (req, res, next) => {
  try {
    console.log(`originalUrl : ${req.originalUrl}`)
    return next()
  } catch (error) {
    return res.status(500).json({ message: `${JSON.stringify(error)}` })
  }
}
module.exports = log
