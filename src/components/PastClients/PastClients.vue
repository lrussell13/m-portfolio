<template>
  <div class="client-holder">
      <h1>Past Clients</h1>
      <hr class="underscore">
      <div class="client-card">
        <img src="@/assets/clients/the-sun.png"/>
        <hr>
        <p>Freelance here bajkhjahdjahs sajkdhakjshd Asdahksjdhakshdjkahsjkdhajskdajs Ajkshdjkahsjdhkjahsjkdhajshdjkahsjd</p>
      </div>
  </div>
</template>

<style scoped>
  hr {
    height: 3px;
    background-color: #707070;
    border: none;
    width: 60%;
  }
  .client-holder {
    padding: 24px;
  }
  .underscore {
    margin-bottom: 24px;
  }
  h1 {
    text-align: center;
    margin: 0;
  }
  img {
    margin: 0 auto;
    display: block
  }
  .client-card {
    width: 80%;
    margin: 12px auto;
    border: solid 3px #707070;
    max-width: 300px;
    padding: 12px;
  }
</style>
