// находим картинки

const chooseColor = document.querySelectorAll('.choose-color__btn');
const contentItem = document.querySelectorAll('.content-item');


chooseColor.forEach(function(element){
    element.addEventListener('click', open)
});


function open(evt){
    // нашли элемент, на который кликнули
    const target = evt.currentTarget;

    // получаем содержимое таргета
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`);


//    сначала удаляем активный класс
    chooseColor.forEach(function(item){
        item.classList.remove('choose-color__btn--active')
    })
// добавляем активный класс
    target.classList.add('choose-color__btn--active')


    contentItem.forEach(function(item){
        item.classList.remove('content-item--active')
    });
    
    contentActive.forEach(function(item){
    item.classList.add('content-item--active')
    });

};