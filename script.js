document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".hero h2", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from(".btn", { opacity: 0, scale: 0.5, duration: 1, delay: 1 });

    gsap.to(".data-transfer img", {
        opacity: 1,
        scale: 1.2,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        stagger: 0.5
    });

    window.addEventListener("pageshow", function (event) {
        if (event.persisted) {
            window.location.reload();
        }
    });
});