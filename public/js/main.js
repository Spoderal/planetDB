fetch('/api/planets')
  .then(res => res.json())
  .then(data => {
    const tbody = document.querySelector('#planet-table tbody');
    data.forEach(planet => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><a href="/planet.html?id=${planet.id}">${planet.name}</a></td>
        <td>${planet.type}</td>
        <td>${planet.distance_au} AU</td>
        <td>${planet.radius_km}</td>
      `;
      tbody.appendChild(row);
    });
  })
  .catch(err => {
    console.error('Failed to fetch planets:', err);
  });
