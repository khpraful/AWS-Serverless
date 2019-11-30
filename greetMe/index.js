const moment = require ('moment');
const greetings = {
"en": "Hello",
"es": "Hola",
"fr": "Bonjour",
"hi": "Namaste"
}

exports.handler = async (event) => {
   let name = event.pathParameters.name;
   let {lang, ...info} = event.queryStringParameters;
   let message = `${greetings[lang] ? greetings[lang] : greetings['en']} ${name}`;
   let response ={
       message: message,
       info:info,
       timestamp:moment().unix()
   }
   return {
       statusCode: 200,
       body: JSON.stringify(response)
   }

}
