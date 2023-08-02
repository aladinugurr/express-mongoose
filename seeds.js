const mongoose = require("mongoose");
const Product = require("./models/product"); // Adjust the path based on the location of your "product.js" file

mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand")
  .then(() => {
    const p = new Product({
      name: "Ruby Grapefruit",
      price: 1.99,
      category: "Fruit",
    });

    // Save the product
    return p.save();
  })
  .then(() => {
    console.log("Product saved successfully.");
  })
  .catch((err) => {
    console.log("There is an error", err);
  });

const seedProducts = [
  {
    name: "Fairy EggPlant",
    price: 1.0,
    category: "vegetable",
  },
  {
    name: "Organic Goddes Melon",
    price: 4.99,
    category: "fruit",
  },
  {
    name: "Organic Mini Seedless Watermelon",
    price: 3.99,
    category: "fruit",
  },
  {
    name: "Organic Celery",
    price: 1.5,
    category: "vegetable",
  },
  {
    name: "Chocolate Whole Milk",
    price: 2.69,
    category: "dairy",
  },
];
Product.insertMany(seedProducts)
  .then((res) => {
    console.log(res);
    res.save();
  })
  .catch((err) => {
    console.log(err);
  });
