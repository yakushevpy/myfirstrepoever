const chaiHttp= require('chai-http');
const chai = require('chai');
const expect = require('chai').expect;

module.exports = {
	sayHello: function() {
		return 'hello';	
	},
	addNumbers: function(value1,value2) {
		return value1 + value2;
	},
	getRequest: function(url,value){
		return chai.request(url)
  			.get(value)
	},
	postRequest: function(url,value,body){
		return chai.request(url)
  			.post(value)
			.type('form')
			.set('X-Funtranslations-Api-Secret', '123456789')
			//.set('content-type', 'application/json')
			.send(body)
	},
};
