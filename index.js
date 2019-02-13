document.addEventListener("DOMContentLoaded", async () => {
   console.log("DOM fully loaded and parsed");
const url = 'http://localhost:3000/api/v1/users'

const microData = await data()

const commentDiv = document.querySelector('#comment-div')


function appHTML(app) {
commentDiv.innerHTML = (`<form action="/action_page.php" id="usrform">
Name: <input type="text" name="${app.name}">
<input type="submit">
</form>
<br>
<textarea rows="4" cols="50" name="comment" form="usrform">
Enter text here...</textarea>`)
}


async function data() {
  const response = await fetch(url)
  const jsonResponse = await response.json();
  return jsonResponse
}




appHTML(microData)




 });
