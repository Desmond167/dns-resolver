import dns from 'dns';

const resolve4 = (domain) => new Promise((resolve, reject) => {

    dns.resolve4(domain, (err, addresses) => {
      if (err) {
        reject(err);
      } else {
        resolve(addresses);
      }
    });
});


const resolve6 = (domain) => new Promise((resolve, reject) => {

    dns.resolve6(domain, (err, addresses) => {
      if (err) {
        reject(err);
      } else {
        resolve(addresses);
      }
    });
});


export { 
    resolve4,
    resolve6 
}