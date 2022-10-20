exports.handler = async (event) => {
    // TODO implement
    console.log('Hi Prachi event'+ JSON.stringify(event))
    const msg = "Prachi says " + event.queryStringParameters.keyword;
    const response = {
        statusCode: 200,
        body: msg
    };
    return response;
};