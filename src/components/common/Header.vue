<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">_limpid</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <router-link active-class="active" exact to="/" tag="li">
            <a class="nav-link">Home |</a>
          </router-link>

          <router-link active-class="active" to="/blogs" tag="li">
            <a class="nav-link"> Blogs |</a>
          </router-link>

          <router-link active-class="active" to="/add" tag="li">
            <a class="nav-link">Add Blog |</a>
          </router-link>

          <!-- <router-link active-class="active" to="/edit" tag="li">
            <a class="nav-link">Edit Blog |</a>
          </router-link> -->
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="text"
            placeholder="Search"
          />
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  </div>
</template>
