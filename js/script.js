let oxMeat = 0
let meat = 0

function calculateMeat(p = people[0],t = 400){
    const total = p * t
    const totalBeef = (total * 60) / 100
    const amountOfBeef = totalBeef / oxMeat
    const totalMeat = total - totalBeef
    const amountOfMeat = totalMeat / meat

    return [amountOfBeef, amountOfMeat, total]
}


function result(){
    //pessoas
    let result = document.getElementById('tbody')
    let resultTotal = document.getElementById('resultTotal')
    result.innerHTML = ''
    resultTotal.innerHTML = ''
    let inputMen = document.getElementById('inputMen')
    let inputWoman = document.getElementById('inputWoman')
    let inputChild = document.getElementById('inputChild')
    const people = [inputMen.value, inputWoman.value, inputChild.value]

    //carnes
    let checkBeef = document.getElementsByClassName('checkBeef')
    let checkMeat = document.getElementsByClassName('checkMeat')
    let namesBeef = []
    let namesMeat = []
    let cont = 0

    for (const c of checkBeef) {
        if(c.checked){
            oxMeat++
            namesBeef.push(checkBeef[cont].id)

        }
        cont++
    }
    cont = 0
    for (const c of checkMeat) {
        if(c.checked){
            meat++
            console.log(c)
            namesMeat.push(checkMeat[cont].id)
        }
        cont++
    }
    console.log(namesBeef, namesMeat)

    //cálculo
    const amountOfMeatMen = calculateMeat(people[0],400)
    const amountOfBeefWoman = calculateMeat(people[1],300)
    const amountOfMeatChild = calculateMeat(people[2],200)

    const totalBeef = amountOfMeatMen[0] + amountOfBeefWoman[0] + amountOfMeatChild[0]
    const totalMeat = amountOfMeatMen[1] + amountOfBeefWoman[1] + amountOfMeatChild[1]
    //result 
    for(let i=0; i < oxMeat; i++){
    result.innerHTML += `
        <tr>
            <td>${namesBeef[i]}</td>
            <td>${totalBeef}</td>
        </tr>
    `
    }
    for(let i=0; i < meat; i++){
        result.innerHTML += `
            <tr>
                <td>${namesMeat[i]}</td>
                <td>${totalMeat}</td>
            </tr>
        `
        }
    resultTotal.innerHTML += `
    <td>Total</td>
    <td>${amountOfMeatMen[2] + amountOfBeefWoman[2] + amountOfMeatChild[2]}</td>`
}