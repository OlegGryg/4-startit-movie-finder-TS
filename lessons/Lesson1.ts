import {browser, element, By} from 'protractor'

describe('Test', function () { // "()=>"" === function
    //  it('First test', function () {
    //     const URL = 'https://movies-finder.firebaseapp.com/' //const - неизменяемая переменная
    //     browser.get(URL)
    //     browser.sleep(10000) 
    //     expect(browser.getCurrentUrl()).toEquel(URL);
    //     // getCurrentUrl() возвращаем текущий url с браузера и сравниваем открытый url и в ''
    //     expect(browser.getTitle()).toEquel('Movies Finder'); // проверка Тайтла
    //         });

/*it('First test', function () {
        const URL = 'https://movies-finder.firebaseapp.com/' //const - неизменяемая переменная
        browser.get(URL)
        browser.sleep(10000) 

        let searchField = element(By.css('input.form-control')) //поиск элемента на сайте
        expect(searchField.isPresent()).toBeTruthy() // если элемент есть в дом-дереве 
        expect(searchField.isDisplayed()).toBeTruthy() //проверяет элемент на отображение на сайте. Ошибку получим только на этой строке
            }); */
/*it('First test', function () {
        const URL = 'https://movies-finder.firebaseapp.com/' //const - неизменяемая переменная
        browser.get(URL)
        browser.sleep(10000) 

        let searchField = element(By.css('input.form-control')) //поиск элемента на сайте
        expect(searchField.getAttribute('placeholder')).toEqual('Search for movies...') // получаем атрибут из HTML 
        
            });*/

it('Second test', function () {
        let locator = By.css('input.form-control')
        let searchField = element(locator)
        const URL = 'https://movies-finder.firebaseapp.com/' //const - неизменяемая переменная
        browser.get(URL)
        browser.sleep(3000) 

        searchField.sendKeys('Hello World') // проверяем ввод строки по одному символу
        browser.sleep(10000)
        element(By.css('span input-group-btn btn btn-primary')).click()
         browser.sleep(10000)
            });
});
//# sourceMappingURL=spec.js.map
