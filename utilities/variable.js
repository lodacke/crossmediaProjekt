
export const main = document.querySelector("main");

export const dialog = document.querySelector("dialog")

export const CustomControl = L.Control.extend({
    onAdd: function(map) {
    const container = L.DomUtil.create('div', 'leaflet-control custom-control');

    return container;
    }
})

export const globalHolder = {
    levelOne: [],
    levelTwo: [],
    levelThree: [],
};

//let sendContainer = JSON.stringify(container)
//window.localStorage.setItem("globalHolder", sendContainer);
//export const globalHold = window.localStorage.getItem("globalHolder");

//export const globalHolder = {
//
//  get: (entity) => 
//  {
//    if (localStorage.getItem(entity) === null) return undefined;
//    let data = localStorage.getItem(entity);
//    return JSON.parse(data);
//  },
//
//  set: (entity, value) =>
//  {
//    return localStorage.setItem(entity, JSON.stringify(value));
//  },
//
//  reset: () =>
//  {
//    localStorage.clear();
//  },
//
//};


