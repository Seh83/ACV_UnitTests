/*
 * 
 * Angular Service Related Unit Test;
 */
describe('Loan Service Unit Tests', function() {
	var loanService;
	beforeEach(function() {
		module('app');
	});

	beforeEach(inject(function(LoanService) {
		loanService = LoanService;
	}));

	it("Checks the status of the loan", function() {
		expect(loanService.loanStatus()).toMatch("Approved");
	});
	
	it("Checks the Loaned Amount", function() {
		expect(loanService.loanAmount()).toBe(1200);
	});
	
	it("Checks LoanAmount method is called before LoanStatus method or not?", function() {
		var testLoan = new LoanService();
		spyOn(testLoan, "loanAmount");
		testLoan.loanStatus();
		expect(testLoan.loanAmount).toHaveBeenCalled();
	});	
	
	it("Checks if the LoanDetailsObject is undefined", function() {
		expect(loanService.loanDetails()).not.toBeUndefined();
	});

	it("Checks to match a specific key/value pair in the object", function() {
		expect(loanService.loanDetails().name).not.toMatch("John Smith");
	});
});

/*
 *
 * ACV String, Variable, Boolean etc., Related Unit Test;
 */
describe('ACV Realated Unit Test', function() {
	it('Returns ACV Number', function() {
		expect(acvValue()).not.toEqual(876789);
	});

	it("Expects for Borrower's name to be John Doe", function() {
		expect(borrowersName()).toBe("John Doe");
	});

	it("Expects Boolean to be True", function() {
		expect(truly("true")).toEqual(true);
	});

	it("Expects Boolean to be False", function() {
		expect(falsy()).not.toEqual(true);
	});

});
/*
 *
 * ACV Objects Related Unit Test;
 */
describe("Object / Data Related Unit Tests", function() {
	it("Compares old and new objects", function() {
		expect(carDetails_new()).toEqual(carDetails_old());
	});

	it("Checks Object if its undefined", function() {
		expect(carDetails_new()).not.toBeUndefined();
	});

	it("Checks to match a specific key/value pair in the object", function() {
		expect(carDetails_old().Make).not.toMatch("Ferrari");
	});

	it("Checks to match a address in the object", function() {
		expect(borrowersObject().Address).toMatch("123 Main St");
	});
})