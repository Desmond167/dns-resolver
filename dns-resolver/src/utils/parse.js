function parseLookupResult(data) {
    return data.reduce((result, obj) => {
      const familyKey = `ipv${obj.family}`;
      result[familyKey] = (result[familyKey] || []).concat(obj.address);
      return result;
    }, {});
  }

export { parseLookupResult }