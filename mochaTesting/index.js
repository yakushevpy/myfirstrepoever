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
		return chai.request(app)
  			.post('/user/me')
			.type('form')
			.send({
    			'_method': 'put',
    			'password': '123',
    			'confirmPassword': '123'
  			})
	},
};
