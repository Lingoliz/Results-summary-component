let ul = document.querySelector('ul');
let req = new XMLHttpRequest()
req.open('GET','data.json')
req.send()
req.onload = ()=> {
    if (req.status === 200 && req.readyState === 4){
        JSON.parse(req.responseText).forEach((e)=> {
            let li = document.createElement('li')
            li.innerHTML =`
                <div>
                    <img src='${e.icon}'>
                    <p>${e.category}</p>
                </div>
                <p class='score'><span>${e.score}</span> /100 </p> 
            `
            ul.append(li)
        })
    }
}
