export const convertNumber = (number, targetCurrency) => {

    const numberToConvert = Math.round(number).toLocaleString("en-US");

    switch (targetCurrency) {
        case "NGN": 
            return `\u20A6 ${numberToConvert}`
        case "EUR": 
            console.log(numberToConvert)
            return `\u20AC ${numberToConvert}`
        case "GBP":
            console.log(numberToConvert)
            return `\uFFE1 ${numberToConvert}`
        case "JPY":
            console.log(numberToConvert)
            return `\u00A5 ${numberToConvert}`
        case "USD":
            console.log(numberToConvert)
            return `\u0024 ${numberToConvert}`
        default: 
            console.log(numberToConvert)
            return `${numberToConvert}`
    }
}