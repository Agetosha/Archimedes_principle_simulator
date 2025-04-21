// функция для анимации плавания тела
function animateFloating(densityObject, densityLiquid) {
    const container = $("#animation-container");
    const containerHeight = container.height();
    const liquid = $("#liquid");
    const object = $("#object");

    // устанавливаем высоту жидкости (80% от контейнера)
    const liquidHeight = containerHeight * 0.8;
    liquid.css({
        "height": liquidHeight + "px",
        "background-color": "#3498db",
        "position": "absolute",
        "bottom": "0",
        "left": "0",
        "width": "100%",
        "z-index": "5"
    });

    object.css({
        "width": 160 + "px",
        "height": 80 + "px",
        "position": "absolute",
        "border-radius": "5px",
        "left": "50%",
        "transform": "translateX(-50%)",
        "transition": "top 1s ease-in-out, background-color 0.5s ease, width 0.5s ease, height 0.5s ease",
        "z-index": "10"
    });

    console.log("Тип howFloat:", typeof howFloat);
    console.log("Значение howFloat:", howFloat);
    console.log("Плотность тела:", densityObject);
    console.log("Плотность жидкости:", densityLiquid);

    let objectPosition;    // определяем положение объекта в зависимости от условий плавания

    //коэфициент отношения плотностей
    const densityDifference = parseFloat(densityObject) / parseFloat(densityLiquid);

    // сравниваем плотности напрямую для определения поведения
    if (parseFloat(densityObject) < parseFloat(densityLiquid)) {
        // Тело плавает на поверхностi
        objectPosition = 0.2 * densityDifference;
        // 0.2 - как коэффицент положения на поверхности, а отношение плотностей уже конкретизирует положение тела на поверхности
        console.log("Плавает на поверхности, позиция:", objectPosition);
    }
    else if (Math.abs(parseFloat(densityObject) - parseFloat(densityLiquid)) < 0.001) {
        // Тело в равновесии
        objectPosition = 0.45 * densityDifference;
        console.log("В равновесии, позиция:", objectPosition);
    }
    else {
        // Тело тонет
        objectPosition = 0.8 * densityDifference;
        if (objectPosition > 0.8) {
            objectPosition = 0.8;
        }
        console.log("Тонет, позиция:", objectPosition);
    }
    console.log(objectPosition);

    // анимируем перемещение объекта
    object.css("top", containerHeight*objectPosition + "px");
}

// инициализация анимации при загрузке страницы
$(document).ready(function() {
    const container = $("#animation-container");
    const containerHeight = container.height();
    const liquid = $("#liquid");
    const object = $("#object");
    
    // устанавливаем начальные стили для жидкости
    liquid.css({
        "position": "absolute",
        "bottom": "0",
        "left": "0",
        "width": "100%",
        "height": containerHeight * 0.8 + "px",
        "background-color": "#3498db",
        "z-index": "5"
    });
    
    // устанавливаем начальные стили для тела
    object.css({
        "position": "absolute",
        "width": "160px",
        "height": "80px",
        "background-color": "#e74c3c",
        "border-radius": "5px",
        "left": "50%",
        "top": containerHeight * 0.005 + "px",
        "transform": "translateX(-50%)",
        "transition": "top 1s ease-in-out, background-color 0.5s ease, width 0.5s ease, height 0.5s ease",
        "z-index": "10"
    });
});