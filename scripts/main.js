const main = () => {
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
};
main();
