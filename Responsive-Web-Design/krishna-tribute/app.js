// Lord Krishna Tribute Page - Interactive Enhancements
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth fade-in animation for content sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Initialize content sections for animation
    const contentSections = document.querySelectorAll('.content-section, .timeline-item');
    contentSections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
        observer.observe(section);
    });

    // Header fade-in animation
    const header = document.querySelector('.tribute-header');
    if (header) {
        header.style.opacity = '0';
        header.style.transform = 'translateY(-20px)';
        header.style.transition = 'opacity 1s ease 0.3s, transform 1s ease 0.3s';
        
        setTimeout(() => {
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }, 100);
    }

    // Image container fade-in animation
    const imgDiv = document.getElementById('img-div');
    if (imgDiv) {
        imgDiv.style.opacity = '0';
        imgDiv.style.transform = 'scale(0.95)';
        imgDiv.style.transition = 'opacity 1s ease 0.6s, transform 1s ease 0.6s';
        
        setTimeout(() => {
            imgDiv.style.opacity = '1';
            imgDiv.style.transform = 'scale(1)';
        }, 200);
    }

    // Add gentle hover effects to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 25px rgba(0, 88, 113, 0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });

    // Add gentle pulsing effect to the Krishna quote
    const quote = document.querySelector('.krishna-quote');
    if (quote) {
        let pulseInterval = setInterval(() => {
            quote.style.boxShadow = '0 0 20px rgba(152, 221, 223, 0.3)';
            setTimeout(() => {
                quote.style.boxShadow = 'none';
            }, 2000);
        }, 8000);

        // Stop pulsing when hovering over the quote
        quote.addEventListener('mouseenter', () => {
            clearInterval(pulseInterval);
            quote.style.boxShadow = '0 0 25px rgba(152, 221, 223, 0.4)';
        });
        
        quote.addEventListener('mouseleave', () => {
            quote.style.boxShadow = 'none';
            pulseInterval = setInterval(() => {
                quote.style.boxShadow = '0 0 20px rgba(152, 221, 223, 0.3)';
                setTimeout(() => {
                    quote.style.boxShadow = 'none';
                }, 2000);
            }, 8000);
        });
    }

    // Add smooth scroll behavior for internal links (if any are added later)
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

    // Add loading state management for the image
    const krishnaImage = document.getElementById('image');
    if (krishnaImage) {
        // Add loading indicator
        krishnaImage.style.transition = 'opacity 0.5s ease';
        
        // Handle image load event
        krishnaImage.addEventListener('load', function() {
            this.style.opacity = '1';
            console.log('Krishna image loaded successfully');
        });
        
        // Handle image error event
        krishnaImage.addEventListener('error', function() {
            console.log('Main image failed to load, using fallback');
            // Create a more attractive fallback SVG
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA1ODcxO3N0b3Atb3BhY2l0eTowLjEiLz48c3RvcCBvZmZzZXQ9IjUwJSIgc3R5bGU9InN0b3AtY29sb3I6IzJFNTI4MztzdG9wLW9wYWNpdHk6MC4xNSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6Izk4RERERjtzdG9wLW9wYWNpdHk6MC4yIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9InVybCgjYmcpIiBzdHJva2U9IiM5OERERkYiIHN0cm9rZS13aWR0aD0iMyIgcng9IjE1Ii8+PGNpcmNsZSBjeD0iMzAwIiBjeT0iMTUwIiByPSI4MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDA1ODcxIiBzdHJva2Utd2lkdGg9IjQiIG9wYWNpdHk9IjAuNiIvPjxjaXJjbGUgY3g9IjMwMCIgY3k9IjE1MCIgcj0iNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJFNTI4MyIgc3Ryb2tlLXdpZHRoPSIzIiBvcGFjaXR5PSIwLjgiLz48Y2lyY2xlIGN4PSIzMDAiIGN5PSIxNTAiIHI9IjE1IiBmaWxsPSIjOThEREREIiBvcGFjaXR5PSIwLjciLz48dGV4dCB4PSIzMDAiIHk9IjI4MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI4IiBmb250LXdlaWdodD0iNjAwIiBmaWxsPSIjMDA1ODcxIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TG9yZCBLcmlzaG5hPC90ZXh0Pjx0ZXh0IHg9IjMwMCIgeT0iMzIwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMyRTUyODMiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5EaXZpbmUgSW5jYXJuYXRpb248L3RleHQ+PHBhdGggZD0iTTIyMCAxODBRMzAwLDE2MCAzMDAsMTYwIDM4MCwxODAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzk4RERERiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjgwIDEzMEwyOTAgMTIwIDMwMCAxMzAgMzEwIDEyMCAzMjAgMTMwIiBmaWxsPSJub25lIiBzdHJva2U9IiM5OERERkYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBvcGFjaXR5PSIwLjgiLz48L3N2Zz4=';
            this.alt = 'Lord Krishna - Divine Incarnation (Artistic Representation)';
        });
        
        // If image is already loaded
        if (krishnaImage.complete && krishnaImage.naturalHeight !== 0) {
            krishnaImage.style.opacity = '1';
        }
    }

    // Add subtle animation to teachings list items
    const teachingsItems = document.querySelectorAll('.teachings-list li');
    teachingsItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1 + 0.5}s, transform 0.6s ease ${index * 0.1 + 0.5}s`;
        
        observer.observe(item);
    });

    // Add accessibility enhancements
    const focusableElements = document.querySelectorAll('a, button, [tabindex]');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #005871';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });

    // Add keyboard navigation enhancement
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            // Add visible focus indicators during keyboard navigation
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function() {
        // Remove focus indicators during mouse navigation
        document.body.classList.remove('keyboard-navigation');
    });

    // Add enhanced link interaction for tribute link
    const tributeLink = document.getElementById('tribute-link');
    if (tributeLink) {
        tributeLink.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(4px)';
            this.style.textShadow = '2px 2px 4px rgba(0, 88, 113, 0.2)';
        });
        
        tributeLink.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.textShadow = 'none';
        });
    }

    // Add content section hover enhancement
    const allContentSections = document.querySelectorAll('.content-section');
    allContentSections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.borderLeftWidth = '6px';
            this.style.boxShadow = '0 4px 15px rgba(152, 221, 223, 0.15)';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.borderLeftWidth = '4px';
            this.style.boxShadow = 'none';
        });
    });

    // Console message for devotees
    console.log('🕉️ Hare Krishna! Welcome to Lord Krishna\'s tribute page. May His divine blessings be with you always. 🙏');
    console.log('🌺 "Surrender unto Me all your activities and be free from all anxieties." - Bhagavad Gita 18.66');
    
    // Performance optimization: Clean up observers when page is hidden
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            observer.disconnect();
        } else {
            // Reconnect observer when page becomes visible again
            contentSections.forEach(section => observer.observe(section));
            teachingsItems.forEach(item => observer.observe(item));
        }
    });

    // Add reading progress indicator
    function addReadingProgress() {
        const progressBar = document.createElement('div');
        progressBar.id = 'reading-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(to right, #005871, #2E5283, #98DDDF);
            z-index: 1000;
            transition: width 0.3s ease;
        `;
        document.body.appendChild(progressBar);

        function updateProgress() {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = Math.min(scrollPercent, 100) + '%';
        }

        window.addEventListener('scroll', updateProgress);
        updateProgress(); // Initial call
    }

    // Add reading progress only if user prefers reduced motion is not set
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        addReadingProgress();
    }

    // Add subtle background animation for enhanced visual appeal
    function addBackgroundAnimation() {
        const main = document.getElementById('main');
        if (main) {
            let animationFrame;
            let startTime = Date.now();
            
            function animate() {
                const elapsed = Date.now() - startTime;
                const opacity = 0.05 + Math.sin(elapsed * 0.001) * 0.02;
                
                // Subtle breathing effect on the main container
                main.style.boxShadow = `0 20px 40px rgba(0, 88, 113, ${opacity})`;
                
                animationFrame = requestAnimationFrame(animate);
            }
            
            // Start animation only if user prefers reduced motion is not set
            if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                animate();
            }
            
            // Clean up animation on page unload
            window.addEventListener('beforeunload', () => {
                if (animationFrame) {
                    cancelAnimationFrame(animationFrame);
                }
            });
        }
    }

    // Initialize background animation after a short delay
    setTimeout(addBackgroundAnimation, 1000);

    // Add enhanced image viewing experience
    if (krishnaImage) {
        krishnaImage.addEventListener('click', function() {
            // Create a simple lightbox effect
            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2000;
                cursor: pointer;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            const enlargedImage = this.cloneNode();
            enlargedImage.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                border-radius: 12px;
                box-shadow: 0 20px 60px rgba(0, 88, 113, 0.5);
                transform: scale(0.9);
                transition: transform 0.3s ease;
            `;
            
            overlay.appendChild(enlargedImage);
            document.body.appendChild(overlay);
            
            // Animate in
            setTimeout(() => {
                overlay.style.opacity = '1';
                enlargedImage.style.transform = 'scale(1)';
            }, 10);
            
            // Close on click
            overlay.addEventListener('click', function() {
                overlay.style.opacity = '0';
                enlargedImage.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    document.body.removeChild(overlay);
                }, 300);
            });
            
            // Close on escape key
            const handleEscape = (e) => {
                if (e.key === 'Escape') {
                    overlay.click();
                    document.removeEventListener('keydown', handleEscape);
                }
            };
            document.addEventListener('keydown', handleEscape);
        });
        
        // Add cursor pointer to indicate clickability
        krishnaImage.style.cursor = 'pointer';
        krishnaImage.title = 'Click to view larger image';
    }
});