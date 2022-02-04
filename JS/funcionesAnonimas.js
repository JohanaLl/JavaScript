//Función anónima autoejecutable
(function () {
    console.log('Mi primer IIFE')
})();

(function (d, w, c) {
    console.log('Mi segunda IIFE');
    console.log(d);
    console.log(w);
    c.log('Console.log')
})(document, window, console);