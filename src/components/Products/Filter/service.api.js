export function filterJeans(listProducts) {
  const typeJeans = listProducts.map((product) => {
    const types = product.type;
    const jeans = types.filter(function (value) {
      return value === "jeans";
    });
    if (jeans.length > 0) return product;
    return;
  });
  return typeJeans;
}

export function filterShort(listProducts) {
  const typesShort = listProducts.map((product) => {
    const types = product.type;
    const short = types.filter(function (value) {
      return value === "short";
    });
    if (short.length > 0) return product;
    return;
  });
  return typesShort;
}

export function filterGap(listProducts) {
  const typeGaps = listProducts.map((product) => {
    const types = product.type;
    const gap = types.filter(function (value) {
      return value === "gap";
    });
    if (gap.length > 0) return product;
    return;
  });
  return typeGaps;
}

export function filterShirt(listProducts) {
  const typeShirts = listProducts.map((product) => {
    const types = product.type;
    const shirt = types.filter(function (value) {
      return value === "t_shirt";
    });
    if (shirt.length > 0) return product;
    return;
  });
  if (typeShirts.length != 0) return typeShirts;
}
