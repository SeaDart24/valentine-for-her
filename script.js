// Valentine's Day Interactive JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeValentineCard();
});

function initializeValentineCard() {
    setupEnvelopeInteraction();
    setupReasonsList();
    setupMusicPlayer();
    setupPhotoGallery();
    setupValentineButtons();
    createBackgroundHearts();
    setupScrollAnimations();
}

// Valentine Buttons and Quiz
function setupValentineButtons() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const quizModal = document.getElementById('quizModal');
    const quizClose = document.getElementById('quizClose');
    const quizOptions = document.querySelectorAll('.quiz-option');
    
    let noBtnHoverCount = 0;
    
    // Yes button - show quiz
    yesBtn.addEventListener('click', function() {
        quizModal.style.display = 'block';
        createFloatingHearts(10);
        showQuizWelcomeMessage();
    });
    
    // No button - tricky behavior
    noBtn.addEventListener('mouseenter', function() {
        noBtnHoverCount++;
        if (noBtnHoverCount >= 1) {
            // Change to Yes on hover
            noBtn.textContent = 'Yes';
            noBtn.classList.remove('no-btn');
            noBtn.classList.add('yes-btn');
            createFloatingHeart(noBtn);
        }
    });
    
    noBtn.addEventListener('click', function(e) {
        e.preventDefault();
        noBtnHoverCount++;
        if (noBtnHoverCount >= 1) {
            // If it's now Yes, show quiz
            quizModal.style.display = 'block';
            createFloatingHearts(10);
            showQuizWelcomeMessage();
        } else {
            // First click - show message and prepare for next hover
            showNoButtonMessage();
            createFloatingHeart(noBtn);
        }
    });
    
    // Quiz options
    quizOptions.forEach(option => {
        option.addEventListener('click', function() {
            const answer = this.getAttribute('data-answer');
            handleQuizAnswer(answer);
        });
    });
    
    // Close quiz
    quizClose.addEventListener('click', function() {
        quizModal.style.display = 'none';
        showFinalCelebration();
    });
}

function showNoButtonMessage() {
    const message = document.createElement('div');
    message.textContent = "Are you sure? Think about it... 😊";
    message.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #ff9800, #f57c00);
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        font-size: 1rem;
        z-index: 1000;
        animation: slideDown 0.5s ease;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'slideUp 0.5s ease';
        setTimeout(() => message.remove(), 500);
    }, 3000);
}

function showQuizWelcomeMessage() {
    const message = document.createElement('div');
    message.textContent = "🎉 I knew you'd say yes! Now scroll up babeee! 🎉";
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #4caf50, #45a049);
        color: white;
        padding: 20px 30px;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        font-size: 1.2rem;
        z-index: 2001;
        animation: fadeIn 0.5s ease;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'fadeOut 0.5s ease';
        setTimeout(() => message.remove(), 500);
    }, 2500);
}

function handleQuizAnswer(answer) {
    const messages = {
        'first': "Our first date was perfect! Just like you! 💕",
        'laughter': "Your laugh is my favorite sound in the world! 😊",
        'moment': "That sunset was magical, but not as magical as you! 🌅",
        'all': "Every moment with you is special! You're amazing! ⭐"
    };
    
    const message = document.createElement('div');
    message.textContent = messages[answer] || "Perfect answer! You're the best! 💕";
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #e91e63, #d81b60);
        color: white;
        padding: 20px 30px;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        font-size: 1.1rem;
        z-index: 2001;
        animation: fadeIn 0.5s ease;
    `;
    
    document.body.appendChild(message);
    createFloatingHearts(15);
    
    setTimeout(() => {
        message.style.animation = 'fadeOut 0.5s ease';
        setTimeout(() => message.remove(), 500);
    }, 4000);
}

function showFinalCelebration() {
    const message = document.createElement('div');
    message.innerHTML = `
        <h2>🎉 Happy Valentine's Day! 🎉</h2>
        <p>I can't wait to celebrate with you, Sreenidhyee!</p>
        <p>This is going to be the best Valentine's Day ever! 💕</p>
        <div class="coupon-section">
            <div class="coupon">
                <div class="coupon-header">
                    <h3>💝 Special Valentine's Coupon 💝</h3>
                    <p>For the Sweetest Girl in the World</p>
                </div>
                <div class="coupon-body">
                    <p class="coupon-title">✨ Romantic Massage Certificate ✨</p>
                    <p class="coupon-text">This coupon entitles the most amazing Sreenidhyee to:</p>
                    <ul class="coupon-list">
                        <li>💆 One relaxing massage</li>
                        <li>🌹 Unlimited cuddles</li>
                        <li>🍫 Sweet treats included</li>
                        <li>💕 All my love and attention</li>
                    </ul>
                    <div class="coupon-footer">
                        <p class="coupon-valid">Valid until: February 13th, 2026</p>
                        <p class="coupon-signature">With all my love, ❤️</p>
                    </div>
                </div>
                <div class="coupon-stamp">
                    <span>💕</span>
                    <p>Sealed with a kiss</p>
                </div>
            </div>
        </div>
        <button class="celebration-close" id="celebrationClose">Close & Save Coupon 💕</button>
    `;
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
        color: white;
        padding: 30px;
        border-radius: 20px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        text-align: center;
        z-index: 2001;
        animation: fadeIn 0.5s ease;
        max-width: 600px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
    `;
    
    document.body.appendChild(message);
    createFloatingHearts(20);
    
    // Add close button functionality
    const closeBtn = document.getElementById('celebrationClose');
    closeBtn.addEventListener('click', function() {
        message.style.animation = 'fadeOut 0.5s ease';
        setTimeout(() => {
            message.remove();
            showCouponSavedMessage();
            // Re-enable body scroll
            document.body.style.overflow = 'auto';
        }, 500);
    });
    
    // Prevent body scroll when modal opens
    document.body.style.overflow = 'hidden';
    
    // Update final message
    const finalMessage = document.querySelector('.final-message');
    finalMessage.innerHTML = `
        <p>🎉 You said YES! 🎉</p>
        <p>Happy Valentine's Day my love! 💕</p>
    `;
}

function showCouponSavedMessage() {
    const message = document.createElement('div');
    message.textContent = "💝 Coupon saved! See you tomorrow! 💕";
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #4caf50, #45a049);
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        font-size: 1rem;
        z-index: 1000;
        animation: slideInRight 0.5s ease;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => message.remove(), 500);
    }, 3000);
}

// Envelope and Letter Interaction
function setupEnvelopeInteraction() {
    const envelopeFlap = document.getElementById('envelopeFlap');
    const letter = document.getElementById('letter');
    
    // Set initial closed state immediately
    function setClosedState() {
        envelopeFlap.classList.remove('open');
        letter.classList.remove('open');
        envelopeFlap.innerHTML = '<span class="envelope-text">Click to open</span>';
    }
    
    // Initialize to closed state
    setClosedState();
    
    envelopeFlap.addEventListener('click', function(e) {
        e.preventDefault();
        
        const isOpen = letter.classList.contains('open');
        
        if (!isOpen) {
            // Open the envelope
            envelopeFlap.classList.add('open');
            letter.classList.add('open');
            envelopeFlap.innerHTML = '<span class="envelope-text">Click to close</span>';
            
            // Add floating hearts when letter opens
            createFloatingHearts(5);
        } else {
            // Close the envelope
            setClosedState();
        }
    });
}

// Reasons List Management
function setupReasonsList() {
    const addReasonBtn = document.getElementById('addReasonBtn');
    const reasonsList = document.getElementById('reasonsList');
    
    const additionalReasons = [
        "Your kind heart",
        "Your amazing laugh", 
        "The way you care",
        "Your intelligence",
        "Your beautiful eyes",
        "Your contagious laugh",
        "Your caring nature",
        "Your amazing personality",
        "The way you make me feel",
        "Your support and love",
        "Your dreams and ambitions",
        "Your strength and courage",
        "Your unique way of seeing the world"
    ];
    
    let reasonIndex = 0;
    
    addReasonBtn.addEventListener('click', function() {
        if (reasonIndex < additionalReasons.length) {
            addReasonToList(additionalReasons[reasonIndex]);
            reasonIndex++;
            
            if (reasonIndex >= additionalReasons.length) {
                addReasonBtn.textContent = "All reasons listed! ❤️";
                addReasonBtn.disabled = true;
                addReasonBtn.style.opacity = "0.6";
            }
        }
    });
}

function addReasonToList(reasonText) {
    const reasonsList = document.getElementById('reasonsList');
    const newReason = document.createElement('div');
    newReason.className = 'reason-item';
    newReason.textContent = reasonText;
    newReason.style.opacity = '0';
    
    reasonsList.appendChild(newReason);
    
    // Animate the new reason
    setTimeout(() => {
        newReason.style.transition = 'opacity 0.5s ease';
        newReason.style.opacity = '1';
    }, 100);
    
    // Create a small heart animation
    createFloatingHeart(newReason);
}

// Music Player with Playlist
function setupMusicPlayer() {
    const playBtn = document.getElementById('playBtn');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const audio = document.getElementById('songAudio');
    const playlistItems = document.querySelectorAll('.playlist-item');
    
    let isPlaying = false;
    let currentSong = 0;
    
    // Song information with actual filenames
    const songs = [
        {
            title: "🎵 Surprise Song 1",
            artist: "Click to reveal",
            file: "assets/music/Hey KAALYANI",
            revealed: false
        },
        {
            title: "🎵 Surprise Song 2",
            artist: "Click to reveal",
            file: "assets/music/Hope our LOVE STORY is forever!",
            revealed: false
        },
        {
            title: "🎵 Surprise Song 3",
            artist: "Click to reveal",
            file: "assets/music/Kannadiyil Bimbangalil Naan illaye neeyee...",
            revealed: false
        },
        {
            title: "🎵 Surprise Song 4",
            artist: "Click to reveal",
            file: "assets/music/My PERFECT girl",
            revealed: false
        },
        {
            title: "🎵 Surprise Song 5",
            artist: "Click to reveal",
            file: "assets/music/Unna Paathu ORU MANAM Tholachten",
            revealed: false
        }
    ];
    
    // Actual song names for reveal
    const actualSongNames = [
        "Hey KAALYANI.mp3",
        "Hope our LOVE STORY is forever!.mp3",
        "Kannadiyil Bimbangalil Naan illaye neeyee...mp3",
        "My PERFECT girl.mp3",
        "Unna Paathu ORU MANAM Tholachten.mp3"
    ];
    
    // Play/Pause functionality
    playBtn.addEventListener('click', function() {
        if (!isPlaying) {
            audio.play().then(() => {
                playBtn.textContent = '⏸️ Pause';
                playBtn.style.background = '#4caf50';
                isPlaying = true;
                createMusicalNotes();
                showMusicMessage();
            }).catch(error => {
                console.log('Audio playback failed:', error);
                playBtn.textContent = '⏸️ Pause';
                playBtn.style.background = '#4caf50';
                isPlaying = true;
                createMusicalNotes();
                showMusicMessage();
            });
        } else {
            audio.pause();
            playBtn.textContent = '▶️ Play';
            playBtn.style.background = '#e91e63';
            isPlaying = false;
        }
    });
    
    // Next song
    nextBtn.addEventListener('click', function() {
        playNextSong();
    });
    
    // Previous song
    prevBtn.addEventListener('click', function() {
        playPreviousSong();
    });
    
    // Playlist item clicks - toggle play/pause or switch songs
    playlistItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // Reveal song name if not revealed
            if (!songs[index].revealed) {
                songs[index].revealed = true;
                const titleElement = item.querySelector('.playlist-title');
                const artistElement = item.querySelector('.playlist-artist');
                
                titleElement.textContent = actualSongNames[index];
                artistElement.textContent = "Your special song";
                
                // Add reveal animation
                item.style.animation = 'pulse 0.5s ease';
                setTimeout(() => {
                    item.style.animation = '';
                }, 500);
                
                // Show reveal message
                showSongRevealMessage(actualSongNames[index]);
            }
            
            if (currentSong === index && isPlaying) {
                // Clicking same song while playing -> pause
                audio.pause();
                playBtn.textContent = '▶️ Play';
                playBtn.style.background = '#e91e63';
                isPlaying = false;
            } else if (currentSong === index && !isPlaying) {
                // Clicking same song while paused -> play
                audio.play().then(() => {
                    playBtn.textContent = '⏸️ Pause';
                    playBtn.style.background = '#4caf50';
                    isPlaying = true;
                    createMusicalNotes();
                    showMusicMessage();
                }).catch(error => {
                    console.log('Audio playback failed:', error);
                });
            } else {
                // Clicking different song -> switch and play
                playSong(index);
            }
        });
    });
    
    // Auto-play next song when current ends
    audio.addEventListener('ended', function() {
        playNextSong();
    });
    
    function playSong(index) {
        currentSong = index;
        updateAudioSource();
        updatePlaylistUI();
        updateSongInfo();
        
        audio.play().then(() => {
            playBtn.textContent = '⏸️ Pause';
            playBtn.style.background = '#4caf50';
            isPlaying = true;
            createMusicalNotes();
            showMusicMessage();
        }).catch(error => {
            console.log('Audio playback failed:', error);
            playBtn.textContent = '⏸️ Pause';
            playBtn.style.background = '#4caf50';
            isPlaying = true;
            createMusicalNotes();
            showMusicMessage();
        });
    }
    
    function playNextSong() {
        currentSong = (currentSong + 1) % songs.length;
        playSong(currentSong);
    }
    
    function playPreviousSong() {
        currentSong = (currentSong - 1 + songs.length) % songs.length;
        playSong(currentSong);
    }
    
    function updateAudioSource() {
        const sources = audio.querySelectorAll('source');
        const songFile = songs[currentSong].file;
        
        sources[0].src = songFile;
        sources[1].src = songFile.replace('.mp3', '.m4a');
        sources[2].src = songFile.replace('.mp3', '.ogg');
        
        audio.load();
    }
    
    function updatePlaylistUI() {
        playlistItems.forEach((item, index) => {
            if (index === currentSong) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
    
    function updateSongInfo() {
        const songTitle = document.querySelector('.song-title');
        const songArtist = document.querySelector('.song-artist');
        
        songTitle.textContent = songs[currentSong].title;
        songArtist.textContent = songs[currentSong].artist;
    }
}

function createMusicalNotes() {
    const notes = ['♪', '♫', '♬', '♩'];
    const musicSection = document.querySelector('.music-section');
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const note = document.createElement('div');
            note.textContent = notes[Math.floor(Math.random() * notes.length)];
            note.style.cssText = `
                position: absolute;
                font-size: 20px;
                color: #e91e63;
                left: ${Math.random() * 100}%;
                bottom: 0;
                animation: floatUp 3s ease-out forwards;
                pointer-events: none;
            `;
            musicSection.style.position = 'relative';
            musicSection.appendChild(note);
            
            setTimeout(() => note.remove(), 3000);
        }, i * 200);
    }
}

function showSongRevealMessage(songName) {
    const message = document.createElement('div');
    message.textContent = `🎵 ${songName} - This song reminds me of you!`;
    message.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #e91e63, #d81b60);
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        font-size: 1rem;
        z-index: 1000;
        animation: slideDown 0.5s ease;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'slideUp 0.5s ease';
        setTimeout(() => message.remove(), 500);
    }, 3000);
}

function showMusicMessage() {
    const message = document.createElement('div');
    message.textContent = "This song reminds me of you... Click again to Pause 💕";
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 255, 255, 0.95);
        padding: 20px 30px;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        font-size: 1.1rem;
        color: #e91e63;
        z-index: 1000;
        animation: fadeIn 0.5s ease;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'fadeOut 0.5s ease';
        setTimeout(() => message.remove(), 500);
    }, 3000);
}

// Photo Upload Function
function handlePhotoUpload(event, photoId, containerId) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const photo = document.getElementById(photoId);
            const placeholder = document.querySelector(`#${containerId} .photo-placeholder`);
            
            photo.src = e.target.result;
            photo.style.display = 'block';
            placeholder.style.display = 'none';
            
            // Add a success animation
            photo.style.animation = 'fadeIn 0.5s ease';
            
            // Show success message
            showPhotoUploadSuccess(containerId);
        };
        reader.readAsDataURL(file);
    }
}

function showPhotoUploadSuccess(containerId) {
    const messages = [
        "Beautiful memory captured! 💕",
        "Perfect moment saved! 🎉",
        "Forever in my heart! 💑"
    ];
    
    const containerIndex = containerId.replace('photo', '') - 1;
    const message = messages[containerIndex] || "Photo added! ❤️";
    
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #4caf50, #45a049);
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        font-size: 1rem;
        z-index: 1000;
        animation: slideInRight 0.5s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Photo Gallery
function setupPhotoGallery() {
    const photoPlaceholders = document.querySelectorAll('.photo-placeholder');
    
    photoPlaceholders.forEach((photo, index) => {
        photo.addEventListener('click', function() {
            // Only show message if no photo is uploaded
            if (document.getElementById(`uploadedPhoto${index + 1}`).style.display === 'none') {
                showPhotoMessage(index);
            }
        });
    });
}

function showPhotoMessage(index) {
    const messages = [
        "Remember our first date? It was perfect! 💕",
        "Every moment with you is special! 🎉",
        "I can't wait to spend forever with you! 💑"
    ];
    
    const message = document.createElement('div');
    message.textContent = messages[index];
    message.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #e91e63, #d81b60);
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        font-size: 1rem;
        z-index: 1000;
        animation: slideDown 0.5s ease;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'slideUp 0.5s ease';
        setTimeout(() => message.remove(), 500);
    }, 2500);
}

// Background Hearts
function createBackgroundHearts() {
    const backgroundHearts = document.querySelector('.background-hearts');
    
    setInterval(() => {
        if (Math.random() > 0.7) {
            createBackgroundHeart(backgroundHearts);
        }
    }, 2000);
}

function createBackgroundHeart(container) {
    const heart = document.createElement('div');
    const hearts = ['❤️', '💕', '💖', '💗', '💝'];
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.cssText = `
        position: absolute;
        font-size: ${Math.random() * 20 + 15}px;
        left: ${Math.random() * 100}%;
        bottom: -50px;
        opacity: 0.6;
        animation: floatUp ${Math.random() * 5 + 5}s linear forwards;
        pointer-events: none;
    `;
    
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 10000);
}

function createFloatingHearts(count) {
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            createFloatingHeart();
        }, i * 100);
    }
}

function createFloatingHeart(targetElement = null) {
    const heart = document.createElement('div');
    const hearts = ['❤️', '💕', '💖', '💗', '💝'];
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    
    const rect = targetElement ? targetElement.getBoundingClientRect() : 
                 { left: window.innerWidth / 2, top: window.innerHeight / 2 };
    
    heart.style.cssText = `
        position: fixed;
        font-size: 25px;
        left: ${rect.left + (targetElement ? Math.random() * rect.width : 0)}px;
        top: ${rect.top}px;
        z-index: 1000;
        pointer-events: none;
        animation: floatAndFade 2s ease-out forwards;
    `;
    
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes floatAndFade {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) scale(1.5);
            opacity: 0;
        }
    }
    
    @keyframes slideDown {
        from {
            transform: translateX(-50%) translateY(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes slideUp {
        from {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
        to {
            transform: translateX(-50%) translateY(-100%);
            opacity: 0;
        }
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Special Effects
document.addEventListener('mousemove', function(e) {
    if (Math.random() > 0.98) {
        createSparkle(e.clientX, e.clientY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.textContent = '✨';
    sparkle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        font-size: 15px;
        pointer-events: none;
        animation: sparkle 1s ease-out forwards;
        z-index: 999;
    `;
    
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
}

// Add sparkle animation
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkle {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1.5) rotate(180deg);
            opacity: 0.8;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(sparkleStyle);

// Console love message
console.log('%c❤️ Happy Valentine\'s Day Sreenidhyee! ❤️', 'font-size: 20px; color: #e91e63; font-weight: bold;');
console.log('%cYou are loved more than words can express!', 'font-size: 14px; color: #d81b60;');
