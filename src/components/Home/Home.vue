<template>
  <div class="home-container">
    <img src="@/assets/about.png" class="logo">
    <div class="heading-container">
      <h1>Marissa Merkt</h1>
      <hr class="underline">
      <div class="descriptor-holder">
        <p>Writer</p>
        <p class="dot">&#x25CB;</p>
        <p>Journalist</p>
        <p class="dot">&#x25CB;</p>
        <p>Editor</p>
      </div>
    </div>
    <div class="hero"></div>
  </div>
</template>

<style scoped>
  .logo {
    padding: 3px;
    margin: 24px auto 8px;
    display: block;
    width: 80%;
    border: double 6px #707070;
    border-radius: 100%;
    max-width: 350px;
  }
  .underline {
    max-width: 450px;
  }
  .heading-container {
    text-align: center;
  }
  .hero-container {
    height: 185px;
    width: 100%;
  }
  h1 {
    margin-bottom: 4px;
    margin-top: 0px;
  }
  hr {
    height: 3px;
    background-color: #707070;
    border: none;
    margin: 0px auto;
    width: 60%;
  }
  .hero {
    background-image: url('../../assets/typewriter.png');
    background-position: center bottom;
    background-size: cover;
    height: 240px;
    width: 100%;
    margin-top: 12px;
  }
  .descriptor-holder {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .descriptor-holder p {
    margin: 8px;
    font-size: 18px;
  }
  .descriptor-holder p.dot {
    font-size: 12px;
  }
</style>
