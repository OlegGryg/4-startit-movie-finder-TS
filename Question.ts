import { browser, element, By, Key, WebDriver, Browser } from 'protractor'
let searchResult = element.all(By.css('movies>.jumbotron+div movie-card'))
    let goButton = element(By.buttonText('Go!'))
    const URL = 'https://movies-finder.firebaseapp.com/'
const arrForNumbers = ['127', '32767', '2147483647', '9223372036854775807'];
it('TestNumbers', () => {
        let locator = By.css('input.form-control')
        let searchField = element(locator)
        browser.get(URL)
        browser.sleep(2000)

        for (var i = 0; i <= arrForNumbers.length;) {
            // for (var j = 0; j < arrForNumbers[i].length; j++) {
            searchField.sendKeys(arrForNumbers[i])
            browser.sleep(2000)
            goButton.click
            searchResult.each(function (elem, indx) {
                expect(elem.getText()).toContain(arrForNumbers[i])
                browser.sleep(2000)
            })
        //  }
    }
})

// it('', function () { // проверка повторного использования поиска после неудачного вывода результатов поиска
    //     // проверка повторного использования поиска после успешного вывода результатов поиска
    //     let locator = By.css('input.form-control')
    //     let searchField = element(locator)
    //     browser.get(URL)
    //     browser.sleep(2000)