import dns from 'dns';

const lookup = (domain, family, resolver, all=true) => new Promise((resolve, reject) => {
  const options = {
    family: family || 0, // 0 means both IPv4 and IPv6
    all: all,
    resolver: [resolver],
  };

  dns.lookup(domain, options, (err, addresses) => {
    if (err) {
      reject(err);
    } else {
      resolve(addresses);
    }
  });
});


export { lookup }