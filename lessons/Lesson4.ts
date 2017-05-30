//PageObjects
import { browser, element, By, $ } from 'protractor'

export class SearchPage { //экспортируем в spec.ts все методы
    private searchResults

    constructor() {
        this.searchResults = $

    }

    search(text: string) { //объявляем метод который принимает только тип строка
        let searchField = $('input.form-control')
        searchField.sendKeys(text)
        browser.sleep(2000)
        $('span.input-group-btn button.btn.btn-primary').click()

    }


} 