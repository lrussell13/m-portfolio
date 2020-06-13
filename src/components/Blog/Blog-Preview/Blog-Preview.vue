<template>
  <div>
      <div class="blog-preview-card">
        <router-link :to="'/blog/' + blog.id">
        <img :src="getImgUrl(blog.img)" class="blog-img">
        <div class="blog-header">
          <p class="blog-date">{{ getDate(blog.date) }}</p>
          <hr>
          <h1>{{ blog.title }}</h1>
          {{ getPreview(blog.content) }}
        </div>
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
  props: ['blog'],
  methods: {
    getImgUrl (img) {
      return require('@/assets/blog-imgs/' + img)
    },
    getDate (date) {
      return date.toDateString()
    },
    getPreview (content) {
      return content.substr(0, content.lastIndexOf(' ', 100)).replace(/<p[^>]*>/g, '') + '...'
    }
  }
}
</script>

<style scoped>
  .blog-preview-card {
    width: 80%;
    margin: 12px auto;
    border: solid 3px #707070;
    max-width: 300px;
  }
  .blog-img {
    width: 100%;
  }
  .blog-date {
    text-align: right;
    margin-bottom: 0px;
  }
  .blog-header {
    padding: 16px;
  }
  a {
    color: black;
    text-decoration: none;
  }
</style>
