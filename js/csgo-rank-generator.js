function generateRandomName() {
	var keywords = {
		start: ["Supreme", "Legendary", "Distinguished", "Master", "Gold", "Silver", "First Class"],
		middle: ["Master", "Global", "First Class", "Eagle", "Guardian", "Gold", "Silver", "Supreme", "Legendary", "Distinguished"],
		end: ["Elite", "First Class", "Master", "Guardian", "I", "II", "III", "IV", "V", "Elite"]
	};

	var name = "";

	var theAddedInTheBeginning = (Math.floor(Math.random() * 2) == 0);

	if (theAddedInTheBeginning) {
		name += "The ";
	}

	var startWord = keywords.start[Math.floor(Math.random() * keywords.start.length)];
	name += startWord + " ";

	var amountMiddles = Math.floor(Math.random() * 3) + 1;
	for (var i = 0; i < amountMiddles; i++) {
		name += keywords.middle[Math.floor(Math.random() * keywords.middle.length)] + " ";
	}

	var endWord = keywords.end[Math.floor(Math.random() * keywords.end.length)];
	name += endWord;

	return name;
}

$("#generatorButton").on("click", function(){
	$("#rankText").html(generateRandomName());

	$("#congratsText").show();
	$("#rankText").show();
	$("#happyText").show();
});