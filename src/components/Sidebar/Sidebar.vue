<template>
  <div class="sidebar">
    <ul class="sidebar-list">
      <router-link to="/" tag="li">Home</router-link>
      <router-link to="/blog" tag="li">Blog</router-link>
      <router-link to="/about" tag="li">About</router-link>
      <router-link to="/contact" tag="li">Contact</router-link>
      <router-link to="/past-clients" tag="li">Past Clients</router-link>
    </ul>
  </div>
</template>

<style scoped>
  .sidebar {
    background: grey;
    width: 280px;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    padding: 24px;
  }
  .sidebar-list {
    list-style-type: none;
    text-align: center;
    padding: 0px;
    margin-top: 64px;
  }
  .sidebar-list li {
    font-size: 24px;
    color: white;
    margin-bottom: 16px;
  }
  .router-link-exact-active {
    border-bottom: solid white 3px;
  }
</style>
