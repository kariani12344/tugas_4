//===================== Layer Group ==============masji
const sekolahGroup = L.layerGroup();
const masjidGroup = L.layerGroup();
const tokoGroup = L.layerGroup();
const puskesmasGroup = L.layerGroup();
const sekolahCluster = new L.markerClusterGroup();
const masjidCluster = new L.markerClusterGroup();
const tokoCluster = new L.markerClusterGroup();
const puskesmasCluster = L.markerClusterGroup();

//===================================================

//====================== icon ====================
const iconSekolah = L.icon({
    iconUrl: 'asset/leaflet/images/school.png',
    iconSize: [30, 30], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconmasjid = L.icon({
    iconUrl: 'asset/leaflet/images/mosquee.png',
    iconSize: [30, 30], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconToko = L.icon({
    iconUrl: 'asset/leaflet/images/grocery.png',
    iconSize: [30, 30], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconpuskesmas = L.icon({
    iconUrl: 'asset/leaflet/images/hospital-building.png',
    iconSize: [30, 30], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});



// ===================== Marker ===========================
var masjid = [
    L.marker([-8.688336090135437, 116.29582439242569], { icon: iconmasjid }).addTo(masjidCluster).bindPopup(` <img src="asset/leaflet/images/masjid1.jpg">`),
    L.marker([-8.684829071482996, 116.30592774073276], { icon: iconmasjid }).addTo(masjidCluster).bindPopup(` <img src="asset/leaflet/images/masjid gerepek.jpg">`),
    // Tambahkan Kornat jika lebih dari 1
];

var sekolah = [
    L.marker([-8.690516355873509, 116.29620177724902], { icon: iconSekolah }).addTo(sekolahCluster).bindPopup(` <img src="asset/leaflet/images/sekolaah1.jpg">`),
    L.marker([-8.691046411729758, 116.30281105191382], { icon: iconSekolah }).addTo(sekolahCluster).bindPopup(` <img src="asset/leaflet/images/sd paok tawah.jpg">`),
    L.marker([-8.68081778001028, 116.30808869775186], { icon: iconSekolah }).addTo(sekolahCluster).bindPopup(` <img src="asset/leaflet/images/SDN 2 SEKUNYIT.jpg">`),
];
var toko = [
    L.marker([-8.685796902977513, 116.30266089886264], { icon: iconToko }).addTo(tokoCluster).bindPopup(` <img src="asset/leaflet/images/aulia cell.jpg">`),
    // Tambahkan Kornat jika lebih dari 1
];
var puskesmas = [
    L.marker([-8.70157027060339, 116.29501481281245], { icon: iconpuskesmas }).addTo(sekolahCluster).bindPopup(` <img src="asset/leaflet/images/RSUD PRAYA.jpg">`),
   
];
var streets  = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    id: 'mapbox.streets',   
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
var satelit = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    id: 'mapbox.streets',
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

const map = L.map('map', {
    center: [-8.690562406554202, 116.29537931642597],
    zoom: 13,
    layers: [satelit, sekolahCluster, masjidCluster, tokoCluster, puskesmasCluster]
});
//========================================================================

//==================== Cluster ===========================================
map.addLayer(sekolahCluster);
map.addLayer(masjidCluster);
map.addLayer(tokoCluster);
map.addLayer(puskesmasCluster);
//======================================================================


const baseLayers = {
    'streets': streets,
    'satelit': satelit,
};

const overlays = {
    'Sekolah': sekolahCluster,
    'Masjid': masjidCluster,
    'Toko': tokoCluster,
    'puskesmas': puskesmasCluster,
};

const layerControl = L.control.layers(baseLayers, overlays).addTo(map);



//  Menampilkan geojSON
L.geoJSON(bunut_baok).addTo(map);