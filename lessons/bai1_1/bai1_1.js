const crypto = require('crypto');

function calculateHash(index , timestamp, transactions, previous_hash){
    const data = index + timestamp + JSON.stringify(transactions) + previous_hash;
    return crypto.createHash('sha256').update(data).digest('hex')
}

function isValidBlock(block){
    const hash = calculateHash(
        block.index,
        block.timestamp,
        block.transactions,
        block.previous_hash
    );
    return hash === block.current_hash;
}

const c_hash = calculateHash(1,'2025-06-04T12:00:00:00Z',[{from: 'Alice', to:'Bob', amount: 10}],'abc' );
console.log(c_hash);

const block = {
    index: 1,
    timestamp: '2025-06-04T12:00:00:00Z',
    transactions: [{from: 'Alice', to:'Bob', amount: 10}],
    previous_hash: 'abc',
    current_hash: '77356120a6a3463d0e25e9fa0f6dee92d50673bbe1125e98f0bc5acbc1ba41'
    // current_hash: '2477356120a6a3463d0e25e9fa0f6dee92d50673bbe1125e98f0bc5acbc1ba41'
    
};


console.log(isValidBlock(block))