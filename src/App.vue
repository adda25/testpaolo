<template>
  <v-app>
    <v-main>
      {{bio}}
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {

  },

  data: () => ({
    bio: {}
  }),
  mounted () {
    this.$axios.get('/api/textbio').then(function (res) {
      this.bio = res.data
    }.bind(this))
  }
};
</script>
