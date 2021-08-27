const main = () => {
  console.log("it's works");
  let productos = ["Leche", "Fideos", "Patatas"];
  const addProducts = (item) => {
    productos = [...productos, item];
  };
  const removeProducts = (name) => {
    productos = productos.filter((item) => item !== name);
  };
};
main();
