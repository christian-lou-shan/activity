const middle = (title2,paras2,images2,images3,images4)=>{
    let div = document.createElement("div")
    div.className = "classM"
    div.innerHTML = `<h1>${title2}</h1>
                     <p>${paras2}</p>
                     <img class="pic2" src="${images2}" />
                     <img class="pic3" src="${images3}" />
                     <img class="pic4" src="${images4}" />
    `
    return div
}

export{middle}