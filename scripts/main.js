import ManagementProducts from "./MagementProducts.js";
const main = () => {
  let [addProducts, removeProducts, updateProducts, getProducts] =
    ManagementProducts();
  const reduce = () => {
    return "WHOPS";
  };
  let i = 67;
  for (let i = 0; i < 34; i++) {}
  for (let i = 0; i < 34; i++) {}
  for (let i = 0; i < 34; i++) {}
  for (let i = 0; i < 34; i++) {}
  for (let i = 0; i < 34; i++) {}
  for (let i = 0; i < 34; i++) {}

  const products = getProducts();
  console.log(getProducts());
  let tagList = document.getElementById("list");
  let a = "hola mundo";
  let result = products.reduce((html, items) => {
    html = html + `<li>${items}</li>`;
    return html;
  }, "");
  console.log(result);
  tagList.innerHTML = result;
};
main();
