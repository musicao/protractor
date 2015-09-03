/**
* @file create.account.js
*/

var CreateAccount = function () {

	 
	this.mainElements = { 
		title: element(by.css('h1')),
		inputs: element.all(by.css('.form-control')),
		createAccountEmail : element(by.css('#element-create-account-email')), 
		createAccountUsername : element(by.css('#element-create-account-username')), 
		createAccountPassword : element(by.css('#element-create-account-password')), 
		createAccountPasswordConfirm : element(by.css('#element-create-account-password-confirm')), 
		

	};
	var createAccountSubmit  = element(by.css('#element-create-account-submit'));

	this.get = function (url) {
		browser.get(url);
	};

	this.checkTitle = function () {
		expect(this.mainElements['title'].isPresent()).toBe(true);
	 };
	this.checkInputs = function () {
		expect(this.mainElements['inputs'].count()).toBe(4);
	 };
	 this.checkPasswordSmallerSixCaracteres = function () {
		this.mainElements['createAccountEmail'].sendKeys("teste@teste.com");	
		this.mainElements['createAccountUsername'].sendKeys("teste");
		this.mainElements['createAccountPassword'].sendKeys("12345");
		this.mainElements['createAccountPasswordConfirm'].sendKeys("12345");
		createAccountSubmit.click();
		expect(element(by.repeater('error in errors')).getText()).toEqual('Password must have at least 6 characters.');


	 };

};

module.exports = new CreateAccount();

/*
	*imprimir o conteudo do array?
	* pegar elementos pelo tipo
*/