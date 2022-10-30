const stripeAPI = require('../stripe');
const getCustomer = require('../helpers/getCustomer');

async function setupIntern(req, res ) {
    const { currentUser } = req;
    const customer = await getCustomer(currentUser.uid);
    let setupIntent;
        
    try {
        setupIntent = await stripeAPI.setupIntents.create({
            customer: customer.id
        });
        res.tstatus(200).json(setupIntent);
    

    } catch (error) {
        console.log(error);
        res.status(400).json({ error : 'an error occered, unable to create setup intent'})
    }
}

module.exports = setupIntent;