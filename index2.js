document.addEventListener("DOMContentLoaded", e => {




fetch('http://localhost:3000/api/v1/posts')
.then(res => res.json())
.then(post => {
	post.forEach(sideBar)
})

const postUl = document.querySelector('#note-list')

function sideBar (posts){

	postUl.innerHTML = `<li data-id=${posts.id} class='post'>${posts.title}</li>`

}

postUl.addEventListener('click', showPost)

function showPost(e){
  if(e.target.className === 'post'){
		

	}

}





})
