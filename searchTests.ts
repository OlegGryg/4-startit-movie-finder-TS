import { browser, element, By, Key, WebDriver } from 'protractor'

describe('SearchTest', function () {

    const URL = 'https://movies-finder.firebaseapp.com/'
    it('CheckSearchResults', function () { //проверяем появление блока 'Search Results', после ввода запроса в поле поиска и нажатия на кнопку "Go!"
        let locator = By.css('input.form-control')
        let searchField = element(locator)

        browser.get(URL)
        browser.sleep(3000)

        searchField.sendKeys('HELLO')
        browser.sleep(3000)
        element(By.css('span.input-group-btn button.btn.btn-primary')).click()
        browser.sleep(3000)
        let searchResult = element(By.className('orange-text'))
        expect(searchResult.isDisplayed()).toBeTruthy()
        expect(searchResult.getText()).toEqual('Search Results')
    })


    it('SearchMovie', function () { //проверяем находит ли поиск фильмы по соответствующему запросу
        let locator = By.css('input.form-control')
        let searchField = element(locator)
        browser.get(URL)
        browser.sleep(2000)

        searchField.sendKeys(5)
        browser.sleep(2000)
        element(By.css('span.input-group-btn button.btn.btn-primary')).click()
        browser.sleep(2000)
        let reflectTitle = element.all(By.css('movies>.jumbotron+div movie-card')) //возвращаем все карточки из блока Search Results
        reflectTitle.each(function (elem, indx) {
            console.log('Doing assertion for element with index - ', indx)
            expect(elem.getText()).toContain('5')
        })
    })

    it('emptyField', function () { //проверка появления блока 'Search Results', при пустом поле поиска
        let locator = By.css('input.form-control')
        let searchField = element(locator)
        browser.get(URL)
        browser.sleep(2000)
        element(By.css('span.input-group-btn button.btn.btn-primary')).click()
        browser.sleep(2000)
        let searchResult = element(By.className('orange-text'))
        expect(searchResult.getText()).not.toContain('Search Results')
    })


    it('Backspace', function () { //изменение запроса кнопкой "Backspace""
        let locator = By.css('input.form-control')
        let searchField = element(locator)
        browser.get(URL)
        browser.sleep(2000)
        searchField.clear();
        searchField.sendKeys('Hello')
        searchField.sendKeys(Key.BACK_SPACE);
        console.log(searchField.getAttribute('ng-reflect-model'));
        expect(searchField.getAttribute('ng-reflect-model')).toContain('Hell')
    })

    // it('Backspace', function () { //изменение запроса кнопкой "Delete""
    //     let locator = By.css('input.form-control')
    //     let searchField = element(locator)
    //     browser.get(URL)
    //     browser.sleep(2000)
    //     searchField.clear();
    //     searchField.sendKeys('Hello')
    //     searchField.select()
    //     searchField.sendKeys(Key.DELETE);
    //     // browser.sleep(4000)
    //     //searchField.clear();
    //     browser.sleep(4000)
    //     expect(searchField.getAttribute('ng-reflect-model')).toContain('')
    // })

    // it('', function () { // проверка повторного использования поиска после неудачного вывода результатов поиска
    //     // проверка повторного использования поиска после успешного вывода результатов поиска
    //     let locator = By.css('input.form-control')
    //     let searchField = element(locator)
    //     browser.get(URL)
    //     browser.sleep(2000)


    })
})