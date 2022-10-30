const stripeAPI = require('../stripe');
const firebae = require('../firebase');

async function createCustomer(userId ) {
    const userSnapshot = await firebae.db.collection('users').doc(useId).get();
    const { email } = userSnapshot.data();

    const customer = await stripeAPI.customer.create({
        email,
        metadata: {
            firebaeUID: userId,
        }
    })

    await userSnapshot.ref.update({ stripeCustomerId: customer.id});
    return customer;
}


async function getCustomer(userId) {
    const userSnapshot = await firebae.db.collection('users').doc(useId).get();
    const { stripeCustomerId } = userSnapshot.data();
    if (!stripeCustomerId) {
        return createCustomer(userId);
    } 

    customer = await stripeAPI.customer.retrieve(stripeCustomerId);
    return customer;
}

module.exports = getCustomer