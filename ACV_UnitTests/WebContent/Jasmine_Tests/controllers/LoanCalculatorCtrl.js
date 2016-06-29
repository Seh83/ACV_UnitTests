angular
    .module('app')
    .controller('LoanCalculatorController', LoanCalculatorController);

LoanCalculatorController.$inject = ['LoanService'];

function LoanCalculatorController(LoanService){
	var vm = this;
	
	this.loanStatus = loanStatus;
	this.loanAmount = loanAmount;
	this.approve = null;
	
	function loanStatus(){
		LoanService.loanStatus();
	}
	
	function loanAmount(){
		LoanService.loanAmount();
	}
	
	
}