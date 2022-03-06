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

describe('Rick and Morty', function(){
    it('Проверить, что id = 5 соответствует персонаж по имени Jerry Smith',  async function(){
        let name = await fetching_name(5);
        assert.equal(name, 'Jerry Smith');
    });
    it('Проверить, что id = 5 соответствует персонаж мужского пола', async function(){
        let gender = await fetching_gender(5);
        assert.equal(gender, 'Male');
    });
});

describe('Фетчинг POST запроса', function(){
    it('Проверить создание продукта для клиента', async function(){
        let answer = await product_creating(1631959);
        expect(answer).to.have.status(200);
    })
})

