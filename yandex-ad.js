(function() {
    // Создаем тестовый элемент - красный квадрат
    var testElement = document.createElement('div');

    // Задаем ему стили, чтобы он был виден
    testElement.style.position = 'fixed'; // Зафиксирован на экране
    testElement.style.bottom = '10px';    // 10px от нижнего края
    testElement.style.left = '10px';      // 10px от левого края
    testElement.style.width = '50px';     // Ширина 50px
    testElement.style.height = '50px';    // Высота 50px
    testElement.style.backgroundColor = 'red'; // Красный цвет
    testElement.style.zIndex = '999999';   // Поверх всех элементов

    // Добавляем этот элемент на страницу
    document.body.appendChild(testElement);

    // Выводим сообщение в консоль для подтверждения
    console.log('RED SQUARE TEST: Тестовый красный квадрат должен был появиться.');
})();
