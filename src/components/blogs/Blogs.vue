<template>


  <div>
    <div class="container-md flex-md-row">
     <div class="d-flex flex-wrap flex-row justify-content-center align-items-center">
      <div v-for="blog in blogList"  :key="blog.key" style="width:250px" class="card m-1">
        <img class="card-img-top" :src="blog.thumbnail" :alt="blog.title">
        <div class="card-body">
          <h5 class="card-title">  {{blog.title}} </h5>
         
      </div>

    </div>
    </div>
  </div>
  </div>

</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      blogList:[]
    }
  },
  created(){
    axios.get("https://limpid-blog.firebaseio.com/posts.json")
    .then((response) =>{
      let data = response.data;
      for(let key in data){
        this.blogList.push({ ...data[key], id: key})
      }
      console.log(response)
    })
  }
};
</script>
