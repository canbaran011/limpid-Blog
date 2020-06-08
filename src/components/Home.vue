<template>
    <div>
        <!-- Page Content -->
  <div class="container">

    <!-- Jumbotron Header -->
    <header class="jumbotron my-4">
      <h1 class="display-3">A welcome from _limpid!</h1>
      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
      <a href="#" class="btn btn-primary btn-lg">Call to action!</a>
    </header>

    <!-- Page Features -->
    <div class="row text-center">

      <div class="col-lg-3 col-md-6 mb-4">
        <div v-for="blog in blogList"  :key="blog.key" class="card h-100">
          <img class="card-img-top" :src="blog.thumbnail" :alt="blog.title">
          <div class="card-body">
            <h4 class="card-title">{{blog.title}}</h4>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>

      
    </div>
    <!-- /.row -->

  </div>
  <!-- /.container -->
    </div>
</template>
<script>
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
}
</script>
<style scoped>
    
</style>