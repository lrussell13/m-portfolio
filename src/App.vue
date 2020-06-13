<template>
 <div id="app">
  <nav>
    <div :class="{change: isNavOpen}" @click="toggleNav()" id="burger-container">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
    <div class="lrg-nav">
      <ul>
        <router-link to="/" tag="li">Home</router-link>
        <router-link to="/blog" tag="li">Blog</router-link>
        <router-link to="/about" tag="li">About</router-link>
        <router-link to="/contact" tag="li">Contact</router-link>
        <router-link to="/past-clients" tag="li">Past Clients</router-link>
      </ul>
    </div>
  </nav>
  <transition name="slide">
    <Sidebar v-if="isNavOpen" class="sidebar"/>
  </transition>
  <div class="main">
    <router-view />
  </div>
  <footer>
    <a href="#"><i class="fab fa-linkedin"></i></a>
    <a href="#"><i class="fab fa-facebook-square middle"></i></a>
    <a href="#"><i class="fab fa-twitter-square"></i></a>
  </footer>
 </div>
</template>

<script>
import Sidebar from './components/Sidebar/Sidebar'

export default {
  name: 'app',
  data () {
    return {
      isNavOpen: false
    }
  },
  components: {
    Sidebar
  },
  methods: {
    toggleNav () {
      this.isNavOpen = !this.isNavOpen
    }
  },
  watch: {
    '$route' () {
      this.isNavOpen = false
    }
  }
}
</script>
<style>
a {
  color: white;
}
footer {
  background: grey;
  display: flex;
  justify-content: center;
  padding: 12px;
}
.fab {
  font-size: 48px;
}
nav {
  background: rgb(18, 141, 190);
}
.middle {
  margin: 0 48px;
}
body {
  border: 0;
  margin: 0;
  padding: 0;
}
#burger-container {
  z-index: 9999;
}
nav {
  display: flex;
  justify-content: flex-end;
  padding: 16px 16px;
}

.bar1, .bar2, .bar3 {
width: 35px;
height: 5px;
background-color: white;
margin: 6px 0;
transition: 0.4s;
}

.change .bar1 {
-webkit-transform: rotate(-45deg) translate(-9px, 6px) ;
transform: rotate(-45deg) translate(-9px, 6px) ;
background: red;
}

.change .bar2 {
opacity: 0;
}

.change .bar3 {
-webkit-transform: rotate(45deg) translate(-8px, -8px);
transform: rotate(45deg) translate(-8px, -8px);
background: red;
}

.slide-enter, .slide-leave-to {
  opacity: 0;
}
.slide-enter-active {
  transition: opacity 0.5s;
  animation: slide-in 0.5s;
}
.slide-leave-active {
  transition: opacity 0.5s;
  animation: slide-out 0.5s;
}

.lrg-nav {
  display: none;
}

.lrg-nav ul {
  list-style-type: none;
  display: flex;
}

.lrg-nav li {
  font-size: 24px;
  margin-left: 16px;
  color: white;
}

.router-link-exact-active {
  border-bottom: solid white 2px;
}

.lrg-nav li:hover {
  cursor: pointer;
}

@keyframes slide-in {
  from {
    width: 0;
    transform: translateX(30px);
  }
  to {
    width: 280px;
    transform: translateX(0px)
  }
}
@keyframes slide-out {
  from {
    width: 280;
    transform: translateX(0px)
  }
  to {
    width: 0px;
    transform: translateX(30px);
  }
}

@media only screen and (min-width: 768px){
  #burger-container {
    display: none;
  }
  .lrg-nav {
    display: block;
  }
}
</style>
