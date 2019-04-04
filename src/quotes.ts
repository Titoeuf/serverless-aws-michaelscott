import 'source-map-support/register';
import axios from 'axios'
import {SLACK_HOOK} from "../config";

interface MichaelScottQuote {
    quote: String;
    author: String;
}

export const michaelscott = async (event) => {
    return await axios.get<MichaelScottQuote>('https://michael-scott-quotes.herokuapp.com/quote').then((response) => {
        const quote = response.data;

        console.log(event);

        if(event.hasOwnProperty('httpMethod') && event.httpMethod == 'GET') {
            return generateResponse(quote);
        } else {
            return axios.post(SLACK_HOOK, {
                // text: `${quote.quote} - ${quote.author}`,
                attachments: [
                    {
                        author_name: quote.author,
                        title: quote.quote
                    }
                ]
            }).then(() => {
                return generateResponse(quote);
            });
        }
    });
};

function generateResponse(quote) {
    // Format for api gateway
    return {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
        statusCode: 200,
        body: JSON.stringify(
            quote
        ),
    };
}
