class Product {
  #price;
  #discount;
  constructor(name, price, discount) {
    this.name = name;
    this.#price = price;
    this.#discount = discount;
  }
  get getPrice() {
    return this.#price;
  }
  set setPrice(newPrice) {
    if (newPrice <= 0) {
      throw new Error("price has to be positive number only");
    } else {
      this.#price = newPrice;
      return this.#price;
    }
  }
  get getDiscountedPrice() {
    let discountedPrice = (this.#price * (100 - this.#discount)) / 100;
    return discountedPrice;
  }
  static calculateTotalDiscount(product) {
    return (product.#price * product.#discount) / 100;
  }
}

// // Create a new product instance
// const product1 = new Product("Laptop", 1000, 10);
// // Get the initial price of the product
// console.log("Initial Price:", product1.getPrice); // Output: 1000
// // Update the price of the product
// product1.setPrice = 1200;
// console.log("Updated Price:", product1.getPrice); // Output: 1200
// // Get the discount percentage of the product
// console.log("Discount Percentage:", product1.discount); // Output: 10
// // Calculate and get the discounted price of the product
// console.log("Discounted Price:", product1.getDiscountedPrice()); // Output: 1080 (10% discount applied)
// // Calculate the total discount amount for the product
// console.log("Total Discount:", Product.calculateTotalDiscount(product1)); // Output: 120 (10% of 1200)

export { Product };
