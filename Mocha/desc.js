describe('Возведение x в степень n', function(){
    it('2 в степени 3 = 8', function(){
        assert.equal(pow(2, 3), 8);
    });
    it('3 в степени 2 = 9', function(){
        assert.equal(pow(3, 2), 9);
    });
});

describe('Вычитание x - y', function(){
    it('10 - 5 = 5', function(){
        assert.equal(minus(10,5),5);
    });
    it('652 - 100 = 552', function(){
        assert.equal(minus(652,100),552);
    });
});


