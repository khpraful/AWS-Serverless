const AWS = require('aws-sdk');
AWS.config.update({ region: 'ap-southeast-2' });

const docClient = new AWS.DynamoDB.DocumentClient();

// docClient.put(
//     {
//         TableName:'td_notes_sdk',
//         Item:{
//             user_id:'ewqeqwd',
//             timestamp:2,
//             title:'changed title',
//             content:'changed content'
//         }
//     },(err,data) =>{
//         if(err){
//             console.log(err)
//         } else {
//             console.log(JSON.stringify(data, null, 2))
//         }

// }
// );

// docClient.update(
//     {
//         TableName:'td_notes_sdk',
//         Key:{
//             user_id:"ewqeqwd",
//             timestamp:2
//         },
//         UpdateExpression:'set #t = :t',
//         ExpressionAttributeNames:{
//             '#t': 'title'
//         },
//         ExpressionAttributeValues:{
//             ':t': 'Updated title'
//         }

//     },(err,data) =>{
//         if(err){
//             console.log(err)
//         } else {
//             console.log(JSON.stringify(data, null, 2))
//         }

// }
// );


// docClient.delete(
//     {
//         TableName:'td_notes_sdk',
//         Key:{
//             user_id:"ewqeqwd",
//             timestamp:2
//         }       
//     },(err,data) =>{
//         if(err){
//             console.log(err)
//         } else {
//             console.log(JSON.stringify(data, null, 2))
//         }

// }
// );

docClient.batchWrite(
    {
        RequestItems: {
            'td_notes_sdk': [
                {
                    DeleteRequest: {
                        Key: {
                            user_id: "ewqeqwd",
                            timestamp: 3124144343
                        }
                    }
                },
                {
                    DeleteRequest: {
                        Key: {
                            user_id: "22",
                            timestamp: 2
                        }
                    } 
                },
                {
                    PutRequest: {
                        Item: {
                            user_id: '11',
                            timestamp: 1,
                            title: "title 1",
                            content: 'content1'
                        }
                    }
                },
                {
                    PutRequest: {
                        Item: {
                            user_id: '33',
                            timestamp: 3,
                            title: "title 3",
                            content: 'content 3'
                        }
                    }  
                }

            ]
        }

    }, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log(JSON.stringify(data, null, 2))
        }

    }
);