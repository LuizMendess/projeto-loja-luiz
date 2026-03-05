(function(){
            const nav = document.getElementById('siteNav');
            const btn = document.getElementById('navToggle');
            btn.addEventListener('click', function(){
                const shown = nav.classList.toggle('show');
                btn.setAttribute('aria-expanded', shown);
            });

            // Scroll to Top Button
            const scrollToTopBtn = document.getElementById('scrollToTop');
            
            window.addEventListener('scroll', function(){
                if(window.scrollY > 300){
                    scrollToTopBtn.classList.add('show');
                } else {
                    scrollToTopBtn.classList.remove('show');
                }
            });

            scrollToTopBtn.addEventListener('click', function(){
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });

            // Carousel functionality
            const carouselWrapper = document.querySelector('.carousel-wrapper');
            const prevBtn = document.querySelector('.carousel-btn.prev');
            const nextBtn = document.querySelector('.carousel-btn.next');
            const indicators = document.querySelectorAll('.indicator');
            let currentSlide = 0;
            const totalSlides = 6; // Número de produtos

            function updateCarousel() {
                const translateX = -currentSlide * 220; // Largura do produto + margem
                carouselWrapper.style.transform = `translateX(${translateX}px)`;
                indicators.forEach((indicator, index) => {
                    indicator.classList.toggle('active', index === currentSlide);
                });
            }

            prevBtn.addEventListener('click', function() {
                currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;
                updateCarousel();
            });

            nextBtn.addEventListener('click', function() {
                currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
                updateCarousel();
            });

            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', function() {
                    currentSlide = index;
                    updateCarousel();
                });
            });
        })();