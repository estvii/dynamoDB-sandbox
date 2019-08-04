const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });

const docClient = new AWS.DynamoDB.DocumentClient();

// docClient.put({
//     TableName: 'td_notes_sdk',
//     Item: {
//         user_id: 'bb',
//         timestamp: 2,
//         title: 'change title',
//         content: 'change content'
//     }
// }, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// });

// docClient.update({
//     TableName: 'td_notes_sdk',
//     Key: {
//         user_id: 'bb',
//         timestamp: 1
//     },
//     UpdateExpression: 'set #t = :t',
//     ExpressionAttributeNames: {
//         '#t': 'title'
//     },
//     ExpressionAttributeValues: {
//         ':t': "Updated title"
//     }
// }, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// })

// docClient.delete({
//     TableName: 'td_notes_sdk',
//     Key: {
//         user_id: 'bb',
//         timestamp: 2
//     }
// }, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// });

// does multiple things e.g. delete then put items then update
docClient.batchWrite({
    RequestItems: {
        'td_notes_sdk': [
            {
                DeleteRequest: {
                    Key: {
                        user_id: 'bb',
                        timestamp: 1
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: '11',
                        timestamp: 1,
                        title: 'title 11',
                        content: 'content-11'
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: '22',
                        timestamp: 2,
                        title: 'title 22',
                        content: 'content-22'
                    }
                }
            }
        ]
    }
}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
})