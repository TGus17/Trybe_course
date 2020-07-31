

function complainMessage() {
	let personName = document.querySelector("#name");
	alert("I told you not to do that " + personName.value);
}

function typeAndScream() {
	document.getElementById("audio").play();
	personName = document.getElementById("name").value;
}

function goDark() {
	var body = document.body;
	if (body.className == "") {
		body.className = "dark";
	}
	else {
		body.className = "";
	}

}

function finishTheStory() {
	document.getElementById("story").innerHTML = "So I carefully searched the damp dungeon. There you are! I grinned a smile with all 98 of my gleaming teeth. Dinner time!";
}