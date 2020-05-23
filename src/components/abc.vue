<template>
    <div class="hello" @click="a">
        abc.vue--{{msg}}
    </div>
</template>

<script>
export default {
    name: 'abc',
    props: {
        msg: String
    },
    methods: {
        a(){
          console.error(465798);
            this.$emit('update:msg', '无情啊！')
        }
    },
    mounted() {
        console.error(1111111111);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
