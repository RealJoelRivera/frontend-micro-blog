document.addEventListener("DOMContentLoaded", async () => {
   console.log("DOM fully loaded and parsed");
const url = 'http://localhost:3000/api/v1/users'

const microData = await data()

const formContainer = document.querySelector('#form-container')
addPost = false;
const usersName = document.querySelector('#usersname')

const postList = document.querySelector('#post-list')

const mainPost = document.querySelector('#main-post');

const postForm = document.querySelector('#post-form')
const newBtn = document.querySelector('#new-post-btn')


newBtn.addEventListener('click', () => {
  // hide & seek with the form
  addPost = !addPost
  if (addPost) {
    postForm.style.display = 'block'
    // submit listener here
  } else {
    postForm.style.display = 'none'
  }
})



const renderShowPage = (blog) => {
  blog.forEach(showPage)
}




function showPage(blog) {
  // debugger
  blog.posts.forEach(post => {
    postList.innerHTML = `<li data-id=${post.id}>${post.title}</li>`
  });
}


async function data() {
  const response = await fetch(url)
  const jsonResponse = await response.json();
  return jsonResponse
}


console.log(microData)


renderShowPage(microData);


 });
