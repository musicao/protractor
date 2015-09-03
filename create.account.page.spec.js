/**
* @file create.account.page.spec.js
*/

var CreateAccount = require('./pages/create.account');

ddescribe ('Create Account', function () {

	beforeEach (function () {
        CreateAccount.get('create-account');
    });

	it ('verify Title', function () {
		CreateAccount.checkTitle();
	});

	it ('verify quantity fields inputs on page', function () {
		CreateAccount.checkInputs(); 
	});

	it ('try create account with password smaller six caracters', function () {
		CreateAccount.checkPasswordSmallerSixCaracteres();
	});

});