import axios from "axios";

export default class Places {
  static async getAll() {
    try {
      const response = await axios.get(
        "https://bandaumnikov.ru/api/test/site/get-index"
      );
      return response.data.data;
    } catch (err) {
      console.log(err);
    }
  }

  static async getOne(id) {
    try {
      const response = await axios.get(
        `https://bandaumnikov.ru/api/test/site/get-view?id=${id}`
      );
      return response.data.data;
    } catch (err) {
      console.log(err);
    }
  }

  static async getRandom() {
    try {
      const totalPlaces = await Places.getAll();
      const randomID = Math.floor(Math.random() * totalPlaces.length);
      const res = await Places.getOne(randomID);
      return res;
    } catch (err) {
      console.log(err);
    }
  }
}
