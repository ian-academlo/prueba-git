const { ian } = require("../models");

class IanServices {
  static async add(friend) {
    try {
      const result = await ian.create(friend);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      const result = ian.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    console.log(id);
    try {
      const result = ian.findByPk(id);
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = IanServices;
