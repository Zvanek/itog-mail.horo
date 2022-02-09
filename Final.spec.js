describe('Тестирование сайта гороскопов', () => {
  beforeEach(() => {
    cy.visit('https://horo.mail.ru/sonnik/')
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })  
  })
  
  it('ТС№2', () => {
    cy.get('.input__field, js-suggest__input')
      .type('Помидор').should('have.value', 'Помидор')

    // .type() with special character sequences
      .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
      .type('{del}{selectall}{backspace}')

    // .type() with key modifiers
      .type('{alt}{option}') //these are equivalent
      .type('{ctrl}{control}') //these are equivalent
      .type('{meta}{command}{cmd}') //these are equivalent
      .type('{shift}')

      // Delay each keypress by 0.1 sec
      .type('slow.конфеты', { delay: 100 })
      .should('have.value', 'slow.конфеты')
  })

 

  it('ТС№6 проверка наличия всех сонников in selector', () => {  
    cy.get('.dropdown__text, js-select__selected__option').click()
    cy.contains('Сонник Лоффа').should('contain', 'Сонник Лоффа');
    cy.contains('Сонник Миллера').should('contain', 'Сонник Миллера');
    cy.contains('Сонник Ванги').should('contain', 'Сонник Ванги');
    cy.contains('Сонник Нострадамуса').should('contain', 'Сонник Нострадамуса');
    cy.contains('Сонник мисс Хассе').should('contain', 'Сонник мисс Хассе');
  }) 

  it('ТС№7 проверка возможности выбора Сонник Лоффа in selector', () => {  
    cy.get('.dropdown__text, js-select__selected__option').click()
    cy.contains('Сонник Лоффа').click().should('contain', 'Сонник Лоффа');
  }) 
  
  it('ТС№8 проверка возможности выбора Сонник Миллера in selector', () => { 
    cy.get('.dropdown__text, js-select__selected__option').click()
    cy.contains('Сонник Миллера').click().should('contain', 'Сонник Миллера');
  }) 

  it('ТС№9 проверка возможности выбора Сонник мисс Хассе in selector', () => { 
    cy.get('.dropdown__text, js-select__selected__option').click()
    cy.contains('Сонник мисс Хассе').click().should('contain', 'Сонник мисс Хассе');
  })  

  it('ТС№10 проверка возможности выбораr Cонник Ванги in selector', () => { 
    cy.get('.dropdown__text, js-select__selected__option').click()
    cy.contains('Сонник Ванги').click().should('contain', 'Сонник Ванги');
  })

  it('ТС№11 проверка возможности выбора Cонник Нострадамуса in selector', () => { 
    cy.get('.dropdown__text, js-select__selected__option').click()
    cy.contains('Сонник Нострадамуса').click().should('contain', 'Сонник Нострадамуса');
  })   

  it('ТС№12 тест кликабельности button-толковать сон', () => {    
    cy.get('.button').click({ multiple: true })
  })  
  
  it(' ТС№13 - 17 test for url пробежка по сонникам с возвратом на главную страницу', () => {    
    cy.get('[href="/sonnik/miller/"]').click({ multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/sonnik/miller/')
    cy.go('back')
    cy.get('[href="/sonnik/loff/"]').click({ multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/sonnik/loff/')
    cy.get('[href="/sonnik/hasse/"]').click({ multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/sonnik/hasse/')
    cy.go('back')
    cy.get('[href="/sonnik/vanga/"]').click({ multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/sonnik/vanga/')
    cy.go('back')
    cy.get('[href="/sonnik/nostradamus/"]').click({ multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/sonnik/nostradamus/')
    cy.go('back')
  })
  it('ТС№18 test for url пробежка по сонникам без возврата к исходному виду страницы', () => {    
    cy.get('[href="/sonnik/miller/"]').click({ multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/sonnik/miller/')
    cy.get('[href="/sonnik/loff/"]').click({ multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/sonnik/loff/')
    cy.get('[href="/sonnik/hasse/"]').click({ multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/sonnik/hasse/')
    cy.get('[href="/sonnik/vanga/"]').click({ multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/sonnik/vanga/')
    cy.get('[href="/sonnik/nostradamus/"]').click({ multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/sonnik/nostradamus/')
  })
  it('ТС№19-23 пробежка по сонникам c проверкой раскрывающегося листа популярных слов без возврата к исходному виду страницы', () => {    
    cy.get('[href="/sonnik/miller/"]').click({ multiple: true })
    cy.get('[ class="p-terms-list"]').should('be.visible');
    cy.get('[href="/sonnik/loff/"]').click({ multiple: true })
    cy.get('[ class="p-terms-list"]').should('be.visible');
    cy.get('[href="/sonnik/hasse/"]').click({ multiple: true })
    cy.get('[ class="p-terms-list"]').should('be.visible');
    cy.get('[href="/sonnik/vanga/"]').click({ multiple: true })
    cy.get('[ class="p-terms-list"]').should('be.visible');
    cy.get('[href="/sonnik/nostradamus/"]').click({ multiple: true })
    cy.get('[ class="p-terms-list"]').should('be.visible');
  })
  it('ТС№24 проверка взаимодействия все гороскопы form + selctor + button ', () => {  
    cy.get('.input__field, js-suggest__input').type('Ангел')
    cy.get('.button').click()
    cy.contains('Ангел').should('contain','Ангел')   
  })
  
  it('ТС№25 проверка взаимодействия Сонник Миллера form + selctor + button ', () => {  
    cy.get('.input__field, js-suggest__input').type('Ангел')
    cy.get('.dropdown__text, js-select__selected__option').click()
    cy.contains('Сонник Миллера').click()
    cy.get('.button').click()
    cy.contains('Ангел').should('contain','Ангел') 
  })
  
  it('ТС№26 проверка взаимодействия сонник лофа form + selctor + button ', () => {  
    cy.get('.input__field, js-suggest__input').type('Ангел')
    cy.get('.dropdown__text, js-select__selected__option').click()
    cy.contains('Сонник Лоффа').click()
    cy.get('.button').click()
    cy.contains('Ангел').should('contain','Ангел')  
  })

  it('ТС№27 проверка взаимодействия Сонник мисс Хассе form + selctor + button ', () => {  
    cy.get('.input__field, js-suggest__input').type('Ангел')
    cy.get('.dropdown__text, js-select__selected__option').click()
    cy.contains('Сонник мисс Хассе').click()
    cy.get('.button').click()
    cy.contains('Ангел').should('contain','Ангел')  
  })

  it('ТС№28 проверка взаимодействия сонник Ванги form + selctor + button ', () => {  
    cy.get('.input__field, js-suggest__input').type('Ангел')
    cy.get('.dropdown__text, js-select__selected__option').click()
    cy.contains('Сонник Ванги').click()
    cy.get('.button').click()
    cy.contains('Ангел').should('contain','Ангел')  
  })

  it('ТС№29 проверка взаимодействия сонник Нострадамуса form + selctor + button ', () => {  
    cy.get('.input__field, js-suggest__input').type('Ангел')
    cy.get('.dropdown__text, js-select__selected__option').click()
    cy.contains('Сонник Нострадамуса').click()
    cy.get('.button').click()
    cy.contains('Ангел').should('contain','Ангел')  
  })
  it('ТС№30 проверка взаимодействия все гороскопы form + selctor + button ', () => {  
    cy.get('.input__field, js-suggest__input').type('14рксйгшерийн9зенйзнзйнй')
    cy.get('.button').click()
    cy.contains('Попробуйте уточнить запрос и еще раз воспользуйтесь поисковой формой').should('contain','Попробуйте уточнить запрос и еще раз воспользуйтесь поисковой формой')   
  })
  
  it('ТС№31 проверка взаимодействия Сонник Миллера form + selctor + button ', () => {  
    cy.get('.input__field, js-suggest__input').type('14рксйгшерийн9зенйзнзйнй')
    cy.get('.dropdown__text, js-select__selected__option').click()
    cy.contains('Сонник Миллера').click()
    cy.get('.button').click()
    cy.contains('Попробуйте уточнить запрос и еще раз воспользуйтесь поисковой формой').should('contain','Попробуйте уточнить запрос и еще раз воспользуйтесь поисковой формой') 
  })
  
  it('ТС№32 проверка взаимодействия сонник лофа form + selctor + button ', () => {  
    cy.get('.input__field, js-suggest__input').type('14рксйгшерийн9зенйзнзйнй')
    cy.get('.dropdown__text, js-select__selected__option').click()
    cy.contains('Сонник Лоффа').click()
    cy.get('.button').click()
    cy.contains('Попробуйте уточнить запрос и еще раз воспользуйтесь поисковой формой').should('contain','Попробуйте уточнить запрос и еще раз воспользуйтесь поисковой формой')  
  })

  it('ТС№33 проверка взаимодействия Сонник мисс Хассе form + selctor + button ', () => {  
    cy.get('.input__field, js-suggest__input').type('14рксйгшерийн9зенйзнзйнй')
    cy.get('.dropdown__text, js-select__selected__option').click()
    cy.contains('Сонник мисс Хассе').click()
    cy.get('.button').click()
    cy.contains('Попробуйте уточнить запрос и еще раз воспользуйтесь поисковой формой').should('contain','Попробуйте уточнить запрос и еще раз воспользуйтесь поисковой формой')  
  })

  it('ТС№34 проверка взаимодействия сонник Ванги form + selctor + button ', () => {  
    cy.get('.input__field, js-suggest__input').type('14рксйгшерийн9зенйзнзйнй')
    cy.get('.dropdown__text, js-select__selected__option').click()
    cy.contains('Сонник Ванги').click()
    cy.get('.button').click()
    cy.contains('Попробуйте уточнить запрос и еще раз воспользуйтесь поисковой формой').should('contain','Попробуйте уточнить запрос и еще раз воспользуйтесь поисковой формой')  
  })

  it('ТС№35 проверка взаимодействия сонник Нострадамуса form + selctor + button ', () => {  
    cy.get('.input__field, js-suggest__input').type('14рксйгшерийн9зенйзнзйнй')
    cy.get('.dropdown__text, js-select__selected__option').click()
    cy.contains('Сонник Нострадамуса').click()
    cy.get('.button').click()
    cy.contains('Попробуйте уточнить запрос и еще раз воспользуйтесь поисковой формой').should('contain','Попробуйте уточнить запрос и еще раз воспользуйтесь поисковой формой')
  })
  it('ТС№36 и 38 проверка наличия слов при выборе определенной буквы', () => {    
    cy.get('[href="/sonnik/a/"]').find('.filter__text').click({ multiple: true })
    cy.url().should('eq','https://horo.mail.ru/sonnik/a/')
    cy.get('body').should('contain', 'Абажур').and('contain', 'Аэроплан')

    cy.get('[href="/sonnik/b/"]').find('.filter__text').click({ multiple: true })
    cy.url().should('eq','https://horo.mail.ru/sonnik/b/')
    cy.get('body').should('contain', 'Баба').and('contain', 'Бюст')

    cy.get('[href="/sonnik/v/"]').find('.filter__text').click({ multiple: true })
    cy.url().should('eq','https://horo.mail.ru/sonnik/v/')
    cy.get('body').should('contain', 'Баба').and('contain', 'Бюст')
  })  
  it('ТС№37 проверка выдачи результа при выборе слова из популярных образов сна', () => {         
    
    cy.get('[href="/sonnik/hasse/abazhur/"]').click({ multiple: true })
    cy.get('body').should('contain', 'Абажур')
  }) 
  it('ТС№68-70 проверка ввода данных в строку подписки', () => {
    cy.get('._756dee3138')
      .type('Letter4van@gmailcom').should('have.value', 'Letter4van@gmailcom')

    // .type() with special character sequences
      .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
      .type('{del}{selectall}{backspace}')

    // .type() with key modifiers
      .type('{alt}{option}') //these are equivalent
      .type('{ctrl}{control}') //these are equivalent
      .type('{meta}{command}{cmd}') //these are equivalent
      .type('{shift}')

      // Delay each keypress by 0.1 sec
      .type('Letter4van@gmailcom', { delay: 100 })
      .should('have.value', 'Letter4van@gmailcom')
 })
  it('ТС№71-72  Email в нижнем регистре ', () => {  
    cy.get('._756dee3138').type('van.fb-74@mail.ru')
        cy.get('[class="_57928466cb _0c3690b223 _301b3aa0b0"]').click({ multiple: true })
        cy.get('body').should('contain','Уже есть подписка')   
      
  })
  it('ТС№73  Email в верхнем регистре НЕ УСПЕШНО', () => {  
    cy.get('._756dee3138').type('VAN.FB-74@MAIL.RU')
        cy.get('[class="_57928466cb _0c3690b223 _301b3aa0b0"]').click({ multiple: true })
        cy.get('body').should('contain','Уже есть подписка')   
  })     
})
