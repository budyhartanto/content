const from = document.queryselector("form");
form.addEventListener("submit", (event) =>){
	event.preventDefault();
	const username = document.queryselector("#username").value;
	const password = document.queryselector("#password").value;
	console.log(username, password);
	
}