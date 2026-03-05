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
        s.src = "kc.js";
        document.head.appendChild(s);
    }, 500);
})();
