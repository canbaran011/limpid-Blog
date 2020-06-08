<template>
  <div>
    <div class="container-md">
      <h3 style="margin-top:15px"><b>Add a new _limpid blog</b></h3>
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">limpid Title</label>
          <input
            v-model="blog.title"
            class="form-control form-control-lg"
            type="text"
            placeholder="a limpid and pure title"
          />
        </div>

        <div class="form-group">
          <label>Author</label>
          <input
            v-model="blog.author"
            type="text"
            class="form-control"
            placeholder="Author Name..."
          />
        </div>
        <div class="form-group">
          <label>Image Link</label>
          <input
            v-model="blog.thumbnail"
            type="text"
            class="form-control"
            placeholder="Image link pls..."
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">limpid Content</label>
          <textarea
          v-model="blog.content"
            placeholder="..."
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>

        <button 
        @click="onSubmit"  class="btn btn-primary mb-2">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        thumbnail: "",
        author: ""
      }
    };
  },
  methods:{
    onSubmit(){
      console.log(this.blog)
      axios.post("https://limpid-blog.firebaseio.com/posts.json", this.blog)
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err);
      })
    }

  }
};
</script>
