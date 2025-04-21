$(document).ready(function() {
    $("#archimedesForm").submit(function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы
        
        // получаем данные из формы
        const data = {
            DensityOfObject: parseFloat($("#DensityOfObject").val()),
            DensityOfLiquid: parseFloat($("#DensityOfLiquid").val()),
            Mass: parseFloat($("#Mass").val()),
            Length: parseFloat($("#Length").val()),
            Width: parseFloat($("#Width").val())
        };

        // отправляем данные формы через AJAX
        $.ajax({
            url: "/archimedes",
            type: "POST",
            data: data,
            success: function(response) {
                // выводим вычисленное
                $("#archimedesPower").text("Архимедова сила: " + response.archimedesPower.toFixed(2) + " Н");
                $("#heightOfPartInFluid").text("Высота погружения в жидкость: " + response.heightOfPartInFluid.toFixed(2) + " м");
                $("#volumeOfDisplacedFluid").text("Объём вытесненной жидкости: " + response.volumeOfDisplacedFluid.toFixed(2) + " м³");
                $("#howFloat").text("Как плавает: " + response.howFloat);
                
                console.log("получен ответ от сервера:", response);
                
                // вызываем функцию анимации с правильными параметрами
                // контроллер передает данные в респонс а респонс кидает в анимацию
                animateFloating(
                    data.DensityOfObject,
                    data.DensityOfLiquid,
                );
            },
            error: function(error) {
                console.error("Ошибка при отправке запроса:", error);
                alert("Произошла ошибка при расчётах");
            }
        });
    });
});