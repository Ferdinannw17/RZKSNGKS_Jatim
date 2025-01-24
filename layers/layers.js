var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_PRL_RZ_KSN_GKS_291121_1 = new ol.format.GeoJSON();
var features_PRL_RZ_KSN_GKS_291121_1 = format_PRL_RZ_KSN_GKS_291121_1.readFeatures(json_PRL_RZ_KSN_GKS_291121_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRL_RZ_KSN_GKS_291121_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRL_RZ_KSN_GKS_291121_1.addFeatures(features_PRL_RZ_KSN_GKS_291121_1);
var lyr_PRL_RZ_KSN_GKS_291121_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRL_RZ_KSN_GKS_291121_1, 
                style: style_PRL_RZ_KSN_GKS_291121_1,
                popuplayertitle: 'PRL_RZ_KSN_GKS_291121',
                interactive: true,
    title: 'PRL_RZ_KSN_GKS_291121<br />\
    <img src="styles/legend/PRL_RZ_KSN_GKS_291121_1_0.png" /> Bandar Udara<br />\
    <img src="styles/legend/PRL_RZ_KSN_GKS_291121_1_1.png" /> Energi<br />\
    <img src="styles/legend/PRL_RZ_KSN_GKS_291121_1_2.png" /> Industri<br />\
    <img src="styles/legend/PRL_RZ_KSN_GKS_291121_1_3.png" /> Industri R<br />\
    <img src="styles/legend/PRL_RZ_KSN_GKS_291121_1_4.png" /> Pelabuhan<br />\
    <img src="styles/legend/PRL_RZ_KSN_GKS_291121_1_5.png" /> Pertahanan dan Keamanan<br />\
    <img src="styles/legend/PRL_RZ_KSN_GKS_291121_1_6.png" /> Pertambangan<br />\
    <img src="styles/legend/PRL_RZ_KSN_GKS_291121_1_7.png" /> Ranjau<br />\
    <img src="styles/legend/PRL_RZ_KSN_GKS_291121_1_8.png" /> Rd<br />\
    <img src="styles/legend/PRL_RZ_KSN_GKS_291121_1_9.png" /> WKOPP<br />\
    <img src="styles/legend/PRL_RZ_KSN_GKS_291121_1_10.png" /> <br />'
        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_PRL_RZ_KSN_GKS_291121_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_PRL_RZ_KSN_GKS_291121_1];
lyr_PRL_RZ_KSN_GKS_291121_1.set('fieldAliases', {'KETERANGAN': 'KETERANGAN', 'Kode': 'Kode', 'Zona': 'Zona', 'Luas_Ha': 'Luas_Ha', 'Kode_Baru': 'Kode_Baru', 'Lokasi': 'Lokasi', 'No_Urut_La': 'No_Urut_La', });
lyr_PRL_RZ_KSN_GKS_291121_1.set('fieldImages', {'KETERANGAN': 'TextEdit', 'Kode': 'TextEdit', 'Zona': 'TextEdit', 'Luas_Ha': 'TextEdit', 'Kode_Baru': 'TextEdit', 'Lokasi': 'TextEdit', 'No_Urut_La': 'Range', });
lyr_PRL_RZ_KSN_GKS_291121_1.set('fieldLabels', {'KETERANGAN': 'no label', 'Kode': 'no label', 'Zona': 'inline label - always visible', 'Luas_Ha': 'no label', 'Kode_Baru': 'no label', 'Lokasi': 'no label', 'No_Urut_La': 'no label', });
lyr_PRL_RZ_KSN_GKS_291121_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});