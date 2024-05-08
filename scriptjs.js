function send(){
	let number = "8591980438";

	let name = document.querySelector('.form-control').value;
	let email = document.querySelector('.form-control').value;
    let subject = document.querySelector('.form-control').value;
	let message = document.querySelector('.form-control').value;
    


	var url = "https://wa.me/" + number + "?text="
	+ "Name : " +name+ "%0a"
	+ "Email : " +email+ "%0a"
    + "Subject : " +subject+ "%0a%0a";
	+ "Message : " +message+ "%0a%0a";

	window.open(url, '_blank').focus();
}