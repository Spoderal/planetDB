const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const glowColors = {
    mercury: '#ccc',
    venus: '#f5c542',
    earth: '#4cc9f0',
    mars: '#ff4d4d',
    jupiter: '#ffb347',
    saturn: '#e0c878',
    uranus: '#80ffff',
    neptune: '#6e6eff',
    pluto: '#d0bdf4'
  };
fetch(`/api/planets/${id}`)
  .then(res => res.json())
  .then(planet => {
    const name = planet.name.toLowerCase();
    const glowColor = glowColors[name] || '#fff';
    const planetElement = document.getElementById('planet-image');
    planetElement.style.filter = `drop-shadow(0 0 10px ${glowColor})`;
    planetElement.style.transition = 'filter 0.3s ease-in-out';
    

    document.getElementById('planet-name').textContent = planet.name;
    document.getElementById('planet-type').textContent = planet.type || 'N/A';
    document.getElementById('planet-distance').textContent = planet.distance_au + ' au';
    document.getElementById('planet-radius').textContent = planet.radius_km + ' km';
    document.getElementById('planet-mass').textContent = planet.mass_earth + ' Earth masses';
    document.getElementById('planet-description').textContent = planet.description;
    document.getElementById('planet-temp').textContent = planet.surface_temp_c + ' °C';
    document.getElementById('planet-star-system').textContent = planet.star_system

    document.getElementById('planet-image').src = `/images/${planet.name.toLowerCase()}.jpg`;

    const header = document.getElementById('planet-name');
    const color = glowColors[name] || '#eee190'; 
    header.style.color = color;
    header.style.textShadow = `
      0 0 3px ${color},
      0 0 10px ${color},
      0 0 20px ${color}
    `;


    if (planet.weather === 'rain') {
      document.getElementById('planet-weather').textContent = 'Rainy';
      startRain();
    } else if (planet.weather === 'dustStorm') {
      document.getElementById('planet-weather').textContent = 'Dust Storm';
      startDustStorm();
    } else if (planet.weather === 'snow') {
      document.getElementById('planet-weather').textContent = 'Snowy';
      startSnow();
    }else if (planet.weather === 'wind') {
      document.getElementById('planet-weather').textContent = 'Windy';
      startWind();
    }else if (planet.weather === 'acidRain') {
      document.getElementById('planet-weather').textContent = 'Acid Rain';
      startAcidRain();
    }
    
  })
  .catch(err => {
    console.error('Error fetching planet details:', err);
  });
