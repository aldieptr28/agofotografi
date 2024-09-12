// Inisialisasi AOS (Animate on Scroll)
AOS.init({
    duration: 1200, // Durasi animasi dalam milidetik
    easing: 'ease-in-out', // Jenis easing
    once: true, // Animasi hanya terjadi sekali saat elemen pertama kali muncul di viewport
    mirror: false, // Apakah animasi muncul kembali saat scrolling ke atas
});

// GSAP ScrollTrigger untuk animasi dinamis saat scroll
// Memastikan ScrollTrigger plugin diaktifkan
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero h1", {
    duration: 1.5,
    y: -100,
    opacity: 0,
    ease: "power3.out"
});

gsap.from(".hero p", {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: "power3.out",
    delay: 0.5
});

gsap.from(".hero .btn", {
    duration: 1.5,
    scale: 0.5,
    opacity: 0,
    ease: "back.out(1.7)",
    delay: 1
});

// GSAP ScrollTrigger untuk animasi dinamis saat scroll
gsap.registerPlugin(ScrollTrigger);

gsap.from(".about h2", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    x: -200,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out"
});

gsap.from(".about p", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    x: 200,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    delay: 0.5
});

gsap.from(".service-item", {
    scrollTrigger: {
        trigger: ".services",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    y: 100,
    opacity: 0,
    duration: 1.5,
    stagger: 0.3,
    ease: "power3.out"
});

gsap.from(".portfolio h2", {
    scrollTrigger: {
        trigger: ".portfolio",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    scale: 0.5,
    opacity: 0,
    duration: 1.5,
    ease: "back.out(1.7)"
});

gsap.from(".gallery img", {
    scrollTrigger: {
        trigger: ".portfolio",
        start: "top 70%",
        toggleActions: "play none none none"
    },
    scale: 0.5,
    opacity: 0,
    duration: 1.5,
    stagger: 0.2,
    ease: "power3.out"
});

gsap.from(".testimonials h2", {
    scrollTrigger: {
        trigger: ".testimonials",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    y: -50,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out"
});

gsap.from(".testimonial", {
    scrollTrigger: {
        trigger: ".testimonials",
        start: "top 70%",
        toggleActions: "play none none none"
    },
    y: 50,
    opacity: 0,
    duration: 1.5,
    stagger: 0.3,
    ease: "power3.out"
});

gsap.from(".booking h2", {
    scrollTrigger: {
        trigger: ".booking",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    scale: 0.5,
    opacity: 0,
    duration: 1.5,
    ease: "back.out(1.7)"
});

gsap.from(".booking-form", {
    scrollTrigger: {
        trigger: ".booking",
        start: "top 70%",
        toggleActions: "play none none none"
    },
    y: 50,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out"
});

gsap.from(".footer-container .footer-section", {
    scrollTrigger: {
        trigger: ".footer-container",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    y: 50,
    opacity: 0,
    duration: 1.5,
    stagger: 0.3,
    ease: "power3.out"
});

gsap.from(".footer-bottom", {
    scrollTrigger: {
        trigger: ".footer-bottom",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    scale: 0.5,
    opacity: 0,
    duration: 1.5,
    ease: "back.out(1.7)"
});

// Interaktif Button Animasi pada Hero Section
document.querySelector('.hero .btn').addEventListener('mouseover', function () {
    gsap.to(this, { scale: 1.1, duration: 0.3, ease: "power1.out" });
});

document.querySelector('.hero .btn').addEventListener('mouseout', function () {
    gsap.to(this, { scale: 1, duration: 0.3, ease: "power1.out" });
});

// asas



// Fungsi untuk menangani pengiriman form
function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;

    const message = `Halo, saya ${name}. Saya ingin memesan layanan ${service} pada tanggal ${date}. Alamat saya di ${address}. Silakan hubungi saya kembali di nomor WA: ${phone}.`;

    // Mengarahkan ke WhatsApp API dengan pesan
    const url = `https://api.whatsapp.com/send?phone=6282247124129&text=${encodeURIComponent(message)}`;

    window.open(url, '_blank'); // Membuka link WhatsApp di tab baru

    return false;
}

