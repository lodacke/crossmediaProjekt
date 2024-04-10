
export const main = document.querySelector("main");

export const dialog = document.querySelector("dialog")

export const CustomControl = L.Control.extend({
    onAdd: function(map) {
    const container = L.DomUtil.create('div', 'leaflet-control custom-control');

    return container;
    }
})