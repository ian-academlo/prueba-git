const IanServices = require("../services/ian.services");

const getFriendById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const friend = await IanServices.getById(id);
    res.json(friend);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getFriendById,
};
