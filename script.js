 // Header Scroll Effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navMenu = document.getElementById('navMenu');
        
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('show')) {
                    navMenu.classList.remove('show');
                }
            });
        });

        // Coffee Cup Animation System
        const coffeeCup = document.getElementById('coffeeCup');
        const cup = document.getElementById('cup');
        const coffeeSteam = document.getElementById('coffeeSteam');
        const body = document.body;
        
        // Scene configurations
        const scenes = [
            {
                bgColor: '#F9F5F0',
                cupColor: '#6F4E37',
                liquidColor: '#E3B04B',
                image: 'url("https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")'
            },
            {
                bgColor: '#4E382A' ,
                cupColor: '#C4A484',
                liquidColor: '#6F4E37',
                image: 'url("https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")'
            },
            {
                bgColor: '#E3B04B',
                cupColor: '#2D2424',
                liquidColor: '#C4A484',
                image: 'url("https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")'
            }
        ];
        
        let currentScene = 0;
        
        // Create floating coffee beans
        function createFloatingBeans() {
            const container = document.getElementById('floatingBeans');
            const beanCount = 15;
            
            for (let i = 0; i < beanCount; i++) {
                const bean = document.createElement('div');
                bean.classList.add('coffee-bean');
                
                // Random positioning
                const angle = Math.random() * Math.PI * 2;
                const radius = 100 + Math.random() * 50;
                bean.style.left = `calc(50% + ${Math.cos(angle) * radius}px)`;
                bean.style.top = `calc(50% + ${Math.sin(angle) * radius}px)`;
                
                // Random size
                const size = 15 + Math.random() * 15;
                bean.style.width = `${size}px`;
                bean.style.height = `${size}px`;
                
                // Random animation
                const tx = (Math.random() - 0.5) * 200;
                const ty = -100 - Math.random() * 100;
                const duration = 5 + Math.random() * 10;
                const delay = Math.random() * 5;
                
                bean.style.setProperty('--tx', `${tx}px`);
                bean.style.setProperty('--ty', `${ty}px`);
                bean.style.animation = `float ${duration}s linear ${delay}s infinite`;
                
                container.appendChild(bean);
            }
        }
        
        // Create coffee steam
        function createSteam() {
            coffeeSteam.innerHTML = '';
            const steamCount = 5;
            
            for (let i = 0; i < steamCount; i++) {
                const steamPuff = document.createElement('div');
                steamPuff.classList.add('steam');
                
                const size = 20 + Math.random() * 30;
                const left = 40 + (i * 5) + (Math.random() * 20);
                const sx = (Math.random() - 0.5) * 20;
                const duration = 2 + Math.random();
                const delay = Math.random();
                
                steamPuff.style.width = `${size}px`;
                steamPuff.style.height = `${size}px`;
                steamPuff.style.left = `${left}%`;
                steamPuff.style.setProperty('--sx', `${sx}px`);
                steamPuff.style.animation = `steam ${duration}s ease-out ${delay}s infinite`;
                
                coffeeSteam.appendChild(steamPuff);
            }
        }
        
        // Change scene
        function changeScene() {
            currentScene = (currentScene + 1) % scenes.length;
            const scene = scenes[currentScene];
            
            // Rotate cup
            cup.style.animation = 'rotate 1.5s ease-in-out';
            
            // After rotation completes
            setTimeout(() => {
                // Change colors and image
                body.style.backgroundColor = scene.bgColor;
                
                // Update cup SVG
                cup.style.backgroundImage = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="${encodeURIComponent(scene.cupColor)}" d="M30 40c0-10 10-20 20-20s20 10 20 20v30h-40v-30zm5 0c0-8.3 6.7-15 15-15s15 6.7 15 15v25h-30v-25z"/><path fill="${encodeURIComponent(scene.liquidColor)}" d="M25 70h50v5h-50z"/></svg>')`;
                
                // Reset rotation animation
                cup.style.animation = '';
                
                // Create new steam
                createSteam();
            }, 1500);
            
            // Schedule next scene change
            setTimeout(changeScene, 5000);
        }
        
        // Initialize
        createFloatingBeans();
        createSteam();
        
        // Start scene rotation
        setTimeout(changeScene, 3000);
        
        // Cup hover effect
        coffeeCup.addEventListener('mouseenter', () => {
            // Make coffee overflow
            cup.style.animation = 'pour 0.5s ease-in-out';
            
            // Change to next scene on hover
            setTimeout(() => {
                changeScene();
            }, 500);
        });
        
        coffeeCup.addEventListener('mouseleave', () => {
            cup.style.animation = '';
        });

        // Menu category filter
        const categoryBtns = document.querySelectorAll('.category-btn');
        const menuItems = document.querySelectorAll('.menu-item');
        
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                categoryBtns.forEach(b => b.classList.remove('active'));
                
                // Add active class to clicked button
                btn.classList.add('active');
                
                // Filter menu items
                const category = btn.textContent.toLowerCase();
                
                menuItems.forEach(item => {
                    if (category === 'all') {
                        item.style.display = 'block';
                    } else {
                        const itemCategory = item.querySelector('h3').textContent.toLowerCase();
                        if (itemCategory.includes(category)) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    }
                });
            });
        });

        // Animate stats
        function animateStats() {
            const stats = [
                { element: document.getElementById('coffeeServed'), target: 5342, duration: 2000 },
                { element: document.getElementById('happyCustomers'), target: 98, duration: 1500 },
                { element: document.getElementById('coffeeOrigins'), target: 12, duration: 1000 },
                { element: document.getElementById('yearsExperience'), target: 13, duration: 1000 }
            ];
            
            stats.forEach(stat => {
                const start = 0;
                const increment = stat.target / (stat.duration / 16); // 60fps
                let current = start;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= stat.target) {
                        clearInterval(timer);
                        stat.element.textContent = stat.target + (stat.element.id === 'happyCustomers' ? '%' : (stat.element.id === 'coffeeServed' ? '+' : ''));
                    } else {
                        stat.element.textContent = Math.floor(current) + (stat.element.id === 'happyCustomers' ? '%' : (stat.element.id === 'coffeeServed' ? '+' : ''));
                    }
                }, 16);
            });
        }
        
        // Trigger stats animation when about section is in view
        const aboutSection = document.querySelector('.about');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(aboutSection);

        // Form submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been received. We'll get back to you soon.`);
            
            // Reset form
            contactForm.reset();
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
