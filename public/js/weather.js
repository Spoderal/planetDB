function startRain() {
    const canvas = document.getElementById('weather-canvas');
    const ctx = canvas.getContext('2d');
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '0';
    canvas.style.pointerEvents = 'none';
  
    const raindrops = [];
  
    for (let i = 0; i < 200; i++) {
      raindrops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 20 + 10,
        speedY: Math.random() * 4 + 4,
      });
    }
  
    function drawRain() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(174,194,224,0.5)';
      ctx.lineWidth = 1;
  
      for (const drop of raindrops) {
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
        ctx.stroke();
  
        drop.y += drop.speedY;
        if (drop.y > canvas.height) {
          drop.y = -drop.length;
          drop.x = Math.random() * canvas.width;
        }
      }
  
      requestAnimationFrame(drawRain);
    }
  
    drawRain();
  }
  
  
  function startDustStorm() {
    const canvas = document.getElementById('weather-canvas');
    const ctx = canvas.getContext('2d');
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '0';
    canvas.style.pointerEvents = 'none';
  
    const particles = [];
  
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speedX: Math.random() * 1 + 0.5,
        speedY: Math.random() * 0.5 - 0.25
      });
    }
  
    function drawDust() {
      ctx.fillStyle = 'rgba(194, 178, 128, 0.5)'; // sandy color
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      for (const particle of particles) {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
  
        particle.x += particle.speedX;
        particle.y += particle.speedY;
  
        if (particle.x > canvas.width) {
          particle.x = -particle.radius;
          particle.y = Math.random() * canvas.height;
        }
      }
  
      requestAnimationFrame(drawDust);
    }
  
    drawDust();
  }
  
  
  function startSnow() {
    const canvas = document.getElementById('weather-canvas');
    const ctx = canvas.getContext('2d');
  

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1'; 
    canvas.style.pointerEvents = 'none';
  
    const snowflakes = [];
  
    for (let i = 0; i < 150; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speedY: Math.random() * 1 + 0.5,
        speedX: Math.random() * 0.5 - 0.25
      });
    }
  
    function drawSnowflakes() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      ctx.beginPath();
  
      for (const flake of snowflakes) {
        ctx.moveTo(flake.x, flake.y);
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
      }
  
      ctx.fill();
      updateSnowflakes();
      requestAnimationFrame(drawSnowflakes);
    }
  
    function updateSnowflakes() {
      for (const flake of snowflakes) {
        flake.y += flake.speedY;
        flake.x += flake.speedX;
  
        if (flake.y > canvas.height) {
          flake.y = -flake.radius;
          flake.x = Math.random() * canvas.width;
        }
      }
    }
  
    drawSnowflakes();
  }

  function startWind() {
    const canvas = document.getElementById('weather-canvas');
    const ctx = canvas.getContext('2d');
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '0';
    canvas.style.pointerEvents = 'none';
  
    const gusts = [];
  
    for (let i = 0; i < 40; i++) {
      gusts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 80 + 50,
        speedX: Math.random() * 4 + 2,
        waveOffset: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.4 + 0.1
      });
    }
  
    function drawGusts() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      for (const gust of gusts) {
        const amplitude = 10;
        const frequency = 0.05;
  
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${gust.opacity})`;
        ctx.lineWidth = 1.5;
  
        for (let i = 0; i < gust.length; i++) {
          const x = gust.x + i;
          const y = gust.y + Math.sin(i * frequency + gust.waveOffset) * amplitude;
  
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
  
        ctx.stroke();
  
        gust.x += gust.speedX;
        gust.waveOffset += 0.05;
  
        if (gust.x - gust.length > canvas.width) {
          gust.x = -gust.length;
          gust.y = Math.random() * canvas.height;
          gust.opacity = Math.random() * 0.4 + 0.1;
        }
      }
  
      requestAnimationFrame(drawGusts);
    }
  
    drawGusts();
  }
  
  function startAcidRain() {
    const canvas = document.getElementById('weather-canvas');
    const ctx = canvas.getContext('2d');
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '0';
    canvas.style.pointerEvents = 'none';
  
    const drops = [];
  
    for (let i = 0; i < 200; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 15 + 10,
        speedY: Math.random() * 5 + 3,
      });
    }
  
    function drawAcidRain() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(0, 255, 0, 0.5)';
      ctx.lineWidth = 1;
  
      for (const drop of drops) {
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
        ctx.stroke();
  
        drop.y += drop.speedY;
  
        if (drop.y > canvas.height) {
          ctx.beginPath();
          ctx.arc(drop.x, canvas.height - 2, 2, 0, Math.PI);
          ctx.stroke();
  
          drop.y = -drop.length;
          drop.x = Math.random() * canvas.width;
        }
      }
  
      requestAnimationFrame(drawAcidRain);
    }
  
    drawAcidRain();
  }
  