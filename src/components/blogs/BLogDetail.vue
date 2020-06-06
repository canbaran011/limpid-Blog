<template>
    <div>
        
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