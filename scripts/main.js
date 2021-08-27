import ManagementProducts from "./MagementProducts.js";
const main = () => {
  const [addProducts, removeProducts, updateProducts, getProducts] =
    ManagementProducts();

  console.log(getProducts());
  let tagList = document.getElementById("list");
  let inputDom = document.getElementById("inputtxt");
  let form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addProducts(inputDom.value);
    render();
    inputDom.value = "";
  });
  const render = () => {
    const products = getProducts();
    let result = products.reduce((html, items) => {
      html = html + `<li>${items}</li>`;
      return html;
    }, "");
    tagList.innerHTML = result;
  };
  render();
};
main();
