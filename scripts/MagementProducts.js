const ManagementProducts = () => {
  console.log("it's works");
  let productos = ["Leche", "Fideos", "Patatas"];
  const addProducts = (item) => {
    productos = [...productos, item];
  };
  const removeProducts = (name) => {
    productos = productos.filter((item) => item !== name);
  };
  const updateProducts = (name, newmane) => {
    productos = productos.map((item) => {
      if (name === item) {
        item = newname;
      }
      return item;
    });
  };
  const getProducts = () => {
    return productos;
  };
  return [addProducts, removeProducts, updateProducts, getProducts];
};
export default ManagementProducts;
