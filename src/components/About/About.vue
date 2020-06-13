<template>
  <div class="about-container">
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
    <hr>
    <div class="description-container">
      <p>Marissa Merkt is a reporter and photographer for The Brunswick Beacon in Shallotte, North Carolina. She has worked for a variety of magazine and newspaper publications in Austin, TX as well as central Pennsylvania. Marissa holds a bachelor's degree in communications with an emphasis in print and public relations and a minor in sociology.</p>
      <p>Through her work, Marissa explores the intersection of arts and entertainment with the community.</p>
      <p>When she's not busy writing, Marissa can be found running along the beach or reading with her calico cat.</p>
      <p class="resume"><a href="#">Download Resume</a></p>
    </div>
  </div>
</template>

<style scoped>
  .logo {
    padding: 3px;
    margin: 24px auto;
    display: block;
    width: 80%;
    border: double 6px #707070;
    border-radius: 100%;
    max-width: 350px;
  }
  .underline {
    max-width: 450px;
  }
  .resume {
    text-align: center;
    margin-top: 48px;
  }
  .heading-container {
    text-align: center;
    margin: 24px;
  }
  .description-container {
    padding: 18px 24px;
    max-width: 550px;
    margin: 0 auto;
  }
  a {
    color: black;
    border: solid 3px #707070;
    border-radius: 24px;
    padding: 16px;
    text-decoration: none;
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
    width: 100%;
    margin-bottom: 0px;
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
  @media only screen and (min-width: 768px){

  }
</style>
