<template>
  <div>
    <app-blog-preview v-for="blog in blogPosts" :key="blog.id" :blog="blog"/>
  </div>
</template>

<script>
import blogPosts from '../../store/blogposts'
import BlogPreview from './Blog-Preview/Blog-Preview'

export default {
  data () {
    return {
      blogPosts
    }
  },
  components: {
    appBlogPreview: BlogPreview
  }
}
</script>
