export function printPeople() {
	let people = ['John', 'Jenniffer', 'Mom'];	
	let message = ''
	people.map(person => { message += '<p>Hello there, ' + person + '</p>'});
	return message;
}

exports = printPeople;

document.write(printPeople());