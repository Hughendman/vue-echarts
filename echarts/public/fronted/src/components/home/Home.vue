<template>
    <div class="tip">
      <vue-markdown>{{msg}}</vue-markdown>
    </div>
</template>

<script>
    import VueMarkdown from 'vue-markdown'
    import homemd from  '../../assets/md/home.md'
    export default {
        name: "home",
      data (){
          return {
            msg: homemd
          }
      },
      components: {
        VueMarkdown
      },
    }
</script>

<style scoped>
  .tip {
    margin: 0 auto;
    width: 90%;
    background-color: #E4E7ED;
    padding: 20px;

  }
</style>
