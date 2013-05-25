function Calculator(){
	if (!(this instanceof Calculator)){
		return new Calculator();
	}
	
	this.expression = '';
	
	this.getExpression = function(){
		return this.expression;				//計算機が保持している式を取得する
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