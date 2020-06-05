<template>
  <div>
    <div class="container-md">
        <h3 style="margin-top:15px"><b>Add a new _limpid blog</b> </h3>
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">limpid Title</label>
          <input class="form-control form-control-lg" type="text" placeholder="a limpid and pure title">
        </div>
        
        <div class="form-group">
          <label for="exampleFormControlTextarea1">limpid Content</label>
          <textarea
            placeholder="..."
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
          <button type="submit" class="btn btn-primary mb-2">Submit</button>
      </form>
    </div>
  </div>
</template>
