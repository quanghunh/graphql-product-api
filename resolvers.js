const products = [];
const categories = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Clothing" },
];

const resolvers = {
  Query: {
    products: () => products,
    product: (_, { id }) => products.find(p => p.id === id),
  },
  Mutation: {
    createProduct: (_, { input }) => {
      const newProduct = {
        id: products.length + 1,
        ...input,
      };
      products.push(newProduct);
      return newProduct;
    },
    deleteProduct: (_, { id }) => {
      const index = products.findIndex(p => p.id === id);
      if (index === -1) return false;
      products.splice(index, 1);
      return true;
    },
    updateProduct: (_, { id, input }) => {
      const product = products.find(p => p.id === id);
      if (!product) throw new Error("Product not found");
      Object.assign(product, input);
      return product;
    },
  },
  Product: {
    category: (product) => categories.find(c => c.id === product.categoryId),
  },
  Category: {
    products: (category) =>
      products.filter(p => p.categoryId === category.id),
  },
};

module.exports = resolvers;
