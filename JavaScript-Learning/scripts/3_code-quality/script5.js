function task3_5(){
    task1desc = `   Что не так с этим тестом?`;

    confirm(`Задание:\n${task1desc}\n`);
    task3_5_1();
};

function task3_5_1() {
    alert(`
describe('pow', function()) {

    let x = 5;

    let result = x;
    it('5 в степени 1 = 5') {
        assert.equal(pow(5,1), result);
    }
    result *=x
    it('5 в степени 2 = 25') {
        assert.equal(pow(5,2), result);
    }
    result = x*x*x
    it('5 в степени 3 = 125') {
        assert.equal(pow(5,3), result):
    }
}
`)
};





