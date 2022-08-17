function daysToXmas(date) {
  let fechaNavidad = new Date("Dec 25, 2022").getTime();
  let fechaIngresada = new Date(date).getTime();
  let diferenciaDias = fechaNavidad - fechaIngresada;
  
    
    return Math.ceil(diferenciaDias / (1000 * 60 * 60 * 24) )
}

const date1 = new Date('Dec 1, 2022')
console.log(daysToXmas(date1)) // 24
const date2 = new Date('Dec 24, 2022 00:00:01')
console.log(daysToXmas(date2) )// 1
const date3 = new Date('Dec 24, 2022 23:59:59')
console.log(daysToXmas(date3)) // 1
const date4 = new Date("December 20, 2022 03:24:00")
console.log(daysToXmas(date4) )// 5

const date5 = new Date('Dec 25, 2022')
console.log(daysToXmas(date5)) // 0
const date6 = new Date('Dec 26, 2022')
console.log(daysToXmas(date6)) // -1
const date7 = new Date('Dec 31, 2022')
console.log(daysToXmas(date7)) // -6
const date8 = new Date('Jan 1, 2023 00:00:01')
console.log(daysToXmas(date8)) // -7
const date9 = new Date('Jan 1, 2023 23:59:59')
console.log(daysToXmas(date9)) // -7
