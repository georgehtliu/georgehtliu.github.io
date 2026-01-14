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

// Theme Toggle
(function() {
  const themeToggle = document.querySelector('.theme-toggle');
  const html = document.documentElement;
  
  // Get saved theme or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  
  // Update icon based on theme
  function updateIcon(theme) {
    const icon = themeToggle.querySelector('.theme-icon');
    if (theme === 'light') {
      // Moon icon for switching to dark
      icon.innerHTML = `
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      `;
    } else {
      // Sun icon for switching to light
      icon.innerHTML = `
        <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" stroke-width="2"/>
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      `;
    }
  }
  
  updateIcon(savedTheme);
  
  themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
  });
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

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#' || href === '') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

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
  let dogX = 0;
  let dogY = 0;
  let targetX = 0;
  let targetY = 0;
  let originalX = 0;
  let originalY = 0;
  let targetOriginalX = 0;
  let targetOriginalY = 0;
  let velocityX = 0;
  let velocityY = 0;
  let prevDogX = 0;
  let prevDogY = 0;
  
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
    
    // Dog position: middle of space between screen left and container left edge
    targetOriginalX = (screenLeft + containerLeft) / 2;
    targetOriginalY = window.innerHeight / 2; // Vertically centered
    
    // Update original position smoothly
    originalX += (targetOriginalX - originalX) * 0.1;
    originalY += (targetOriginalY - originalY) * 0.1;
  }
  
  // Initialize dog position (middle of space between screen left and container left edge)
  function initializeDog() {
    calculateOriginalPosition();
    
    dogX = originalX;
    dogY = originalY;
    targetX = originalX;
    targetY = originalY;
    
    dog.style.left = (dogX - dogOffset) + 'px';
    dog.style.top = (dogY - dogOffset) + 'px';
    dog.style.position = 'relative';
    
    // Update container position to match dog
    dogContainer.style.left = (dogX - dogOffset) + 'px';
    dogContainer.style.top = (dogY - dogOffset) + 'px';
  }
  
  initializeDog();
  
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
  function toggleLeash() {
    isLeashed = !isLeashed;
    
    if (isLeashed) {
      // Return to original position
      targetX = originalX;
      targetY = originalY;
    } else {
      // Start roaming
      generateRandomTarget();
    }
  }
  
  // Update leash line
  function updateLeash() {
    if (!isLeashed) {
      leashSvg.style.opacity = '0';
      return;
    }
    
    leashSvg.style.opacity = '1';
    const leashPoint = getLeashAttachmentPoint();
    const dogRect = dog.getBoundingClientRect();
    const dogCenterX = dogRect.left + dogRect.width / 2;
    const dogCenterY = dogRect.top + dogRect.height / 2;
    
    // Update leash SVG position and size
    leashSvg.style.position = 'fixed';
    leashSvg.style.top = '0';
    leashSvg.style.left = '0';
    leashSvg.style.width = '100%';
    leashSvg.style.height = '100%';
    leashSvg.style.pointerEvents = 'none';
    leashSvg.style.zIndex = '998'; // Below dog
    
    // Set leash line coordinates (straight line)
    leashLine.setAttribute('x1', dogCenterX);
    leashLine.setAttribute('y1', dogCenterY);
    leashLine.setAttribute('x2', leashPoint.x);
    leashLine.setAttribute('y2', leashPoint.y);
  }
  
  // Make dog face the ball/cursor
  function updateDogOrientation() {
    const dogRect = dog.getBoundingClientRect();
    const dogCenterX = dogRect.left + dogRect.width / 2;
    
    // Make dog face the ball/cursor
    if (mouseX < dogCenterX) {
      // Cursor is to the left - flip horizontally to face left
      dog.style.transform = 'scaleX(-1)';
    } else {
      // Cursor is to the right - normal orientation (facing right)
      dog.style.transform = 'scaleX(1)';
    }
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
      // Smoothly return to original position (which updates with scroll)
      targetX = originalX;
      targetY = originalY;
      dogX += (targetX - dogX) * 0.1;
      dogY += (targetY - dogY) * 0.1;
      // Reset velocity when leashed
      velocityX = 0;
      velocityY = 0;
    } else {
      // Roam randomly
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
        const speed = 1.5;
        const moveX = (dx / distance) * speed;
        const moveY = (dy / distance) * speed;
        dogX += moveX;
        dogY += moveY;
        
        // Update velocity based on movement
        velocityX = dogX - prevDogX;
        velocityY = dogY - prevDogY;
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
    
    dog.style.left = (dogX - dogOffset) + 'px';
    dog.style.top = (dogY - dogOffset) + 'px';
    
    // Update container position to match dog
    dogContainer.style.left = (dogX - dogOffset) + 'px';
    dogContainer.style.top = (dogY - dogOffset) + 'px';
  }
  
  // Animate leash and dog orientation
  function animate() {
    updateDogPosition();
    updateLeash();
    updateDogOrientation();
    requestAnimationFrame(animate);
  }
  
  // Update on scroll/resize (smooth updates handled in animation loop)
  window.addEventListener('scroll', () => {
    // Scroll updates handled in animation loop
  });
  window.addEventListener('resize', () => {
    calculateOriginalPosition();
  });
  
  animate();
  
  // Export toggle function for dropdown
  window.toggleDogLeash = toggleLeash;
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
    
    // Get dog position
    const dog = document.querySelector('.dog-img');
    if (!dog) {
      particle.remove();
      return;
    }
    
    const dogRect = dog.getBoundingClientRect();
    const dogX = dogRect.left + dogRect.width / 2;
    const dogY = dogRect.top + dogRect.height / 2;
    
    // Calculate distance and direction
    const dx = dogX - x;
    const dy = dogY - y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Animation parameters
    const duration = 1500 + Math.random() * 500; // 1.5-2 seconds
    const startTime = performance.now();
    
    // Space gravity effect - particles curve toward dog
    function animate() {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      // Calculate position with gravity curve
      // Add some randomness for natural movement
      const gravityCurve = Math.sin(progress * Math.PI) * 0.3;
      const currentX = x + dx * easeOut + (Math.random() - 0.5) * 20 * (1 - progress);
      const currentY = y + dy * easeOut + gravityCurve * distance * 0.2;
      
      // Scale down as it approaches dog
      const scale = 1 - progress * 0.5;
      const opacity = 1 - progress;
      
      particle.style.left = currentX + 'px';
      particle.style.top = currentY + 'px';
      particle.style.transform = `scale(${scale})`;
      particle.style.opacity = opacity;
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        particle.remove();
      }
    }
    
    requestAnimationFrame(animate);
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

// Dog action buttons
(function() {
  const dogActionBtns = document.querySelectorAll('.dog-action-btn');
  
  if (!dogActionBtns.length) return;
  
  // Handle button actions
  dogActionBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
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
          // Play action - could make dog more active
          console.log('Play with the dog');
          // TODO: Add play animation/effect
          break;
      }
    });
  });
})();
