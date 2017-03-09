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

function clearComment() {
	var userComment = document.getElementById("comments");
	var yourUsername = document.getElementById("yourUsername");

	var displayContent = document.getElementById("content");

	userComment.innerHTML = "";
	yourUsername.innerHTML = "";
	displayContent.innerHTML = "";
	

	userComment.reset;
	yourUsername.reset;
	displayContent.reset;


	
	//holder = userComment + yourUsername + displayContent; 


	//holder.innerHTML = ""; //clears the holder div
	//holder.reset; //resets holder
	
}