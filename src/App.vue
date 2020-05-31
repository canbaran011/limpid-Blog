<template>
    <div>
      <router-view name="header-top"></router-view>
        <router-view></router-view>
      <router-view name="footer"></router-view>  
      </div>

</template>

<script>
import Header from './components/common/Header'
import Blogs from './components/blogs/Blogs'

export default {
  name: 'app',
  components :{
    appHeader : Header,
    appBlogs : Blogs
  }

}
</script>

<style>
</style>
