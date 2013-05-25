test('コンストラクタのテスト', function(){

	var c = new Calculator();
	ok( c instanceof Calculator, 'new演算子をつけてコンストラクタを呼ぶ。');

	var c = Calculator();
	ok( c instanceof Calculator, 'new演算子をつけてコンストラクタを呼ぶ。');

});
	
test('getExpressionのテスト',function(){

	var c = new Calculator();
	var result = c.getExpression();
	
	equal(result, '');
	
});

test('末尾に追加するメソッドのテスト',function(){

	var c = new Calculator();
	c.append('1');
	
	equal(c.getExpression(), '1');
	
});

test('末尾の文字列を削除するテスト',function(){

	var c = new Calculator();
	var result = c.getExpression();
	c.clearEntry();
	
	equal(result, result.substring(0,result.length-1));
});

test('保持している式を初期化するテスト',function(){

	var c = new Calculator();
	c.clear();

	equal(c.getExpression(), '');
});

test('計算を行うテスト',function(){

	var c = new Calculator();
	c.Calculator();
	
	equal(c.getExpression(), );
	

});
