// Script principal pour le site

document.addEventListener('DOMContentLoaded', function() {
    
    // Menu mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav ul');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('show');
            mobileMenuBtn.innerHTML = mainNav.classList.contains('show') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    // Fermer le menu mobile en cliquant sur un lien
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('show');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
    
    // Gestion du lecteur vidéo
    const mainVideo = document.getElementById('main-video');
    const videoTitle = document.getElementById('video-title');
    const videoDescription = document.getElementById('video-description');
    const videoDate = document.querySelector('.video-date');
    const videoThumbnails = document.querySelectorAll('.video-thumbnail');
    
    if (mainVideo && videoThumbnails.length > 0) {
        // Changer la vidéo lorsqu'on clique sur une miniature
        videoThumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                // Récupérer les données de la miniature
                const videoSrc = this.getAttribute('data-video');
                const title = this.getAttribute('data-title');
                const description = this.getAttribute('data-description');
                const date = this.getAttribute('data-date');
                const thumbnailSrc = this.getAttribute('data-thumbnail');
                
                // Mettre à jour la vidéo principale
                mainVideo.src = videoSrc;
                mainVideo.poster = thumbnailSrc;
                videoTitle.textContent = title;
                videoDescription.textContent = description;
                videoDate.textContent = `Publié le ${date}`;
                
                // Redémarrer la vidéo
                mainVideo.load();
                
                // Mettre à jour l'état actif
                videoThumbnails.forEach(thumb => thumb.classList.remove('active'));
                this.classList.add('active');
                
                // Réinitialiser les compteurs des boutons
                resetButtonCounts();
            });
        });
    }
    
    // Gestion des boutons interactifs sous les vidéos
    const likeBtn = document.querySelector('.like-btn');
    const dislikeBtn = document.querySelector('.dislike-btn');
    const blessedBtn = document.querySelector('.blessed-btn');
    
    // Charger les compteurs depuis le localStorage
    function loadButtonCounts() {
        const currentVideo = mainVideo ? mainVideo.src : '';
        
        if (currentVideo) {
            const counts = JSON.parse(localStorage.getItem(`video_counts_${currentVideo}`)) || { like: 0, dislike: 0, blessed: 0 };
            
            if (likeBtn) likeBtn.setAttribute('data-count', counts.like);
            if (dislikeBtn) dislikeBtn.setAttribute('data-count', counts.dislike);
            if (blessedBtn) blessedBtn.setAttribute('data-count', counts.blessed);
            
            updateButtonDisplay();
        }
    }
    
    // Réinitialiser les compteurs pour une nouvelle vidéo
    function resetButtonCounts() {
        if (likeBtn) likeBtn.setAttribute('data-count', 0);
        if (dislikeBtn) dislikeBtn.setAttribute('data-count', 0);
        if (blessedBtn) blessedBtn.setAttribute('data-count', 0);
        
        updateButtonDisplay();
    }
    
    // Mettre à jour l'affichage des compteurs
    function updateButtonDisplay() {
        [likeBtn, dislikeBtn, blessedBtn].forEach(btn => {
            if (btn) {
                const count = btn.getAttribute('data-count');
                const countElement = btn.querySelector('.count');
                if (countElement) {
                    countElement.textContent = count;
                }
            }
        });
    }
    
    // Sauvegarder les compteurs dans le localStorage
    function saveButtonCounts() {
        const currentVideo = mainVideo ? mainVideo.src : '';
        
        if (currentVideo && likeBtn && dislikeBtn && blessedBtn) {
            const counts = {
                like: parseInt(likeBtn.getAttribute('data-count')),
                dislike: parseInt(dislikeBtn.getAttribute('data-count')),
                blessed: parseInt(blessedBtn.getAttribute('data-count'))
            };
            
            localStorage.setItem(`video_counts_${currentVideo}`, JSON.stringify(counts));
        }
    }
    
    // Gérer les clics sur les boutons
    function setupButtonListeners() {
        if (likeBtn) {
            likeBtn.addEventListener('click', function() {
                let count = parseInt(this.getAttribute('data-count'));
                this.setAttribute('data-count', count + 1);
                updateButtonDisplay();
                saveButtonCounts();
                animateButton(this);
            });
        }
        
        if (dislikeBtn) {
            dislikeBtn.addEventListener('click', function() {
                let count = parseInt(this.getAttribute('data-count'));
                this.setAttribute('data-count', count + 1);
                updateButtonDisplay();
                saveButtonCounts();
                animateButton(this);
            });
        }
        
        if (blessedBtn) {
            blessedBtn.addEventListener('click', function() {
                let count = parseInt(this.getAttribute('data-count'));
                this.setAttribute('data-count', count + 1);
                updateButtonDisplay();
                saveButtonCounts();
                animateButton(this);
            });
        }
    }
    
    // Animation des boutons lorsqu'on clique
    function animateButton(button) {
        button.style.transform = 'scale(1.1)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
    }
    
    // Initialiser les boutons vidéo
    if (mainVideo) {
        mainVideo.addEventListener('loadeddata', loadButtonCounts);
        setupButtonListeners();
    }
    
    // Gestion du formulaire de newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (email) {
                // Simuler l'envoi
                alert(`Merci de vous être inscrit à notre newsletter avec l'adresse: ${email}`);
                emailInput.value = '';
                
                // Enregistrer dans le localStorage
                let subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers')) || [];
                subscribers.push({email: email, date: new Date().toISOString()});
                localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
            }
        });
    }
    
    // Animation des éléments au défilement
    function animateOnScroll() {
        const elements = document.querySelectorAll('.about-card, .service-card, .ministry-card, .pdf-card, .gallery-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initialiser les animations
    const animatedElements = document.querySelectorAll('.about-card, .service-card, .ministry-card, .pdf-card, .gallery-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Écouter l'événement de défilement
    window.addEventListener('scroll', animateOnScroll);
    // Déclencher une première fois au chargement
    setTimeout(animateOnScroll, 100);
    
    // Gestion du verset du jour (exemple simple)
    function updateVerseOfTheDay() {
        const verses = [
            {
                text: "Car je connais les projets que j'ai formés sur vous, dit l'Éternel, projets de paix et non de malheur, afin de vous donner un avenir et de l'espérance.",
                ref: "Jérémie 29:11"
            },
            {
                text: "Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos.",
                ref: "Matthieu 11:28"
            },
            {
                text: "Je puis tout par celui qui me fortifie.",
                ref: "Philippiens 4:13"
            },
            {
                text: "L'Éternel est mon berger: je ne manquerai de rien.",
                ref: "Psaume 23:1"
            },
            {
                text: "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle.",
                ref: "Jean 3:16"
            }
        ];
        
        // Utiliser la date pour choisir un verset (alterner chaque jour)
        const today = new Date();
        const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
        const verseIndex = dayOfYear % verses.length;
        
        const verseElement = document.querySelector('.verse');
        const verseRefElement = document.querySelector('.verse-ref');
        
        if (verseElement && verseRefElement) {
            verseElement.textContent = verses[verseIndex].text;
            verseRefElement.textContent = verses[verseIndex].ref;
        }
    }
    
    // Appeler la fonction pour mettre à jour le verset du jour
    updateVerseOfTheDay();
    
    // Afficher l'année en cours dans le footer
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
    
    // Initialiser la galerie lightbox
    initLightbox();
});

// Lightbox pour la galerie
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxPrev = lightbox.querySelector('.lightbox-prev');
    const lightboxNext = lightbox.querySelector('.lightbox-next');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    let currentIndex = 0;
    const images = [];
    const captions = [];
    
    // Récupérer toutes les images et légendes
    galleryItems.forEach(item => {
        const img = item.querySelector('img');
        const overlay = item.querySelector('.gallery-overlay');
        images.push(img.src);
        captions.push({
            title: overlay.querySelector('h4').textContent,
            description: overlay.querySelector('p').textContent
        });
    });
    
    // Ouvrir le lightbox au clic sur une image
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentIndex = index;
            updateLightbox();
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Empêcher le défilement
        });
    });
    
    // Fermer le lightbox
    lightboxClose.addEventListener('click', () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Clic sur l'arrière-plan pour fermer
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Navigation précédente
    lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightbox();
    });
    
    // Navigation suivante
    lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        updateLightbox();
    });
    
    // Navigation au clavier
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'Escape') {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            } else if (e.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                updateLightbox();
            } else if (e.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % images.length;
                updateLightbox();
            }
        }
    });
    
    // Mettre à jour le contenu du lightbox
    function updateLightbox() {
        lightboxImg.src = images[currentIndex];
        const caption = captions[currentIndex];
        lightboxCaption.innerHTML = `<strong>${caption.title}</strong><br>${caption.description}`;
    }
}