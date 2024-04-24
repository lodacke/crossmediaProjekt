export function styleSVGElement(level, color){
    if(Array.isArray(level)){
        level.forEach( unit =>  {
            console.log(unit)
            const container = document.querySelector(`#iconSVG_${unit}`);
            console.log(container)
            container.setAttribute("id", "levelDone")
            let markers = container.querySelectorAll(`*`)
            markers.forEach(element => {
                element.style.fill = color
            });
        })
    } else {
        const svgAll = document.querySelectorAll(`#iconSVG_${level.name} > *`)
        svgAll.forEach( element => {
            element.style.fill = color
        })

    }

}