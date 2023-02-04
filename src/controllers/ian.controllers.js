const IanServices = require("../services/ian.services");

const getFriendById = async (req, res) => {
  try {
    const { id } = req.params;
    const friend = await IanServices.getById(id);
    res.json(friend);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getFriends = async (req, res) => {
  try {
    const friends = await IanServices.getAll(id);
    res.json(friends);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const addfriend = async (req, res) => {};

module.exports = {
  getFriendById,
  getFriends,
};
