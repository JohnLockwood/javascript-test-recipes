module.exports = function(name) {
	if (!name) {
		name = "World";
	}
	return `Hello, ${name}!`;
}