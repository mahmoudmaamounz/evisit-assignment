

// Initialize the array that will be sorted on ascending order so index 0 is the top 100, index 1 is top 99 and so on. 
const topHundred = new Array(100);
let ipAddressesMap = {};

/**
 * Adds the ip to the top 100 if applicable
 * @param ip_address ip address 
 * @returns void
*/
const request_handled = (ip_address): void => {

if(!ip_address){
throw new Error('BAD_IP_ADDRESS');
}


topHundred.forEach((ip, index)=>{

if(ip !== ip_address && ipAddressesMap[ip] < ipAddressesMap[ip_address]){

    // If its already in the top one hundred array then remove it
    if(topHundred.indexOf(ip_address) !== -1){
        topHundred.splice(index, 1);
    }

    // Add the ip to the top one hundred
    topHundred.splice(index, 0, ip_address);
}
});

}

/**
 * @returns top 100 array
*/
const top100 = () => topHundred;

/**
 * Clears the ip addresses map
*/
const clear = (): void => {
    ipAddressesMap = {};
}

