<!DOCTYPE html>

<html class="dark scroll-smooth" lang="id">

<head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>Inspira Unaya</title>
    <link rel="icon" href="/asset/img/Logo Inspira.png" type="image/x-icon">
    <script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
    <link href="https://fonts.googleapis.com/css2?family=Coiny&display=swap" rel="stylesheet">

    <script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        primary: "#2C097F",
                        secondary: "#6366f1",
                        "background-light": "#f6f6f8",
                        "background-dark": "#151022",
                        "surface-dark": "#1e293b",
                        "surface-light": "#ffffff"
                    },
                    fontFamily: {
                        display: "Inter",
                        body: ["Inter", "sans-serif"],
                        cooper: ['Coiny', 'cursive']
                    },
                    borderRadius: {
                        DEFAULT: "0.25rem",
                        lg: "0.5rem",
                        xl: "0.75rem",
                        full: "9999px"
                    }
                }
            }
        };
    </script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&amp;display=swap"
        rel="stylesheet" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <style>
        /* Liquid Glass Effect */
        .liquid-glass {
            background: linear-gradient(135deg,
                    rgba(255, 255, 255, 0.1) 0%,
                    rgba(255, 255, 255, 0.05) 50%,
                    rgba(255, 255, 255, 0.1) 100%);
            backdrop-filter: blur(12px) saturate(150%);
            -webkit-backdrop-filter: blur(12px) saturate(150%);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
            position: relative;
            overflow: hidden;
        }

        .liquid-glass-card {
            background: linear-gradient(135deg,
                    rgba(255, 255, 255, 0.15) 0%,
                    rgba(255, 255, 255, 0.05) 100%);
            backdrop-filter: blur(16px) saturate(160%);
            -webkit-backdrop-filter: blur(16px) saturate(160%);
            border: 1px solid rgba(255, 255, 255, 0.25);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            position: relative;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .liquid-glass-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
            border-color: rgba(255, 255, 255, 0.4);
        }

        /* Dark mode liquid glass */
        .dark .liquid-glass {
            background: linear-gradient(135deg,
                    rgba(255, 255, 255, 0.08) 0%,
                    rgba(255, 255, 255, 0.02) 50%,
                    rgba(255, 255, 255, 0.05) 100%);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }

        .dark .liquid-glass-card {
            background: linear-gradient(135deg,
                    rgba(255, 255, 255, 0.1) 0%,
                    rgba(255, 255, 255, 0.02) 100%);
            border: 1px solid rgba(255, 255, 255, 0.12);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .dark .liquid-glass-card:hover {
            box-shadow: 0 12px 36px rgba(100, 80, 200, 0.12);
            border-color: rgba(139, 92, 246, 0.4);
        }

        /* Liquid glass navbar */
        .liquid-glass-nav {
            background: linear-gradient(135deg,
                    rgba(255, 255, 255, 0.9) 0%,
                    rgba(255, 255, 255, 0.7) 100%);
            backdrop-filter: blur(16px) saturate(150%);
            -webkit-backdrop-filter: blur(16px) saturate(150%);
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }

        .dark .liquid-glass-nav {
            background: linear-gradient(135deg,
                    rgba(21, 16, 34, 0.85) 0%,
                    rgba(21, 16, 34, 0.75) 100%);
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
        }

        /* Liquid blob animation - slowed down for performance */
        @keyframes liquid-float {

            0%,
            100% {
                transform: translate(0, 0);
            }

            50% {
                transform: translate(5px, -5px);
            }
        }

        .liquid-blob {
            animation: liquid-float 15s ease-in-out infinite;
        }

        .liquid-blob-delay {
            animation: liquid-float 15s ease-in-out infinite;
            animation-delay: -7s;
        }

        /* Smooth Scroll */
        html {
            scroll-behavior: smooth;
        }

        /* Scroll Reveal Animations */
        .scroll-reveal {
            opacity: 0;
            transform: translateY(40px);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .scroll-reveal.revealed {
            opacity: 1;
            transform: translateY(0);
        }

        .scroll-reveal-left {
            opacity: 0;
            transform: translateX(-60px);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .scroll-reveal-left.revealed {
            opacity: 1;
            transform: translateX(0);
        }

        .scroll-reveal-right {
            opacity: 0;
            transform: translateX(60px);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .scroll-reveal-right.revealed {
            opacity: 1;
            transform: translateX(0);
        }

        .scroll-reveal-scale {
            opacity: 0;
            transform: scale(0.9);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .scroll-reveal-scale.revealed {
            opacity: 1;
            transform: scale(1);
        }

        /* Stagger delay for children */
        .scroll-reveal-stagger>*:nth-child(1) {
            transition-delay: 0.1s;
        }

        .scroll-reveal-stagger>*:nth-child(2) {
            transition-delay: 0.2s;
        }

        .scroll-reveal-stagger>*:nth-child(3) {
            transition-delay: 0.3s;
        }

        .scroll-reveal-stagger>*:nth-child(4) {
            transition-delay: 0.4s;
        }

        .scroll-reveal-stagger>*:nth-child(5) {
            transition-delay: 0.5s;
        }

        .scroll-reveal-stagger>*:nth-child(6) {
            transition-delay: 0.6s;
        }

        /* Parallax-like effect on scroll */
        .parallax-slow {
            will-change: transform;
        }

        /* Smooth fade for sections */
        section {
            transition: opacity 0.3s ease;
        }
    </style>

    <script>
        // Intersection Observer for scroll reveal animations
        document.addEventListener('DOMContentLoaded', function () {
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -100px 0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        // Also reveal stagger children
                        if (entry.target.classList.contains('scroll-reveal-stagger')) {
                            entry.target.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale').forEach(child => {
                                child.classList.add('revealed');
                            });
                        }
                    }
                });
            }, observerOptions);

            // Observe all scroll-reveal elements
            document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-reveal-stagger').forEach(el => {
                observer.observe(el);
            });

            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });

            // Parallax effect on hero background blobs (throttled for performance)
            let scrollTicking = false;
            window.addEventListener('scroll', function () {
                if (!scrollTicking) {
                    window.requestAnimationFrame(function () {
                        const scrolled = window.pageYOffset;
                        const parallaxElements = document.querySelectorAll('.parallax-slow');
                        parallaxElements.forEach(el => {
                            el.style.transform = `translateY(${scrolled * 0.3}px)`;
                        });
                        scrollTicking = false;
                    });
                    scrollTicking = true;
                }
            }, {
                passive: true
            });

            // Countdown Timer
            function updateCountdown() {
                const registrationEnd = new Date('2026-03-20T23:59:59').getTime();
                const now = new Date().getTime();
                const distance = registrationEnd - now;

                const daysEl = document.getElementById('countdown-days');
                const hoursEl = document.getElementById('countdown-hours');
                const minutesEl = document.getElementById('countdown-minutes');
                const secondsEl = document.getElementById('countdown-seconds');
                const timerEl = document.getElementById('countdown-timer');
                const expiredEl = document.getElementById('countdown-expired');

                if (distance > 0) {
                    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                    if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
                    if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
                    if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
                    if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
                } else {
                    // Registration closed
                    if (timerEl) timerEl.classList.add('hidden');
                    if (expiredEl) expiredEl.classList.remove('hidden');
                }
            }

            // Update countdown every second
            updateCountdown();
            setInterval(updateCountdown, 1000);
        });
    </script>
</head>

<body
    class="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 font-body transition-colors duration-300">
    <nav class="fixed w-full z-50 liquid-glass-nav">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center gap-2">
                    <img src="{{ asset('asset/img/Logo Inspira.png') }}" class="w-10 h-10" alt="Logo Inspira">
                    <img src="{{ asset('asset/img/Inspira 2026.png') }}" class="w-48 h-auto" alt="Logo Inspira">
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-8">
                        <a class="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
                            href="#hero">Beranda</a>
                        <a class="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
                            href="#categories">Kategori</a>
                        <a class="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
                            href="#dates">Jadwal</a>
                        <a class="bg-primary hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-primary/30"
                            href="#register">Daftar Sekarang</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <section class="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden" id="hero">
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div class="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[60px]">
            </div>
            <div
                class="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[70px]">
            </div>
            <div
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')]">
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div class="text-center lg:text-left scroll-reveal-left revealed">
                    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass mb-8">
                        <span class="relative flex h-2 w-2">
                            <span
                                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span
                            class="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">Registration
                            is open</span>
                    </div>
                    <h1
                        class="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-600 to-primary dark:from-white dark:via-purple-400 dark:to-primary">
                        International Scientific <br />Product & Innovation Area (INSPIRA)
                    </h1>
                    <p class="mt-4 max-w-2xl mx-auto lg:mx-0 text-xl text-gray-600 dark:text-gray-300">
                        Innovative Technologies and Sustainable Solutions for a Better Future. Bergabunglah dengan para
                        inovator global dalam kompetisi pameran teknologi dan kreativitas terbesar tahun ini.
                    </p>
                    <div class="mt-10 flex justify-center lg:justify-start gap-4">
                        <a class="group relative px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:shadow-primary/50 transition-all duration-300"
                            href="#register">
                            <span class="relative z-10 flex items-center gap-2">
                                Daftar <span
                                    class="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </span>
                            <div
                                class="absolute inset-0 h-full w-full rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity">
                            </div>
                        </a>
                        <a class="px-8 py-3 bg-surface-light dark:bg-surface-dark text-gray-900 dark:text-white font-semibold rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-colors shadow-sm"
                            href="#categories">
                            Lihat Kategori
                        </a>
                    </div>
                </div>
                <div class="relative mt-12 lg:mt-0 perspective-1000 scroll-reveal-right revealed">
                    <div
                        class="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group transform hover:rotate-y-2 transition-transform duration-500">
                        <div
                            class="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                        </div>
                        <img src="{{ asset('asset/img/inspira_hero.png') }}" alt="Inspira Innovation" loading="lazy"
                            decoding="async"
                            class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700">
                    </div>
                    <div
                        class="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl -z-10 animate-pulse">
                    </div>
                    <div
                        class="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl -z-10 animate-pulse delay-700">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-20 relative overflow-hidden" id="categories">
        <!-- Background liquid blobs -->
        <div class="absolute inset-0 -z-10">
            <div
                class="absolute top-[10%] left-[10%] w-[350px] h-[350px] bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-[50px] liquid-blob">
            </div>
            <div
                class="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-gradient-to-br from-pink-400/15 to-orange-400/15 rounded-full blur-[60px] liquid-blob-delay">
            </div>
            <div
                class="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-indigo-300/10 to-cyan-300/10 rounded-full blur-[70px]">
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 scroll-reveal">
                <span
                    class="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
                    <span class="material-icons text-sm text-primary">category</span>
                    Explore Categories
                </span>
                <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Kategori <span
                        class="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary">Inovasi</span>
                </h2>
                <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">Pilih bidang keahlian Anda dan
                    tunjukkan karya terbaik Anda dalam salah satu kategori berikut.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-reveal-stagger">
                <div class="p-6 rounded-2xl liquid-glass-card group scroll-reveal">
                    <div
                        class="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-4 text-white font-bold text-xl group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
                        A</div>
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Constructions &amp; Materials</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Fokus pada inovasi dalam bidang
                        konstruksi, rekayasa sipil, dan material baru untuk meningkatkan kualitas, efisiensi, dan
                        keberlanjutan dalam pembangunan infrastruktur.
                    </p>
                </div>
                <div class="p-6 rounded-2xl liquid-glass-card group scroll-reveal">
                    <div
                        class="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-4 text-white font-bold text-xl group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/30">
                        B</div>
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Machine, Equipment &amp;
                        Manufacturing</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Desain pengembangan dan optimasi
                        mesin serta peralatan produksi untuk meningkatkan produktivitas, efisiensi energi, dan daya
                        saing industri.</p>
                </div>
                <div class="p-6 rounded-2xl liquid-glass-card group scroll-reveal">
                    <div
                        class="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center mb-4 text-white font-bold text-xl group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/30">
                        C</div>
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Environment &amp; Renewable Energy
                    </h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Solusi ramah lingkungan dan
                        energi terbarukan untuk mendukung keberlanjutan, mengurangi emisi, dan menjaga ekosistem.
                    </p>
                </div>
                <div class="p-6 rounded-2xl liquid-glass-card group scroll-reveal">
                    <div
                        class="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-4 text-white font-bold text-xl group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/30">
                        D</div>
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">IoT, Robotic, UI/UX Desain & Multi
                        Media
                    </h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Integrasi teknologi digital,
                        otomasi, komunikasi multimedia, serta desain antarmuka yang berpusat pada pengguna untuk
                        menciptakan solusi teknologi yang canggih sekaligus ramah pengguna serta menghubungkan otomasi
                        fisik (robotik) dengan sistem digital.
                    </p>
                </div>
                <div class="p-6 rounded-2xl liquid-glass-card group scroll-reveal">
                    <div
                        class="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center mb-4 text-white font-bold text-xl group-hover:scale-110 transition-transform shadow-lg shadow-yellow-500/30">
                        E</div>
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Teaching &amp; Learning</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Inovasi dalam metode pendidikan
                        dan pembelajaran untuk meningkatkan kualitas pendidikan, aksesibilitas, dan pengalaman belajar.
                    </p>
                </div>
                <div class="p-6 rounded-2xl liquid-glass-card group scroll-reveal">
                    <div
                        class="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-400 to-red-600 flex items-center justify-center mb-4 text-white font-bold text-xl group-hover:scale-110 transition-transform shadow-lg shadow-rose-500/30">
                        F</div>
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Agriculture, Food Security &amp;
                        Smart Farming
                    </h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Teknologi pertanian modern dan
                        ketahanan pangan untuk mendukung produktivitas pertanian, keberlanjutan pangan, dan
                        kesejahteraan masyarakat.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="py-24 bg-background-light dark:bg-background-dark relative overflow-hidden" id="dates">
        <!-- Background decorations -->
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div class="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[60px]">
            </div>
            <div class="absolute bottom-[10%] left-[-5%] w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[50px]">
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="text-center mb-20 scroll-reveal">
                <span
                    class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm text-surface-light font-semibold mb-4">
                    <span class="material-icons text-sm">schedule</span>
                    Timeline Event
                </span>
                <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                    Tanggal <span
                        class="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary">Penting</span>
                </h2>
            </div>

            <!-- Timeline Container -->
            <div class="relative">
                <!-- Horizontal connecting line (desktop) -->
                <div
                    class="hidden md:block absolute top-10 left-[8%] right-[8%] h-1 bg-gradient-to-r from-primary via-purple-500 to-secondary rounded-full z-0">
                    <div
                        class="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-secondary blur-sm opacity-50">
                    </div>
                </div>

                <!-- Vertical connecting line (mobile) -->
                <div
                    class="md:hidden absolute top-0 bottom-0 left-8 w-1 bg-gradient-to-b from-primary via-purple-500 to-secondary rounded-full z-0">
                    <div
                        class="absolute inset-0 bg-gradient-to-b from-primary via-purple-500 to-secondary blur-sm opacity-50">
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-6 gap-6 relative z-10 scroll-reveal-stagger">
                    <!-- Item 1: Registrasi -->
                    <div class="group relative scroll-reveal">
                        <div class="flex md:flex-col items-start md:items-center gap-6 md:gap-0">
                            <!-- Icon with number -->
                            <div class="relative flex-shrink-0">
                                <div
                                    class="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-purple-600 text-white flex items-center justify-center shadow-xl shadow-primary/40 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border-4 border-white dark:border-background-dark">
                                    <span class="material-icons text-2xl">edit_calendar</span>
                                </div>
                                <div
                                    class="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white dark:bg-background-dark text-primary text-sm font-bold flex items-center justify-center shadow-lg border-2 border-primary">
                                    1
                                </div>
                                <div
                                    class="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-purple-600 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300">
                                </div>
                            </div>

                            <!-- Content Card -->
                            <div
                                class="md:mt-8 p-4 rounded-xl bg-white/80 dark:bg-surface-dark/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg group-hover:shadow-xl group-hover:border-primary/30 transition-all duration-300 w-full">
                                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">Registration</h3>
                                <div
                                    class="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-purple-500/20 text-purple-600 dark:text-purple-300 text-xs font-semibold mb-2">
                                    <span class="material-icons text-xs">event</span>
                                    19 Jan - 20 Mar 2026
                                </div>
                                <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Participant
                                    registration and proposal submission period.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Item 2: Abstract -->
                    <div class="group relative scroll-reveal">
                        <div class="flex md:flex-col items-start md:items-center gap-6 md:gap-0">
                            <div class="relative flex-shrink-0">
                                <div
                                    class="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center shadow-xl shadow-purple-500/40 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border-4 border-white dark:border-background-dark">
                                    <span class="material-icons text-2xl">lock_clock</span>
                                </div>
                                <div
                                    class="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white dark:bg-background-dark text-purple-600 text-sm font-bold flex items-center justify-center shadow-lg border-2 border-purple-500">
                                    2
                                </div>
                                <div
                                    class="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300">
                                </div>
                            </div>

                            <div
                                class="md:mt-8 p-4 rounded-xl bg-white/80 dark:bg-surface-dark/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg group-hover:shadow-xl group-hover:border-purple-500/30 transition-all duration-300 w-full">
                                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">Abstract</h3>
                                <div
                                    class="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-semibold mb-2">
                                    <span class="material-icons text-xs">event</span>
                                    19 Jan - 22 Apr 2026
                                </div>
                                <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Entry Abstract
                                    Submission</p>
                            </div>
                        </div>
                    </div>

                    <!-- Item 3: Announcement -->
                    <div class="group relative scroll-reveal">
                        <div class="flex md:flex-col items-start md:items-center gap-6 md:gap-0">
                            <div class="relative flex-shrink-0">
                                <div
                                    class="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white flex items-center justify-center shadow-xl shadow-indigo-500/40 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border-4 border-white dark:border-background-dark">
                                    <span class="material-icons text-2xl">fact_check</span>
                                </div>
                                <div
                                    class="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white dark:bg-background-dark text-indigo-600 text-sm font-bold flex items-center justify-center shadow-lg border-2 border-indigo-500">
                                    3
                                </div>
                                <div
                                    class="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300">
                                </div>
                            </div>

                            <div
                                class="md:mt-8 p-4 rounded-xl bg-white/80 dark:bg-surface-dark/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg group-hover:shadow-xl group-hover:border-indigo-500/30 transition-all duration-300 w-full">
                                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">Announcement</h3>
                                <div
                                    class="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-2">
                                    <span class="material-icons text-xs">event</span>
                                    22 Jan - 22 Apr 2026
                                </div>
                                <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Announcement of
                                    Administrative Selection</p>
                            </div>
                        </div>
                    </div>

                    <!-- Item 4: Technical Meeting -->
                    <div class="group relative scroll-reveal">
                        <div class="flex md:flex-col items-start md:items-center gap-6 md:gap-0">
                            <div class="relative flex-shrink-0">
                                <div
                                    class="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center shadow-xl shadow-blue-500/40 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border-4 border-white dark:border-background-dark">
                                    <span class="material-icons text-2xl">groups</span>
                                </div>
                                <div
                                    class="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white dark:bg-background-dark text-blue-600 text-sm font-bold flex items-center justify-center shadow-lg border-2 border-blue-500">
                                    4
                                </div>
                                <div
                                    class="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300">
                                </div>
                            </div>

                            <div
                                class="md:mt-8 p-4 rounded-xl bg-white/80 dark:bg-surface-dark/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg group-hover:shadow-xl group-hover:border-blue-500/30 transition-all duration-300 w-full">
                                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">Technical Meeting</h3>
                                <div
                                    class="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-2">
                                    <span class="material-icons text-xs">event</span>
                                    23 April 2026
                                </div>
                                <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Technical Meeting
                                    for Finalists</p>
                            </div>
                        </div>
                    </div>

                    <!-- Item 5: Ceremony -->
                    <div class="group relative scroll-reveal">
                        <div class="flex md:flex-col items-start md:items-center gap-6 md:gap-0">
                            <div class="relative flex-shrink-0">
                                <div
                                    class="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 text-white flex items-center justify-center shadow-xl shadow-cyan-500/40 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border-4 border-white dark:border-background-dark">
                                    <span class="material-icons text-2xl">celebration</span>
                                </div>
                                <div
                                    class="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white dark:bg-background-dark text-cyan-600 text-sm font-bold flex items-center justify-center shadow-lg border-2 border-cyan-500">
                                    5
                                </div>
                                <div
                                    class="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300">
                                </div>
                            </div>

                            <div
                                class="md:mt-8 p-4 rounded-xl bg-white/80 dark:bg-surface-dark/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg group-hover:shadow-xl group-hover:border-cyan-500/30 transition-all duration-300 w-full">
                                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">Ceremony</h3>
                                <div
                                    class="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold mb-2">
                                    <span class="material-icons text-xs">event</span>
                                    19 May 2026
                                </div>
                                <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Opening & Closing
                                    Ceremony</p>
                            </div>
                        </div>
                    </div>

                    <!-- Item 6: Final Announcement -->
                    <div class="group relative scroll-reveal">
                        <div class="flex md:flex-col items-start md:items-center gap-6 md:gap-0">
                            <div class="relative flex-shrink-0">
                                <div
                                    class="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-xl shadow-amber-500/40 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border-4 border-white dark:border-background-dark">
                                    <span class="material-icons text-2xl">emoji_events</span>
                                </div>
                                <div
                                    class="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white dark:bg-background-dark text-amber-600 text-sm font-bold flex items-center justify-center shadow-lg border-2 border-amber-500">
                                    6
                                </div>
                                <div
                                    class="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300">
                                </div>
                            </div>

                            <div
                                class="md:mt-8 p-4 rounded-xl bg-white/80 dark:bg-surface-dark/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg group-hover:shadow-xl group-hover:border-amber-500/30 transition-all duration-300 w-full">
                                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">Winner</h3>
                                <div
                                    class="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold mb-2">
                                    <span class="material-icons text-xs">event</span>
                                    19 May 2026
                                </div>
                                <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Announcement of
                                    Finalist & Winners</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-20 relative overflow-hidden" id="guidebook">
        <!-- Background liquid blobs -->
        <div class="absolute inset-0 -z-10">
            <div
                class="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-[50px]">
            </div>
            <div
                class="absolute bottom-[20%] right-[20%] w-[250px] h-[250px] bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-[40px]">
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="rounded-3xl p-8 md:p-12 relative overflow-hidden liquid-glass-card scroll-reveal">
                <div class="grid md:grid-cols-2 gap-10 items-center">
                    <div class="order-2 md:order-1">
                        <span
                            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-surface-light text-sm font-semibold mb-6">
                            <span class="material-icons text-sm">menu_book</span>
                            Panduan Lengkap
                        </span>
                        <h2 class="text-3xl md:text-4xl font-extrabold text-surface-light dark:text-white mb-6">
                            Download <span
                                class="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary">Guide
                                Book</span>
                        </h2>
                        <p class="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                            Unduh panduan lengkap INSPIRA 2026 untuk memahami syarat, ketentuan, dan mekanisme kompetisi
                            secara mendetail. Persiapkan tim Anda dengan informasi yang tepat.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4">
                            <a href="{{ asset('asset/Guide Book INSPIRA 2026.pdf') }}"
                                class="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300">
                                <span class="material-icons">download</span>
                                Unduh Guide Book
                            </a>
                        </div>
                    </div>
                    <div class="order-1 md:order-2 flex justify-center relative">
                        <!-- Book Visualization -->
                        <div
                            class="relative w-48 h-64 md:w-56 md:h-72 transform rotate-6 transition-transform duration-500 hover:rotate-0">
                            <!-- Book Cover -->
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-surface-light to-gray-200 dark:from-surface-dark dark:to-gray-800 rounded-r-lg rounded-l-sm shadow-2xl border-r-4 border-b-4 border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center p-4 z-20">
                                <img src="{{ asset('asset/img/Logo Inspira.png') }}"
                                    class="w-16 h-16 mb-4 drop-shadow-md" alt="Inspira Logo">
                                <h3 class="text-2xl font-black text-center text-gray-800 dark:text-white leading-tight">
                                    GUIDE<br>BOOK</h3>
                                <div class="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full my-3">
                                </div>
                                <p class="text-sm font-bold text-primary">INSPIRA 2026</p>
                            </div>
                            <!-- Pages effect -->
                            <div
                                class="absolute top-1 right-2 bottom-1 left-2 bg-white dark:bg-gray-700 rounded-r-lg shadow-md z-10 transform translate-x-1 translate-y-1">
                            </div>
                            <div
                                class="absolute top-2 right-4 bottom-2 left-0 bg-white dark:bg-gray-700 rounded-r-lg shadow-md z-0 transform translate-x-2 translate-y-2">
                            </div>

                            <!-- Glow effect -->
                            <div class="absolute inset-0 bg-primary/30 blur-3xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-20 relative overflow-hidden" id="poster">
        <!-- Background liquid blobs -->
        <div class="absolute inset-0 -z-10">
            <div
                class="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-indigo-300/10 to-purple-300/10 rounded-full blur-[70px]">
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="rounded-3xl p-8 md:p-12 relative overflow-hidden liquid-glass-card scroll-reveal">
                <div class="grid md:grid-cols-2 gap-10 items-center">
                    <div class="order-1 relative flex justify-center">
                        <!-- Poster Visualization -->
                        <div
                            class="relative w-full max-w-[300px] aspect-[3/4] md:w-80 md:h-[28rem] transform -rotate-2 hover:rotate-0 transition-transform duration-500 group perspective-1000">
                            <!-- Poster Frame -->
                            <div
                                class="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl z-20 group-hover:scale-[1.02] transition-transform duration-500">
                                <iframe src="{{ asset('asset/Poster Inspira.pdf') }}#toolbar=0&view=FitH"
                                    class="w-full h-full" frameborder="0"></iframe>
                            </div>

                            <!-- Glow effect -->
                            <div
                                class="absolute inset-0 bg-primary/30 blur-3xl -z-10 group-hover:bg-primary/40 transition-colors duration-500">
                            </div>
                        </div>
                    </div>

                    <div class="order-2">
                        <span
                            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-surface-light text-sm font-semibold mb-6">
                            <span class="material-icons text-sm">face</span>
                            Template Peserta
                        </span>
                        <h2 class="text-3xl md:text-4xl font-extrabold text-surface-light dark:text-white mb-6">
                            Download <span
                                class="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary">Template
                                Poster</span>
                        </h2>
                        <p class="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                            Unduh template poster dan gunakan untuk publikasi keikutsertaan.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4">
                            <a href="{{ asset('asset/Poster Inspira.pdf') }}" target="_blank"
                                class="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300">
                                <span class="material-icons">download</span>
                                Unduh Template PDF
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-24 relative overflow-hidden" id="register">
        <!-- Background decorations -->
        <div class="absolute inset-0 -z-10">
            <div
                class="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-gradient-to-br from-primary/15 to-purple-500/15 rounded-full blur-[60px] liquid-blob">
            </div>
            <div
                class="absolute bottom-[20%] left-[0%] w-[350px] h-[350px] bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-[50px] liquid-blob-delay">
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="text-center mb-16 scroll-reveal">
                <span
                    class="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
                    <span class="material-icons text-sm text-surface-light">how_to_reg</span>
                    Pendaftaran & Kontak
                </span>

                <a href="https://docs.google.com/forms/d/e/1FAIpQLSektQpzJho-mESACtFHJLBvcXLqHt5QZkSElfYnE-oD9ZbVBA/viewform"
                    target="_blank" class="block hover:opacity-80 transition-opacity">
                    <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                        Daftar <span
                            class="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary">Sekarang</span>
                    </h2>
                </a>
                <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">Bergabunglah dengan inovator dari
                    seluruh dunia dan tunjukkan karya terbaik Anda.</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <!-- Registration Card -->
                <div class="rounded-3xl p-8 liquid-glass-card order-2 lg:order-1 scroll-reveal-left">
                    <div class="flex items-center gap-4 mb-8">
                        <div
                            class="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg shadow-primary/30">
                            <span class="material-icons text-white text-2xl">payments</span>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Biaya Registrasi</h3>
                            <p class="text-sm text-gray-500 dark:text-gray-400">Per tim (maks. 3 anggota)</p>
                        </div>
                    </div>

                    <ul class="space-y-4 mb-8">
                        <li
                            class="group flex justify-between items-center p-5 rounded-2xl liquid-glass hover:scale-[1.02] transition-transform cursor-default">
                            <div class="flex items-center gap-3">
                                <div
                                    class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                                    <span class="material-icons text-white text-sm">school</span>
                                </div>
                                <div>
                                    <span class="font-semibold text-gray-800 dark:text-gray-200 block">Mahasiswa
                                        Abulyatama</span>
                                    <span class="text-xs text-gray-500 dark:text-gray-400">Internal University</span>
                                </div>
                            </div>
                            <span class="font-bold text-primary dark:text-purple-400 text-xl">Rp 100K</span>
                        </li>
                        <li
                            class="group flex justify-between items-center p-5 rounded-2xl liquid-glass hover:scale-[1.02] transition-transform cursor-default">
                            <div class="flex items-center gap-3">
                                <div
                                    class="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
                                    <span class="material-icons text-white text-sm">account_balance</span>
                                </div>
                                <div>
                                    <span class="font-semibold text-gray-800 dark:text-gray-200 block">Institusi
                                        Lain</span>
                                    <span class="text-xs text-gray-500 dark:text-gray-400">Nasional Indonesia</span>
                                </div>
                            </div>
                            <span class="font-bold text-primary dark:text-purple-400 text-xl">Rp 300K</span>
                        </li>
                        <li
                            class="group flex justify-between items-center p-5 rounded-2xl liquid-glass hover:scale-[1.02] transition-transform cursor-default">
                            <div class="flex items-center gap-3">
                                <div
                                    class="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center">
                                    <span class="material-icons text-white text-sm">public</span>
                                </div>
                                <div>
                                    <span
                                        class="font-semibold text-gray-800 dark:text-gray-200 block">International</span>
                                    <span class="text-xs text-gray-500 dark:text-gray-400">Overseas Participant</span>
                                </div>
                            </div>
                            <span class="font-bold text-primary dark:text-purple-400 text-xl">USD 60</span>
                        </li>
                    </ul>
                    <!-- Countdown Timer -->
                    <div
                        class="p-5 rounded-2xl bg-gradient-to-r from-primary/10 via-purple-500/10 to-secondary/10 border border-primary/20 mb-6">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center gap-2">
                                <span class="relative flex h-3 w-3">
                                    <span
                                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">Pendaftaran Sudah
                                    Dibuka</span>
                            </div>
                            <span class="text-xs text-gray-500 dark:text-gray-400">19 Jan - 20 Mar 2026</span>
                        </div>
                        <!-- <p class="text-xs text-gray-500 dark:text-gray-400 mb-3">Sisa waktu pendaftaran:</p> -->
                        <p class="text-xs text-gray-500 dark:text-gray-400 mb-3">pendaftaran dibuka dalam :</p>
                        <div class="grid grid-cols-4 gap-2" id="countdown-timer">
                            <div class="text-center p-3 rounded-xl liquid-glass">
                                <div class="text-2xl md:text-3xl font-bold text-primary dark:text-purple-400"
                                    id="countdown-days">--</div>
                                <div class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Hari</div>
                            </div>
                            <div class="text-center p-3 rounded-xl liquid-glass">
                                <div class="text-2xl md:text-3xl font-bold text-primary dark:text-purple-400"
                                    id="countdown-hours">--</div>
                                <div class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Jam</div>
                            </div>
                            <div class="text-center p-3 rounded-xl liquid-glass">
                                <div class="text-2xl md:text-3xl font-bold text-primary dark:text-purple-400"
                                    id="countdown-minutes">--</div>
                                <div class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Menit
                                </div>
                            </div>
                            <div class="text-center p-3 rounded-xl liquid-glass">
                                <div class="text-2xl md:text-3xl font-bold text-primary dark:text-purple-400"
                                    id="countdown-seconds">--</div>
                                <div class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Detik
                                </div>
                            </div>
                        </div>
                        <div id="countdown-expired" class="hidden text-center py-4">
                            <span class="text-red-500 font-semibold">Pendaftaran telah ditutup</span>
                        </div>
                    </div>

                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSektQpzJho-mESACtFHJLBvcXLqHt5QZkSElfYnE-oD9ZbVBA/viewform"
                        target="_blank"
                        class="group w-full py-4 bg-gradient-to-r from-primary to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold rounded-2xl shadow-xl shadow-primary/40 hover:shadow-primary/60 transition-all duration-300 flex items-center justify-center gap-2">
                        <span>Daftar Sekarang</span>
                        <span
                            class="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                </div>

                <!-- Contact Information -->
                <div class="order-1 lg:order-2 scroll-reveal-right">
                    <div class="mb-8">
                        <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-3">Hubungi Kami</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-lg">
                            Punya pertanyaan tentang INSPIRA 2026? Tim kami siap membantu Anda.
                        </p>
                    </div>

                    <!-- Contact Cards Grid -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <!-- Website 1 -->
                        <a href="https://teknik.unaya.ac.id/inspira"
                            class="group p-5 rounded-2xl liquid-glass-card flex items-center gap-4 hover:border-primary/40">
                            <div
                                class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                                <span class="material-icons text-white">language</span>
                            </div>
                            <div>
                                <h4 class="font-bold text-gray-900 dark:text-white text-sm">Website INSPIRA</h4>
                                <p
                                    class="text-xs text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors">
                                    teknik.unaya.ac.id/inspira</p>
                            </div>
                        </a>

                        <!-- Website 2 -->
                        <a href="https://unaya.ac.id"
                            class="group p-5 rounded-2xl liquid-glass-card flex items-center gap-4 hover:border-primary/40">
                            <div
                                class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
                                <span class="material-icons text-white">school</span>
                            </div>
                            <div>
                                <h4 class="font-bold text-gray-900 dark:text-white text-sm">Universitas Abulyatama</h4>
                                <p
                                    class="text-xs text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors">
                                    unaya.ac.id</p>
                            </div>
                        </a>

                        <!-- Phone 1 -->
                        <a href="tel:+6285178437270"
                            class="group p-5 rounded-2xl liquid-glass-card flex items-center gap-4 hover:border-emerald-500/40">
                            <div
                                class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                                <span class="material-icons text-white">call</span>
                            </div>
                            <div>
                                <h4 class="font-bold text-gray-900 dark:text-white text-sm">Narahubung 1</h4>
                                <p
                                    class="text-xs text-gray-500 dark:text-gray-400 group-hover:text-emerald-500 transition-colors">
                                    +62 851-7843-7270</p>
                            </div>
                        </a>

                        <!-- Phone 2 -->
                        <a href="tel:+6282260567114"
                            class="group p-5 rounded-2xl liquid-glass-card flex items-center gap-4 hover:border-emerald-500/40">
                            <div
                                class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                                <span class="material-icons text-white">call</span>
                            </div>
                            <div>
                                <h4 class="font-bold text-gray-900 dark:text-white text-sm">Narahubung 2</h4>
                                <p
                                    class="text-xs text-gray-500 dark:text-gray-400 group-hover:text-cyan-500 transition-colors">
                                    +62 822-6056-7114</p>
                            </div>
                        </a>

                        <!-- Email -->
                        <a href="mailto:inspira@abulyatama.ac.id"
                            class="group p-5 rounded-2xl liquid-glass-card flex items-center gap-4 hover:border-rose-500/40 sm:col-span-2">
                            <div
                                class="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-lg shadow-rose-500/20 group-hover:scale-110 transition-transform">
                                <span class="material-icons text-white">email</span>
                            </div>
                            <div>
                                <h4 class="font-bold text-gray-900 dark:text-white text-sm">Email</h4>
                                <p
                                    class="text-xs text-gray-500 dark:text-gray-400 group-hover:text-rose-500 transition-colors">
                                    inspira@abulyatama.ac.id</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 bg-gray-900 dark:bg-black/50 relative overflow-hidden">
        <div class="absolute inset-0 -z-10">
            <div
                class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-primary/10 to-transparent rounded-full blur-[60px]">
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <!-- Logo & Description -->
                <div class="md:col-span-1">
                    <div class="flex items-center gap-2 mb-4">
                        <img src="{{ asset('asset/img/Logo Inspira.png') }}" class="w-10 h-10" alt="Logo Inspira">
                        <img src="{{ asset('asset/img/Inspira 2026.png') }}" class="w-48 h-auto" alt="Logo Inspira">
                    </div>
                    <p class="text-gray-400 text-sm leading-relaxed">
                        International Scientific Product & Innovation Area - Wadah bagi inovator untuk menampilkan karya
                        terbaik mereka.
                    </p>
                </div>

                <!-- Quick Links -->
                <div class="md:col-span-1">
                    <h4 class="font-bold text-white mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="#hero"
                                class="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2"><span
                                    class="material-icons text-xs">chevron_right</span> Beranda</a></li>
                        <li><a href="#categories"
                                class="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2"><span
                                    class="material-icons text-xs">chevron_right</span> Kategori</a></li>
                        <li><a href="#dates"
                                class="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2"><span
                                    class="material-icons text-xs">chevron_right</span> Jadwal</a></li>
                        <li><a href="#register"
                                class="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2"><span
                                    class="material-icons text-xs">chevron_right</span> Pendaftaran</a></li>
                    </ul>
                </div>

                <!-- Organized By -->
                <div class="md:col-span-1">
                    <h4 class="font-bold text-white mb-4">Diselenggarakan Oleh</h4>
                    <div class="space-y-3">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                                <span class="material-icons text-surface-light">account_balance</span>
                            </div>
                            <div>
                                <p class="text-white text-sm font-medium">Universitas Abulyatama</p>
                                <p class="text-gray-500 text-xs">Fakultas Teknik</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pt-8 border-t border-gray-800">
                <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p class="text-sm text-gray-500">
                        © 2026 INSPIRA - International Scientific Product & Innovation Area. All rights reserved.
                    </p>
                    <div class="flex items-center gap-4">
                        <a href="#"
                            class="w-10 h-10 rounded-xl bg-white/5 hover:bg-primary/20 flex items-center justify-center text-gray-400 hover:text-primary transition-all">
                            <span class="material-icons text-xl">mail</span>
                        </a>
                        <a href="#"
                            class="w-10 h-10 rounded-xl bg-white/5 hover:bg-primary/20 flex items-center justify-center text-gray-400 hover:text-primary transition-all">
                            <span class="material-icons text-xl">link</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</body>

</html>