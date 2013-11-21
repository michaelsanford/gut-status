if (process.argv[2] == 'status') {

	var EOL = require('os').EOL;

	var responses = [
		"Kind of hungry.",
		"Grumbling; try `$ gut add`",
		"Just fine!",
		"Ahead of master by ",
		"Your branch is ahead of 'kitchen/master' by 2 meals.",
		"Nothing to eat, working plate clean.",
	];

	var response = responses[Math.floor(Math.random() * responses.length)];

	console.dir(response);

} else if (process.argv[2] == 'add') {

	console.log("Added " + process.argv[3]);

} else if (process.argv[2] == 'pull') {

    console.log("Forgot your " + process.argv[3] + " at home again?");

} else if (process.argv[2] == 'push') {

	console.log("Eating " + process.argv[3]);

} else if (process.argv[2] == 'clone' || process.argv[2] == 'fetch') {

	console.log("It's not nice to steal " + process.argv[3] + "from the break-room repository...");

} else if (process.argv[2] == 'merge') {

	console.log("Merging in ");

} else if (process.argv[2] == 'commit') {

	console.log("...seppuku?");

} else {

	console.log("That verb is not currently supported.");

}
