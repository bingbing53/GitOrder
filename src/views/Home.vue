<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />111
  </div>
</template>

<script>
// @ is an alias to /src
// import axios from 'axios'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted() {
    this.axios.get('/workshop/list').then(res => {
      console.log(res, 'res')
    })
<<<<<<< HEAD
    console.log('test111234')
=======
    console.log('test1112345')
>>>>>>> 3863070d1c65664e6997c18cefc0046c103b09cd
  }
}
</script>
