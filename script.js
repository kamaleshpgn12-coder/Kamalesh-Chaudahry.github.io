document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    const themeToggle = document.querySelector('.theme-toggle');
    const navItems = document.querySelectorAll('.nav-links a');
    const contactForm = document.getElementById('contactForm');
    const loader = document.querySelector('.loader');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const icon = themeToggle.querySelector('i');
        if (document.body.classList.contains('light-theme')) {
            icon.className = 'bx bx-sun';
        } else {
            icon.className = 'bx bx-moon';
        }
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        navItems.forEach(item => {
            const section = document.querySelector(item.getAttribute('href'));
            if (section) {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                const scrollPosition = window.scrollY;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navItems.forEach(nav => nav.classList.remove('active'));
                    item.classList.add('active');
                }
            }
        });
    });

    setTimeout(() => {
        document.body.classList.add('loaded');
        if (loader) {
            loader.style.display = 'none';
        }
        initPageAnimations();
        initCharts();
        initScrollAnimations();
    }, 1500);

    function initPageAnimations() {
        const heroText = document.querySelector('.hero-text');
        const heroImage = document.querySelector('.hero-image');
        const scrollIndicator = document.querySelector('.scroll-indicator');

        if (heroText) {
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
        }

        if (heroImage) {
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'translateX(0)';
        }

        if (scrollIndicator) {
            scrollIndicator.style.opacity = '1';
        }
    }

    function initCharts() {
        const chartConfig = {
            color: '#0d9488',
            backgroundColor: 'rgba(13, 148, 136, 0.1)',
            borderColor: '#0d9488'
        };

        if (document.getElementById('miniChart1')) {
            new Chart(document.getElementById('miniChart1'), {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                    datasets: [{
                        data: [30, 45, 35, 60, 55],
                        borderColor: chartConfig.color,
                        backgroundColor: chartConfig.backgroundColor,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { display: false },
                        y: { display: false }
                    }
                }
            });
        }

        if (document.getElementById('miniChart2')) {
            new Chart(document.getElementById('miniChart2'), {
                type: 'bar',
                data: {
                    labels: ['A', 'B', 'C', 'D'],
                    datasets: [{
                        data: [40, 60, 45, 80],
                        backgroundColor: chartConfig.backgroundColor,
                        borderColor: chartConfig.color,
                        borderWidth: 2,
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { display: false },
                        y: { display: false }
                    }
                }
            });
        }

        if (document.getElementById('skillsChart')) {
            new Chart(document.getElementById('skillsChart'), {
                type: 'radar',
                data: {
                    labels: ['Python', 'SQL', 'Excel', 'Power BI', 'Tableau', 'Visualization'],
                    datasets: [{
                        label: 'Proficiency',
                        data: [85, 80, 90, 70, 65, 88],
                        backgroundColor: 'rgba(13, 148, 136, 0.2)',
                        borderColor: '#0d9488',
                        borderWidth: 2,
                        pointBackgroundColor: '#0d9488'
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        r: {
                            beginAtZero: true,
                            max: 100,
                            ticks: { display: false },
                            grid: { color: 'rgba(148, 163, 184, 0.1)' },
                            angleLines: { color: 'rgba(148, 163, 184, 0.1)' },
                            pointLabels: { color: '#94a3b8' }
                        }
                    },
                    plugins: { legend: { display: false } }
                }
            });
        }

        const projectCharts = [
            { id: 'projectChart1', type: 'line', data: [20, 35, 45, 30, 55, 65] },
            { id: 'projectChart2', type: 'doughnut', data: [45, 35, 20], labels: ['Growth', 'Stable', 'Decline'] },
            { id: 'projectChart3', type: 'bar', data: [65, 45, 80, 55, 70] },
            { id: 'projectChart4', type: 'polarArea', data: [30, 50, 40, 60, 35] }
        ];

        projectCharts.forEach(chart => {
            const canvas = document.getElementById(chart.id);
            if (canvas) {
                const config = chart.type === 'line' ? {
                    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'],
                    datasets: [{
                        data: chart.data,
                        borderColor: '#0d9488',
                        backgroundColor: 'rgba(13, 148, 136, 0.2)',
                        fill: true,
                        tension: 0.4,
                        pointRadius: 0
                    }]
                } : chart.type === 'doughnut' ? {
                    labels: chart.labels,
                    datasets: [{
                        data: chart.data,
                        backgroundColor: ['#0d9488', '#06b6d4', '#3b82f6'],
                        borderWidth: 0
                    }]
                } : chart.type === 'bar' ? {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                    datasets: [{
                        data: chart.data,
                        backgroundColor: 'rgba(13, 148, 136, 0.5)',
                        borderColor: '#0d9488',
                        borderWidth: 2,
                        borderRadius: 4
                    }]
                } : {
                    labels: ['Region A', 'Region B', 'Region C', 'Region D', 'Region E'],
                    datasets: [{
                        data: chart.data,
                        backgroundColor: ['rgba(13,148,136,0.5)', 'rgba(6,182,212,0.5)', 'rgba(59,130,246,0.5)', 'rgba(13,148,136,0.7)', 'rgba(6,182,212,0.7)'],
                        borderWidth: 1
                    }]
                };

                new Chart(canvas, {
                    type: chart.type,
                    data: config,
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: { legend: { display: false } },
                        scales: chart.type === 'line' || chart.type === 'bar' ? {
                            x: { display: false },
                            y: { display: false }
                        } : undefined
                    }
                });
            }
        });
    }

    function initScrollAnimations() {
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target.querySelector('.skill-progress');
                    if (progressBar) {
                        const progress = progressBar.getAttribute('data-progress');
                        setTimeout(() => {
                            progressBar.style.width = progress + '%';
                        }, 500);
                    }
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.skill-card').forEach(card => {
            skillObserver.observe(card);
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            if (name && email && subject && message) {
                const button = contactForm.querySelector('button');
                const originalText = button.innerHTML;
                button.innerHTML = '<i class="bx bx-check"></i> Message Sent!';
                button.style.background = 'linear-gradient(135deg, #06b6d4 0%, #0d9488 100%)';
                
                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.style.background = '';
                    contactForm.reset();
                }, 3000);
            }
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        if (scrollTop < 50) {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
});
