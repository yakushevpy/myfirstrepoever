
module.exports = {
	sayHello: function() {
		return 'hello';	
	},
	addNumbers: function(value1,value2) {
		return value1 + value2;
	},
	getCharacter: function(number) {
		let url = 'https://rickandmortyapi.com/api/character/'+ +number;
		return chai.request(app)
  			.get(url);
    },
};
