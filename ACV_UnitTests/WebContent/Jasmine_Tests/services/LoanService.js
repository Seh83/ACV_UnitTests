angular.module('app').service('LoanService', LoanService);

LoanService.$inject = [];

function LoanService() {
};

LoanService.prototype.loanStatus = function() {
	if (this.loanAmount() > 700) {
		return "Approved";
	} else {
		return "Disapproved";
	}
}
LoanService.prototype.loanAmount = function() {
	return 1200;
}

LoanService.prototype.loanDetails = function(){
	var loanDetailObj = {
		name: "John Doe",
		loanAmt: this.loanAmount(),
		loanStatus: this.loanStatus()
	};
	return loanDetailObj;
}
