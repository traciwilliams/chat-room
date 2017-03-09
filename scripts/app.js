window.onload = function() {
	console.log("old school chatroom connected")
}


function enterComment(){
	var userComment = document.getElementById("comments").value;
	var yourUsername = document.getElementById("yourUsername").value;

	var text = yourUsername + " says " + userComment;

	var displayContent = document.getElementById("content");

	displayContent.innerHTML = text;

}