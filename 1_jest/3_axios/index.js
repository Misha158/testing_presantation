const axios = require("axios");

const getData = async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(data);
    const userIds = data.map((el) => el.id);
    return userIds;
  } catch (e) {}
};

module.exports = getData;
