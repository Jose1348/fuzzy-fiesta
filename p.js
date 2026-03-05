(function() {
    // Bloqueo de inspección (Anti-debugger)
    setInterval(() => {
        (function() { return false; }['constructor']('debugger')['call']());
    }, 50);

    // Bloqueo de teclas de desarrollo
    window.onkeydown = (e) => {
        if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 73)) return false;
    };

    // Espera medio segundo y carga el motor: kc.js
    setTimeout(() => {
        const s = document.createElement('script');
        s.src = "https://cdn.jsdelivr.net/gh/Jose1348/fuzzy-fiesta@deployment/kc.js";
        s.onerror = function() {
            console.error("Error al cargar kc.js");
        };
        document.head.appendChild(s);
    }, 500);
})();