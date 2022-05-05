 function resolveIntents(intents) {

    if (!intents) {
        return;
    }

    let bits = 0;
    for (const intent of intents) {
        const bitmask = typeof intent === 'string' ? internals.intents[intent] : intent;
        bits |= bitmask;
    }

    return bits;
};
module.exports = resolveIntents