const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });

const docClient = new AWS.DynamoDB.DocumentClient();

// docClient.get({
//     TableName: "td_notes_test",
//     Key: {
//         user_id: 'A',
//         timestamp: 1
//     }
// }, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// })

// Queries all user_id of A
// docClient.query({
//     TableName: "td_notes_test",
//     KeyConditionExpression: "user_id = :uid",
//     ExpressionAttributeValues: {
//         ":uid": "A"
//     }
// }, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// })

// docClient.scan({
//     TableName: "td_notes_test",
//     FilterExpression: "cat = :cat",
//     ExpressionAttributeValues: {
//         ":cat": "general"
//     }
// }, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// });

docClient.batchGet({
    RequestItems: {
        'td_notes_test': {
            Keys: [
                {
                    user_id: 'A',
                    timestamp: 1
                },
                {
                    user_id: 'B',
                    timestamp: 2
                }
            ]
        },
        'td_notes_sdk': {
            Keys: [
                {
                    user_id: '11',
                    timestamp: 1
                },
            ]
        }
    }

}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});