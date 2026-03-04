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
        })();