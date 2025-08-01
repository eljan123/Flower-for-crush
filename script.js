// Magical tulip animation with enhanced timing and effects
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('surpriseBtn');
    const tulipContainer = document.getElementById('tulipContainer');
    const greetingCard = document.querySelector('.greeting-card');

    // Add button sparkle effect
    function addSparkleEffect() {
        btn.style.animation = 'none';
        setTimeout(() => {
            btn.style.animation = 'buttonSparkle 2s ease-in-out infinite';
        }, 100);
    }

    // Enhanced bloom sequence with staggered timing
    function createSpectacularBloom() {
        const flowers = document.querySelectorAll('.flower');
        
        // Bloom flowers one by one with perfect timing for realistic effect
        flowers.forEach((flower, index) => {
            setTimeout(() => {
                flower.classList.add('bloom');
                
                // Add extra sparkle effect when each flower blooms
                setTimeout(() => {
                    flower.style.filter = 'brightness(1.15) contrast(1.05) saturate(1.1)';
                    setTimeout(() => {
                        flower.style.filter = 'none';
                    }, 400);
                }, 800);
                
            }, index * 350); // Slower, more dramatic stagger for realistic tulips
        });

        // Add magical sound effect simulation
        simulateMagicalChime();
    }

    // Simulate magical chime with visual feedback
    function simulateMagicalChime() {
        const container = document.querySelector('.container');
        container.style.transform = 'scale(1.02)';
        setTimeout(() => {
            container.style.transform = 'scale(1)';
        }, 200);
    }

    // Enhanced button click with magical transition
    btn.addEventListener('click', function() {
        // Disable button to prevent multiple clicks
        btn.disabled = true;
        btn.style.opacity = '0.7';
        btn.textContent = '✨ Creating Magic... ✨';

        // Smooth transition out of greeting card
        greetingCard.style.transform = 'scale(0.9)';
        greetingCard.style.opacity = '0';
        
        setTimeout(() => {
            greetingCard.style.display = 'none';
            tulipContainer.style.display = 'flex';
            tulipContainer.style.opacity = '0';
            tulipContainer.style.transform = 'scale(0.8)';
            
            // Create the beautiful tulip bouquet
            tulipContainer.innerHTML = `
                <div class="bouquet-grouped">
                    <div class="stem stem1"></div>
                    <div class="stem stem2"></div>
                    <div class="stem stem3"></div>
                    <div class="stem stem4"></div>
                    <div class="stem stem5"></div>
                    <div class="leaf leaf1"></div>
                    <div class="leaf leaf2"></div>
                    <div class="leaf leaf3"></div>
                    <div class="leaf leaf4"></div>
                    <div class="leaf leaf5"></div>
                    <div class="flower flower1">
                        <div class="petal petal1"></div>
                        <div class="petal petal2"></div>
                        <div class="petal petal3"></div>
                        <div class="petal petal4"></div>
                        <div class="petal petal5"></div>
                        <div class="petal petal6"></div>
                    </div>
                    <div class="flower flower2">
                        <div class="petal petal1"></div>
                        <div class="petal petal2"></div>
                        <div class="petal petal3"></div>
                        <div class="petal petal4"></div>
                        <div class="petal petal5"></div>
                        <div class="petal petal6"></div>
                    </div>
                    <div class="flower flower3">
                        <div class="petal petal1"></div>
                        <div class="petal petal2"></div>
                        <div class="petal petal3"></div>
                        <div class="petal petal4"></div>
                        <div class="petal petal5"></div>
                        <div class="petal petal6"></div>
                    </div>
                    <div class="flower flower4">
                        <div class="petal petal1"></div>
                        <div class="petal petal2"></div>
                        <div class="petal petal3"></div>
                        <div class="petal petal4"></div>
                        <div class="petal petal5"></div>
                        <div class="petal petal6"></div>
                    </div>
                    <div class="flower flower5">
                        <div class="petal petal1"></div>
                        <div class="petal petal2"></div>
                        <div class="petal petal3"></div>
                        <div class="petal petal4"></div>
                        <div class="petal petal5"></div>
                        <div class="petal petal6"></div>
                    </div>
                </div>
                <div class="surprise-message">
                    <h2>🌷You make my heart bloom, Alexa! 🌷</h2>
                    <p>Just like these tulips, my feelings for you grow every single day. You light up my world! 💖✨</p>
                </div>
            `;

            // Smooth fade-in of tulip container
            setTimeout(() => {
                tulipContainer.style.transition = 'all 0.6s ease-out';
                tulipContainer.style.opacity = '1';
                tulipContainer.style.transform = 'scale(1)';
            }, 100);

            // Start the magical bloom sequence - perfect timing for realistic tulips
            setTimeout(() => {
                createSpectacularBloom();
            }, 1200);

            // Add floating hearts effect
            setTimeout(() => {
                createFloatingHearts();
            }, 2000);

        }, 600);
    });

    // Create floating hearts effect
    function createFloatingHearts() {
        const heartsContainer = document.createElement('div');
        heartsContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: 1000;
        `;
        document.body.appendChild(heartsContainer);

        // Create multiple floating hearts
        for (let i = 0; i < 12; i++) {
            setTimeout(() => {
                createSingleHeart(heartsContainer);
            }, i * 300);
        }

        // Remove hearts container after animation
        setTimeout(() => {
            document.body.removeChild(heartsContainer);
        }, 8000);
    }

    function createSingleHeart(container) {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 20 + 15}px;
            left: ${Math.random() * 100}vw;
            top: 100vh;
            animation: floatHeart 6s ease-out forwards;
            opacity: 0.8;
        `;

        // Add floating heart animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatHeart {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 0.8;
                }
                50% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        container.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            if (container.contains(heart)) {
                container.removeChild(heart);
            }
        }, 6000);
    }

    // Add sparkle effect to button on load
    setTimeout(addSparkleEffect, 1000);
});

// Add button sparkle keyframes to head
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes buttonSparkle {
        0%, 100% { 
            box-shadow: 
                0 8px 25px rgba(233, 30, 99, 0.3),
                0 4px 12px rgba(173, 20, 87, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }
        50% { 
            box-shadow: 
                0 12px 35px rgba(233, 30, 99, 0.5),
                0 6px 20px rgba(173, 20, 87, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.4);
        }
    }
`;
document.head.appendChild(sparkleStyle);
