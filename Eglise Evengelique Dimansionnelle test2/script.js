// Configuration de l'application
const CONFIG = {
    // Versets bibliques de secours
    verses: [
        {
            text: "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle.",
            reference: "Jean 3:16"
        },
        {
            text: "Je puis tout par celui qui me fortifie.",
            reference: "Philippiens 4:13"
        },
        {
            text: "L'Éternel est mon berger: je ne manquerai de rien.",
            reference: "Psaume 23:1"
        },
        {
            text: "Cherchez premièrement le royaume et la justice de Dieu; et toutes ces choses vous seront données par-dessus.",
            reference: "Matthieu 6:33"
        },
        {
            text: "Ne crains point, car je suis avec toi; ne promène pas des regards inquiets, car je suis ton Dieu; je te fortifie, je viens à ton secours, je te soutiens de ma droite triomphante.",
            reference: "Ésaïe 41:10"
        },
        {
            text: "Car c'est par la grâce que vous êtes sauvés, par le moyen de la foi. Et cela ne vient pas de vous, c'est le don de Dieu.",
            reference: "Éphésiens 2:8"
        },
        {
            text: "La foi est une ferme assurance des choses qu'on espère, une démonstration de celles qu'on ne voit pas.",
            reference: "Hébreux 11:1"
        }
    ],
    
    // Exemple de vidéos (à remplacer par vos propres vidéos)
    videos: [
        {
            id: 1,
            title: "Sermon du Dimanche - La Foi Dimensionnelle",
            description: "Un message puissant sur la foi qui transcende les dimensions visibles et invisibles.",
            category: "sermon",
            duration: "45:22",
            views: 1250,
            date: "2023-05-15",
            thumbnail: "thumbnails/sermon1-thumb.jpg",
            videoFile: "videos/sermon1.mp4"
        },
        {
            id: 2,
            title: "Temps de Louange - Avril 2023",
            description: "Un moment de louange et d'adoration avec l'équipe de louange de l'église.",
            category: "worship",
            duration: "32:15",
            views: 890,
            date: "2023-04-28",
            thumbnail: "thumbnails/worship1-thumb.jpg",
            videoFile: "videos/worship1.mp4"
        },
        {
            id: 3,
            title: "Étude Biblique - Le Royaume des Cieux",
            description: "Une étude approfondie sur la nature du Royaume de Dieu selon les Écritures.",
            category: "teaching",
            duration: "58:10",
            views: 720,
            date: "2023-04-20",
            thumbnail: "thumbnails/study1-thumb.jpg",
            videoFile: "videos/study1.mp4"
        },
        {
            id: 4,
            title: "Culte de Jeunesse - Mai 2023",
            description: "Un culte dynamique spécialement conçu pour les jeunes de notre communauté.",
            category: "event",
            duration: "50:45",
            views: 560,
            date: "2023-05-05",
            thumbnail: "thumbnails/youth1-thumb.jpg",
            videoFile: "videos/youth1.mp4"
        },
        {
            id: 5,
            title: "La Puissance de la Prière",
            description: "Enseignement sur l'importance et la puissance de la prière dans la vie du croyant.",
            category: "teaching",
            duration: "41:30",
            views: 940,
            date: "2023-05-10",
            thumbnail: "thumbnails/prayer1-thumb.jpg",
            videoFile: "videos/prayer1.mp4"
        },
        {
            id: 6,
            title: "Concert de Gospel Spécial",
            description: "Un concert exceptionnel avec la chorale gospel de l'église.",
            category: "worship",
            duration: "68:20",
            views: 1120,
            date: "2023-05-12",
            thumbnail: "thumbnails/gospel1-thumb.jpg",
            videoFile: "videos/gospel1.mp4"
        }
    ],
    
    // Exemple d'images pour la galerie
    images: [
        {
            id: 1,
            title: "Culte du Dimanche",
            description: "Notre assemblée lors du culte dominical",
            category: "worship",
            date: "2023-05-14",
            filename: "images/worship1.jpg"
        },
        {
            id: 2,
            title: "Baptême",
            description: "Cérémonie de baptême dans notre église",
            category: "events",
            date: "2023-04-30",
            filename: "images/baptism1.jpg"
        },
        {
            id: 3,
            title: "Action Communautaire",
            description: "Distribution de nourriture aux personnes dans le besoin",
            category: "outreach",
            date: "2023-05-05",
            filename: "images/outreach1.jpg"
        },
        {
            id: 4,
            title: "École du Dimanche",
            description: "Les enfants pendant l'école du dimanche",
            category: "community",
            date: "2023-05-07",
            filename: "images/sundayschool1.jpg"
        },
        {
            id: 5,
            title: "Retraite Spirituelle",
            description: "Moment de prière pendant la retraite annuelle",
            category: "events",
            date: "2023-04-15",
            filename: "images/retreat1.jpg"
        },
        {
            id: 6,
            title: "Chorale Gospel",
            description: "La chorale pendant la répétition",
            category: "worship",
            date: "2023-05-10",
            filename: "images/choir1.jpg"
        }
    ],
    
    // Exemple de documents
    documents: {
        programs: [
            {
                id: 1,
                title: "Programme du Mois de Juin 2023",
                description: "Programme complet des cultes et activités",
                size: "2.4 MB",
                filename: "documents/programme-juin-2023.docx"
            },
            {
                id: 2,
                title: "Programme du Culte du Dimanche",
                description: "Déroulement typique de notre culte dominical",
                size: "1.8 MB",
                filename: "documents/programme-culte-dimanche.docx"
            }
        ],
        studies: [
            {
                id: 1,
                title: "Étude sur la Foi",
                description: "Guide d'étude biblique sur le thème de la foi",
                size: "3.1 MB",
                filename: "documents/etude-foi.docx"
            },
            {
                id: 2,
                title: "La Prière selon Jésus",
                description: "Étude sur l'enseignement de Jésus concernant la prière",
                size: "2.7 MB",
                filename: "documents/priere-jesus.docx"
            }
        ],
        newsletters: [
            {
                id: 1,
                title: "Newsletter Mai 2023",
                description: "Nouvelles et informations du mois de mai",
                size: "4.2 MB",
                filename: "documents/newsletter-mai-2023.docx"
            },
            {
                id: 2,
                title: "Newsletter Avril 2023",
                description: "Nouvelles et informations du mois d'avril",
                size: "3.9 MB",
                filename: "documents/newsletter-avril-2023.docx"
            }
        ],
        info: [
            {
                id: 1,
                title: "Formulaire d'Inscription",
                description: "Formulaire pour s'inscrire aux activités de l'église",
                size: "1.1 MB",
                filename: "documents/formulaire-inscription.docx"
            },
            {
                id: 2,
                title: "Règlement Intérieur",
                description: "Règles et fonctionnement de l'église",
                size: "2.3 MB",
                filename: "documents/reglement-interieur.docx"
            }
        ]
    }
};

// État de l'application
let currentState = {
    currentPage: 'home',
    currentTheme: 'dark',
    videoFilter: 'all',
    galleryFilter: 'all',
    currentVideo: null,
    currentImage: null,
    isIntroPlayed: false
};

// Éléments DOM principaux
const domElements = {
    introScreen: document.getElementById('introScreen'),
    mainSite: document.getElementById('mainSite'),
    progressBar: document.getElementById('progressBar'),
    skipIntro: document.getElementById('skipIntro'),
    introMessage: document.getElementById('introMessage'),
    
    // Navigation
    menuToggle: document.getElementById('menuToggle'),
    sidebar: document.getElementById('sidebar'),
    themeToggle: document.getElementById('themeToggle'),
    navLinks: document.querySelectorAll('.nav-link'),
    
    // Pages
    pages: document.querySelectorAll('.page'),
    homePage: document.getElementById('homePage'),
    aboutPage: document.getElementById('aboutPage'),
    servicesPage: document.getElementById('servicesPage'),
    mediaPage: document.getElementById('mediaPage'),
    galleryPage: document.getElementById('galleryPage'),
    documentsPage: document.getElementById('documentsPage'),
    
    // Verset du jour
    verseText: document.getElementById('verseText'),
    verseRef: document.getElementById('verseRef'),
    refreshVerseBtn: document.getElementById('refreshVerseBtn'),
    
    // Vidéos
    videosGrid: document.getElementById('videosGrid'),
    mediaGrid: document.getElementById('mediaGrid'),
    filterButtons: document.querySelectorAll('.filter-btn'),
    sortSelect: document.getElementById('sortSelect'),
    
    // Modal vidéo
    videoModal: document.getElementById('videoModal'),
    closeModal: document.getElementById('closeModal'),
    mainVideoPlayer: document.getElementById('mainVideoPlayer'),
    videoTitle: document.getElementById('videoTitle'),
    videoViews: document.getElementById('videoViews'),
    videoDate: document.getElementById('videoDate'),
    videoDescription: document.getElementById('videoDescription'),
    
    // Galerie
    galleryGrid: document.getElementById('galleryGrid'),
    galleryFilters: document.querySelectorAll('.gallery-filter'),
    
    // Modal image
    imageModal: document.getElementById('imageModal'),
    closeImageModal: document.getElementById('closeImageModal'),
    modalImage: document.getElementById('modalImage'),
    imageTitle: document.getElementById('imageTitle'),
    imageDescription: document.getElementById('imageDescription'),
    imageDate: document.getElementById('imageDate'),
    
    // Documents
    programsList: document.getElementById('programsList'),
    studiesList: document.getElementById('studiesList'),
    newslettersList: document.getElementById('newslettersList'),
    infoList: document.getElementById('infoList'),
    
    // Lecteur minimal
    miniPlayer: document.getElementById('miniPlayer'),
    miniThumbnail: document.getElementById('miniThumbnail'),
    miniTitle: document.getElementById('miniTitle'),
    miniPlayBtn: document.getElementById('miniPlayBtn'),
    miniPauseBtn: document.getElementById('miniPauseBtn'),
    miniCloseBtn: document.getElementById('miniCloseBtn'),
    miniProgressBar: document.getElementById('miniProgressBar')
};

// Initialisation de l'application
function initApp() {
    // Vérifier si l'intro a déjà été jouée
    const introPlayed = localStorage.getItem('introPlayed');
    
    if (introPlayed === 'true') {
        // Passer directement au site
        currentState.isIntroPlayed = true;
        domElements.introScreen.style.display = 'none';
        domElements.mainSite.style.display = 'block';
        initMainSite();
    } else {
        // Démarrer l'intro
        startIntro();
    }
}

// Gestion de l'introduction
function startIntro() {
    let progress = 0;
    const introDuration = 5000; // 5 secondes
    const progressStep = 100 / (introDuration / 50);
    
    // Simuler la lecture audio
    domElements.introMessage.textContent = "Église Évangélique Dimensionnelle — c'est une autre dimension";
    
    // Animer la barre de progression
    const progressInterval = setInterval(() => {
        progress += progressStep;
        domElements.progressBar.style.width = `${progress}%`;
        
        if (progress >= 100) {
            clearInterval(progressInterval);
            completeIntro();
        }
    }, 50);
    
    // Passer l'intro manuellement
    domElements.skipIntro.addEventListener('click', () => {
        clearInterval(progressInterval);
        completeIntro();
    });
    
    // Passer avec la touche Échap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            clearInterval(progressInterval);
            completeIntro();
        }
    });
}

function completeIntro() {
    // Animation de disparition
    domElements.introScreen.style.opacity = '0';
    domElements.introScreen.style.transition = 'opacity 0.5s ease';
    
    // Marquer l'intro comme vue
    localStorage.setItem('introPlayed', 'true');
    currentState.isIntroPlayed = true;
    
    // Afficher le site principal
    setTimeout(() => {
        domElements.introScreen.style.display = 'none';
        domElements.mainSite.style.display = 'block';
        initMainSite();
    }, 500);
}

// Initialisation du site principal
function initMainSite() {
    // Charger le thème sauvegardé
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    
    // Charger le verset du jour
    loadDailyVerse();
    
    // Charger les vidéos
    loadHomeVideos();
    loadMediaVideos();
    
    // Charger les images de la galerie
    loadGalleryImages();
    
    // Charger les documents
    loadDocuments();
    
    // Configurer les écouteurs d'événements
    setupEventListeners();
    
    // Afficher la page d'accueil
    showPage('home');
}

// Configuration des écouteurs d'événements
function setupEventListeners() {
    // Menu toggle
    domElements.menuToggle.addEventListener('click', toggleSidebar);
    
    // Thème toggle
    domElements.themeToggle.addEventListener('click', toggleTheme);
    
    // Navigation entre pages
    domElements.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            showPage(page);
            toggleSidebar();
            
            // Mettre à jour l'état actif
            domElements.navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Rafraîchir le verset
    domElements.refreshVerseBtn.addEventListener('click', loadDailyVerse);
    
    // Filtres vidéos
    domElements.filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            setVideoFilter(filter);
            
            // Mettre à jour l'état actif
            domElements.filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    // Tri des vidéos
    domElements.sortSelect.addEventListener('change', loadMediaVideos);
    
    // Fermer le modal vidéo
    domElements.closeModal.addEventListener('click', closeVideoModal);
    
    // Fermer le modal en cliquant à l'extérieur
    domElements.videoModal.addEventListener('click', (e) => {
        if (e.target === domElements.videoModal) {
            closeVideoModal();
        }
    });
    
    // Filtres galerie
    domElements.galleryFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            const filterValue = filter.getAttribute('data-filter');
            setGalleryFilter(filterValue);
            
            // Mettre à jour l'état actif
            domElements.galleryFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
        });
    });
    
    // Fermer le modal image
    domElements.closeImageModal.addEventListener('click', closeImageModal);
    
    // Fermer le modal image en cliquant à l'extérieur
    domElements.imageModal.addEventListener('click', (e) => {
        if (e.target === domElements.imageModal) {
            closeImageModal();
        }
    });
    
    // Contrôles du lecteur minimal
    domElements.miniPlayBtn.addEventListener('click', () => {
        if (currentState.currentVideo) {
            domElements.mainVideoPlayer.play();
        }
    });
    
    domElements.miniPauseBtn.addEventListener('click', () => {
        domElements.mainVideoPlayer.pause();
    });
    
    domElements.miniCloseBtn.addEventListener('click', () => {
        closeVideoModal();
        hideMiniPlayer();
    });
    
    // Mettre à jour la progression de la vidéo
    domElements.mainVideoPlayer.addEventListener('timeupdate', updateVideoProgress);
}

// Gestion du thème
function toggleTheme() {
    const newTheme = currentState.currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    
    // Mettre à jour l'icône
    const icon = domElements.themeToggle.querySelector('i');
    if (newTheme === 'dark') {
        icon.className = 'fas fa-moon';
    } else {
        icon.className = 'fas fa-sun';
    }
}

function setTheme(theme) {
    currentState.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// Barre latérale
function toggleSidebar() {
    domElements.sidebar.classList.toggle('active');
    
    // Ajouter un overlay sur mobile
    if (window.innerWidth <= 768) {
        if (domElements.sidebar.classList.contains('active')) {
            createOverlay();
        } else {
            removeOverlay();
        }
    }
}

function createOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 98;
    `;
    overlay.addEventListener('click', toggleSidebar);
    document.body.appendChild(overlay);
}

function removeOverlay() {
    const overlay = document.querySelector('.sidebar-overlay');
    if (overlay) {
        overlay.remove();
    }
}

// Navigation entre pages
function showPage(pageName) {
    // Cacher toutes les pages
    domElements.pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Afficher la page demandée
    const pageElement = document.getElementById(`${pageName}Page`);
    if (pageElement) {
        pageElement.classList.add('active');
        currentState.currentPage = pageName;
        
        // Faire défiler vers le haut
        window.scrollTo(0, 0);
    }
}

// Verset du jour
function loadDailyVerse() {
    // Choisir un verset aléatoire
    const randomIndex = Math.floor(Math.random() * CONFIG.verses.length);
    const verse = CONFIG.verses[randomIndex];
    
    // Afficher le verset
    domElements.verseText.textContent = `"${verse.text}"`;
    domElements.verseRef.textContent = verse.reference;
}

// Vidéos
function loadHomeVideos() {
    // Prendre les 3 dernières vidéos
    const recentVideos = [...CONFIG.videos].sort((a, b) => 
        new Date(b.date) - new Date(a.date)
    ).slice(0, 3);
    
    // Générer le HTML
    const videosHTML = recentVideos.map(video => `
        <div class="video-card" data-id="${video.id}">
            <div class="video-thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}" onerror="this.src='assets/placeholder-video.jpg'">
                <div class="video-duration">${video.duration}</div>
                <div class="play-overlay">
                    <i class="fas fa-play"></i>
                </div>
            </div>
            <div class="video-info">
                <h3>${video.title}</h3>
                <div class="video-meta">
                    <span>${video.views} vues</span>
                    <span>${formatDate(video.date)}</span>
                </div>
            </div>
        </div>
    `).join('');
    
    domElements.videosGrid.innerHTML = videosHTML;
    
    // Ajouter les écouteurs d'événements pour la lecture
    document.querySelectorAll('#videosGrid .video-card').forEach(card => {
        card.addEventListener('click', () => {
            const videoId = parseInt(card.getAttribute('data-id'));
            playVideo(videoId);
        });
    });
}

function loadMediaVideos() {
    let videos = [...CONFIG.videos];
    
    // Appliquer le filtre
    if (currentState.videoFilter !== 'all') {
        videos = videos.filter(video => video.category === currentState.videoFilter);
    }
    
    // Appliquer le tri
    const sortBy = domElements.sortSelect.value;
    switch (sortBy) {
        case 'recent':
            videos.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'oldest':
            videos.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        case 'popular':
            videos.sort((a, b) => b.views - a.views);
            break;
    }
    
    // Générer le HTML
    const videosHTML = videos.map(video => `
        <div class="video-card" data-id="${video.id}">
            <div class="video-thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}" onerror="this.src='assets/placeholder-video.jpg'">
                <div class="video-duration">${video.duration}</div>
                <div class="play-overlay">
                    <i class="fas fa-play"></i>
                </div>
            </div>
            <div class="video-info">
                <h3>${video.title}</h3>
                <div class="video-meta">
                    <span>${video.views} vues</span>
                    <span>${formatDate(video.date)}</span>
                </div>
            </div>
        </div>
    `).join('');
    
    domElements.mediaGrid.innerHTML = videosHTML;
    
    // Ajouter les écouteurs d'événements pour la lecture
    document.querySelectorAll('#mediaGrid .video-card').forEach(card => {
        card.addEventListener('click', () => {
            const videoId = parseInt(card.getAttribute('data-id'));
            playVideo(videoId);
        });
    });
}

function setVideoFilter(filter) {
    currentState.videoFilter = filter;
    loadMediaVideos();
}

function playVideo(videoId) {
    const video = CONFIG.videos.find(v => v.id === videoId);
    if (!video) return;
    
    currentState.currentVideo = video;
    
    // Mettre à jour les informations du modal
    domElements.videoTitle.textContent = video.title;
    domElements.videoViews.textContent = video.views.toLocaleString();
    domElements.videoDate.textContent = formatDate(video.date, 'long');
    domElements.videoDescription.textContent = video.description;
    
    // Charger la vidéo
    domElements.mainVideoPlayer.src = video.videoFile;
    domElements.mainVideoPlayer.load();
    
    // Afficher le modal
    domElements.videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Mettre à jour le lecteur minimal
    updateMiniPlayer(video);
    
    // Jouer automatiquement
    domElements.mainVideoPlayer.play().catch(e => {
        console.log("Lecture automatique bloquée:", e);
    });
}

function closeVideoModal() {
    domElements.videoModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    domElements.mainVideoPlayer.pause();
    
    // Masquer le lecteur minimal après un court délai
    setTimeout(() => {
        if (!domElements.videoModal.classList.contains('active')) {
            hideMiniPlayer();
        }
    }, 100);
}

function updateMiniPlayer(video) {
    if (!video) return;
    
    domElements.miniThumbnail.src = video.thumbnail;
    domElements.miniThumbnail.alt = video.title;
    domElements.miniTitle.textContent = video.title;
    
    // Afficher le lecteur minimal
    domElements.miniPlayer.style.display = 'block';
}

function hideMiniPlayer() {
    domElements.miniPlayer.style.display = 'none';
}

function updateVideoProgress() {
    if (!domElements.mainVideoPlayer) return;
    
    const progress = (domElements.mainVideoPlayer.currentTime / domElements.mainVideoPlayer.duration) * 100;
    domElements.miniProgressBar.style.width = `${progress}%`;
}

// Galerie
function loadGalleryImages() {
    let images = [...CONFIG.images];
    
    // Appliquer le filtre
    if (currentState.galleryFilter !== 'all') {
        images = images.filter(image => image.category === currentState.galleryFilter);
    }
    
    // Générer le HTML
    const imagesHTML = images.map(image => `
        <div class="gallery-item" data-id="${image.id}">
            <img src="${image.filename}" alt="${image.title}" onerror="this.src='assets/placeholder-image.jpg'">
            <div class="gallery-overlay">
                <h4>${image.title}</h4>
                <p>${formatDate(image.date)}</p>
            </div>
        </div>
    `).join('');
    
    domElements.galleryGrid.innerHTML = imagesHTML;
    
    // Ajouter les écouteurs d'événements
    document.querySelectorAll('#galleryGrid .gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const imageId = parseInt(item.getAttribute('data-id'));
            showImage(imageId);
        });
    });
}

function setGalleryFilter(filter) {
    currentState.galleryFilter = filter;
    loadGalleryImages();
}

function showImage(imageId) {
    const image = CONFIG.images.find(img => img.id === imageId);
    if (!image) return;
    
    currentState.currentImage = image;
    
    // Mettre à jour les informations du modal
    domElements.modalImage.src = image.filename;
    domElements.modalImage.alt = image.title;
    domElements.imageTitle.textContent = image.title;
    domElements.imageDescription.textContent = image.description;
    domElements.imageDate.textContent = formatDate(image.date, 'long');
    
    // Afficher le modal
    domElements.imageModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    domElements.imageModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Documents
function loadDocuments() {
    // Programmes
    const programsHTML = CONFIG.documents.programs.map(doc => `
        <a href="${doc.filename}" class="document-item" download>
            <div class="document-icon">
                <i class="fas fa-file-word"></i>
            </div>
            <div class="document-info">
                <h4>${doc.title}</h4>
                <p>${doc.description} • ${doc.size}</p>
            </div>
            <button class="download-btn">
                <i class="fas fa-download"></i>
            </button>
        </a>
    `).join('');
    
    domElements.programsList.innerHTML = programsHTML;
    
    // Études
    const studiesHTML = CONFIG.documents.studies.map(doc => `
        <a href="${doc.filename}" class="document-item" download>
            <div class="document-icon">
                <i class="fas fa-book"></i>
            </div>
            <div class="document-info">
                <h4>${doc.title}</h4>
                <p>${doc.description} • ${doc.size}</p>
            </div>
            <button class="download-btn">
                <i class="fas fa-download"></i>
            </button>
        </a>
    `).join('');
    
    domElements.studiesList.innerHTML = studiesHTML;
    
    // Newsletters
    const newslettersHTML = CONFIG.documents.newsletters.map(doc => `
        <a href="${doc.filename}" class="document-item" download>
            <div class="document-icon">
                <i class="fas fa-newspaper"></i>
            </div>
            <div class="document-info">
                <h4>${doc.title}</h4>
                <p>${doc.description} • ${doc.size}</p>
            </div>
            <button class="download-btn">
                <i class="fas fa-download"></i>
            </button>
        </a>
    `).join('');
    
    domElements.newslettersList.innerHTML = newslettersHTML;
    
    // Informations
    const infoHTML = CONFIG.documents.info.map(doc => `
        <a href="${doc.filename}" class="document-item" download>
            <div class="document-icon">
                <i class="fas fa-info-circle"></i>
            </div>
            <div class="document-info">
                <h4>${doc.title}</h4>
                <p>${doc.description} • ${doc.size}</p>
            </div>
            <button class="download-btn">
                <i class="fas fa-download"></i>
            </button>
        </a>
    `).join('');
    
    domElements.infoList.innerHTML = infoHTML;
}

// Utilitaires
function formatDate(dateString, format = 'short') {
    const date = new Date(dateString);
    
    if (format === 'long') {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('fr-FR', options);
    } else {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('fr-FR', options);
    }
}

// Gestion du redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        domElements.sidebar.classList.remove('active');
        removeOverlay();
    }
});

// Initialiser l'application quand la page est chargée
document.addEventListener('DOMContentLoaded', initApp);