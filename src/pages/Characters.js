const axios = require("axios")

function Get() {
  axios({
    method: "get",
    url: "https://rickandmortyapi.com/api/character/",
  })
    .then(res => console.log(res.data))
    .catch(err => console.error(err))
}
