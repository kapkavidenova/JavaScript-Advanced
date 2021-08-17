function loadRepos() {
	let username = document.getElementById('username').value;
	const url = `https://api.github.com/users/${username}/repos`;

	fetch(url)
	.then((response) => {
		if(response.status == 404){
			throw new Error('Not Found');
		}
		return response.json();
	})
	.then((data)=>{
		let ul = document.getElementById('repos');
		ul.innerHTML = '';

		data.forEach(el => {
			let a = document.createElement('a');
			let li = document.createElement('li');
			a.setAttribute('href',el.html_url);
			a.textContent = el.full_name;
			li.append(a);
			ul.append(li);
		});
	})
	.catch(err=>{
		alert(err.message)
	});
}
