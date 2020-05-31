<template>
    <div>
        <div class="container-md">
            <h3>Blog Detail Page</h3>
            <hr>
            <router-link
            tag="button"
            class="btn btn-success"
            :to="navigationLink"
            > Edit
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            navigationLink: {
                name: "blogEdit",
                params: { id: this.$route.params.id },
                query: {},
                hash : '#data'
            }
        }
    }
}
</script>