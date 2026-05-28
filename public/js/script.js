(() => {
const init = () => {
// Simple seeded PRNG to ensure the background looks the same on every refresh
let currentSeed = 42; // Fixed seed for consistent background
function customRandom() {
    currentSeed = (currentSeed * 9301 + 49297) % 233280;
    return currentSeed / 233280;
}

// Helper: Circular particles
const createCircleTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext('2d');
    context.beginPath();
    context.arc(32, 32, 30, 0, Math.PI * 2);
    context.fillStyle = '#ffffff';
    context.fill();
    return new THREE.CanvasTexture(canvas);
};

// Initialize Three.js WebGL Immersive Universe
const canvas = document.getElementById('webgl-canvas');
const scene = new THREE.Scene();
// Fog removed to allow infinite deep space visibility

const isMobile = window.innerWidth <= 768;
// Touch capability check — covers Android Chrome, iOS, and any other touch browser
const isMobileDevice = isMobile || ('ontouchstart' in window) || navigator.maxTouchPoints > 0;

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
// Disable antialias on mobile — MSAA is expensive and the quality gain is invisible on small screens
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: !isMobile });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 2));

// ==========================================
// 1. BRAND MARK: Exact SVG Extrusion
// ==========================================
let brandMesh = null; // Removed large white logo per user request

// ==========================================
// 2. DATA FLOW: Original Hero Starfield
// ==========================================
const particlesCount = isMobile ? 500 : 3000;
const posArray = new Float32Array(particlesCount * 3);

for(let i = 0; i < particlesCount * 3; i+=3) {
    posArray[i] = (customRandom() - 0.5) * 120; // x
    posArray[i+1] = (customRandom() - 0.5) * 120; // y
    posArray[i+2] = (customRandom() - 0.5) * 120; // z (clean, massive sphere)
}

const particlesGeometry = new THREE.BufferGeometry();
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const circleTexture = createCircleTexture();
const particlesMaterial = new THREE.PointsMaterial({
    size: 0.3,
    color: 0xF5F5F7,
    map: circleTexture,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending,
    depthWrite: false
});
const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);
window.particlesMaterial = particlesMaterial;

// ==========================================
// 3. COSMOS TUNNEL: Infinite Travel (CASE STUDIES)
// ==========================================
// REMOVED BLURRY DOT TEXTURE. Using raw WebGL pixels for 100% crisp, sharp dots.

const tunnelCount = isMobile ? 80 : 880; // Mobile gets minimal count — warp is disabled on mobile anyway
const tunnelPos = new Float32Array(tunnelCount * 3);
for(let i = 0; i < tunnelCount * 3; i+=3) {
    tunnelPos[i] = (customRandom() - 0.5) * 2000; 
    tunnelPos[i+1] = (customRandom() - 0.5) * 2000; 
    tunnelPos[i+2] = (customRandom() * 3050) - 3000; 
}
const tunnelGeom = new THREE.BufferGeometry();
tunnelGeom.setAttribute('position', new THREE.BufferAttribute(tunnelPos, 3));

const tunnelMat = new THREE.PointsMaterial({
    size: 2.0, // Razor sharp 2px dot
    sizeAttenuation: false, // CRITICAL: Never scale them up to huge blocks! They stay crisp dots flying past.
    color: 0x7C3AED, 
    transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false
});
const tunnelMesh = new THREE.Points(tunnelGeom, tunnelMat);
tunnelMesh.visible = false;
scene.add(tunnelMesh);
window.tunnelMat = tunnelMat;

const reducedMotionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');

const setCaseStudyWarpActive = (active) => {
    // Never activate warp on mobile — simultaneous 3D GSAP scrub + tunnel GPU uploads crash mobile browsers
    const shouldRenderWarp = Boolean(active) && !reducedMotionMedia.matches && !isMobileDevice;
    tunnelMesh.visible = shouldRenderWarp;
    if (!shouldRenderWarp) {
        tunnelMat.opacity = 0;
    }
};

const resetBackgroundForRoute = () => {
    setCaseStudyWarpActive(false);

    if (window.gsap) {
        gsap.killTweensOf([particlesMaterial, tunnelMat, document.body]);
    }

    particlesMaterial.opacity = 0.6;
    document.body.style.backgroundColor = '';
};

window.impulseBackground = {
    resetForRoute: resetBackgroundForRoute,
    setCaseStudyWarpActive,
    getState: () => ({
        particlesOpacity: particlesMaterial.opacity,
        tunnelOpacity: tunnelMat.opacity,
        tunnelVisible: tunnelMesh.visible
    })
};

window.addEventListener('impulse:route-change', resetBackgroundForRoute);
reducedMotionMedia.addEventListener('change', () => {
    if (reducedMotionMedia.matches) {
        setCaseStudyWarpActive(false);
    }
});
resetBackgroundForRoute();

// ==========================================
// 4. DEEP SPACE BACKGROUND (Static & Sparkly)
// ==========================================
const bgStarsCount = isMobile ? 1500 : 25000; // Reduced on mobile to cut GPU memory pressure
const bgStarsPos = new Float32Array(bgStarsCount * 3);
const bgStarsColors = new Float32Array(bgStarsCount * 3);

for(let i = 0; i < bgStarsCount * 3; i+=3) {
    bgStarsPos[i] = (customRandom() - 0.5) * 4000; 
    bgStarsPos[i+1] = (customRandom() - 0.5) * 4000; 
    bgStarsPos[i+2] = (customRandom() - 0.5) * 4000 - 1000;

    let r, g, b;
    const colorType = customRandom();
    if (colorType > 0.6) {
        r = 0.48; g = 0.22; b = 0.92; // Bright Violet
    } else if (colorType > 0.2) {
        r = 0.33; g = 0.24; b = 0.59; // Core Impulse Violet
    } else {
        r = 0.8; g = 0.7; b = 0.9; // White/Soft Violet
    }

    const brightness = customRandom() > 0.85 ? 1.0 : (customRandom() * 0.3 + 0.1); 
    bgStarsColors[i] = r * brightness;
    bgStarsColors[i+1] = g * brightness;
    bgStarsColors[i+2] = b * brightness;
}

const bgStarsGeom = new THREE.BufferGeometry();
bgStarsGeom.setAttribute('position', new THREE.BufferAttribute(bgStarsPos, 3));
bgStarsGeom.setAttribute('color', new THREE.BufferAttribute(bgStarsColors, 3));

const bgStarsMat = new THREE.PointsMaterial({
    size: 1.5, // Razor sharp 1.5px background dot
    sizeAttenuation: false, 
    vertexColors: true, 
    transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false
});

const bgStarsMesh = new THREE.Points(bgStarsGeom, bgStarsMat);
scene.add(bgStarsMesh);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight.position.set(-10, 20, 20);
scene.add(directionalLight);
const violetLight = new THREE.PointLight(0x543D98, 2, 50);
violetLight.position.set(10, -10, 10);
scene.add(violetLight);

camera.position.z = 35;

// Interaction
let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
window.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX - window.innerWidth / 2) * 0.05;
    mouseY = (event.clientY - window.innerHeight / 2) * 0.05;
});

const clock = new THREE.Clock();
let lastFrameTime = 0;
const fpsInterval = 1000 / 30; // 30 FPS target for mobile

// Pause the RAF loop when the tab is backgrounded — mobile browsers kill it anyway
// but this prevents draining CPU on desktop when the user has switched tabs.
let pageHidden = false;
document.addEventListener('visibilitychange', () => { pageHidden = document.hidden; });

function animate3D(time) {
    requestAnimationFrame(animate3D);
    if (pageHidden) return;

    // Frame throttling on mobile to save CPU/Battery
    if (isMobile) {
        const elapsed = time - lastFrameTime;
        if (elapsed < fpsInterval) return; // Skip frame
        lastFrameTime = time - (elapsed % fpsInterval);
    }

    const elapsedTime = clock.getElapsedTime();

    const scrollY = window.scrollY;

    if(brandMesh) {
        // Flat 2D vector should face camera perfectly straight
        brandMesh.rotation.y = 0; 
        brandMesh.rotation.x = 0;
        
        // PHYSICALLY GLUE THE 3D LOGO TO THE HERO SECTION HTML
        const fov = camera.fov * (Math.PI / 180);
        const visibleHeightAtZ0 = 2 * Math.tan(fov / 2) * camera.position.z;
        const scrollOffsetIn3D = (scrollY / window.innerHeight) * visibleHeightAtZ0;
        
        // Add a smooth continuous floating animation
        const floatOffset = Math.sin(elapsedTime * 2) * 1.5;

        // Base height is 2. Add float offset and scroll offset to physically glue it to the HTML scroll
        brandMesh.position.y = 2 + floatOffset + scrollOffsetIn3D; 
    }

    if (!reducedMotionMedia.matches) {
        particlesMesh.rotation.y = elapsedTime * 0.05;
    }

    // Ambient drift for the deep space background
    if (bgStarsMesh && !reducedMotionMedia.matches) {
        bgStarsMesh.rotation.y += 0.0003;
        bgStarsMesh.rotation.x += 0.0001;
    }
    
    camera.position.y = reducedMotionMedia.matches ? 0 : -(scrollY * 0.015);

    // Infinite Cosmos Travel Effect (Only when active)
    if(tunnelMesh.visible) {
        const positions = tunnelMesh.geometry.attributes.position.array;
        for(let i = 2; i < tunnelCount * 3; i+=3) {
            positions[i] += 12.0; // Increased speed by another 25% for maximum warp
            if(positions[i] > 50) positions[i] = -3000; // Wrap back to deep space seamlessly
        }
        tunnelMesh.geometry.attributes.position.needsUpdate = true;
    }
    
    renderer.render(scene, camera);
}
animate3D();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// ==========================================
// DOM & GSAP LOGIC
// ==========================================

    // Mobile detection for scroll: Lenis intercepts native touch events on ALL mobile
    // browsers (not just iOS), causing conflicts with pinned ScrollTrigger sections.
    // Use native scroll on any touch-capable device; Lenis only on true desktop.
    const isIOS = /iP(hone|ad|od)/.test(navigator.userAgent) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    gsap.registerPlugin(ScrollTrigger);

    const handleNavScroll = () => {
        const nav = document.getElementById('main-nav');
        if (nav) {
            if (window.scrollY > 10) nav.classList.add('scrolled');
            else nav.classList.remove('scrolled');
        }
    };

    if (!isMobileDevice) {
        // Desktop only: use Lenis smooth scroll
        const lenis = new window.Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            smooth: true,
        });
        window.globalLenis = lenis;

        lenis.on('scroll', ScrollTrigger.update);
        lenis.on('scroll', handleNavScroll);
        gsap.ticker.add((time) => { lenis.raf(time * 1000); });
        gsap.ticker.lagSmoothing(0, 0);
    } else {
        // Mobile (iOS, Android, any touch browser): native scroll
        window.globalLenis = null;
        window.addEventListener('scroll', ScrollTrigger.update, { passive: true });
        window.addEventListener('scroll', handleNavScroll, { passive: true });
        ScrollTrigger.config({ ignoreMobileResize: true });
    }

    // ==========================================================
    // MARK CURSOR — the user's pointer is the brand mark.
    // Idle: small filled mark following the mouse.
    // Active (over interactive): large outlined mark with text inside.
    // ==========================================================
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');

    if (cursor && cursorDot) {
        window.addEventListener('mousemove', (e) => {
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.18, ease: 'power2.out' });
            gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.05 });
        });
    }

    const magneticLinks = document.querySelectorAll('.magnetic-link, .work-item, .hs-card, .test-card, .btn, .acc-header');

    magneticLinks.forEach(link => {
        link.addEventListener('mouseleave', () => {
            gsap.to(link, { x: 0, y: 0, duration: 0.5, ease: 'power2.out' });
        });
        if (link.classList.contains('magnetic-link')) {
            link.addEventListener('mousemove', (e) => {
                const rect = link.getBoundingClientRect();
                const relX = e.clientX - rect.left - rect.width / 2;
                const relY = e.clientY - rect.top - rect.height / 2;
                gsap.to(link, { x: relX * 0.2, y: relY * 0.2, duration: 0.3, ease: 'power2.out' });
            });
        }
    });



    // SplitType
    const splitTexts = document.querySelectorAll('.split-text');
    splitTexts.forEach(text => {
        const split = new SplitType(text, { types: 'lines, words' });
        if (split.lines) {
            split.lines.forEach(line => {
                const wrapper = document.createElement('div');
                wrapper.classList.add('line-wrapper');
                line.parentNode.insertBefore(wrapper, line);
                wrapper.appendChild(line);
            });
        }
        if (split.words && split.words.length) {
            const splitStart = document.body.classList.contains('service-page') ? 'top 68%' : 'top 95%';
            gsap.fromTo(split.words,
                { yPercent: 120, opacity: 0 },
                {
                    scrollTrigger: { trigger: text, start: splitStart, toggleActions: 'play none none reverse' },
                    yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.015, ease: 'power4.out'
                }
            );
        }
    });

    window.initHomeDOMAnimations = () => {
    if (window.cleanupHomeDOMAnimations) {
        window.cleanupHomeDOMAnimations();
    }

    const preExistingHomeTriggers = new Set(ScrollTrigger.getAll());

    // ==========================================
    // CASE STUDIES: Center-to-Sides Cosmos Zoom
    // ==========================================
    const cosmosSection = document.getElementById('cases-pin');
    const cosmosCards = gsap.utils.toArray('.cosmos-card');

    if(cosmosCards.length > 0) {
        const isMobileDevice = window.innerWidth <= 768 || ('ontouchstart' in window) || navigator.maxTouchPoints > 0;

        // iOS Safari detection — needed for ScrollTrigger pin fix
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
                      (navigator.maxTouchPoints > 0 && /Macintosh/.test(navigator.userAgent));

        // iOS fix: normalizeScroll deactivated as it intercepts and locks all touch movements
        // globally, breaking page and menu scrolling on mobile devices.
        if (isIOS) {
            // ScrollTrigger.normalizeScroll(true);
        }

        // Mobile geometry matches desktop proportionally:
        // 50vw card + 25% x-offset = card starts at viewport edge, flies in and fills screen (overflow clipped)
        // This is the SAME left/right alternating effect as desktop, scaled to mobile viewport.
        const startZ = -5000;

        cosmosCards.forEach((card, index) => {
            const isLeft = index % 2 === 0;
            // Desktop: 30% offset (40vw card width). Mobile: 45% offset (80vw card width).
            // Ensures cards originate off-center (left/right) due to 3D perspective and clear the screen as they zoom forward.
            const xOffsetRatio = isMobileDevice ? 0.45 : 0.3;
            const xOffset = isLeft ? -window.innerWidth * xOffsetRatio : window.innerWidth * xOffsetRatio;

            gsap.set(card, {
                x: xOffset,
                y: 0,
                xPercent: -50,
                yPercent: -50,
                z: startZ,
                scale: 1,
                opacity: 0,
                pointerEvents: 'none',
                rotationZ: isLeft ? -10 : 10
            });
        });

        // Background Color Inversion
        gsap.to(document.body, {
            backgroundColor: '#000000',
            scrollTrigger: {
                trigger: cosmosSection,
                start: 'top bottom',
                end: 'top top',
                scrub: true
            }
        });

        // Hero starfield fades out as cosmos section enters (lightweight material opacity only)
        gsap.fromTo(particlesMaterial,
            { opacity: 0.7 },
            { opacity: 0, scrollTrigger: { trigger: cosmosSection, start: 'top 80%', end: 'top 20%', scrub: true } }
        );

        if (!isMobileDevice) {
            // Warp tunnel crossfade — desktop only. WebGL particle updates every frame
            // are too costly on mobile GPUs even with reduced particle counts.
            gsap.fromTo(tunnelMat,
                { opacity: 0 },
                {
                    opacity: 0.8,
                    scrollTrigger: {
                        trigger: cosmosSection,
                        start: 'top 80%',
                        end: 'top 20%',
                        scrub: true,
                        onEnter: () => setCaseStudyWarpActive(true),
                        onEnterBack: () => setCaseStudyWarpActive(true),
                        onLeaveBack: () => setCaseStudyWarpActive(false)
                    }
                }
            );
        }

        // Pin the section for the 3D fly-through (both mobile and desktop)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: cosmosSection,
                pin: true,
                // Mobile native scrolling requires fixed pinning to avoid jitter
                pinType: 'fixed',
                anticipatePin: 1,
                invalidateOnRefresh: true,
                scrub: 0.7,
                start: 'top top',
                end: () => '+=' + (cosmosCards.length * 1080),
                onLeave: () => {
                    if (!isMobileDevice) {
                        gsap.to(tunnelMat, { opacity: 0, duration: 0.5, onComplete: () => setCaseStudyWarpActive(false) });
                    }
                },
                onEnterBack: () => {
                    if (!isMobileDevice) {
                        setCaseStudyWarpActive(true);
                        gsap.to(tunnelMat, { opacity: 0.8, duration: 0.5 });
                    }
                }
            }
        });

        cosmosCards.forEach((card, index) => {
            const staggerTime = 2.0;
            const startTime = index * staggerTime;
            const flyDuration = 5.0;

            // Identical premium zoom-through and pass-by effect for both mobile and desktop:
            // Starts off-center visually (perspective z=-5000) and flies past the camera (z=1200)
            tl.to(card, {
                opacity: 1, pointerEvents: 'auto', duration: 1.5, ease: 'power1.inOut'
            }, startTime);

            tl.to(card, {
                z: 1200,
                ease: 'none',
                duration: flyDuration
            }, startTime);

            tl.to(card, {
                opacity: 0, pointerEvents: 'none', duration: 0.5, ease: 'power1.in'
            }, startTime + flyDuration - 0.5);
        });

        if (cosmosSection) {
            cosmosSection.classList.add('cosmos-js-ready');
        }
    }


    // Services Scrub
    const textFills = document.querySelectorAll('.text-fill');
    textFills.forEach(fill => {
        gsap.to(fill, {
            backgroundPositionX: '0%', ease: 'none',
            scrollTrigger: { trigger: fill, scrub: 1, start: 'top 80%', end: 'top 20%' }
        });
    });

    // FAQ Accordion
    const accItems = document.querySelectorAll('.acc-item');
    accItems.forEach(item => {
        const header = item.querySelector('.acc-header');
        header.addEventListener('click', () => {
            const content = item.querySelector('.acc-content');
            const isActive = item.classList.contains('active');
            
            // Close all
            accItems.forEach(acc => {
                acc.classList.remove('active');
                acc.querySelector('.acc-content').style.maxHeight = null;
            });
            
            // Open clicked if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + "px";
            }
            
            // Refresh ScrollTrigger since layout heights changed
            setTimeout(() => { ScrollTrigger.refresh(); }, 600);
        });
    });

    // Logos Grid Reveal - Using more robust autoAlpha and section trigger
    gsap.to(".logo-card", {
        scrollTrigger: {
            trigger: ".logos",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        autoAlpha: 1,
        y: 0,
        scale: 1,
        stagger: 0.03,
        duration: 1,
        ease: "power3.out"
    });

    // Spotlight Glow Pointer Tracking (Extreme GSAP-Smoothed Effect)
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        
        document.querySelectorAll('.logo-card').forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = clientX - rect.left;
            const y = clientY - rect.top;
            
            // Use GSAP to smooth out the CSS variable updates (removes stutter)
            gsap.to(card, {
                '--mouse-x': `${x}px`,
                '--mouse-y': `${y}px`,
                duration: 0.4,
                ease: 'power2.out',
                overwrite: 'auto'
            });
        });
    });

    // Custom Testimonial Interaction (Guaranteed Snap-Back)
    document.querySelectorAll('.test-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 25; // Gentle deflection
            const rotateY = (centerX - x) / 25;
            
            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.5,
                ease: 'power2.out',
                overwrite: true
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.4,
                ease: 'power3.out',
                overwrite: true
            });
        });
    });

    // ==========================================================
    // SERVICES: Mark as Motion Revealer
    // The brand mark draws itself (stroke-dashoffset) as each
    // service enters the viewport. The reveal of service content
    // is triggered BY the mark completing — the mark is the cause.
    // ==========================================================
    document.querySelectorAll('.scrub-item').forEach((item) => {
        const path = item.querySelector('.service-mark-svg-path');
        const numEl = item.querySelector('.service-num');
        const titleEl = item.querySelector('.scrub-title');
        const labelEl = item.querySelector('.scrub-label');
        const descEl = item.querySelector('.scrub-desc');

        if (!path || !numEl) return;

        const pathLen = path.getTotalLength() || 1462;
        gsap.set(path, { strokeDasharray: pathLen, strokeDashoffset: pathLen });
        gsap.set([numEl, titleEl, labelEl], { opacity: 0, y: 28 });
        gsap.set(descEl, { opacity: 0, y: 28 });

        ScrollTrigger.create({
            trigger: item,
            start: 'top 76%',
            once: true,
            onEnter: () => {
                const tl = gsap.timeline();
                tl.to(titleEl, {
                        opacity: 1, y: 0,
                        duration: 0.55,
                        ease: 'power3.out'
                    })
                  .to(labelEl, {
                        opacity: 1, y: 0,
                        duration: 0.5,
                        ease: 'power3.out'
                    }, '-=0.35')
                  .to(descEl, {
                        opacity: 0.8, y: 0,
                        duration: 0.5,
                        ease: 'power3.out'
                    }, '-=0.32')
                  .to(numEl, {
                        opacity: 1, y: 0,
                        duration: 0.45,
                        ease: 'power3.out'
                    }, '-=0.3')
                  .to(path, {
                        strokeDashoffset: 0,
                        duration: 1.15,
                        ease: 'power2.inOut'
                    }, '+=0.2');
            }
        });
    });

    // ==========================================================
    // CONTACT: Mark as Origin Point
    // The mark draws itself behind the headline as the section
    // enters. The invitation to connect appears to emerge from
    // the completed mark — the mark is where it all begins.
    // ==========================================================
    const contactMarkPath = document.querySelector('.contact-mark-path');
    if (contactMarkPath) {
        const contactPathLen = contactMarkPath.getTotalLength();
        gsap.set(contactMarkPath, { strokeDasharray: contactPathLen, strokeDashoffset: contactPathLen });

        ScrollTrigger.create({
            trigger: '#connect',
            start: 'top 72%',
            once: true,
            onEnter: () => {
                gsap.to(contactMarkPath, {
                    strokeDashoffset: 0,
                    duration: 1.6,
                    ease: 'power2.inOut',
                    onComplete: () => {
                        gsap.to(contactMarkPath, {
                            opacity: 0.4,
                            duration: 1.0,
                            ease: 'power2.out'
                        });
                    }
                });
            }
        });
    }

    setTimeout(() => { ScrollTrigger.refresh(); }, 500);

    const ownedHomeTriggers = ScrollTrigger.getAll().filter((trigger) => !preExistingHomeTriggers.has(trigger));
    window.cleanupHomeDOMAnimations = () => {
        ownedHomeTriggers.forEach((trigger) => trigger.kill());
        gsap.killTweensOf([particlesMaterial, tunnelMat]);
        setCaseStudyWarpActive(false);
    };

    };
    window.initHomeDOMAnimations();

    // Footer Hover SVG Effect
    const footerSvg = document.getElementById('footer-hover-svg');
    const revealMask = document.getElementById('revealMask');
    if (footerSvg && revealMask) {
        footerSvg.addEventListener('mousemove', (e) => {
            const rect = footerSvg.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            revealMask.setAttribute('cx', `${x}%`);
            revealMask.setAttribute('cy', `${y}%`);
        });
    }

    // Refresh GSAP ScrollTriggers when fonts are ready to prevent SplitType layout shifts
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            if (window.ScrollTrigger) {
                window.ScrollTrigger.refresh();
            }
        });
    }
};

if (window.THREE) {
    init();
} else {
    const interval = setInterval(() => {
        if (window.THREE) {
            clearInterval(interval);
            init();
        }
    }, 50);
}
})();
