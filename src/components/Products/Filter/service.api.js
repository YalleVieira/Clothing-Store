export function filterJeans(listProducts) {
  const typeJeans = listProducts.map((product) => {
    const types = product.type;
    const jeans = types.filter(function (value) {
      return value === "jeans";
    });
    if (jeans.length > 0) return product;
    return;
  });
  console.log(typeJeans);
  return typeJeans;
}
