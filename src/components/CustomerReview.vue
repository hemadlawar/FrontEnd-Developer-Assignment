<template>
  <section id="testimonials">
    <div class="testimonial-heading">
      <span>Comments</span>
      <h4>Clients Says</h4>
    </div>

    <div class="testimonial-box-container">
      <!-- Liam Mendes -->
      <div class="testimonial-box">
        <div class="box-top">
          <div class="profile">
            <div class="profile-img">
              <img
                src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"
                alt="Liam Mendes"
              />
            </div>
            <div class="name-user">
              <strong>Liam Mendes</strong>
              <span>@liammendes</span>
            </div>
          </div>
          <div class="reviews">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="client-comment">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            provident temporibus architecto asperiores nobis maiores nisi.
          </p>
        </div>
      </div>

      <!-- Noah Wood -->
      <div class="testimonial-box">
        <div class="box-top">
          <div class="profile">
            <div class="profile-img">
              <img
                src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"
                alt="Noah Wood"
              />
            </div>
            <div class="name-user">
              <strong>Noah Wood</strong>
              <span>@noahwood</span>
            </div>
          </div>
          <div class="reviews">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>
        <div class="client-comment">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem provident temporibus asperiores maiores nisi.
          </p>
        </div>
      </div>

      <!-- Oliver Queen -->
      <div class="testimonial-box">
        <div class="box-top">
          <div class="profile">
            <div class="profile-img">
              <img
                src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"
                alt="Oliver Queen"
              />
            </div>
            <div class="name-user">
              <strong>Oliver Queen</strong>
              <span>@oliverqueen</span>
            </div>
          </div>
          <div class="reviews">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="client-comment">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem provident temporibus asperiores maiores nisi.
          </p>
        </div>
      </div>

      <!-- Barry Allen -->
      <div class="testimonial-box">
        <div class="box-top">
          <div class="profile">
            <div class="profile-img">
              <img
                src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"
                alt="Barry Allen"
              />
            </div>
            <div class="name-user">
              <strong>Barry Allen</strong>
              <span>@barryallen</span>
            </div>
          </div>
          <div class="reviews">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="client-comment">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem provident temporibus asperiores maiores nisi.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CustomerReview",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
}

#testimonials {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.testimonial-heading {
  letter-spacing: 1px;
  margin: 30px 0px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.testimonial-heading span {
  font-size: 1.3rem;
  color: #252525;
  margin-bottom: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.testimonial-box-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}

.testimonial-box {
  width: 500px;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  padding: 20px;
  margin: 15px;
  cursor: pointer;
}

.profile-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
}

.profile-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.profile {
  display: flex;
  align-items: center;
}

.name-user {
  display: flex;
  flex-direction: column;
}

.name-user strong {
  color: #3d3d3d;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
}

.name-user span {
  color: #979797;
  font-size: 0.8rem;
}

.reviews {
  color: #f9d71c;
}

.box-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.client-comment p {
  font-size: 0.9rem;
  color: #4b4b4b;
}

.testimonial-box:hover {
  transform: translateY(-10px);
  transition: all ease 0.3s;
}

@media (max-width: 1060px) {
  .testimonial-box {
    width: 45%;
    padding: 10px;
  }
}

@media (max-width: 790px) {
  .testimonial-box {
    width: 100%;
  }
  .testimonial-heading h1 {
    font-size: 1.4rem;
  }
}

@media (max-width: 340px) {
  .box-top {
    flex-wrap: wrap;
    margin-bottom: 10px;
  }
  .reviews {
    margin-top: 10px;
  }
}

::selection {
  color: #ffffff;
  background-color: #252525;
}
</style>
