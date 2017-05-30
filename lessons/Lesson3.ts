console.log('######')
describe('FirstDescribe ', function () {
    console.log('inside describe')

    beforeAll(function () { //запускаем перед всем тестом
        console.log('beforeAll')
    })

    afterAll(function () { //запускаем в конце теста
        console.log('afterAll')
    })

    beforeEach(function () { // запускаем перед каждым тесткейсом запускаем get
        console.log('BEFORE EACH')
    })

    afterEach(function () { // запускаем после каждого тесткейса чистим куки
        console.log('AFTER EACH')
    })

    it('1', function () {
        console.log('Test1')

    })

    it('2', function () {
        console.log('Test2')

        describe('SecondDescribe', function () {// к этому describe будут использованы все функции с первого describe + внутри самого describe'SecondDescribe'
            beforeEach(function () {
                console.log('SecondDescribe')
            })

            it('3', function () {
                console.log('3')
                let world = 'world'
                console.log(world + 1)

                let myTemplateString = `hello ${world}` // `текст` S{переменная, текст}  

                console.log(myTemplateString)
                console.log(`Text ${myTemplateString}`)

                expect(true).toBe(false, `Описание ошибки ${myTemplateString}`)
            })

        })
    })
})