let sumArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]


for (i = 0; i < 1000; i++) {
    let numberCounter1 = Math.floor(Math.random() * 6 + 1)
    let numberCounter2 = Math.floor(Math.random() * 6 + 1)

    let sum = numberCounter1 + numberCounter2
    sumArray[sum - 2] = sumArray[sum - 2] + 1

}

console.log(sumArray)

let container = document.getElementById("container")
console.log(container)

for (i = 0; i < sumArray.length; i++) {
    console.log(sumArray[i])
    const bar = document.createElement('div')
    const label = document.createTextNode("Rolled a: " + (i + 2))
    const label2 = document.createTextNode(" this many times " + sumArray[i])
    bar.classList.add('barGraph')
    bar.style.width = (sumArray[i]) * 2 * 'px'
    bar.appendChild(label)
    bar.appendChild(label2)
    container.appendChild(bar)
}


