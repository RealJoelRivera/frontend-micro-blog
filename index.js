document.addEventListener("DOMContentLoaded", async () => {
   console.log("DOM fully loaded and parsed");
const url = 'http://localhost:3000/api/v1/users'

const microData = await data()

const commentDiv = document.querySelector('#comment-div')


function appHTML(app) {
}


async function data() {
  const response = await fetch(url)
  const jsonResponse = await response.json();
  return jsonResponse
}









 });
