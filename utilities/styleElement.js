export function styleSVGElement(level, color){
    
    if(Array.isArray(level)){
        level.forEach( unit =>  {
            const container = document.querySelector(`#iconSVG_${unit}`);
            if(container){
                container.setAttribute("id", "levelDone")
                let markers = container.querySelectorAll(`*`)
                markers.forEach(element => {
                    element.style.fill = color
                });
            } else {
                
            }
        })
    } else { 

    }
}