function Calculator(){
	if (!(this instanceof Calculator)){
		return new Calculator();
	}
	
	this.expression = '';
	
	this.getExpression = function(){
		return this.expression;				//ŒvZ‹@‚ª•Û‚µ‚Ä‚¢‚é®‚ğæ“¾‚·‚é
	}
	
	this.append = function( ch ){
		this.expression = this.expression + ch;
	};
	
	this.clearEntry = function(){

		this.expression = this.expression.substring(0,this.expression.length-1)

	};

	this.clear = function(){

		this.expression = '';

	};
	
}