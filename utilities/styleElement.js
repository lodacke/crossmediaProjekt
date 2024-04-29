export function styleSVGElement(marker, color){

    const currentIcon = marker.getIcon().url;

    if(currentIcon === "media/Pin-chosen.svg"){
        marker.setIcon({ url: "media/pin.svg" });
    } else {
        marker.setIcon({ url: "media/Pin-chosen.svg" });
    }
    
//    if(Array.isArray(level)){
//        level.forEach( unit =>  {
//            const container = document.querySelector(`#iconSVG_${unit}`);
//            if(container){
//                container.setAttribute("id", "levelDone")
//                let markers = container.querySelectorAll(`*`)
//                markers.forEach(element => {
//                    element.style.fill = color
//                });
//            } else {
//                
//            }
//        })
//    } else {
//        const markerElement = document.querySelector("#map #marker-id");
//        console.log(markerElement)
//        //const svgAll = document.querySelector(`iconSVG_${level.name}`)
//
//    }
}