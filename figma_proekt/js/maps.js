const cardMaps = L.tileLayer(
    "https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=01F0HVQLQFmbwudW5N0f",
    {
      attribution:
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
      maxZoom: 18,
    }
);
const sputnikMaps = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      attribution: "&copy; ArcGIS",
      maxZoom: 18,
    }
);
let mymap = L.map("mapid", {
    center: [59.944758, 30.339825],
    zoom: 10,
    layers: [sputnikMaps, cardMaps],
});
  
const baseMaps = {
    Спутник: sputnikMaps,
    Карта: cardMaps,
};
  
L.control.layers(baseMaps).addTo(mymap);
  
L.control
    .scale({
      imperial: false,
    })
    .addTo(mymap);
  
let marker = L.marker([59.944758, 30.339825]).addTo(mymap);
  
marker.bindPopup("<b>HouseVOP</b><br> Жилой комплекс").openPopup();
  