async function dummy() {
  try {
    const get = await fetch("https://dummyjson.com/products");
    const data = await get.json();

    const filteredProducts = data.products.map(product => {
      return {
        id: product.id,
        title: product.title,
        description: product.description
      };
    });

    displayOnFrontend(filteredProducts);
  } catch (err) {
    console.log("Error fetching products:", err);
  }
}

function displayOnFrontend(products) {
  const container = document.getElementById("info-display");

  products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.style.border = "1px solid gray";
    productDiv.style.margin = "10px";
    productDiv.style.padding = "10px";

    productDiv.innerHTML = `
      <h3>${product.title} (ID: ${product.id})</h3>
      <p>${product.description}</p>
    `;

    container.appendChild(productDiv);
  });
}

dummy();
