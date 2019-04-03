import 'source-map-support/register';
import axios from 'axios'

interface MichaelScottQuote {
    quote: String;
    authore: String;
}
export const michaelscott = async (_event, _context) => {
    return await axios.get<MichaelScottQuote>(`https://michael-scott-quotes.herokuapp.com/quote`).then((response) => {
        const quote = response.data;
        return quote;
    });
};
