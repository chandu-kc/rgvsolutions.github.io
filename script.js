document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".hero h2", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from(".btn", { opacity: 0, scale: 0.5, duration: 1, delay: 1 });

    gsap.from(".feature", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        delay: 1.5
    });

    // Force re-run animations when navigating back
    window.addEventListener("pageshow", function (event) {
        if (event.persisted) {
            window.location.reload();
        }
    });
});