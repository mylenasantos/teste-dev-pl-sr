const products = require('./products.mock')

const handler = () => {
    console.info('Products duplicates: ')
    console.table(products)

    console.info('Products without duplicates: ')
    console.table(removeDuplicates(products))
}

const removeDuplicates = (products) => {
    
    return products
}

module.exports = { handler }