let tabuada = document.querySelector('#tabuada tbody')

calculate()

function calculate(e){

    let valorA = e? e.target.value : 0

    tabuada.innerHTML = ''

    for(let valorB = 0; valorB <= 10; valorB++){
    
        let resultado = valorA * valorB
    
        let template = `
            <td>${valorA}</td>
            <td>x</td>
            <td>${valorB}</td>
            <td>=</td>
            <td>${resultado}</td>
        `
        let tr = document.createElement('tr')
    
        tr.innerHTML = template
    
        tabuada.append(tr)
    }

}