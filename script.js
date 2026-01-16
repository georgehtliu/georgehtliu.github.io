// Background Stars
(function() {
  const starsContainer = document.querySelector('.stars-container');
  if (!starsContainer) return;
  
  const starCount = 5; // Number of stars to generate (reduced for performance)
  
  // Colorful star colors (slightly colorful but subtle)
  const starColors = [
    '#E5E7EB', // Original gray
    '#A3A9B8', // Light gray
    '#FFB899', // Soft orange
    '#FF8C5A', // Medium orange
    '#B8D4FF', // Soft blue
    '#9BB5FF', // Light blue
    '#D4B8FF', // Soft purple
    '#C8A8FF', // Light purple
    '#FFD4B8', // Peach
    '#B8FFD4', // Soft green
    '#FFE5B8', // Soft yellow
  ];
  
  const starShapes = [
    // 5-pointed star
    (size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
    </svg>`,
    // 4-pointed star
    (size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor"/>
    </svg>`,
    // Sparkle/6-pointed star
    (size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" fill="currentColor"/>
      <circle cx="12" cy="10" r="2" fill="currentColor"/>
    </svg>`,
    // Twinkle star
    (size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L13.5 7.5L21 9L13.5 10.5L12 18L10.5 10.5L3 9L10.5 7.5L12 0Z" fill="currentColor"/>
      <path d="M12 6L12.75 8.25L15 9L12.75 9.75L12 12L11.25 9.75L9 9L11.25 8.25L12 6Z" fill="currentColor"/>
    </svg>`,
    // Simple 5-pointed outline
    (size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
    </svg>`,
    // Small sparkle
    (size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L13 10L21 11L13 12L12 20L11 12L3 11L11 10L12 2Z" fill="currentColor"/>
    </svg>`
  ];
  
  // Generate random stars
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Random size between 8px and 24px
    const size = Math.random() * 16 + 8;
    
    // Random position across entire viewport (including negative x for left side)
    // Spread stars from -50% to 150% to ensure coverage on left side
    const x = Math.random() * 200 - 50; // Range from -50% to 150%
    const y = Math.random() * 100;
    
    // Random shape
    const shapeIndex = Math.floor(Math.random() * starShapes.length);
    star.innerHTML = starShapes[shapeIndex](size);
    
    // Random opacity
    const opacity = Math.random() * 0.6 + 0.3;
    
    star.style.left = x + '%';
    star.style.top = y + '%';
    star.style.opacity = opacity;
    
    // Random colorful color
    const colorIndex = Math.floor(Math.random() * starColors.length);
    star.style.color = starColors[colorIndex];
    
    // Add random animation delay for natural movement
    // Stars on left side (x < 50%) get shorter delays so they're visible immediately
    const baseDelay = x < 50 ? Math.random() * 30 : Math.random() * 60;
    star.style.animationDelay = `-${baseDelay}s`;
    
    starsContainer.appendChild(star);
  }
  
  // Generate planets
  const planetCount = 5; // Number of planets
  
  // Colorful planet colors (more vibrant than stars)
  const planetColors = [
    '#FF8C5A', // Orange
    '#9BB5FF', // Blue
    '#C8A8FF', // Purple
    '#FFD4B8', // Peach
    '#B8FFD4', // Green
    '#FFE5B8', // Yellow
    '#FFB899', // Soft orange
    '#D4B8FF', // Soft purple
  ];
  
  const planetShapes = [
    // Simple circle planet
    (size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="currentColor"/>
    </svg>`,
    // Planet with ring (Saturn-like)
    (size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="8" fill="currentColor"/>
      <ellipse cx="12" cy="12" rx="10" ry="3" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.6"/>
    </svg>`,
    // Planet with craters
    (size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="currentColor"/>
      <circle cx="9" cy="9" r="1.5" fill="rgba(0,0,0,0.3)"/>
      <circle cx="15" cy="10" r="1" fill="rgba(0,0,0,0.3)"/>
      <circle cx="10" cy="15" r="1.2" fill="rgba(0,0,0,0.3)"/>
    </svg>`,
    // Gas giant with bands
    (size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="currentColor"/>
      <ellipse cx="12" cy="8" rx="10" ry="2" fill="rgba(0,0,0,0.2)"/>
      <ellipse cx="12" cy="12" rx="10" ry="2" fill="rgba(0,0,0,0.15)"/>
      <ellipse cx="12" cy="16" rx="10" ry="2" fill="rgba(0,0,0,0.2)"/>
    </svg>`,
    // Small moon-like planet
    (size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="7" fill="currentColor"/>
      <path d="M12 5 Q8 8 8 12 Q8 16 12 19" stroke="rgba(0,0,0,0.3)" stroke-width="1" fill="none"/>
    </svg>`,
    // Dog face planet
    (size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="currentColor"/>
      <!-- Dog ears -->
      <ellipse cx="8" cy="7" rx="2" ry="3" fill="rgba(0,0,0,0.2)"/>
      <ellipse cx="16" cy="7" rx="2" ry="3" fill="rgba(0,0,0,0.2)"/>
      <!-- Dog eyes -->
      <circle cx="9" cy="11" r="1.5" fill="rgba(0,0,0,0.6)"/>
      <circle cx="15" cy="11" r="1.5" fill="rgba(0,0,0,0.6)"/>
      <!-- Dog nose -->
      <ellipse cx="12" cy="14" rx="1" ry="1.2" fill="rgba(0,0,0,0.6)"/>
      <!-- Dog mouth -->
      <path d="M12 14 Q10 16 9 15" stroke="rgba(0,0,0,0.4)" stroke-width="1" fill="none"/>
      <path d="M12 14 Q14 16 15 15" stroke="rgba(0,0,0,0.4)" stroke-width="1" fill="none"/>
    </svg>`,
    // Cat face planet
    (size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="currentColor"/>
      <!-- Cat ears -->
      <path d="M8 6 L10 4 L12 6 Z" fill="rgba(0,0,0,0.2)"/>
      <path d="M12 6 L14 4 L16 6 Z" fill="rgba(0,0,0,0.2)"/>
      <!-- Cat eyes -->
      <ellipse cx="9" cy="11" rx="1.5" ry="2" fill="rgba(0,0,0,0.6)"/>
      <ellipse cx="15" cy="11" rx="1.5" ry="2" fill="rgba(0,0,0,0.6)"/>
      <!-- Cat nose -->
      <path d="M12 13 L11 15 L13 15 Z" fill="rgba(0,0,0,0.6)"/>
      <!-- Cat mouth -->
      <path d="M12 15 Q10 17 9 16" stroke="rgba(0,0,0,0.4)" stroke-width="1" fill="none"/>
      <path d="M12 15 Q14 17 15 16" stroke="rgba(0,0,0,0.4)" stroke-width="1" fill="none"/>
    </svg>`,
    // Dog bone planet
    (size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="currentColor"/>
      <!-- Bone shape -->
      <ellipse cx="12" cy="12" rx="6" ry="2.5" fill="rgba(255,255,255,0.3)"/>
      <circle cx="8" cy="12" r="2" fill="rgba(255,255,255,0.3)"/>
      <circle cx="16" cy="12" r="2" fill="rgba(255,255,255,0.3)"/>
    </svg>`,
    // Cat paw planet
    (size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="currentColor"/>
      <!-- Paw pad -->
      <ellipse cx="12" cy="14" rx="3" ry="2.5" fill="rgba(255,255,255,0.3)"/>
      <!-- Toe pads -->
      <circle cx="9" cy="10" r="1.5" fill="rgba(255,255,255,0.3)"/>
      <circle cx="12" cy="9" r="1.5" fill="rgba(255,255,255,0.3)"/>
      <circle cx="15" cy="10" r="1.5" fill="rgba(255,255,255,0.3)"/>
      <circle cx="11" cy="12" r="1.2" fill="rgba(255,255,255,0.3)"/>
      <circle cx="13" cy="12" r="1.2" fill="rgba(255,255,255,0.3)"/>
    </svg>`
  ];
  
  // Generate random planets
  for (let i = 0; i < planetCount; i++) {
    const planet = document.createElement('div');
    planet.className = 'planet';
    
    // Random size between 30px and 60px (larger than stars)
    const size = Math.random() * 30 + 30;
    
    // Random position across entire viewport
    const x = Math.random() * 200 - 50; // Range from -50% to 150%
    const y = Math.random() * 100;
    
    // Random shape
    const shapeIndex = Math.floor(Math.random() * planetShapes.length);
    planet.innerHTML = planetShapes[shapeIndex](size);
    
    // Random opacity (planets are more visible than stars)
    const opacity = Math.random() * 0.4 + 0.4; // 0.4 to 0.8
    
    planet.style.left = x + '%';
    planet.style.top = y + '%';
    planet.style.opacity = opacity;
    
    // Random colorful color
    const colorIndex = Math.floor(Math.random() * planetColors.length);
    planet.style.color = planetColors[colorIndex];
    
    // Add planet shadow (cast downward)
    const shadow = document.createElement('div');
    shadow.className = 'planet-shadow';
    shadow.style.width = size * 1.2 + 'px';
    shadow.style.height = size * 0.3 + 'px';
    shadow.style.left = x + '%';
    shadow.style.top = (y + size / 100 * 50) + '%'; // Position below planet
    shadow.style.opacity = opacity * 0.3;
    shadow.style.background = `radial-gradient(ellipse, rgba(0, 0, 0, 0.4) 0%, transparent 70%)`;
    shadow.style.borderRadius = '50%';
    shadow.style.transform = 'translate(-50%, -50%)';
    shadow.style.pointerEvents = 'none';
    shadow.style.zIndex = '-1'; // Behind planet
    shadow.style.position = 'absolute';
    
    // Add random animation delay for natural movement
    const baseDelay = x < 50 ? Math.random() * 30 : Math.random() * 60;
    planet.style.animationDelay = `-${baseDelay}s`;
    shadow.style.animationDelay = `-${baseDelay}s`;
    
    starsContainer.appendChild(planet);
    starsContainer.appendChild(shadow);
  }
  
  // Generate spaceships
  const spaceshipCount = 4;
  const spaceshipColors = [
    '#9BB5FF', // Blue
    '#C8A8FF', // Purple
    '#FF8C5A', // Orange
    '#B8FFD4', // Green
    '#FFE5B8', // Yellow
  ];
  
  const spaceshipShapes = [
    // Classic UFO
    (size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="10" rx="8" ry="3" fill="currentColor"/>
      <ellipse cx="12" cy="10" rx="6" ry="2" fill="rgba(255,255,255,0.3)"/>
      <circle cx="9" cy="9" r="1" fill="rgba(255,255,255,0.6)"/>
      <circle cx="12" cy="9" r="1" fill="rgba(255,255,255,0.6)"/>
      <circle cx="15" cy="9" r="1" fill="rgba(255,255,255,0.6)"/>
      <ellipse cx="12" cy="13" rx="4" ry="1.5" fill="currentColor" opacity="0.5"/>
    </svg>`,
    // Rocket ship
    (size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8L12 2Z" fill="currentColor"/>
      <circle cx="12" cy="10" r="2" fill="rgba(255,255,255,0.4)"/>
      <path d="M12 18L10 22L12 20L14 22L12 18Z" fill="currentColor" opacity="0.7"/>
    </svg>`,
    // Flying saucer
    (size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="8" rx="9" ry="4" fill="currentColor"/>
      <ellipse cx="12" cy="8" rx="7" ry="3" fill="rgba(255,255,255,0.2)"/>
      <ellipse cx="12" cy="12" rx="6" ry="2" fill="currentColor" opacity="0.6"/>
      <rect x="10" y="6" width="4" height="4" rx="1" fill="rgba(255,255,255,0.5)"/>
    </svg>`,
    // Alien head
    (size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="10" rx="7" ry="9" fill="currentColor"/>
      <ellipse cx="9" cy="8" rx="2" ry="3" fill="rgba(0,0,0,0.8)"/>
      <ellipse cx="15" cy="8" rx="2" ry="3" fill="rgba(0,0,0,0.8)"/>
      <ellipse cx="12" cy="12" rx="3" ry="1.5" fill="rgba(0,0,0,0.6)"/>
      <ellipse cx="12" cy="16" rx="4" ry="2" fill="rgba(255,255,255,0.3)"/>
    </svg>`,
    // Satellite
    (size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="8" width="4" height="8" rx="1" fill="currentColor"/>
      <rect x="8" y="10" width="8" height="4" rx="1" fill="currentColor"/>
      <circle cx="12" cy="12" r="1.5" fill="rgba(255,255,255,0.6)"/>
      <line x1="4" y1="12" x2="8" y2="12" stroke="currentColor" stroke-width="1.5"/>
      <line x1="16" y1="12" x2="20" y2="12" stroke="currentColor" stroke-width="1.5"/>
      <line x1="12" y1="4" x2="12" y2="8" stroke="currentColor" stroke-width="1.5"/>
      <line x1="12" y1="16" x2="12" y2="20" stroke="currentColor" stroke-width="1.5"/>
    </svg>`,
    // Comet
    (size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="6" r="3" fill="currentColor"/>
      <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M15 9L9 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
    </svg>`,
    // Asteroid
    (size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8 4 6 8 7 12C6 16 8 20 12 22C16 20 18 16 17 12C18 8 16 4 12 2Z" fill="currentColor"/>
      <circle cx="10" cy="8" r="1" fill="rgba(0,0,0,0.4)"/>
      <circle cx="14" cy="10" r="0.8" fill="rgba(0,0,0,0.4)"/>
      <circle cx="11" cy="14" r="1.2" fill="rgba(0,0,0,0.4)"/>
    </svg>`,
  ];
  
  for (let i = 0; i < spaceshipCount; i++) {
    const spaceship = document.createElement('div');
    spaceship.className = 'spaceship';
    
    const size = Math.random() * 25 + 20; // 20-45px
    const x = Math.random() * 200 - 50;
    const y = Math.random() * 100;
    const shapeIndex = Math.floor(Math.random() * spaceshipShapes.length);
    spaceship.innerHTML = spaceshipShapes[shapeIndex](size);
    
    const opacity = Math.random() * 0.3 + 0.5; // 0.5 to 0.8
    const colorIndex = Math.floor(Math.random() * spaceshipColors.length);
    
    spaceship.style.left = x + '%';
    spaceship.style.top = y + '%';
    spaceship.style.opacity = opacity;
    spaceship.style.color = spaceshipColors[colorIndex];
    
    const baseDelay = x < 50 ? Math.random() * 30 : Math.random() * 60;
    spaceship.style.animationDelay = `-${baseDelay}s`;
    
    starsContainer.appendChild(spaceship);
  }
  
  // Generate shooting stars
  function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    
    // Random starting position (from top or sides)
    const startSide = Math.floor(Math.random() * 3); // 0=top, 1=left, 2=right
    let startX, startY, endX, endY;
    
    if (startSide === 0) {
      // Start from top
      startX = Math.random() * 100;
      startY = 0;
      endX = startX + (Math.random() * 40 - 20);
      endY = 100;
    } else if (startSide === 1) {
      // Start from left
      startX = 0;
      startY = Math.random() * 50;
      endX = 100;
      endY = startY + (Math.random() * 30 + 20);
    } else {
      // Start from right
      startX = 100;
      startY = Math.random() * 50;
      endX = 0;
      endY = startY + (Math.random() * 30 + 20);
    }
    
    shootingStar.style.left = startX + '%';
    shootingStar.style.top = startY + '%';
    
    // Calculate angle for the streak
    const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
    shootingStar.style.setProperty('--angle', angle + 'deg');
    shootingStar.style.setProperty('--start-x', startX + '%');
    shootingStar.style.setProperty('--start-y', startY + '%');
    shootingStar.style.setProperty('--end-x', endX + '%');
    shootingStar.style.setProperty('--end-y', endY + '%');
    
    // Random delay before appearing
    const delay = Math.random() * 5;
    shootingStar.style.animationDelay = delay + 's';
    
    starsContainer.appendChild(shootingStar);
    
    // Remove after animation completes
    setTimeout(() => {
      if (shootingStar.parentNode) {
        shootingStar.remove();
      }
    }, (delay + 2) * 1000);
  }
  
  // Create shooting stars periodically
  function startShootingStars() {
    // Create initial shooting stars
    for (let i = 0; i < 3; i++) {
      setTimeout(() => createShootingStar(), i * 2000);
    }
    
    // Continue creating shooting stars every 4-8 seconds
    setInterval(() => {
      if (Math.random() > 0.3) { // 70% chance to create a shooting star
        createShootingStar();
      }
    }, 4000 + Math.random() * 4000);
  }
  
  startShootingStars();
  
  // Generate nebula clouds
  const nebulaCount = 3;
  for (let i = 0; i < nebulaCount; i++) {
    const nebula = document.createElement('div');
    nebula.className = 'nebula';
    
    const size = Math.random() * 300 + 200; // 200-500px
    const x = Math.random() * 120 - 10; // -10% to 110%
    const y = Math.random() * 100;
    
    nebula.style.width = size + 'px';
    nebula.style.height = size + 'px';
    nebula.style.left = x + '%';
    nebula.style.top = y + '%';
    nebula.style.opacity = Math.random() * 0.15 + 0.05; // Very subtle
    
    // Random nebula color
    const nebulaColors = [
      'rgba(139, 92, 246, 0.3)', // Purple
      'rgba(107, 70, 193, 0.25)', // Dark purple
      'rgba(59, 130, 246, 0.2)', // Blue
      'rgba(76, 29, 149, 0.25)', // Deep purple
    ];
    const colorIndex = Math.floor(Math.random() * nebulaColors.length);
    nebula.style.background = `radial-gradient(circle, ${nebulaColors[colorIndex]} 0%, transparent 70%)`;
    
    const baseDelay = Math.random() * 60;
    nebula.style.animationDelay = `-${baseDelay}s`;
    
    starsContainer.appendChild(nebula);
  }
  
  // Generate asteroid field - many more asteroids
  const asteroidCount = 25; // Increased from 4 to create a field
  for (let i = 0; i < asteroidCount; i++) {
    const asteroid = document.createElement('div');
    asteroid.className = 'asteroid';
    
    const size = Math.random() * 12 + 6; // 6-18px (smaller for field effect)
    const x = Math.random() * 200 - 50;
    const y = Math.random() * 100;
    
    asteroid.style.width = size + 'px';
    asteroid.style.height = size + 'px';
    asteroid.style.left = x + '%';
    asteroid.style.top = y + '%';
    asteroid.style.opacity = Math.random() * 0.5 + 0.2; // Varying opacity
    // More varied irregular shapes
    const shapeVariations = [
      '30% 70% 70% 30% / 30% 30% 70% 70%',
      '50% 50% 50% 50% / 60% 40% 60% 40%',
      '40% 60% 60% 40% / 50% 50% 50% 50%',
      '25% 75% 75% 25% / 40% 60% 40% 60%'
    ];
    asteroid.style.borderRadius = shapeVariations[Math.floor(Math.random() * shapeVariations.length)];
    asteroid.style.background = `radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, rgba(76, 29, 149, 0.4) 100%)`;
    asteroid.style.boxShadow = `0 0 ${size / 2}px rgba(139, 92, 246, 0.5)`;
    
    const baseDelay = x < 50 ? Math.random() * 30 : Math.random() * 60;
    asteroid.style.animationDelay = `-${baseDelay}s`;
    
    starsContainer.appendChild(asteroid);
  }
  
  // Generate comets with tails
  const cometCount = 2;
  for (let i = 0; i < cometCount; i++) {
    const comet = document.createElement('div');
    comet.className = 'comet';
    
    const size = Math.random() * 8 + 6; // 6-14px
    const x = Math.random() * 200 - 50;
    const y = Math.random() * 100;
    
    comet.style.width = size + 'px';
    comet.style.height = size + 'px';
    comet.style.left = x + '%';
    comet.style.top = y + '%';
    comet.style.opacity = Math.random() * 0.5 + 0.4;
    comet.style.background = `radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(139, 92, 246, 0.6) 50%, transparent 100%)`;
    comet.style.borderRadius = '50%';
    comet.style.boxShadow = `0 0 ${size * 2}px rgba(139, 92, 246, 0.8)`;
    
    const baseDelay = x < 50 ? Math.random() * 30 : Math.random() * 60;
    comet.style.animationDelay = `-${baseDelay}s`;
    
    starsContainer.appendChild(comet);
  }
  
  // Generate space dust particles (small twinkling particles)
  const dustCount = 30;
  for (let i = 0; i < dustCount; i++) {
    const dust = document.createElement('div');
    dust.className = 'space-dust';
    
    const size = Math.random() * 3 + 1; // 1-4px
    const x = Math.random() * 200 - 50;
    const y = Math.random() * 100;
    
    dust.style.width = size + 'px';
    dust.style.height = size + 'px';
    dust.style.left = x + '%';
    dust.style.top = y + '%';
    dust.style.opacity = Math.random() * 0.6 + 0.2;
    dust.style.background = `radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(139, 92, 246, 0.5) 100%)`;
    dust.style.borderRadius = '50%';
    dust.style.boxShadow = `0 0 ${size * 1.5}px rgba(139, 92, 246, 0.6)`;
    
    const baseDelay = x < 50 ? Math.random() * 30 : Math.random() * 60;
    const twinkleDelay = Math.random() * 3;
    dust.style.animationDelay = `-${baseDelay}s`;
    dust.style.setProperty('--twinkle-delay', twinkleDelay + 's');
    
    starsContainer.appendChild(dust);
  }
  
  // Generate constellation lines (connecting stars)
  const constellationCount = 2;
  for (let i = 0; i < constellationCount; i++) {
    const constellation = document.createElement('div');
    constellation.className = 'constellation';
    
    const x1 = Math.random() * 200 - 50;
    const y1 = Math.random() * 100;
    const x2 = x1 + (Math.random() * 40 - 20);
    const y2 = y1 + (Math.random() * 30 - 15);
    
    const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    
    constellation.style.width = length + '%';
    constellation.style.height = '1px';
    constellation.style.left = x1 + '%';
    constellation.style.top = y1 + '%';
    constellation.style.opacity = Math.random() * 0.2 + 0.1;
    constellation.style.background = `linear-gradient(90deg, rgba(139, 92, 246, 0.3) 0%, rgba(107, 70, 193, 0.2) 50%, transparent 100%)`;
    constellation.style.transformOrigin = 'left center';
    constellation.style.setProperty('--angle', angle + 'deg');
    
    const baseDelay = x1 < 50 ? Math.random() * 30 : Math.random() * 60;
    constellation.style.animationDelay = `-${baseDelay}s`;
    
    starsContainer.appendChild(constellation);
  }
  
  // Generate black holes (dark circles with accretion disk effect)
  const blackHoleCount = 1;
  for (let i = 0; i < blackHoleCount; i++) {
    const blackHole = document.createElement('div');
    blackHole.className = 'black-hole';
    
    const size = Math.random() * 40 + 30; // 30-70px
    const x = Math.random() * 200 - 50;
    const y = Math.random() * 100;
    
    blackHole.style.width = size + 'px';
    blackHole.style.height = size + 'px';
    blackHole.style.left = x + '%';
    blackHole.style.top = y + '%';
    blackHole.style.background = `radial-gradient(circle, 
      rgba(0, 0, 0, 0.8) 0%, 
      rgba(76, 29, 149, 0.4) 40%, 
      rgba(139, 92, 246, 0.2) 60%, 
      transparent 100%)`;
    blackHole.style.borderRadius = '50%';
    blackHole.style.boxShadow = `
      0 0 ${size}px rgba(76, 29, 149, 0.3),
      inset 0 0 ${size / 2}px rgba(0, 0, 0, 0.9)`;
    
    const baseDelay = x < 50 ? Math.random() * 30 : Math.random() * 60;
    blackHole.style.animationDelay = `-${baseDelay}s`;
    
    starsContainer.appendChild(blackHole);
  }
  
  // Generate pulsars (pulsing stars)
  const pulsarCount = 3;
  for (let i = 0; i < pulsarCount; i++) {
    const pulsar = document.createElement('div');
    pulsar.className = 'pulsar';
    
    const size = Math.random() * 4 + 3; // 3-7px
    const x = Math.random() * 200 - 50;
    const y = Math.random() * 100;
    
    pulsar.style.width = size + 'px';
    pulsar.style.height = size + 'px';
    pulsar.style.left = x + '%';
    pulsar.style.top = y + '%';
    pulsar.style.background = `radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(139, 92, 246, 0.8) 100%)`;
    pulsar.style.borderRadius = '50%';
    pulsar.style.boxShadow = `0 0 ${size * 3}px rgba(139, 92, 246, 0.6)`;
    
    const pulseDelay = Math.random() * 2;
    pulsar.style.setProperty('--pulse-delay', pulseDelay + 's');
    
    starsContainer.appendChild(pulsar);
  }
  
  // Generate solar flares (bright streaks)
  function createSolarFlare() {
    const flare = document.createElement('div');
    flare.className = 'solar-flare';
    
    const x = Math.random() * 200 - 50;
    const y = Math.random() * 100;
    const angle = Math.random() * 360;
    const length = Math.random() * 60 + 40; // 40-100px
    
    flare.style.width = '2px';
    flare.style.height = length + 'px';
    flare.style.left = x + '%';
    flare.style.top = y + '%';
    flare.style.background = `linear-gradient(to bottom, 
      rgba(255, 255, 255, 0.9) 0%, 
      rgba(255, 200, 100, 0.7) 30%, 
      rgba(139, 92, 246, 0.5) 60%, 
      transparent 100%)`;
    flare.style.transformOrigin = 'center top';
    flare.style.setProperty('--angle', angle + 'deg');
    flare.style.opacity = Math.random() * 0.4 + 0.3;
    flare.style.boxShadow = `0 0 ${length / 2}px rgba(255, 200, 100, 0.6)`;
    
    const delay = Math.random() * 3;
    flare.style.animationDelay = delay + 's';
    
    starsContainer.appendChild(flare);
    
    setTimeout(() => {
      if (flare.parentNode) {
        flare.remove();
      }
    }, (delay + 1.5) * 1000);
  }
  
  // Create solar flares periodically
  function startSolarFlares() {
    for (let i = 0; i < 2; i++) {
      setTimeout(() => createSolarFlare(), i * 3000);
    }
    
    setInterval(() => {
      if (Math.random() > 0.5) {
        createSolarFlare();
      }
    }, 5000 + Math.random() * 5000);
  }
  
  startSolarFlares();
  
  // Create galaxy spiral
  (function() {
    const galaxySvg = document.querySelector('.galaxy-spiral');
    const galaxyGroup = document.querySelector('.galaxy-spiral-group');
    if (!galaxySvg || !galaxyGroup) return;
    
    // Set up galaxy SVG
    galaxySvg.style.position = 'fixed';
    galaxySvg.style.top = '0';
    galaxySvg.style.left = '0';
    galaxySvg.style.width = '100%';
    galaxySvg.style.height = '100%';
    galaxySvg.style.pointerEvents = 'none';
    galaxySvg.style.zIndex = '1'; // Behind stars but above background
    galaxySvg.style.opacity = '0.15'; // Very subtle
    
    // Create spiral arms
    const centerX = window.innerWidth * 0.2; // Position in upper left
    const centerY = window.innerHeight * 0.2;
    const numArms = 2;
    const maxRadius = Math.max(window.innerWidth, window.innerHeight) * 0.8;
    
    for (let arm = 0; arm < numArms; arm++) {
      const spiralPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      let pathData = '';
      const points = 100;
      const armOffset = (arm * Math.PI) / numArms;
      
      for (let i = 0; i <= points; i++) {
        const t = i / points;
        const angle = t * Math.PI * 4 + armOffset; // 2 full rotations
        const radius = t * maxRadius;
        const x = Math.cos(angle) * radius; // Relative to center
        const y = Math.sin(angle) * radius; // Relative to center
        
        if (i === 0) {
          pathData += `M ${x} ${y}`;
        } else {
          pathData += ` L ${x} ${y}`;
        }
      }
      
      spiralPath.setAttribute('d', pathData);
      spiralPath.setAttribute('fill', 'none');
      spiralPath.setAttribute('stroke', 'url(#galaxyGradient)');
      spiralPath.setAttribute('stroke-width', '2');
      spiralPath.setAttribute('opacity', '0.3');
      
      galaxyGroup.appendChild(spiralPath);
    }
    
    // Add central glow
    const centerGlow = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    centerGlow.setAttribute('cx', '0');
    centerGlow.setAttribute('cy', '0');
    centerGlow.setAttribute('r', '80');
    centerGlow.setAttribute('fill', 'url(#galaxyGradient)');
    centerGlow.setAttribute('opacity', '0.2');
    galaxyGroup.appendChild(centerGlow);
    
    // Animate rotation
    let rotationAngle = 0;
    function animateGalaxy() {
      rotationAngle += 0.3; // Slow rotation
      if (rotationAngle >= 360) rotationAngle -= 360;
      galaxyGroup.setAttribute('transform', `translate(${centerX}, ${centerY}) rotate(${rotationAngle})`);
      requestAnimationFrame(animateGalaxy);
    }
    animateGalaxy();
  })();
  
  // Warp speed lines on fast scroll
  (function() {
    const warpLinesContainer = document.getElementById('warp-speed-lines');
    if (!warpLinesContainer) return;
    
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    let lastScrollTime = performance.now();
    const scrollThreshold = 8; // pixels per frame to trigger warp lines (increased for less frequent appearance)
    const maxLines = 8; // Reduced from 20 for subtlety
    let activeLines = [];
    
    function updateWarpLines() {
      const now = performance.now();
      const deltaTime = (now - lastScrollTime) / 1000;
      lastScrollTime = now;
      
      const currentScrollY = window.scrollY;
      scrollVelocity = Math.abs(currentScrollY - lastScrollY) / deltaTime;
      lastScrollY = currentScrollY;
      
      // Clear old lines
      activeLines = activeLines.filter(line => {
        if (line.element && line.element.parentNode) {
          const opacity = parseFloat(line.element.style.opacity) || 1;
          if (opacity <= 0) {
            line.element.remove();
            return false;
          }
          return true;
        }
        return false;
      });
      
      // Create warp lines if scrolling fast
      if (scrollVelocity > scrollThreshold && activeLines.length < maxLines) {
        const line = document.createElement('div');
        line.className = 'warp-line';
        
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        const angle = Math.random() * Math.PI * 2;
        const length = 100 + Math.random() * 200;
        
        line.style.left = startX + 'px';
        line.style.top = startY + 'px';
        line.style.width = length + 'px';
        line.style.height = '1px'; // Thinner line
        line.style.background = `linear-gradient(90deg, 
          transparent 0%, 
          rgba(139, 92, 246, 0.25) 20%, 
          rgba(255, 255, 255, 0.35) 50%, 
          rgba(139, 92, 246, 0.25) 80%, 
          transparent 100%)`;
        line.style.transform = `rotate(${angle * 180 / Math.PI}deg)`;
        line.style.transformOrigin = 'left center';
        line.style.opacity = '0.3'; // Much more subtle
        line.style.boxShadow = `0 0 5px rgba(139, 92, 246, 0.2)`; // Softer glow
        
        warpLinesContainer.appendChild(line);
        
        // Animate line
        const startTime = performance.now();
        const duration = 300 + Math.random() * 200;
        
        function animateLine() {
          const elapsed = performance.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          line.style.opacity = (0.3 * (1 - progress)).toString(); // Match initial subtle opacity
          line.style.transform = `rotate(${angle * 180 / Math.PI}deg) translateX(${progress * 200}px)`;
          
          if (progress < 1) {
            requestAnimationFrame(animateLine);
          } else {
            line.remove();
          }
        }
        
        activeLines.push({ element: line, startTime });
        requestAnimationFrame(animateLine);
      }
      
      requestAnimationFrame(updateWarpLines);
    }
    
    updateWarpLines();
  })();
})();

// Typewriter Effect
(function() {
  const nameText = document.querySelector('.name-text');
  const cursor = document.querySelector('.typewriter-cursor');
  const fullText = 'George Liu';
  
  if (!nameText) return;
  
  const respectsReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (respectsReducedMotion) {
    // If reduced motion, just show the text immediately
    nameText.textContent = fullText;
    if (cursor) cursor.style.display = 'none';
  } else {
    // Typewriter effect
    let currentIndex = 0;
    const typingSpeed = 120; // milliseconds per character
    
    function typeCharacter() {
      if (currentIndex < fullText.length) {
        nameText.textContent += fullText[currentIndex];
        currentIndex++;
        setTimeout(typeCharacter, typingSpeed);
      } else {
        // Remove cursor after typing is complete
        if (cursor) {
          setTimeout(() => {
            cursor.style.display = 'none';
          }, 500);
        }
      }
    }
    
    // Start typing after a short delay
    setTimeout(typeCharacter, 300);
  }
})();

// Set theme to dark (no toggle)
(function() {
  const html = document.documentElement;
  html.setAttribute('data-theme', 'dark');
})();

// Respect reduced motion preferences
(function() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  function handleReducedMotion() {
    if (prefersReducedMotion.matches) {
      document.body.classList.add('reduced-motion');
    } else {
      document.body.classList.remove('reduced-motion');
    }
  }
  
  handleReducedMotion();
  prefersReducedMotion.addEventListener('change', handleReducedMotion);
})();


// Fade in on load
(function() {
  const elements = document.querySelectorAll('.bio, .timeline-item, .hero-name');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 50);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(10px)';
    el.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
    observer.observe(el);
  });
})();

// Track mouse position for dog orientation
(function() {
  let mouseX = 0;
  let mouseY = 0;
  
  // Track mouse position
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  // Export mouse position for dog script
  window.getMousePosition = () => ({ x: mouseX, y: mouseY });
})();

// Dog stationary on left, attached via leash to middle of content container
(function() {
  const dog = document.querySelector('.dog-img');
  const dogContainer = document.querySelector('.dog-container');
  const gravityWavesSvg = document.querySelector('.gravity-waves-svg');
  const gravityWavesGroup = document.querySelector('.gravity-waves-group');
  const contentContainer = document.querySelector('.content-container');
  const energyBarFill = document.getElementById('dog-energy-fill');
  const sleepBubbles = document.getElementById('sleep-bubbles');
  if (!dog || !dogContainer || !gravityWavesSvg || !gravityWavesGroup || !contentContainer) return;
  
  const respectsReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (respectsReducedMotion) {
    dog.style.display = 'none';
    gravityWavesSvg.style.display = 'none';
    return;
  }
  
  // Gravity wave animation state
  let waveAnimationTime = 0;
  
  // Check if we're on a small screen (same breakpoint as CSS: max-width: 1200px)
  function isSmallScreen() {
    return window.innerWidth <= 1200;
  }
  
  let mouseX = 0;
  let mouseY = 0;
  const dogSize = 180; // Dog width/height
  const dogOffset = dogSize / 2; // Half of dog size for centering
  
  let isLeashed = false; // Start unleashed by default
  let isZoomiesMode = false;
  // Initialize Y positions to viewport center instead of 0
  const initialCenterY = window.innerHeight / 2;
  let dogX = 0;
  let dogY = initialCenterY;
  let targetX = 0;
  let targetY = initialCenterY;
  let originalX = 0;
  let originalY = initialCenterY;
  let targetOriginalX = 0;
  let targetOriginalY = initialCenterY;
  let velocityX = 0;
  let velocityY = 0;
  let prevDogX = 0;
  let prevDogY = initialCenterY;
  let lastZoomiesTargetTime = 0;
  
  // Energy system
  let dogEnergy = 100; // Start at full energy (0-100)
  const ENERGY_MAX = 100;
  const ENERGY_MIN = 0;
  const ENERGY_RECHARGE_THRESHOLD = 25; // Recharge until 25%
  let lastEnergyUpdate = performance.now();
  const ENERGY_DRAIN_RATE = 0.5; // Energy per second when unleashed
  const ENERGY_ZOOMIES_DRAIN_RATE = 9; // Energy per second when in zoomies (drains 3x faster than before)
  const ENERGY_RECHARGE_RATE = 17; // Energy per second when leashed and below threshold
  const ENERGY_PLAY_DRAIN_PER_PIXEL = 0.01; // Energy per pixel traveled in play mode (more than normal)
  let lastPlayModePosition = { x: 0, y: 0 };
  let isInPlayMode = false;
  
  // Get mouse position from global tracker
  function getMousePosition() {
    const pos = window.getMousePosition();
    mouseX = pos.x;
    mouseY = pos.y;
  }
  
  // Function to draw/update animated gravity waves around the dog when leashed
  function updateGravityWaves() {
    // Update animation time
    waveAnimationTime += 0.02;
    if (waveAnimationTime > Math.PI * 2) {
      waveAnimationTime -= Math.PI * 2;
    }
    
    // Hide waves if effects are hidden
    if (document.body.classList.contains('effects-hidden')) {
      gravityWavesSvg.style.cssText = 'opacity: 0 !important; visibility: hidden !important; display: none !important;';
      return;
    }
    
    // Hide waves on small screens
    if (isSmallScreen()) {
      gravityWavesSvg.style.cssText = 'opacity: 0 !important; visibility: hidden !important; display: none !important;';
      return;
    }
    
    // Hide waves when unleashed
    if (!isLeashed) {
      gravityWavesSvg.style.cssText = 'opacity: 0 !important; visibility: hidden !important; display: none !important;';
      return;
    }
    
    // Show waves when leashed
    gravityWavesSvg.style.cssText = 'opacity: 1 !important; visibility: visible !important; display: block !important;';
    
    // Update waves SVG position and size
    gravityWavesSvg.style.position = 'fixed';
    gravityWavesSvg.style.top = '0';
    gravityWavesSvg.style.left = '0';
    gravityWavesSvg.style.width = '100%';
    gravityWavesSvg.style.height = '100%';
    gravityWavesSvg.style.pointerEvents = 'none';
    gravityWavesSvg.style.zIndex = '895'; // Below dog, above stars
    
    // Get dog position
    const dogRect = dog.getBoundingClientRect();
    const dogCenterX = dogRect.left + dogRect.width / 2;
    const dogCenterY = dogRect.top + dogRect.height / 2;
    
    // Clear existing wave elements
    gravityWavesGroup.innerHTML = '';
    
    // Create waves group centered on dog
    const wavesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    wavesGroup.setAttribute('transform', `translate(${dogCenterX}, ${dogCenterY})`);
    
    // Draw multiple concentric gravity wave rings
    const numRings = 4;
    const baseRadius = 100;
    const ringSpacing = 40;
    
    for (let i = 0; i < numRings; i++) {
      const ringIndex = i;
      const radius = baseRadius + ringSpacing * i;
      const phase = waveAnimationTime + (ringIndex * 0.5); // Stagger phases
      const amplitude = 8 + Math.sin(phase) * 3; // Pulsing amplitude
      const currentRadius = radius + Math.sin(phase * 2) * amplitude;
      
      // Create wave ring with distortion
      const waveRing = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      waveRing.setAttribute('cx', '0');
      waveRing.setAttribute('cy', '0');
      waveRing.setAttribute('r', currentRadius);
      waveRing.setAttribute('fill', 'none');
      waveRing.setAttribute('stroke', 'url(#waveRingGradient)');
      waveRing.setAttribute('stroke-width', '2');
      waveRing.setAttribute('opacity', 0.6 - (ringIndex * 0.12));
      wavesGroup.appendChild(waveRing);
      
      // Add wavy distortion to the ring
      const numPoints = 32;
      const wavePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      let pathData = '';
      
      for (let j = 0; j <= numPoints; j++) {
        const angle = (j / numPoints) * Math.PI * 2;
        const waveOffset = Math.sin(angle * 3 + phase * 2) * 5;
        const pointRadius = currentRadius + waveOffset;
        const x = Math.cos(angle) * pointRadius;
        const y = Math.sin(angle) * pointRadius;
        
        if (j === 0) {
          pathData += `M ${x} ${y}`;
        } else {
          pathData += ` L ${x} ${y}`;
        }
      }
      pathData += ' Z';
      
      wavePath.setAttribute('d', pathData);
      wavePath.setAttribute('fill', 'none');
      wavePath.setAttribute('stroke', `rgba(139, 92, 246, ${0.5 - ringIndex * 0.1})`);
      wavePath.setAttribute('stroke-width', '1.5');
      wavePath.setAttribute('opacity', 0.4 - (ringIndex * 0.08));
      wavesGroup.appendChild(wavePath);
    }
    
    // Central gravity well glow
    const gravityWell = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    gravityWell.setAttribute('cx', '0');
    gravityWell.setAttribute('cy', '0');
    gravityWell.setAttribute('r', baseRadius * 0.6 + Math.sin(waveAnimationTime * 2) * 10);
    gravityWell.setAttribute('fill', 'url(#gravityWaveGradient)');
    gravityWell.setAttribute('opacity', 0.4 + Math.sin(waveAnimationTime) * 0.2);
    wavesGroup.appendChild(gravityWell);
    
    // Add smaller ripples for detail
    for (let i = 0; i < 3; i++) {
      const ripplePhase = waveAnimationTime + i * 0.8;
      const rippleRadius = 30 + Math.sin(ripplePhase) * 15;
      const ripple = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      ripple.setAttribute('cx', '0');
      ripple.setAttribute('cy', '0');
      ripple.setAttribute('r', rippleRadius);
      ripple.setAttribute('fill', 'none');
      ripple.setAttribute('stroke', `rgba(139, 92, 246, ${0.3 - i * 0.1})`);
      ripple.setAttribute('stroke-width', '1');
      ripple.setAttribute('opacity', 0.5 - (rippleRadius / 100));
      wavesGroup.appendChild(ripple);
    }
    
    gravityWavesGroup.appendChild(wavesGroup);
  }
  
  // Calculate original dog position based on container
  function calculateOriginalPosition() {
    const rect = contentContainer.getBoundingClientRect();
    const containerLeft = rect.left;
    const screenLeft = 0;
    const dogRadius = dogOffset;
    
    // Dog position: middle of space between screen left and container left edge
    targetOriginalX = (screenLeft + containerLeft) / 2;
    // Always vertically centered in viewport
    targetOriginalY = window.innerHeight / 2;
    
    // Constrain to viewport
    targetOriginalX = Math.max(dogRadius, Math.min(window.innerWidth - dogRadius, targetOriginalX));
    targetOriginalY = Math.max(dogRadius, Math.min(window.innerHeight - dogRadius, targetOriginalY));
    
    // Update original position smoothly (but Y should always be centered)
    originalX += (targetOriginalX - originalX) * 0.1;
    // Force Y to always be centered, don't smooth it
    originalY = targetOriginalY;
  }
  
  // Initialize dog position (middle of space between screen left and container left edge)
  function initializeDog() {
    calculateOriginalPosition();
    
    const dogRadius = dogOffset;
    
    if (isLeashed) {
      // Leashed: start at original position (left side, centered vertically)
      const centeredY = Math.max(dogRadius, Math.min(window.innerHeight - dogRadius, window.innerHeight / 2));
      dogX = originalX;
      dogY = centeredY;
      originalY = centeredY;
      targetX = originalX;
      targetY = centeredY;
    } else {
      // Unleashed: start at a random position around the container
      generateRandomTarget();
      dogX = targetX;
      dogY = targetY;
      // Generate a new target for the dog to move toward
      generateRandomTarget();
    }
    
    // Use fixed positioning to ensure viewport-relative positioning
    dog.style.position = 'fixed';
    dog.style.left = (dogX - dogOffset) + 'px';
    dog.style.top = (dogY - dogOffset) + 'px';
    
    // Update container position to match dog (also fixed)
    dogContainer.style.position = 'fixed';
    dogContainer.style.left = (dogX - dogOffset) + 'px';
    dogContainer.style.top = (dogY - dogOffset) + 'px';
  }
  
  initializeDog();
  
  // Initialize energy bar
  updateEnergyBar();
  lastEnergyUpdate = performance.now();
  
  // Initialize button text
  updateLeashButtonText();
  
  // Force immediate positioning on load
  window.addEventListener('load', () => {
    // Update button visibility on load
    updateActionButtonsVisibility();
    
    const dogRadius = dogOffset;
    if (isLeashed) {
      // Leashed: center vertically
      const centeredY = Math.max(dogRadius, Math.min(window.innerHeight - dogRadius, window.innerHeight / 2));
      dogY = centeredY;
      originalY = centeredY;
      targetY = centeredY;
      dog.style.top = (dogY - dogOffset) + 'px';
      dogContainer.style.top = (dogY - dogOffset) + 'px';
    } else {
      // Unleashed: ensure random position is set
      if (dogX === 0 || dogY === 0) {
        generateRandomTarget();
        dogX = targetX;
        dogY = targetY;
        generateRandomTarget(); // Set a new target to move toward
        dog.style.left = (dogX - dogOffset) + 'px';
        dog.style.top = (dogY - dogOffset) + 'px';
        dogContainer.style.left = (dogX - dogOffset) + 'px';
        dogContainer.style.top = (dogY - dogOffset) + 'px';
      }
    }
  });
  
  // Constrain position to viewport bounds
  function constrainToViewport(x, y) {
    const dogRadius = dogOffset;
    
    // Keep dog within viewport bounds
    x = Math.max(dogRadius, Math.min(window.innerWidth - dogRadius, x));
    y = Math.max(dogRadius, Math.min(window.innerHeight - dogRadius, y));
    
    return { x, y };
  }
  
  // Generate zoomies target around container perimeter
  function generateZoomiesTarget() {
    const rect = contentContainer.getBoundingClientRect();
    const dogRadius = dogOffset;
    const padding = 50; // Distance from container edge
    
    // Choose a random side of the container (0=top, 1=right, 2=bottom, 3=left)
    const side = Math.floor(Math.random() * 4);
    
    switch(side) {
      case 0: // Top
        targetX = rect.left + Math.random() * (rect.right - rect.left);
        targetY = rect.top - dogRadius - padding;
        break;
      case 1: // Right
        targetX = rect.right + dogRadius + padding;
        targetY = rect.top + Math.random() * (rect.bottom - rect.top);
        break;
      case 2: // Bottom
        targetX = rect.left + Math.random() * (rect.right - rect.left);
        targetY = rect.bottom + dogRadius + padding;
        break;
      case 3: // Left
        targetX = rect.left - dogRadius - padding;
        targetY = rect.top + Math.random() * (rect.bottom - rect.top);
        break;
    }
    
    // Constrain to viewport
    const constrained = constrainToViewport(targetX, targetY);
    targetX = constrained.x;
    targetY = constrained.y;
  }
  
  // Generate random target for roaming (outside content container)
  function generateRandomTarget() {
    const rect = contentContainer.getBoundingClientRect();
    const padding = 80; // Distance from container edge
    const dogRadius = dogOffset;
    
    // Calculate container center
    const containerCenterX = rect.left + (rect.right - rect.left) / 2;
    const containerCenterY = rect.top + (rect.bottom - rect.top) / 2;
    
    // Calculate container dimensions with padding
    const containerWidth = (rect.right - rect.left) + padding * 2;
    const containerHeight = (rect.bottom - rect.top) + padding * 2;
    
    // Generate a position around the container (orbiting pattern)
    // Use polar coordinates to create positions around the container
    const angle = Math.random() * Math.PI * 2; // Random angle around container
    const distanceVariation = 0.3 + Math.random() * 0.4; // 30-70% of max distance
    
    // Calculate distance from container center
    const maxDistanceX = Math.max(containerWidth / 2, window.innerWidth * 0.3);
    const maxDistanceY = Math.max(containerHeight / 2, window.innerHeight * 0.3);
    
    // Use elliptical orbit around container
    const orbitX = Math.cos(angle) * maxDistanceX * distanceVariation;
    const orbitY = Math.sin(angle) * maxDistanceY * distanceVariation;
    
    // Calculate target position
    targetX = containerCenterX + orbitX;
    targetY = containerCenterY + orbitY;
    
    // Constrain to viewport bounds
    const constrained = constrainToViewport(targetX, targetY);
    targetX = constrained.x;
    targetY = constrained.y;
    
    // Ensure we're not too close to container (with some randomness)
    const minDistanceFromContainer = dogRadius + padding;
    const dx = targetX - containerCenterX;
    const dy = targetY - containerCenterY;
    const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);
    
    // If too close to container, push it further out
    if (distanceFromCenter < minDistanceFromContainer) {
      const angleToTarget = Math.atan2(dy, dx);
      targetX = containerCenterX + Math.cos(angleToTarget) * minDistanceFromContainer;
      targetY = containerCenterY + Math.sin(angleToTarget) * minDistanceFromContainer;
      
      // Constrain again after adjustment
      const reConstrained = constrainToViewport(targetX, targetY);
      targetX = reConstrained.x;
      targetY = reConstrained.y;
    }
  }
  
  // Toggle leash function (called from dropdown)
  // Update leash button text
  function updateLeashButtonText() {
    const leashBtn = document.getElementById('leash-toggle-btn');
    if (leashBtn) {
      // Show the opposite action (what will happen when clicked)
      leashBtn.textContent = isLeashed ? 'unleash' : 'leash';
    }
  }
  
  // Update visibility of action buttons based on leash state
  function updateActionButtonsVisibility() {
    const feedBtn = document.getElementById('feed-btn');
    const playBtn = document.getElementById('play-btn');
    const zoomiesBtn = document.getElementById('zoomies-btn');
    
    // Show buttons only when unleashed
    if (feedBtn) {
      feedBtn.style.display = isLeashed ? 'none' : 'block';
    }
    if (playBtn) {
      playBtn.style.display = isLeashed ? 'none' : 'block';
    }
    if (zoomiesBtn) {
      zoomiesBtn.style.display = isLeashed ? 'none' : 'block';
    }
  }
  
  // Update energy bar visual
  function updateEnergyBar() {
    if (!energyBarFill) return;
    energyBarFill.style.width = dogEnergy + '%';
    
    // Change color based on energy level
    if (dogEnergy > 60) {
      energyBarFill.style.background = 'linear-gradient(90deg, #4ade80 0%, #22c55e 100%)'; // Green
    } else if (dogEnergy > 30) {
      energyBarFill.style.background = 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%)'; // Yellow
    } else {
      energyBarFill.style.background = 'linear-gradient(90deg, #ef4444 0%, #dc2626 100%)'; // Red
    }
  }
  
  // Update energy based on current state
  function updateEnergy() {
    const now = performance.now();
    const deltaTime = (now - lastEnergyUpdate) / 1000; // Convert to seconds
    lastEnergyUpdate = now;
    
    // Check if play mode is active
    const playModeActive = window.isPlayModeActive ? window.isPlayModeActive() : false;
    
    // Energy drain when in zoomies mode (drains fastest)
    if (isZoomiesMode && dogEnergy > ENERGY_MIN) {
      dogEnergy = Math.max(ENERGY_MIN, dogEnergy - (ENERGY_ZOOMIES_DRAIN_RATE * deltaTime));
      
      // Force leash when energy hits 0
      if (dogEnergy <= ENERGY_MIN) {
        // Deactivate zoomies mode
        if (window.deactivateZoomies) {
          window.deactivateZoomies();
        }
        if (!isLeashed) {
          isLeashed = true;
          updateLeashButtonText();
          updateActionButtonsVisibility();
          calculateOriginalPosition();
          targetX = originalX;
          const dogRadius = dogOffset;
          targetY = Math.max(dogRadius, Math.min(window.innerHeight - dogRadius, window.innerHeight / 2));
          originalY = targetY;
          updateLeash();
        }
      }
    }
    // Energy drain in play mode based on distance traveled
    else if (playModeActive && !isLeashed && dogEnergy > ENERGY_MIN) {
      // Calculate distance traveled since last update
      const distanceTraveled = Math.sqrt(
        Math.pow(dogX - lastPlayModePosition.x, 2) + 
        Math.pow(dogY - lastPlayModePosition.y, 2)
      );
      
      // Drain energy based on distance traveled (more than normal unleashed)
      const energyDrained = distanceTraveled * ENERGY_PLAY_DRAIN_PER_PIXEL;
      dogEnergy = Math.max(ENERGY_MIN, dogEnergy - energyDrained);
      
      // Update last position for next frame
      lastPlayModePosition.x = dogX;
      lastPlayModePosition.y = dogY;
      
      // Force leash when energy hits 0
      if (dogEnergy <= ENERGY_MIN) {
        // Deactivate play mode
        if (window.deactivatePlayMode) {
          window.deactivatePlayMode();
        }
        if (!isLeashed) {
          isLeashed = true;
          updateLeashButtonText();
          updateActionButtonsVisibility();
          calculateOriginalPosition();
          targetX = originalX;
          const dogRadius = dogOffset;
          targetY = Math.max(dogRadius, Math.min(window.innerHeight - dogRadius, window.innerHeight / 2));
          originalY = targetY;
          updateLeash();
        }
      }
    }
    // Energy drain when unleashed (but not in zoomies or play mode)
    else if (!isLeashed && dogEnergy > ENERGY_MIN) {
      dogEnergy = Math.max(ENERGY_MIN, dogEnergy - (ENERGY_DRAIN_RATE * deltaTime));
      
      // Force leash when energy hits 0
      if (dogEnergy <= ENERGY_MIN) {
        if (!isLeashed) {
          isLeashed = true;
          updateLeashButtonText();
          updateActionButtonsVisibility();
          calculateOriginalPosition();
          targetX = originalX;
          const dogRadius = dogOffset;
          targetY = Math.max(dogRadius, Math.min(window.innerHeight - dogRadius, window.innerHeight / 2));
          originalY = targetY;
          updateLeash();
        }
      }
    }
    
    // Reset play mode position tracking when play mode ends
    if (!playModeActive && isInPlayMode) {
      isInPlayMode = false;
    }
    // Initialize play mode position when play mode starts
    if (playModeActive && !isInPlayMode) {
      isInPlayMode = true;
      lastPlayModePosition.x = dogX;
      lastPlayModePosition.y = dogY;
    }
    
    // Energy recharge when leashed - charge gradually all the way to 100%
    if (isLeashed && dogEnergy < ENERGY_MAX) {
      dogEnergy = Math.min(ENERGY_MAX, dogEnergy + (ENERGY_RECHARGE_RATE * deltaTime));
    }
    
    updateEnergyBar();
  }
  
  // Modify energy directly (for feed, play, zoomies actions)
  function modifyEnergy(amount) {
    dogEnergy = Math.max(ENERGY_MIN, Math.min(ENERGY_MAX, dogEnergy + amount));
    updateEnergyBar();
  }
  
  // Export energy modification functions
  window.addDogEnergy = (amount) => modifyEnergy(amount);
  window.removeDogEnergy = (amount) => modifyEnergy(-amount);
  
  function toggleLeash() {
    // Don't allow unleashing if energy is 0
    if (!isLeashed && dogEnergy <= ENERGY_MIN) {
      return; // Can't unleash with no energy
    }
    
    // Toggle leash state
    isLeashed = !isLeashed;
    
    // Update button text to show current state
    updateLeashButtonText();
    
    // Update visibility of action buttons
    updateActionButtonsVisibility();
    
    // Remove any bone if play mode was active
    if (window.removeBone) {
      window.removeBone();
    }
    
    if (isLeashed) {
      // Return to original position
      calculateOriginalPosition(); // Update original position first
      targetX = originalX;
      // Use viewport center for Y
      const dogRadius = dogOffset;
      targetY = Math.max(dogRadius, Math.min(window.innerHeight - dogRadius, window.innerHeight / 2));
      originalY = targetY; // Update originalY to match
    } else {
      // When unleashed, immediately generate a target around the container
      // This ensures the dog doesn't stay stuck on the left side
      generateRandomTarget();
      // Reset velocity to start fresh movement
      velocityX = 0;
      velocityY = 0;
    }
    
    // Force immediate visual update
    updateLeash();
  }
  
  // Update sleep bubbles visibility
  function updateSleepBubbles() {
    if (!sleepBubbles) return;
    
    // Hide on small screens
    if (isSmallScreen()) {
      sleepBubbles.style.display = 'none';
      return;
    }
    
    // Show sleep bubbles when leashed, hide when unleashed
    if (isLeashed) {
      sleepBubbles.style.display = 'flex';
      sleepBubbles.style.opacity = '1';
    } else {
      sleepBubbles.style.display = 'none';
      sleepBubbles.style.opacity = '0';
    }
  }
  
  // Initialize sleep bubbles on load
  updateSleepBubbles();
  
  // Track current dog image state to avoid unnecessary updates
  let currentDogImageState = null;
  
  // Update dog image based on leash state
  function updateDogImage() {
    if (!dog) return;
    
    // Only update if the state has changed
    const newState = isLeashed ? 'sleeping' : 'awake';
    if (currentDogImageState === newState) {
      return; // No change needed, let GIF continue animating
    }
    
    currentDogImageState = newState;
    
    if (isLeashed) {
      // Use sleeping gif when leashed (now has transparent background)
      const newSrc = 'dog-sleeping.gif';
      // Only update src if it's different (prevents restarting animation)
      if (!dog.src || !dog.src.includes(newSrc)) {
        dog.src = newSrc;
      }
      dog.style.mixBlendMode = 'normal'; // Normal blend mode since gif is transparent
      dog.style.filter = 'none';
      dog.classList.add('dog-sleeping');
      dog.classList.remove('dog-awake');
    } else {
      // Use normal gif when unleashed
      const newSrc = 'space-dog.gif';
      // Only update src if it's different (prevents restarting animation)
      if (!dog.src || !dog.src.includes(newSrc)) {
        dog.src = newSrc;
      }
      dog.style.mixBlendMode = 'screen'; // Restore blend mode for space dog
      dog.style.filter = 'none';
      dog.classList.add('dog-awake');
      dog.classList.remove('dog-sleeping');
    }
  }
  
  // Initialize dog image on load
  updateDogImage();
  
  function updateLeash() {
    // Update gravity waves
    updateGravityWaves();
    
    // Update sleep bubbles
    updateSleepBubbles();
    
    // Update dog image (sleeping vs normal)
    updateDogImage();
    
    // Hide on small screens (same behavior as dog)
    if (isSmallScreen()) {
      return;
    }
    
    // Check leash state
    if (!isLeashed) {
      // Reset dog scale when not leashed, but preserve orientation
      // Dog faces cursor: if cursor on right, face right (flip); if on left, face left (default)
      const dogRect = dog.getBoundingClientRect();
      const dogCenterX = dogRect.left + dogRect.width / 2;
      if (mouseX > dogCenterX) {
        // Cursor on right - face left (default)
        dog.style.transform = 'scaleX(1)';
      } else {
        // Cursor on left - flip to face right
        dog.style.transform = 'scaleX(-1)';
      }
      return;
    }
    
    // Leashed - dog is stuck, show gravity waves
    // Keep dog in default orientation (no flipping when leashed)
    dog.style.transform = 'scaleX(1)';
  }
  
  
  // Check if dog is colliding with container and rebound
  function checkContainerCollision(x, y) {
    const rect = contentContainer.getBoundingClientRect();
    const dogRadius = dogOffset;
    
    // Check if dog is touching or inside container
    const isColliding = x >= (rect.left - dogRadius) && x <= (rect.right + dogRadius) &&
                        y >= (rect.top - dogRadius) && y <= (rect.bottom + dogRadius);
    
    if (isColliding) {
      // Calculate distances to each edge
      const distToLeft = Math.abs(x - (rect.left - dogRadius));
      const distToRight = Math.abs(x - (rect.right + dogRadius));
      const distToTop = Math.abs(y - (rect.top - dogRadius));
      const distToBottom = Math.abs(y - (rect.bottom + dogRadius));
      
      // Determine which edge(s) the dog is closest to
      const minDistX = Math.min(distToLeft, distToRight);
      const minDistY = Math.min(distToTop, distToBottom);
      
      // Rebound based on closest edge(s)
      // If X collision is closer, rebound horizontally
      // If Y collision is closer, rebound vertically
      // If similar distances, rebound both
      
      const hitLeft = distToLeft < distToRight;
      const hitTop = distToTop < distToBottom;
      
      // Always rebound from the closest edge(s)
      if (minDistX <= minDistY || Math.abs(minDistX - minDistY) < 10) {
        // Horizontal collision (left or right side)
        velocityX = -velocityX * 0.8; // Reverse X velocity with damping
        
        // If velocity is very small, use direction based on position
        if (Math.abs(velocityX) < 0.1) {
          velocityX = hitLeft ? -1.5 : 1.5;
        }
        
        // Push dog outside container
        if (hitLeft) {
          x = rect.left - dogRadius;
        } else {
          x = rect.right + dogRadius;
        }
      }
      
      if (minDistY <= minDistX || Math.abs(minDistX - minDistY) < 10) {
        // Vertical collision (top or bottom)
        velocityY = -velocityY * 0.8; // Reverse Y velocity with damping
        
        // If velocity is very small, use direction based on position
        if (Math.abs(velocityY) < 0.1) {
          velocityY = hitTop ? -1.5 : 1.5;
        }
        
        // Push dog outside container
        if (hitTop) {
          y = rect.top - dogRadius;
        } else {
          y = rect.bottom + dogRadius;
        }
      }
      
      // Generate new target in rebounded direction
      generateReboundTarget(x, y, velocityX, velocityY);
    }
    
    return { x, y, rebounded: isColliding };
  }
  
  // Generate a new target in the rebounded direction
  function generateReboundTarget(currentX, currentY, vx, vy) {
    const rect = contentContainer.getBoundingClientRect();
    const dogRadius = dogOffset;
    
    // Calculate container center
    const containerCenterX = rect.left + (rect.right - rect.left) / 2;
    const containerCenterY = rect.top + (rect.bottom - rect.top) / 2;
    
    // Normalize velocity to get direction
    const speed = Math.sqrt(vx * vx + vy * vy);
    if (speed > 0.1) {
      const dirX = vx / speed;
      const dirY = vy / speed;
      
      // Generate target in the rebounded direction, away from container
      const distance = 150 + Math.random() * 150; // Random distance
      targetX = currentX + dirX * distance;
      targetY = currentY + dirY * distance;
      
      // Constrain to viewport bounds first
      const viewportConstrained = constrainToViewport(targetX, targetY);
      targetX = viewportConstrained.x;
      targetY = viewportConstrained.y;
      
      // If target would be inside container, push it outside using orbital pattern
      if (targetX >= (rect.left - dogRadius) && targetX <= (rect.right + dogRadius) &&
          targetY >= (rect.top - dogRadius) && targetY <= (rect.bottom + dogRadius)) {
        // Calculate angle from container center to current position
        const dx = currentX - containerCenterX;
        const dy = currentY - containerCenterY;
        const angle = Math.atan2(dy, dx);
        
        // Push target further out in the same direction
        const padding = 80;
        const minDistance = Math.max(
          (rect.right - rect.left) / 2 + padding,
          (rect.bottom - rect.top) / 2 + padding
        );
        
        targetX = containerCenterX + Math.cos(angle) * minDistance;
        targetY = containerCenterY + Math.sin(angle) * minDistance;
        
        // Constrain to viewport again
        const reConstrained = constrainToViewport(targetX, targetY);
        targetX = reConstrained.x;
        targetY = reConstrained.y;
      }
    } else {
      // Fallback: generate random target around container (not biased to left)
      generateRandomTarget();
    }
  }
  
  // Constrain dog position outside content container (fallback)
  function constrainOutsideContainer(x, y) {
    const rect = contentContainer.getBoundingClientRect();
    const dogRadius = dogOffset;
    
    // If dog would be inside container, push it out
    if (x >= (rect.left - dogRadius) && x <= (rect.right + dogRadius) &&
        y >= (rect.top - dogRadius) && y <= (rect.bottom + dogRadius)) {
      // Find closest edge and push dog outside
      const distToLeft = Math.abs(x - (rect.left - dogRadius));
      const distToRight = Math.abs(x - (rect.right + dogRadius));
      const distToTop = Math.abs(y - (rect.top - dogRadius));
      const distToBottom = Math.abs(y - (rect.bottom + dogRadius));
      
      const minDist = Math.min(distToLeft, distToRight, distToTop, distToBottom);
      
      if (minDist === distToLeft) {
        x = rect.left - dogRadius;
      } else if (minDist === distToRight) {
        x = rect.right + dogRadius;
      } else if (minDist === distToTop) {
        y = rect.top - dogRadius;
      } else {
        y = rect.bottom + dogRadius;
      }
    }
    
    return { x, y };
  }
  
  // Update dog position
  function updateDogPosition() {
    // Update original position smoothly based on scroll/container position
    calculateOriginalPosition();
    
    // Store previous position for velocity calculation
    prevDogX = dogX;
    prevDogY = dogY;
    
    if (isLeashed) {
      // For leashed mode, always keep dog vertically centered in viewport
      const dogRadius = dogOffset;
      targetX = originalX;
      // Always use viewport center for Y, don't use originalY
      targetY = window.innerHeight / 2;
      
      // Constrain to viewport
      targetX = Math.max(dogRadius, Math.min(window.innerWidth - dogRadius, targetX));
      targetY = Math.max(dogRadius, Math.min(window.innerHeight - dogRadius, targetY));
      
      // Smoothly move to target position (X only, Y should snap to center)
      dogX += (targetX - dogX) * 0.1;
      // Force Y to center immediately or very quickly
      dogY = targetY;
      // Reset velocity when leashed
      velocityX = 0;
      velocityY = 0;
    } else {
      // UNLEASHED MODE - dog should roam freely
      // Prioritize bone targets over random targets
      const boneTarget = window.getBoneTarget ? window.getBoneTarget() : null;
      
      if (boneTarget) {
        // There's a bone - chase it!
        const dogRect = dog.getBoundingClientRect();
        const dogCenterX = dogRect.left + dogRect.width / 2;
        const dogCenterY = dogRect.top + dogRect.height / 2;
        const boneDistance = Math.sqrt(
          Math.pow(dogCenterX - boneTarget.x, 2) + 
          Math.pow(dogCenterY - boneTarget.y, 2)
        );
        
        // Update target to bone position (ensure it's within viewport)
        const dogRadius = dogOffset;
        // Constrain target to viewport bounds so dog can always reach it
        const constrainedTargetX = Math.max(dogRadius, Math.min(window.innerWidth - dogRadius, boneTarget.x));
        const constrainedTargetY = Math.max(dogRadius, Math.min(window.innerHeight - dogRadius, boneTarget.y));
        
        // Use constrained target
        targetX = constrainedTargetX;
        targetY = constrainedTargetY;
        
        // If target was constrained, update bone position and coordinates
        if (Math.abs(boneTarget.x - constrainedTargetX) > 1 || Math.abs(boneTarget.y - constrainedTargetY) > 1) {
          // Target was constrained - update bone position via exported function
          if (window.updateBoneTarget) {
            window.updateBoneTarget(constrainedTargetX, constrainedTargetY);
          }
        }
        
        // If dog is close to bone (within 30px), collect bone with animation
        if (boneDistance < 30) {
          // Trigger bone collection animation
          if (window.collectBone) {
            window.collectBone(boneTarget.x, boneTarget.y);
          }
          
          if (window.removeBone) {
            window.removeBone();
          }
          generateRandomTarget();
          velocityX = 0;
          velocityY = 0;
        } else {
          // Move directly toward bone - shortest path
          // Use internal state variables (dogX, dogY) for movement calculation
          const dx = targetX - dogX;
          const dy = targetY - dogY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance > 0.1) {
            // Check if play mode is active for 3x speed boost
            const isPlayMode = window.isPlayModeActive ? window.isPlayModeActive() : false;
            const baseSpeed = 2.0; // Base speed when chasing bone
            const speed = isPlayMode ? baseSpeed * 3 : baseSpeed; // 3x faster in play mode
            
            // Move directly toward bone (shortest path)
            const moveX = (dx / distance) * speed;
            const moveY = (dy / distance) * speed;
            dogX += moveX;
            dogY += moveY;
            
            // Reset velocity to ensure direct movement (no momentum interference)
            velocityX = moveX;
            velocityY = moveY;
          } else {
            // Very close, stop movement
            velocityX = 0;
            velocityY = 0;
          }
          
          // When chasing bone, only constrain to viewport (no container rebound)
          // This ensures shortest path to bone
          const viewportConstrained = constrainToViewport(dogX, dogY);
          dogX = viewportConstrained.x;
          dogY = viewportConstrained.y;
        }
      } else {
        // No bone - check for zoomies mode or roam randomly
        if (isZoomiesMode) {
          // ZOOMIES MODE - fly around container very quickly
          const dx = targetX - dogX;
          const dy = targetY - dogY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Generate new target more frequently in zoomies mode (every 200-400ms)
          const now = performance.now();
          if (distance < 30 || (now - lastZoomiesTargetTime) > (200 + Math.random() * 200)) {
            generateZoomiesTarget();
            lastZoomiesTargetTime = now;
          }
          
          // Move very quickly toward target (10x faster than normal)
          const zoomiesSpeed = 15.0; // Very fast speed
          const moveX = (dx / distance) * zoomiesSpeed;
          const moveY = (dy / distance) * zoomiesSpeed;
          dogX += moveX;
          dogY += moveY;
          
          // Update velocity
          velocityX = dogX - prevDogX;
          velocityY = dogY - prevDogY;
          
          // Constrain to viewport bounds only (no container collision in zoomies)
          const viewportConstrained = constrainToViewport(dogX, dogY);
          dogX = viewportConstrained.x;
          dogY = viewportConstrained.y;
        } else {
          // Normal roaming
          const dx = targetX - dogX;
          const dy = targetY - dogY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 10) {
            // Reached target, generate new one
            generateRandomTarget();
            // Reset velocity
            velocityX = 0;
            velocityY = 0;
          } else {
            // Move toward target
            // Check if play mode is active for 3x speed boost
            const isPlayMode = window.isPlayModeActive ? window.isPlayModeActive() : false;
            const baseSpeed = 1.5;
            const speed = isPlayMode ? baseSpeed * 3 : baseSpeed; // 3x faster in play mode
            const moveX = (dx / distance) * speed;
            const moveY = (dy / distance) * speed;
            dogX += moveX;
            dogY += moveY;
            
            // Update velocity based on movement
            velocityX = dogX - prevDogX;
            velocityY = dogY - prevDogY;
          }
          
          // Check for collision and rebound (only when not chasing bone)
          const collision = checkContainerCollision(dogX, dogY);
          dogX = collision.x;
          dogY = collision.y;
          
          // Constrain to viewport bounds
          const viewportConstrained = constrainToViewport(dogX, dogY);
          dogX = viewportConstrained.x;
          dogY = viewportConstrained.y;
          
          // If rebounded, update velocity was already handled in checkContainerCollision
          if (!collision.rebounded) {
            // Apply some damping to velocity
            velocityX *= 0.95;
            velocityY *= 0.95;
          }
        }
      }
    }
    
    // Final viewport constraint (for leashed mode too)
    const finalConstrained = constrainToViewport(dogX, dogY);
    dogX = finalConstrained.x;
    dogY = finalConstrained.y;
    
    // Ensure fixed positioning for viewport-relative coordinates
    dog.style.position = 'fixed';
    dog.style.left = (dogX - dogOffset) + 'px';
    dog.style.top = (dogY - dogOffset) + 'px';
    
    // Update container position to match dog (also fixed)
    dogContainer.style.position = 'fixed';
    dogContainer.style.left = (dogX - dogOffset) + 'px';
    dogContainer.style.top = (dogY - dogOffset) + 'px';
    
    // Update dog orientation based on cursor position (only when unleashed)
    if (!isLeashed) {
      // Dog faces cursor: if cursor on right, face right (flip); if on left, face left (default)
      // Get current mouse position (use global tracker)
      getMousePosition();
      const dogRect = dog.getBoundingClientRect();
      const dogCenterX = dogRect.left + dogRect.width / 2;
      
      // Determine cursor position relative to dog
      const cursorOnRight = mouseX > dogCenterX;
      
      // Unleashed mode (including play mode) - simple orientation flip
      // Always update orientation based on cursor position
      if (cursorOnRight) {
        // Cursor on right - face left (default)
        dog.style.transform = 'scaleX(1)';
      } else {
        // Cursor on left - flip to face right
        dog.style.transform = 'scaleX(-1)';
      }
    }
    // When leashed, orientation is handled in updateLeash() - no flipping
  }
  
  // Animate leash and dog orientation
  function animate() {
    updateDogPosition();
    updateEnergy(); // Update energy system
    // Update leash/gravity waves based on state (hide during zoomies mode)
    if (isLeashed && !isSmallScreen() && !isZoomiesMode) {
      // Leashed - show and update gravity waves
      updateLeash();
    } else {
      // Unleashed or zoomies - hide gravity waves
      updateLeash(); // This will hide waves when unleashed
    }
    requestAnimationFrame(animate);
  }
  
  // Update on scroll/resize (smooth updates handled in animation loop)
  window.addEventListener('scroll', () => {
    // Scroll updates handled in animation loop
  });
  window.addEventListener('resize', () => {
    calculateOriginalPosition();
    // Force Y to center on resize
    if (isLeashed) {
      const dogRadius = dogOffset;
      const centeredY = Math.max(dogRadius, Math.min(window.innerHeight - dogRadius, window.innerHeight / 2));
      dogY = centeredY;
      originalY = centeredY;
      targetY = centeredY;
      dog.style.top = (dogY - dogOffset) + 'px';
      dogContainer.style.top = (dogY - dogOffset) + 'px';
    }
    // Update leash visibility on resize (to handle small screen changes)
    updateLeash();
  });
  
  animate();
  
  // Set dog target (for play mode)
  function setDogTarget(x, y) {
    // Unleash dog if leashed (but don't interfere with manual leash toggle)
    // This is only called from play mode, so it's okay to unleash
    isLeashed = false;
    
    // Constrain target to viewport bounds (accounting for dog radius)
    const dogRadius = dogOffset;
    // Ensure target is always reachable by the dog
    targetX = Math.max(dogRadius, Math.min(window.innerWidth - dogRadius, x));
    targetY = Math.max(dogRadius, Math.min(window.innerHeight - dogRadius, y));
    
    // Verify target is valid and reachable
    const currentDistance = Math.sqrt(
      Math.pow(dogX - targetX, 2) + 
      Math.pow(dogY - targetY, 2)
    );
    
    // If target is unreachable (dog can't get there), adjust it
    if (targetX < dogRadius || targetX > window.innerWidth - dogRadius ||
        targetY < dogRadius || targetY > window.innerHeight - dogRadius) {
      // Fallback: place target near dog's current position but in valid area
      targetX = Math.max(dogRadius, Math.min(window.innerWidth - dogRadius, dogX));
      targetY = Math.max(dogRadius, Math.min(window.innerHeight - dogRadius, dogY));
    }
  }
  
  // Export bone target getter (will be set by play mode)
  window.getBoneTarget = () => {
    // This will be overridden by play mode
    return null;
  };
  
  // Export bone removal function (will be set by play mode)
  window.removeBone = () => {
    // This will be overridden by play mode
  };
  
  // Export toggle function for dropdown
  window.toggleDogLeash = toggleLeash;
  window.setDogTarget = setDogTarget;
  
  // Export zoomies mode setter
  window.setZoomiesMode = (active) => {
    isZoomiesMode = active;
    if (active) {
      // Generate initial zoomies target
      generateZoomiesTarget();
      lastZoomiesTargetTime = performance.now();
    }
  };
  
  // Export leash status checker
  window.isDogLeashed = () => isLeashed;
  
  // Dog sayings - random words the dog can say when clicked
  const dogSayings = [
    'woof',
    'bark',
    'arf',
    'ruff',
    'grr',
    'sniff',
    'pant',
    'wag',
    'treat?',
    'play?',
    'hi!',
    'good boy!',
    'hungry!',
    'ball?',
    'walk?',
    'pet me!',
    'scratch?',
    'belly rub?',
    'zoomies!',
    'happy!',
    'excited!'
  ];
  
  // Cooldown for dog clicks (4 seconds)
  let lastDogClickTime = 0;
  const dogClickCooldown = 4000; // 4 seconds in milliseconds
  
  // Function to show random dog text when dog is clicked
  function createDogText(x, y) {
    // Randomly select a saying
    const randomSaying = dogSayings[Math.floor(Math.random() * dogSayings.length)];
    
    const dogText = document.createElement('div');
    dogText.className = 'woof-text';
    dogText.textContent = randomSaying;
    dogText.style.left = x + 'px';
    dogText.style.top = y + 'px';
    document.body.appendChild(dogText);
    
    // Remove after animation completes
    setTimeout(() => {
      if (dogText.parentNode) {
        dogText.remove();
      }
    }, 1500);
  }
  
  // Add click event listener to dog
  dog.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Check cooldown
    const currentTime = Date.now();
    if (currentTime - lastDogClickTime < dogClickCooldown) {
      return; // Still on cooldown, ignore click
    }
    
    // Update last click time
    lastDogClickTime = currentTime;
    
    // Store current transform to preserve orientation/scale
    const currentTransform = dog.style.transform || '';
    
    // Animate bubble-up effect
    const duration = 400; // 400ms animation
    const startTime = performance.now();
    const startScale = 1;
    const peakScale = 1.15;
    
    function animateBubble() {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      let bubbleScale;
      if (progress < 0.5) {
        // Growing phase (0 to 0.5)
        const growProgress = progress * 2;
        bubbleScale = startScale + (peakScale - startScale) * growProgress;
      } else {
        // Shrinking phase (0.5 to 1)
        const shrinkProgress = (progress - 0.5) * 2;
        bubbleScale = peakScale - (peakScale - startScale) * shrinkProgress;
      }
      
      // Apply bubble scale as an additional transform layer
      // The bubble scale is applied first, then the existing transform
      if (currentTransform && currentTransform.trim() !== '') {
        dog.style.transform = `scale(${bubbleScale}) ${currentTransform}`;
      } else {
        dog.style.transform = `scale(${bubbleScale})`;
      }
      
      if (progress < 1) {
        requestAnimationFrame(animateBubble);
      } else {
        // Restore original transform after animation
        dog.style.transform = currentTransform || '';
      }
    }
    
    requestAnimationFrame(animateBubble);
    
    // Get dog center position
    const dogRect = dog.getBoundingClientRect();
    const dogCenterX = dogRect.left + dogRect.width / 2;
    const dogCenterY = dogRect.top + dogRect.height / 2;
    
    // Position text slightly above the dog center
    const textY = dogCenterY - 30; // 30px above center
    
    // Create random dog text above dog center
    createDogText(dogCenterX, textY);
  });
})();

// Feed functionality
(function() {
  let feedModeActive = false;
  let feedModeTimeout = null;
  let feedCursorElement = null;
  let feedStreamInterval = null;
  let mouseX = 0;
  let mouseY = 0;
  
  // Create visual cursor element as fallback
  function createFeedCursor() {
    if (feedCursorElement) return feedCursorElement;
    
    feedCursorElement = document.createElement('div');
    feedCursorElement.className = 'feed-cursor';
    feedCursorElement.style.display = 'none';
    document.body.appendChild(feedCursorElement);
    
    // Track mouse movement to update cursor position
    document.addEventListener('mousemove', (e) => {
      if (feedModeActive && feedCursorElement) {
        feedCursorElement.style.left = e.clientX + 'px';
        feedCursorElement.style.top = e.clientY + 'px';
        feedCursorElement.style.display = 'block';
      }
    });
    
    return feedCursorElement;
  }
  
  // Create food particle that floats to dog
  function createFoodParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'food-particle';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    document.body.appendChild(particle);
    
    // Get dog element
    const dog = document.querySelector('.dog-img');
    if (!dog) {
      particle.remove();
      return;
    }
    
    // Animation parameters - 5x faster when feeding
    const baseDuration = 1500 + Math.random() * 500; // 1.5-2 seconds base
    const duration = baseDuration / 5; // 5x faster (0.3-0.4 seconds)
    const startTime = performance.now();
    const startX = x;
    const startY = y;
    
    // Space gravity effect - particles curve toward dog (tracking current position)
    function animate() {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Get current dog position (updates as dog moves)
      const dogRect = dog.getBoundingClientRect();
      const dogX = dogRect.left + dogRect.width / 2;
      const dogY = dogRect.top + dogRect.height / 2;
      
      // Calculate current distance and direction to dog
      const currentParticleX = parseFloat(particle.style.left) || startX;
      const currentParticleY = parseFloat(particle.style.top) || startY;
      const dx = dogX - currentParticleX;
      const dy = dogY - currentParticleY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // If very close to dog, remove particle and spawn hearts
      if (distance < 20) {
        particle.remove();
        createHeartParticles(dogX, dogY);
        // Add energy when food is collected
        if (window.addDogEnergy) {
          window.addDogEnergy(5); // +5 energy per food particle
        }
        return;
      }
      
      // Easing function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      // Move toward current dog position with gravity curve - 5x faster
      const baseSpeed = 2 + (1 - progress) * 1; // Base speed
      const speed = baseSpeed * 5; // 5x faster when feeding
      const moveX = (dx / distance) * speed;
      const moveY = (dy / distance) * speed;
      
      // Add gravity curve effect
      const gravityCurve = Math.sin(progress * Math.PI) * 0.3;
      const newX = currentParticleX + moveX + (Math.random() - 0.5) * 5 * (1 - progress);
      const newY = currentParticleY + moveY + gravityCurve * 10;
      
      // Scale down as it approaches dog
      const scale = 1 - progress * 0.5;
      const opacity = 1 - progress * 0.7; // Keep some opacity until very close
      
      particle.style.left = newX + 'px';
      particle.style.top = newY + 'px';
      particle.style.transform = `scale(${scale})`;
      particle.style.opacity = opacity;
      
      if (progress < 1 && distance >= 20) {
        requestAnimationFrame(animate);
      } else {
        // Final check - spawn hearts at dog's current position
        const finalDogRect = dog.getBoundingClientRect();
        const finalDogX = finalDogRect.left + finalDogRect.width / 2;
        const finalDogY = finalDogRect.top + finalDogRect.height / 2;
        particle.remove();
        createHeartParticles(finalDogX, finalDogY);
        // Add energy when food is collected
        if (window.addDogEnergy) {
          window.addDogEnergy(5); // +5 energy per food particle
        }
      }
    }
    
    requestAnimationFrame(animate);
  }
  
  // Create heart particles (Minecraft style)
  function createHeartParticles(x, y) {
    const heartCount = 2 + Math.floor(Math.random() * 2); // 2-3 hearts
    
    for (let i = 0; i < heartCount; i++) {
      setTimeout(() => {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        heart.textContent = '♥';
        heart.style.left = x + (Math.random() - 0.5) * 30 + 'px';
        heart.style.top = y + (Math.random() - 0.5) * 30 + 'px';
        document.body.appendChild(heart);
        
        // Animation parameters
        const duration = 1000 + Math.random() * 500; // 1-1.5 seconds
        const startTime = performance.now();
        const startX = parseFloat(heart.style.left);
        const startY = parseFloat(heart.style.top);
        const driftX = (Math.random() - 0.5) * 40; // Random horizontal drift
        const riseDistance = 30 + Math.random() * 20; // Rise upward
        
        function animateHeart() {
          const elapsed = performance.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for smooth movement
          const easeOut = 1 - Math.pow(1 - progress, 2);
          
          // Calculate position (float upward with slight drift)
          const currentX = startX + driftX * progress;
          const currentY = startY - riseDistance * easeOut;
          
          // Fade out as it rises
          const opacity = 1 - progress;
          const scale = 0.8 + progress * 0.2; // Slight scale up
          
          heart.style.left = currentX + 'px';
          heart.style.top = currentY + 'px';
          heart.style.opacity = opacity;
          heart.style.transform = `scale(${scale})`;
          
          if (progress < 1) {
            requestAnimationFrame(animateHeart);
          } else {
            heart.remove();
          }
        }
        
        requestAnimationFrame(animateHeart);
      }, i * 100); // Stagger heart spawns slightly
    }
  }
  
  // Track mouse position for continuous food stream
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  // Create continuous stream of food particles
  function startFoodStream() {
    if (!feedModeActive) return;
    
    // Spawn food particles at regular intervals
    feedStreamInterval = setInterval(() => {
      if (!feedModeActive) {
        clearInterval(feedStreamInterval);
        return;
      }
      
      // Spawn 2-4 particles at a time
      const particleCount = 2 + Math.floor(Math.random() * 3);
      
      for (let i = 0; i < particleCount; i++) {
        setTimeout(() => {
          // Spawn from random positions around the viewport or near cursor
          let spawnX, spawnY;
          
          // 70% chance to spawn near cursor, 30% chance from random viewport edge
          if (Math.random() < 0.7) {
            // Spawn near cursor with some randomness
            spawnX = mouseX + (Math.random() - 0.5) * 100;
            spawnY = mouseY + (Math.random() - 0.5) * 100;
          } else {
            // Spawn from random viewport edge
            const edge = Math.floor(Math.random() * 4);
            switch(edge) {
              case 0: // Top
                spawnX = Math.random() * window.innerWidth;
                spawnY = -20;
                break;
              case 1: // Right
                spawnX = window.innerWidth + 20;
                spawnY = Math.random() * window.innerHeight;
                break;
              case 2: // Bottom
                spawnX = Math.random() * window.innerWidth;
                spawnY = window.innerHeight + 20;
                break;
              case 3: // Left
                spawnX = -20;
                spawnY = Math.random() * window.innerHeight;
                break;
            }
          }
          
          // Ensure spawn position is within reasonable bounds
          spawnX = Math.max(-50, Math.min(window.innerWidth + 50, spawnX));
          spawnY = Math.max(-50, Math.min(window.innerHeight + 50, spawnY));
          
          createFoodParticle(spawnX, spawnY);
        }, i * 30); // Stagger particle spawns slightly
      }
    }, 200); // Spawn new batch every 200ms for continuous stream
  }
  
  // Activate feed mode
  function activateFeedMode() {
    if (feedModeActive) return; // Already active
    
    // Deactivate other modes first
    if (window.deactivatePlayMode) window.deactivatePlayMode();
    if (window.deactivateZoomies) window.deactivateZoomies();
    
    feedModeActive = true;
    document.body.classList.add('feed-mode');
    
    // Try to set cursor image (browsers may limit size to 32x32 or 128x128)
    // If it doesn't work, the visual cursor fallback will show
    try {
      document.body.style.cursor = 'url("dog-treats.png") 120 120, pointer';
    } catch (e) {
      console.log('Cursor image may not be supported, using visual fallback');
    }
    
    // Create and show visual cursor fallback (always show as backup)
    const cursorEl = createFeedCursor();
    cursorEl.style.display = 'block';
    
    // Show and animate timer inside feed button
    const timerFillEl = document.getElementById('feed-timer-fill');
    if (timerFillEl) {
      timerFillEl.style.width = '100%';
      
      // Animate timer fill from 100% to 0% over 10 seconds
      const duration = 10000; // 10 seconds
      const startTime = performance.now();
      
      function updateTimer() {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const remaining = 100 - (progress * 100);
        
        timerFillEl.style.width = remaining + '%';
        
        if (progress < 1) {
          requestAnimationFrame(updateTimer);
        } else {
          timerFillEl.style.width = '0%';
        }
      }
      
      requestAnimationFrame(updateTimer);
    }
    
    // Start continuous food stream
    startFoodStream();
    
    // Update button states
    updateButtonStates();
    
    // Deactivate after 10 seconds
    feedModeTimeout = setTimeout(() => {
      deactivateFeedMode();
    }, 10000);
  }
  
  // Deactivate feed mode
  function deactivateFeedMode() {
    feedModeActive = false;
    document.body.classList.remove('feed-mode');
    document.body.style.cursor = ''; // Reset cursor style
    
    // Hide visual cursor
    if (feedCursorElement) {
      feedCursorElement.style.display = 'none';
    }
    
    // Stop food stream
    if (feedStreamInterval) {
      clearInterval(feedStreamInterval);
      feedStreamInterval = null;
    }
    
    // Reset timer
    const timerFillEl = document.getElementById('feed-timer-fill');
    if (timerFillEl) {
      timerFillEl.style.width = '0%';
    }
    
    if (feedModeTimeout) {
      clearTimeout(feedModeTimeout);
      feedModeTimeout = null;
    }
    
    // Re-enable all buttons
    updateButtonStates();
  }
  
  // Update button disabled states
  function updateButtonStates() {
    const feedBtn = document.getElementById('feed-btn');
    const playBtn = document.getElementById('play-btn');
    const zoomiesBtn = document.getElementById('zoomies-btn');
    
    if (feedBtn) {
      feedBtn.disabled = feedModeActive;
    }
    if (playBtn) {
      playBtn.disabled = window.isPlayModeActive ? window.isPlayModeActive() : false;
    }
    if (zoomiesBtn) {
      zoomiesBtn.disabled = window.isZoomiesModeActive ? window.isZoomiesModeActive() : false;
    }
  }
  
  // Export for use in button handler
  window.activateFeedMode = activateFeedMode;
  window.deactivateFeedMode = deactivateFeedMode;
  window.updateButtonStates = updateButtonStates;
})();

// Play functionality
(function() {
  let playModeActive = false;
  let playModeTimeout = null;
  let playCursorElement = null;
  let playMouseX = 0;
  let playMouseY = 0;
  
  // Create visual cursor element as fallback
  function createPlayCursor() {
    if (playCursorElement) return playCursorElement;
    
    playCursorElement = document.createElement('div');
    playCursorElement.className = 'play-cursor';
    playCursorElement.style.display = 'none';
    document.body.appendChild(playCursorElement);
    
    return playCursorElement;
  }
  
  // Track mouse position for cursor following
  function handlePlayMouseMove(e) {
    if (playModeActive) {
      playMouseX = e.clientX;
      playMouseY = e.clientY;
      
      // Update visual cursor position
      if (playCursorElement) {
        playCursorElement.style.left = playMouseX + 'px';
        playCursorElement.style.top = playMouseY + 'px';
        playCursorElement.style.display = 'block';
      }
    }
  }
  
  // Animate bone collection
  function collectBone(x, y) {
    // Find the bone element
    const boneEl = currentBone;
    if (!boneEl) return;
    
    // Add collection animation
    boneEl.style.animation = 'boneCollect 0.5s ease-out forwards';
    
    // Create golden particles effect
    const particleCount = 8;
    for (let i = 0; i < particleCount; i++) {
      setTimeout(() => {
        const particle = document.createElement('div');
        particle.className = 'bone-particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        document.body.appendChild(particle);
        
        // Animate particle
        const angle = (Math.PI * 2 * i) / particleCount;
        const distance = 40 + Math.random() * 30;
        const duration = 600 + Math.random() * 200;
        const startTime = performance.now();
        
        function animateParticle() {
          const elapsed = performance.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          const currentX = x + Math.cos(angle) * distance * progress;
          const currentY = y + Math.sin(angle) * distance * progress - (progress * progress * 50); // Arc upward
          const opacity = 1 - progress;
          const scale = 1 - progress * 0.5;
          
          particle.style.left = currentX + 'px';
          particle.style.top = currentY + 'px';
          particle.style.opacity = opacity;
          particle.style.transform = `scale(${scale})`;
          
          if (progress < 1) {
            requestAnimationFrame(animateParticle);
          } else {
            particle.remove();
          }
        }
        
        requestAnimationFrame(animateParticle);
      }, i * 20);
    }
    
    // Remove bone after animation
    setTimeout(() => {
      if (boneEl && boneEl.parentNode) {
        boneEl.remove();
      }
    }, 500);
  }
  
  
  // Activate play mode
  function activatePlayMode() {
    if (playModeActive) return; // Already active
    
    // Deactivate other modes first
    if (window.deactivateFeedMode) window.deactivateFeedMode();
    if (window.deactivateZoomies) window.deactivateZoomies();
    
    // Automatically unleash dog if leashed
    if (window.toggleDogLeash && window.isDogLeashed && window.isDogLeashed()) {
      window.toggleDogLeash();
    }
    
    playModeActive = true;
    document.body.classList.add('play-mode');
    
    // Try to set cursor image
    try {
      document.body.style.cursor = 'url("bone.png") 80 80, pointer';
    } catch (e) {
      console.log('Cursor image may not be supported, using visual fallback');
    }
    
    // Create and show visual cursor fallback
    const cursorEl = createPlayCursor();
    cursorEl.style.display = 'block';
    
    // Initialize mouse position to current cursor position
    playMouseX = window.innerWidth / 2;
    playMouseY = window.innerHeight / 2;
    
    // Add mouse move listener to track cursor position
    document.addEventListener('mousemove', handlePlayMouseMove);
    
    // Show and animate timer inside play button
    const timerFillEl = document.getElementById('play-timer-fill');
    if (timerFillEl) {
      timerFillEl.style.width = '100%';
      
      // Animate timer fill from 100% to 0% over 10 seconds
      const duration = 10000; // 10 seconds
      const startTime = performance.now();
      
      function updateTimer() {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const remaining = 100 - (progress * 100);
        
        timerFillEl.style.width = remaining + '%';
        
        if (progress < 1) {
          requestAnimationFrame(updateTimer);
        } else {
          timerFillEl.style.width = '0%';
        }
      }
      
      requestAnimationFrame(updateTimer);
    }
    
    // Update button states
    if (window.updateButtonStates) window.updateButtonStates();
    
    // Deactivate after 10 seconds
    playModeTimeout = setTimeout(() => {
      deactivatePlayMode();
    }, 10000);
  }
  
  // Deactivate play mode
  function deactivatePlayMode() {
    playModeActive = false;
    document.body.classList.remove('play-mode');
    document.body.style.cursor = ''; // Reset cursor style
    
    // Hide visual cursor
    if (playCursorElement) {
      playCursorElement.style.display = 'none';
    }
    
    // Remove mouse move listener
    document.removeEventListener('mousemove', handlePlayMouseMove);
    
    // Reset timer
    const timerFillEl = document.getElementById('play-timer-fill');
    if (timerFillEl) {
      timerFillEl.style.width = '0%';
    }
    
    if (playModeTimeout) {
      clearTimeout(playModeTimeout);
      playModeTimeout = null;
    }
    
    // Re-enable all buttons
    if (window.updateButtonStates) window.updateButtonStates();
  }
  
  // Export bone target getter (returns cursor position)
  window.getBoneTarget = () => {
    if (playModeActive) {
      // Return cursor position, constrained to viewport
      const dogRadius = 90; // dogOffset value
      const constrainedX = Math.max(dogRadius, Math.min(window.innerWidth - dogRadius, playMouseX));
      const constrainedY = Math.max(dogRadius, Math.min(window.innerHeight - dogRadius, playMouseY));
      return { x: constrainedX, y: constrainedY };
    }
    return null;
  };
  
  // Export function to update bone target coordinates (no longer needed, but keep for compatibility)
  window.updateBoneTarget = (x, y) => {
    // No-op since we're using cursor position directly
  };
  
  // Animate bone collection - create particle effect when dog gets close to cursor
  function collectBone(x, y) {
    // Create golden particles effect at cursor position
    const particleCount = 8;
    for (let i = 0; i < particleCount; i++) {
      setTimeout(() => {
        const particle = document.createElement('div');
        particle.className = 'bone-particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        document.body.appendChild(particle);
        
        // Animate particle
        const angle = (Math.PI * 2 * i) / particleCount;
        const distance = 40 + Math.random() * 30;
        const duration = 600 + Math.random() * 200;
        const startTime = performance.now();
        
        function animateParticle() {
          const elapsed = performance.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          const currentX = x + Math.cos(angle) * distance * progress;
          const currentY = y + Math.sin(angle) * distance * progress - (progress * progress * 50); // Arc upward
          const opacity = 1 - progress;
          const scale = 1 - progress * 0.5;
          
          particle.style.left = currentX + 'px';
          particle.style.top = currentY + 'px';
          particle.style.opacity = opacity;
          particle.style.transform = `scale(${scale})`;
          
          if (progress < 1) {
            requestAnimationFrame(animateParticle);
          } else {
            particle.remove();
          }
        }
        
        requestAnimationFrame(animateParticle);
      }, i * 20);
    }
  }
  
  // Export bone collection animation
  window.collectBone = collectBone;
  
  // Export bone removal function (no longer needed, but keep for compatibility)
  window.removeBone = () => {
    // No-op since we're using cursor position directly
  };
  
  // Export play mode status checker
  window.isPlayModeActive = () => playModeActive;
  
  // Export for use in button handler
  window.activatePlayMode = activatePlayMode;
  window.deactivatePlayMode = deactivatePlayMode;
})();

// Zoomies functionality
(function() {
  let zoomiesModeActive = false;
  let zoomiesTimeout = null;
  let zoomiesAnimationFrame = null;
  
  // Activate zoomies mode
  function activateZoomies() {
    if (zoomiesModeActive) return; // Already active
    
    // Deactivate other modes first
    if (window.deactivateFeedMode) window.deactivateFeedMode();
    if (window.deactivatePlayMode) window.deactivatePlayMode();
    
    zoomiesModeActive = true;
    document.body.classList.add('zoomies-mode');
    
    // Unleash dog if leashed
    if (window.toggleDogLeash && window.isDogLeashed && window.isDogLeashed()) {
      window.toggleDogLeash();
    }
    
    // Set zoomies mode in dog script
    if (window.setZoomiesMode) {
      window.setZoomiesMode(true);
    }
    
    // Random duration between 5-10 seconds
    const duration = 5000 + Math.random() * 5000; // 5-10 seconds
    
    // Show and animate timer inside zoomies button
    const timerFillEl = document.getElementById('zoomies-timer-fill');
    if (timerFillEl) {
      timerFillEl.style.width = '100%';
      
      // Animate timer fill from 100% to 0% over duration
      const startTime = performance.now();
      
      function updateTimer() {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const remaining = 100 - (progress * 100);
        
        timerFillEl.style.width = remaining + '%';
        
        if (progress < 1) {
          requestAnimationFrame(updateTimer);
        } else {
          timerFillEl.style.width = '0%';
        }
      }
      
      requestAnimationFrame(updateTimer);
    }
    
    // Update button states
    if (window.updateButtonStates) window.updateButtonStates();
    
    // Deactivate after duration
    zoomiesTimeout = setTimeout(() => {
      deactivateZoomies();
    }, duration);
  }
  
  // Deactivate zoomies mode
  function deactivateZoomies() {
    zoomiesModeActive = false;
    document.body.classList.remove('zoomies-mode');
    
    // Disable zoomies mode in dog script
    if (window.setZoomiesMode) {
      window.setZoomiesMode(false);
    }
    
    
    // Reset timer
    const timerFillEl = document.getElementById('zoomies-timer-fill');
    if (timerFillEl) {
      timerFillEl.style.width = '0%';
    }
    
    if (zoomiesTimeout) {
      clearTimeout(zoomiesTimeout);
      zoomiesTimeout = null;
    }
    
    if (zoomiesAnimationFrame) {
      cancelAnimationFrame(zoomiesAnimationFrame);
      zoomiesAnimationFrame = null;
    }
  }
  
  // Export for use in button handler
  window.activateZoomies = activateZoomies;
  window.deactivateZoomies = deactivateZoomies;
  window.isZoomiesModeActive = () => zoomiesModeActive;
})();

// Dog action buttons
(function() {
  const dogActionBtns = document.querySelectorAll('.dog-action-btn');
  
  if (!dogActionBtns.length) return;
  
  // Handle button actions
  dogActionBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const action = btn.getAttribute('data-action');
      
      switch(action) {
        case 'leash-toggle':
          if (window.toggleDogLeash) {
            window.toggleDogLeash();
          }
          break;
        case 'feed':
          if (window.activateFeedMode) {
            window.activateFeedMode();
          }
          break;
        case 'play':
          if (window.activatePlayMode) {
            window.activatePlayMode();
          }
          break;
        case 'zoomies':
          if (window.activateZoomies) {
            window.activateZoomies();
          }
          break;
      }
    });
  });
})();

// Effects Toggle Functionality
(function() {
  const effectsToggleBtn = document.getElementById('effects-toggle-btn');
  if (!effectsToggleBtn) return;
  
  const effectsToggleIcon = effectsToggleBtn.querySelector('.effects-toggle-icon');
  const effectsToggleText = effectsToggleBtn.querySelector('.effects-toggle-text');
  
  // Update icon based on state
  function updateToggleIcon(isHidden) {
    if (!effectsToggleIcon) return;
    
    // Clear existing content
    effectsToggleIcon.innerHTML = '';
    
    if (isHidden) {
      // Eye icon (show effects)
      effectsToggleIcon.innerHTML = `
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `;
    } else {
      // Sparkles/stars icon (hide effects)
      effectsToggleIcon.innerHTML = `
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
      `;
    }
  }
  
  // Check localStorage for saved preference
  const effectsHidden = localStorage.getItem('effectsHidden') === 'true';
  
  // Apply initial state
  if (effectsHidden) {
    document.body.classList.add('effects-hidden');
    updateToggleIcon(true);
    if (effectsToggleText) effectsToggleText.textContent = 'show effects';
  }
  
  // Toggle function
  function toggleEffects() {
    const isHidden = document.body.classList.toggle('effects-hidden');
    
    // Update button text and icon
    updateToggleIcon(isHidden);
    if (effectsToggleText) {
      effectsToggleText.textContent = isHidden ? 'show effects' : 'hide effects';
    }
    
    // Save preference to localStorage
    localStorage.setItem('effectsHidden', isHidden.toString());
  }
  
  // Add click event listener
  effectsToggleBtn.addEventListener('click', toggleEffects);
})();

// Timeline Scroll Arrow
(function() {
  const scrollArrow = document.getElementById('timeline-scroll-arrow');
  const timeline = document.querySelector('.timeline');
  
  if (!scrollArrow || !timeline) return;
  
  function checkScrollPosition() {
    const timelineRect = timeline.getBoundingClientRect();
    const timelineTop = timelineRect.top;
    const timelineBottom = timelineRect.bottom;
    const viewportHeight = window.innerHeight;
    
    // Check if timeline extends beyond viewport
    const isTimelineLong = timeline.scrollHeight > viewportHeight;
    
    // Check if there's more content below the visible area
    const hasMoreContentBelow = timelineBottom > viewportHeight - 100; // 100px threshold
    
    // Show arrow if timeline is long and there's more content to scroll
    if (isTimelineLong && hasMoreContentBelow && timelineTop < viewportHeight) {
      scrollArrow.classList.add('visible');
    } else {
      scrollArrow.classList.remove('visible');
    }
  }
  
  function scrollToNext() {
    const timelineRect = timeline.getBoundingClientRect();
    const currentScroll = window.scrollY;
    const viewportHeight = window.innerHeight;
    
    // Calculate scroll position to show next section
    const scrollAmount = viewportHeight * 0.8; // Scroll 80% of viewport
    const targetScroll = currentScroll + scrollAmount;
    
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  }
  
  // Add click handler
  scrollArrow.addEventListener('click', scrollToNext);
  
  // Check on scroll and resize
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(checkScrollPosition, 100);
  });
  
  window.addEventListener('resize', checkScrollPosition);
  
  // Initial check
  checkScrollPosition();
  
  // Check periodically in case content loads dynamically
  setInterval(checkScrollPosition, 1000);
})();
