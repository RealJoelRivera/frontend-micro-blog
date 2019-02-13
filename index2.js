document.addEventListener("DOMContentLoaded", e => {

const sideBarDiv = document.createElement('div')
const postUl = document.createElement('ul')
postUl.className = 'post-ul'
sideBarDiv.append(postUl)

console.log(postUl)

fetch('http://localhost:3000/api/v1/posts')
.then(res => res.json())
.then(post => {
	console.log
})



})
