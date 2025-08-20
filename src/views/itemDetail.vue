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
            <span class="plus">+</span>
            <div class="text-row">
              <span>ADD</span>
              <span>NEW</span>
            </div>
          </div>
        </div>

        <!-- Delivery Options side by side -->
        <div class="delivery-options-row">
          <!-- Standard Delivery -->
          <!-- Standard Delivery -->
          <div class="delivery-box">
            <div class="top-row">
              <span class="title">Standard Delivery</span>
              <button class="price-btn">Free</button>
            </div>
            <span class="time">(5–7 Days)</span>
          </div>

          <!-- Express Delivery -->
          <div class="delivery-box express">
            <div class="top-row">
              <span class="title">Express Delivery</span>
              <button class="price-btn">+15 IQD</button>
            </div>
            <span class="time">(1–2 Days)</span>
          </div>
        </div>
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
  max-width: 1100px; /* wider page */
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
  padding: 25px;
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

/* Delivery Options Row */
.delivery-options-row {
  display: flex;
  gap: 20px;
  margin-top: 10px;
}

/* Each Delivery Box */
.delivery-box {
  background: #eeeeee; /* default for Standard */
  border-radius: 12px;
  padding: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* EXPRESS DELIVERY special styling */
.delivery-box.express {
  background: #fbce39; /* yellow */
}

.delivery-box.express .title,
.delivery-box.express .time {
  color: white; /* white text */
}

.top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 15px;
  font-weight: 600;
  color: #333;
}

.time {
  margin-top: 8px;
  font-size: 13px;
  color: #555;
}

/* Round Price Button */
.price-btn {
  padding: 6px 14px;
  border: none;
  border-radius: 50px;
  background: black;
  color: white;
  font-size: 13px;
  cursor: pointer;
}

.add-cart {
  margin-top: auto;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #10a3a7;
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

  .delivery-options-row {
    flex-direction: column;
  }
}

.villa_no {
  background-color: #e9eeed;
  height: 70px;
  border-radius: 16px;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.location-container {
  display: flex;
  align-items: center;
}

.addnewbutton {
  border-radius: 16px;
  background-color: white;
  height: 70px;
  width: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  margin-bottom: 3px;
}

.plus {
  font-size: 22px;
  margin-bottom: 4px;
}

.text-row {
  display: flex;
  gap: 6px;
  font-size: 14px;
}

.addnewbutton:hover {
  background-color: whitesmoke;
  transform: translateY(-2px);
}
</style>
