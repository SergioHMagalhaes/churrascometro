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
    let sectionResult = document.getElementById('result')
    let resultTotal = document.getElementById('resultTotal')
    let guests = document.getElementById('guests')
    let information = document.getElementById('information')
    result.innerHTML = ''
    resultTotal.innerHTML = ''
    let inputMen = document.getElementById('inputMen')
    let inputWoman = document.getElementById('inputWoman')
    let inputChild = document.getElementById('inputChild')
    const people = [inputMen.value, inputWoman.value, inputChild.value]
    const totalPeople = Number(people[0]) + Number(people[1]) + Number(people[2])

    
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

    if (totalPeople <= 0 || oxMeat + meat == 0){
        alert('Informe a quantidade de pessoas e as carnes para o churras!!!')
    }
    else{
    //cálculo
    const amountOfMeatMen = calculateMeat(people[0],400)
    const amountOfBeefWoman = calculateMeat(people[1],300)
    const amountOfMeatChild = calculateMeat(people[2],200)

    const totalBeef = amountOfMeatMen[0] + amountOfBeefWoman[0] + amountOfMeatChild[0]
    const totalMeat = amountOfMeatMen[1] + amountOfBeefWoman[1] + amountOfMeatChild[1]


    //result 
    guests.innerHTML = `<h2>${totalPeople} convidados</h2>`

    for(let i=0; i < oxMeat; i++){
    result.innerHTML += `
        <tr>
            <td>${namesBeef[i]}</td>
            <td class="tdResult">${totalBeef}</td>
        </tr>
    `
    }
    for(let i=0; i < meat; i++){
        result.innerHTML += `
            <tr>
                <td>${namesMeat[i]}</td>
                <td class="tdResult">${totalMeat}</td>
            </tr>
        `
        }
    
    resultTotal.innerHTML += `
    <td>Total</td>
    <td class="tdResult">${amountOfMeatMen[2] + amountOfBeefWoman[2] + amountOfMeatChild[2]}</td>`
    
    sectionResult.style.display = 'block'
    information.style.display = 'none'
    }
    
}

function reload(){
    document.location.reload(true)
}


const changeColor = () => {
    let button1 = document.getElementsByClassName('button1')

    button1[0].style.backgroundImage = 'linear-gradient(45deg,#FF8618, #C93FAE)'
    button1[1].style.backgroundImage = 'linear-gradient(45deg,#FF8618, #C93FAE)'
    button1[0].style.color = '#FFF'
    button1[1].style.color = '#FFF'

    button1[0].addEventListener('mouseout', end)
    button1[1].addEventListener('mouseout', end)
    function end (){
        button1[0].style.background = '#FFF'
        button1[1].style.background = '#FFF'
        button1[0].style.color = '#313232'
        button1[1].style.color = '#313232'
    }
}