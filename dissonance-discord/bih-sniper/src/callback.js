const posts = [
	{
		title: "Post One",
		body: "This is post One",
	},
	{
		title: "Post Two",
		body: "This is post Two",
	},
];

function getPosts() {
	setTimeout(() => {
		let output = "";
		posts.forEach((post, index) => {
            output += `<li> ${post.title} </li>`;
			console.log(index + post + output);
		});
		// document.body.innerHTML = output;
	}, 1000);
}

function createPost(post) {
	setTimeout(() => {
		posts.push(post);
        useCallback(
            () => {
                callback
            },
            [input],
        )();
	}, 1000);
}

getPosts();
createPost( { title: 'Post Three', body: 'This is Post Three'});
// console.log(posts);
