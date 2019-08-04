const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });

const docClient = new AWS.DynamoDB.DocumentClient();

docClient.put({
    TableName: 'td_notes_sdk',
    Item: {
        user_id: 'ABC',
        timestamp: 1,
        title: 'New title',
        content: 'New content'
    },
    ConditionExpression: '#t <> :t', // writes only if a timestamp of 1 exist
    ExpressionAttributeNames: {
        '#t': 'timestamp'
    },
    ExpressionAttributeValues: {
        ':t': 1
    }
}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});