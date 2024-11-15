const ToysDao = require('../dao/toys-dao');


class ToysService {
    async getAllToys(location) {
        const toysDao = new ToysDao();
        const toys = await toysDao.fetchToysFromDB();
        console.log('Fetched toys:', toys);
        if (!location) {
            return toys;
        }

        const taxRates = {
            'US-NC': 0.08,
            'IE': 0.23,
            'IN': 0.18
        };
        const currencies = {
            'US-NC': 'USD',
            'IE': 'EUR',
            'IN': 'INR'
        };

        const taxRate = taxRates[location];
        const currency = currencies[location];

        if (!taxRate || !currency) {
            throw new Error('Invalid location');
        }

        return toys.map(toy => {
            const priceWithTax = toy.price * (1 + taxRate);
            return { ...toy, price: priceWithTax.toFixed(2), currency };
        });
}

getTeam() {
    return {
        team: "toymasters",
        membersNames: ["Cían", "Irene"]
    };
}
}
module.exports = ToysService;