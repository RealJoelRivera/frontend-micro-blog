document.addEventListener("DOMContentLoaded", () =>{

const postUrl = 'http://localhost:3000/api/v1/posts'
const sideBar = document.querySelector("#sidenavlist")

fetch(postUrl)
.then(res => res.json())
.then(posts => {
	posts.forEach(displayPost)
})


	function displayPost(post){
			let postLi = document.createElement("li")
	postLi.innerText = post.title
	postLi.className= 'note-li'
	postLi.dataset.id = post.id
  sideBar.append(postLi)

	let delBtn = document.createElement('button')
	delBtn.className = 'delete-button'
	delBtn.dataset.id = post.id
	postLi.append(delBtn)

}

})
