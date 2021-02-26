let mymap = L.map('mapid').setView([59.944758, 30.339825], 10);
    L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=01F0HVQLQFmbwudW5N0f', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    maxZoom: 18
    // id: 'mapbox/streets-v11',
    // tileSize: 512,
    // zoomOffset: -1,
    // accessToken: 'your.mapbox.access.token'    
}).addTo(mymap);

    let marker = L.marker([59.944758, 30.339825]).addTo(mymap);

    marker.bindPopup('<b>HouseVOP</b><br> Жилой комплекс').openPopup();