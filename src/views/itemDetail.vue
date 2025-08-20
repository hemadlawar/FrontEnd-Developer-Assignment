<template>
  <div class="container">
    <!-- Left Side: Image -->
    <div class="image-box">
      <img src="https://via.placeholder.com/400x400" alt="Product" />
    </div>

    <!-- Right Side: Card -->
    <div class="card">
      <h2>Classy Crossbody Bag</h2>
      <p class="subtitle">Women Leather Satchel Handbags</p>
      <p class="price">IQD 983</p>
      <p class="vat">Inclusive of VAT</p>

      <div class="delivery">
        <p>Delivery Options:</p>
        <div class="location-container">
          <!-- Address -->
          <div class="villa_no">
            Villa No. 2789, Khalifa City, Park Beside Quoz Mall, Abu Dhabi,
            <br />
            United Arab Emirates.
          </div>

          <!-- Add New Button -->
          <div class="addnewbutton">
            <span class="add-text">+ ADD</span>
            <span class="new-text">New</span>
          </div>
        </div>

        <button class="btn">Standard Delivery</button>
        <button class="btn highlight">Express Delivery</button>
      </div>

      <button class="add-cart">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
};
</script>

<style scoped>
.container {
  display: flex;
  max-width: 900px;
  margin: 40px auto;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.image-box {
  flex: 1;
}

.image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card h2 {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

.subtitle {
  font-size: 14px;
  color: #777;
  margin-bottom: 15px;
}

.price {
  font-size: 20px;
  font-weight: 600;
  color: #444;
}

.vat {
  font-size: 12px;
  color: #999;
  margin-bottom: 20px;
}

.delivery {
  margin: 15px 0;
}

.delivery p {
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
}

.btn {
  margin-right: 10px;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  background: #eee;
  cursor: pointer;
  font-size: 14px;
}

.btn.highlight {
  background: #f7c948;
  color: white;
}

.add-cart {
  margin-top: auto;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #2563eb;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

.add-cart:hover {
  background: #1e40af;
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .image-box {
    height: 250px;
  }
}
.villa_no {
  background-color: #e9eeed;
  height: 70px;
  border-radius: 16px; /* smoother corners */
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 15px 20px; /* add space inside */
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08); /* soft butter shadow */
}

.location-container {
  display: flex;
  align-items: center;
}

.addnewbutton {
  border-radius: 16px;
  border: solid;
  border-color: #999;
  background-color: #ffffff;
  height: 70px;
  width: 140px;
  display: flex;
  flex-direction: column; /* stack vertically */
  justify-content: center;
  color: black;

  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  padding-left: 15px; /* base padding */
}

.add-text {
  line-height: 1.2;
  padding-left: 15px;
}

.new-text {
  padding-left: 26px; /* 👈 indent "New" so it sits under ADD */
  line-height: 1.2;
}

.addnewbutton:hover {
  background-color: #15308c; /* darker blue */
  transform: translateY(-2px); /* lift effect */
}
</style>
