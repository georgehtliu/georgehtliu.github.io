// Background Stars
(function() {
  const starsContainer = document.querySelector('.stars-container');
  if (!starsContainer) return;
  
  const starCount = 50; // Number of stars to generate
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
    star.style.color = 'var(--text-secondary)';
    
    // Add random animation delay for natural movement
    // Stars on left side (x < 50%) get shorter delays so they're visible immediately
    const baseDelay = x < 50 ? Math.random() * 30 : Math.random() * 60;
    star.style.animationDelay = `-${baseDelay}s`;
    
    starsContainer.appendChild(star);
  }
  
  // Generate planets
  const planetCount = 5; // Number of planets
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
    planet.style.color = 'var(--text-secondary)';
    
    // Add random animation delay for natural movement
    const baseDelay = x < 50 ? Math.random() * 30 : Math.random() * 60;
    planet.style.animationDelay = `-${baseDelay}s`;
    
    starsContainer.appendChild(planet);
  }
})();

// Typewriter Effect
(function() {
  const nameText = document.querySelector('.name-text');
  const cursor = document.querySelector('.typewriter-cursor');
  const fullText = 'george liu';
  
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
  const leashLine = document.querySelector('.leash-line');
  const leashSvg = document.querySelector('.leash-svg');
  const contentContainer = document.querySelector('.content-container');
  if (!dog || !dogContainer || !leashLine || !leashSvg || !contentContainer) return;
  
  const respectsReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (respectsReducedMotion) {
    dog.style.display = 'none';
    leashSvg.style.display = 'none';
    return;
  }
  
  let mouseX = 0;
  let mouseY = 0;
  const dogSize = 180; // Dog width/height
  const dogOffset = dogSize / 2; // Half of dog size for centering
  
  let isLeashed = true;
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
  
  // Get mouse position from global tracker
  function getMousePosition() {
    const pos = window.getMousePosition();
    mouseX = pos.x;
    mouseY = pos.y;
  }
  
  // Function to get leash attachment point (middle of left edge of content container)
  function getLeashAttachmentPoint() {
    const rect = contentContainer.getBoundingClientRect();
    return {
      x: rect.left, // Left edge of container
      y: rect.top + (rect.bottom - rect.top) / 2  // Middle vertically
    };
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
    
    // Force initial Y position to be centered
    const dogRadius = dogOffset;
    const centeredY = Math.max(dogRadius, Math.min(window.innerHeight - dogRadius, window.innerHeight / 2));
    
    dogX = originalX;
    dogY = centeredY; // Start at center
    originalY = centeredY; // Update originalY to match
    targetX = originalX;
    targetY = centeredY;
    
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
  
  // Initialize button text
  updateLeashButtonText();
  
  // Force immediate centering on load
  window.addEventListener('load', () => {
    const dogRadius = dogOffset;
    const centeredY = Math.max(dogRadius, Math.min(window.innerHeight - dogRadius, window.innerHeight / 2));
    dogY = centeredY;
    originalY = centeredY;
    targetY = centeredY;
    dog.style.top = (dogY - dogOffset) + 'px';
    dogContainer.style.top = (dogY - dogOffset) + 'px';
  });
  
  // Constrain position to viewport bounds
  function constrainToViewport(x, y) {
    const dogRadius = dogOffset;
    
    // Keep dog within viewport bounds
    x = Math.max(dogRadius, Math.min(window.innerWidth - dogRadius, x));
    y = Math.max(dogRadius, Math.min(window.innerHeight - dogRadius, y));
    
    return { x, y };
  }
  
  // Generate random target for roaming (outside content container)
  function generateRandomTarget() {
    const rect = contentContainer.getBoundingClientRect();
    const padding = 100;
    const dogRadius = dogOffset;
    
    // Generate random position, but exclude the content container area
    let attempts = 0;
    let validPosition = false;
    
    while (!validPosition && attempts < 50) {
      // Generate random position within viewport bounds
      targetX = dogRadius + Math.random() * (window.innerWidth - dogRadius * 2);
      targetY = dogRadius + Math.random() * (window.innerHeight - dogRadius * 2);
      
      // Constrain to viewport first
      const constrained = constrainToViewport(targetX, targetY);
      targetX = constrained.x;
      targetY = constrained.y;
      
      // Check if position is outside the content container (with padding for dog size)
      const isOutside = targetX < (rect.left - dogRadius) || 
                       targetX > (rect.right + dogRadius) ||
                       targetY < (rect.top - dogRadius) || 
                       targetY > (rect.bottom + dogRadius);
      
      if (isOutside) {
        validPosition = true;
      }
      attempts++;
    }
    
    // Fallback: if we can't find a valid position, use a position to the left of container
    if (!validPosition) {
      targetX = Math.max(dogRadius, rect.left - dogRadius - 50);
      targetY = Math.max(dogRadius, Math.min(window.innerHeight - dogRadius, window.innerHeight / 2));
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
  
  function toggleLeash() {
    // Toggle leash state
    isLeashed = !isLeashed;
    
    // Update button text to show current state
    updateLeashButtonText();
    
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
      // Start roaming - ensure dog is truly unleashed
      // Clear any leash-related constraints
      generateRandomTarget();
      // Make sure target is set and dog will move
      const dogRadius = dogOffset;
      if (targetX === originalX && targetY === originalY) {
        // Force a new target if still at original position
        generateRandomTarget();
      }
    }
    
    // Force immediate visual update
    updateLeash();
  }
  
  // Update leash line
  function updateLeash() {
    // Check leash state and update visibility immediately
    if (!isLeashed) {
      // Completely hide leash when unleashed
      leashSvg.style.cssText = 'opacity: 0 !important; visibility: hidden !important; display: none !important; transition: none !important;';
      // Reset leash line coordinates and make stroke transparent
      leashLine.setAttribute('x1', '0');
      leashLine.setAttribute('y1', '0');
      leashLine.setAttribute('x2', '0');
      leashLine.setAttribute('y2', '0');
      leashLine.setAttribute('stroke-width', '0');
      leashLine.setAttribute('stroke', 'transparent');
      // Reset dog scale when not leashed, but preserve orientation
      const dogRect = dog.getBoundingClientRect();
      const dogCenterX = dogRect.left + dogRect.width / 2;
      if (mouseX < dogCenterX) {
        dog.style.transform = 'scaleX(-1)';
      } else {
        dog.style.transform = 'scaleX(1)';
      }
      return;
    }
    
    // Leash is on - make it visible
    leashSvg.style.cssText = 'opacity: 1 !important; visibility: visible !important; display: block !important; transition: opacity 0.3s ease !important;';
    
    // Restore leash line properties FIRST
    leashLine.setAttribute('stroke', '#8B4513'); // Restore brown color
    leashLine.setAttribute('opacity', '1'); // Ensure opacity is 1
    
    const leashPoint = getLeashAttachmentPoint();
    const dogRect = dog.getBoundingClientRect();
    const dogCenterX = dogRect.left + dogRect.width / 2;
    const dogCenterY = dogRect.top + dogRect.height / 2;
    
    // Calculate distance between dog and leash attachment point
    const dx = dogCenterX - leashPoint.x;
    const dy = dogCenterY - leashPoint.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Dynamic scaling: closer to attachment = smaller, farther = larger
    // Base scale at max distance, scale down as distance decreases
    const maxDistance = 400; // Maximum expected distance
    const minScale = 0.5; // Minimum scale (when very close)
    const maxScale = 1.0; // Maximum scale (when far)
    
    // Calculate scale based on distance (inverse relationship)
    const normalizedDistance = Math.min(distance / maxDistance, 1);
    const scale = minScale + (maxScale - minScale) * normalizedDistance;
    
    // Determine orientation based on cursor position
    const facingLeft = mouseX < dogCenterX;
    
    // Apply scale and orientation together
    if (facingLeft) {
      dog.style.transform = `scaleX(-${scale}) scaleY(${scale})`;
    } else {
      dog.style.transform = `scale(${scale})`;
    }
    
    // Dynamic leash thickness: thinner when stretched, thicker when slack
    const minStrokeWidth = 1.5;
    const maxStrokeWidth = 4;
    const strokeWidth = minStrokeWidth + (maxStrokeWidth - minStrokeWidth) * (1 - normalizedDistance);
    leashLine.setAttribute('stroke-width', strokeWidth);
    
    // Update leash SVG position and size
    leashSvg.style.position = 'fixed';
    leashSvg.style.top = '0';
    leashSvg.style.left = '0';
    leashSvg.style.width = '100%';
    leashSvg.style.height = '100%';
    leashSvg.style.pointerEvents = 'none';
    leashSvg.style.zIndex = '998'; // Below dog
    
    // Set leash line coordinates (straight line) - ensure they're numbers
    leashLine.setAttribute('x1', dogCenterX.toString());
    leashLine.setAttribute('y1', dogCenterY.toString());
    leashLine.setAttribute('x2', leashPoint.x.toString());
    leashLine.setAttribute('y2', leashPoint.y.toString());
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
    
    // Normalize velocity to get direction
    const speed = Math.sqrt(vx * vx + vy * vy);
    if (speed > 0) {
      const dirX = vx / speed;
      const dirY = vy / speed;
      
      // Generate target in the rebounded direction
      const distance = 200 + Math.random() * 200; // Random distance
      targetX = currentX + dirX * distance;
      targetY = currentY + dirY * distance;
      
      // Constrain to viewport bounds first
      const viewportConstrained = constrainToViewport(targetX, targetY);
      targetX = viewportConstrained.x;
      targetY = viewportConstrained.y;
      
      // If target would be inside container, adjust it
      if (targetX >= (rect.left - dogRadius) && targetX <= (rect.right + dogRadius) &&
          targetY >= (rect.top - dogRadius) && targetY <= (rect.bottom + dogRadius)) {
        // Push target outside container
        if (Math.abs(targetX - rect.left) < Math.abs(targetX - rect.right)) {
          targetX = Math.max(dogRadius, rect.left - dogRadius - 50);
        } else {
          targetX = Math.min(window.innerWidth - dogRadius, rect.right + dogRadius + 50);
        }
        // Ensure still within viewport
        targetX = Math.max(dogRadius, Math.min(window.innerWidth - dogRadius, targetX));
        targetY = Math.max(dogRadius, Math.min(window.innerHeight - dogRadius, targetY));
      }
    } else {
      // Fallback: generate random target outside container
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
          // Move toward bone
          const dx = targetX - dogX;
          const dy = targetY - dogY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance > 0.1) {
            // Check if play mode is active for 3x speed boost
            const isPlayMode = window.isPlayModeActive ? window.isPlayModeActive() : false;
            const baseSpeed = 2.0; // Base speed when chasing bone
            const speed = isPlayMode ? baseSpeed * 3 : baseSpeed; // 3x faster in play mode
            const moveX = (dx / distance) * speed;
            const moveY = (dy / distance) * speed;
            dogX += moveX;
            dogY += moveY;
            
            // Update velocity based on movement
            velocityX = dogX - prevDogX;
            velocityY = dogY - prevDogY;
          }
        }
      } else {
        // No bone - roam randomly
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
      }
      
      // Check for collision and rebound
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
  }
  
  // Animate leash and dog orientation
  function animate() {
    updateDogPosition();
    // Update leash based on state
    if (isLeashed) {
      // Leashed - show and update leash
      updateLeash();
      // Double-check leash is visible (in case updateLeash didn't set it)
      leashSvg.style.cssText = 'opacity: 1 !important; visibility: visible !important; display: block !important;';
    } else {
      // Ensure leash stays hidden when unleashed - completely remove it from rendering
      leashSvg.style.cssText = 'opacity: 0 !important; visibility: hidden !important; display: none !important; pointer-events: none !important;';
      // Clear leash line completely
      leashLine.setAttribute('x1', '0');
      leashLine.setAttribute('y1', '0');
      leashLine.setAttribute('x2', '0');
      leashLine.setAttribute('y2', '0');
      leashLine.setAttribute('stroke', 'transparent');
      leashLine.setAttribute('stroke-width', '0');
      leashLine.setAttribute('opacity', '0');
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
})();

// Feed functionality
(function() {
  let feedModeActive = false;
  let feedModeTimeout = null;
  let feedCursorElement = null;
  
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
    
    // Animation parameters
    const duration = 1500 + Math.random() * 500; // 1.5-2 seconds
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
        return;
      }
      
      // Easing function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      // Move toward current dog position with gravity curve
      const speed = 2 + (1 - progress) * 1; // Faster at start, slower near end
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
  
  // Handle feed mode click
  function handleFeedClick(e) {
    if (!feedModeActive) return;
    
    // Create multiple food particles for effect
    const particleCount = 3 + Math.floor(Math.random() * 3); // 3-5 particles
    for (let i = 0; i < particleCount; i++) {
      setTimeout(() => {
        const offsetX = (Math.random() - 0.5) * 20;
        const offsetY = (Math.random() - 0.5) * 20;
        createFoodParticle(e.clientX + offsetX, e.clientY + offsetY);
      }, i * 50);
    }
  }
  
  // Activate feed mode
  function activateFeedMode() {
    if (feedModeActive) return; // Already active
    
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
    
    // Add click listener for food particles
    document.addEventListener('click', handleFeedClick, true);
    
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
    
    // Reset timer
    const timerFillEl = document.getElementById('feed-timer-fill');
    if (timerFillEl) {
      timerFillEl.style.width = '0%';
    }
    
    document.removeEventListener('click', handleFeedClick, true);
    
    if (feedModeTimeout) {
      clearTimeout(feedModeTimeout);
      feedModeTimeout = null;
    }
  }
  
  // Export for use in button handler
  window.activateFeedMode = activateFeedMode;
})();

// Play functionality
(function() {
  let playModeActive = false;
  let playModeTimeout = null;
  let playCursorElement = null;
  let currentBone = null;
  let boneTargetX = null;
  let boneTargetY = null;
  
  // Create visual cursor element as fallback
  function createPlayCursor() {
    if (playCursorElement) return playCursorElement;
    
    playCursorElement = document.createElement('div');
    playCursorElement.className = 'play-cursor';
    playCursorElement.style.display = 'none';
    document.body.appendChild(playCursorElement);
    
    // Track mouse movement to update cursor position
    document.addEventListener('mousemove', (e) => {
      if (playModeActive && playCursorElement) {
        playCursorElement.style.left = e.clientX + 'px';
        playCursorElement.style.top = e.clientY + 'px';
        playCursorElement.style.display = 'block';
      }
    });
    
    return playCursorElement;
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
  
  // Create bone element at click position
  function createBone(x, y) {
    // Remove existing bone if any
    if (currentBone) {
      currentBone.remove();
    }
    
    // Constrain bone position to viewport bounds (accounting for dog's radius)
    const dogRadius = 90; // dogOffset value - dog needs to be able to reach bone
    const boneSize = 60; // Bone element size
    const padding = dogRadius + 10; // Padding from edges (dog radius + small buffer)
    const constrainedX = Math.max(padding, Math.min(window.innerWidth - padding, x));
    const constrainedY = Math.max(padding, Math.min(window.innerHeight - padding, y));
    
    const bone = document.createElement('div');
    bone.className = 'bone-element';
    bone.style.left = constrainedX + 'px';
    bone.style.top = constrainedY + 'px';
    document.body.appendChild(bone);
    
    currentBone = bone;
    boneTargetX = constrainedX;
    boneTargetY = constrainedY;
    
    // Make dog chase the bone (with constrained position)
    if (window.setDogTarget) {
      window.setDogTarget(constrainedX, constrainedY);
    }
  }
  
  // Handle play mode click
  function handlePlayClick(e) {
    if (!playModeActive) return;
    
    // Create bone at click position
    createBone(e.clientX, e.clientY);
  }
  
  // Activate play mode
  function activatePlayMode() {
    if (playModeActive) return; // Already active
    
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
    
    // Add click listener for bone placement
    document.addEventListener('click', handlePlayClick, true);
    
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
    
    // Remove bone (but don't reset target if dog is still moving)
    if (currentBone) {
      currentBone.remove();
      currentBone = null;
      // Keep boneTargetX/Y so dog can still reach it if close
    }
    
    // Reset timer
    const timerFillEl = document.getElementById('play-timer-fill');
    if (timerFillEl) {
      timerFillEl.style.width = '0%';
    }
    
    document.removeEventListener('click', handlePlayClick, true);
    
    if (playModeTimeout) {
      clearTimeout(playModeTimeout);
      playModeTimeout = null;
    }
  }
  
  // Export bone target getter (returns constrained position)
  window.getBoneTarget = () => {
    if (boneTargetX !== null && boneTargetY !== null) {
      // Return constrained position to ensure it's always within viewport
      const dogRadius = 90; // dogOffset value
      const constrainedX = Math.max(dogRadius, Math.min(window.innerWidth - dogRadius, boneTargetX));
      const constrainedY = Math.max(dogRadius, Math.min(window.innerHeight - dogRadius, boneTargetY));
      return { x: constrainedX, y: constrainedY };
    }
    return null;
  };
  
  // Export function to update bone target coordinates (for constraint updates)
  window.updateBoneTarget = (x, y) => {
    boneTargetX = x;
    boneTargetY = y;
    if (currentBone) {
      currentBone.style.left = x + 'px';
      currentBone.style.top = y + 'px';
    }
  };
  
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
  
  // Export bone collection animation
  window.collectBone = collectBone;
  
  // Export bone removal function
  window.removeBone = () => {
    if (currentBone) {
      // If bone exists, animate collection instead of just removing
      const boneRect = currentBone.getBoundingClientRect();
      const boneX = boneRect.left + boneRect.width / 2;
      const boneY = boneRect.top + boneRect.height / 2;
      collectBone(boneX, boneY);
      currentBone = null;
    }
    boneTargetX = null;
    boneTargetY = null;
  };
  
  // Export play mode status checker
  window.isPlayModeActive = () => playModeActive;
  
  // Export for use in button handler
  window.activatePlayMode = activatePlayMode;
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
      }
    });
  });
})();
