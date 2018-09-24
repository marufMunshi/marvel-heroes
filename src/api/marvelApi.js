import axios from 'axios';
import CryptoJS from 'crypto-js';

export default async function marvelApiCall(url, offset = 0, limit = 20) {                                                                         
    const ts = new Date().getTime();
    const hash = CryptoJS.MD5(ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY).toString();

    try {
        const results = await axios.get(url, {
            params: {
                ts,
                hash,
                limit,
                offset,
                apikey: process.env.PUBLIC_KEY
            }}
        )
        
        return results.data.data;
        // console.log(results.data.data);
    } catch(err) {
        console.log(err);
    }
}