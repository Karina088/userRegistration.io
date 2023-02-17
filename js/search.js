'use strict';

function TrimStr(s) {
    s = s.replace(/^\s+/gi, '')
    return s.replace(/\s+$/g, '')
}

function FindOnPageWords(inputId) {
    let objEl = window.document.getElementById(inputId)
    let searchForm

    if (objEl) {
        searchForm = TrimStr(objEl.value)
    } else {
        alert('Введенная фраза не найдена')
        return
    }
    if (searchForm === '') {
        alert('Вы ничего не ввели')
        return
    }

    if (searchForm.length < 3) {
        alert('Для поиска нужно ввести 3 или более символов')
        return
    }

    const swiperEl = document.querySelector('.swiper-wrapper')

    if (swiperEl.innerHTML.indexOf(searchForm) === '-1')
        alert('Ничего не найдено, проверьте правильность ввода!')

    let copy_page = ""
    if (copy_page.length > 0)
        swiperEl.innerHTML = copy_page
    else copy_page = swiperEl.innerHTML

    let lastResFind = ""
    swiperEl.innerHTML = swiperEl.innerHTML.replace(eval(("/name=" + lastResFind + "/gi"), " ").toString())
    swiperEl.innerHTML = swiperEl.innerHTML.replace(eval("/" + searchForm + "/gi"), "<a name=" + searchForm + " style='background-color: yellow'>" + searchForm + "</a>")
    lastResFind = searchForm
    window.location = '#' + searchForm
}




