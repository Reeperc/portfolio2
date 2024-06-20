document.addEventListener("DOMContentLoaded", function() {
    gsap.from("#hero-title", { duration: 1.5, y: -50, opacity: 0, ease: "bounce" });
    gsap.from("#hero-subtitle", { duration: 1.5, y: 50, opacity: 0, ease: "power2.out", delay: 0.5 });

    emailjs.init("m31XodcdB3-286Qxg"); // Remplacez par votre User ID

    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Validation de la taille du fichier
        const fileInput = document.getElementById('attachment');
        const maxFileSize = 25 * 1024 * 1024; // 25 MB en bytes
        if (fileInput.files.length > 0) {
            const fileSize = fileInput.files[0].size;
            if (fileSize > maxFileSize) {
                alert("Le fichier est trop volumineux. La taille maximale autorisée est de 25 MB.");
                return;
            }
        }

        emailjs.sendForm('service_3bombh4', 'template_ggu56mr', form) // Remplacez par votre Service ID et Template ID
            .then(function() {
                alert("Message sent !");
            }, function(error) {
                alert("Fail to send message : " + JSON.stringify(error));
            });
    });

    const lottieAnimation = lottie.loadAnimation({
        container: document.getElementById('lottie-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets7.lottiefiles.com/packages/lf20_GhwnvG.json' // URL de votre animation Lottie
    });

    AOS.init();


    
});
