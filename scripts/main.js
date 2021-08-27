import ManagementProducts from "./MagementProducts.js";
const main = () => {
  let [addProducts, removeProducts, updateProducts, getProducts] =
    ManagementProducts();
  const products = getProducts();
  console.log(getProducts());
  let tagList = document.getElementById("list");
  let result = products.reduce((html, items) => {
    html = html + `<li>${items}</li>`;
    return html;
  }, "");
  console.log(result);
  tagList.innerHTML = result;
};
main();
