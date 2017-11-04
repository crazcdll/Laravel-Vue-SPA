<template>
  <nav class="navbar navbar-default navbar-static-top">
    <div class="container">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand"> Vue-SPA</router-link>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <router-link to="/login" v-if="!user.authenticated">登录</router-link>
          </li>
          <li>
            <router-link to="/register" v-if="!user.authenticated">注册</router-link>
          </li>
          <li>
            <router-link to="/profile" v-if="user.authenticated">个人中心</router-link>
          </li>
          <li v-if="user.authenticated">
            <!--<router-link @click="logout" v-if="user.authenticated">退出</router-link>-->
            <a href="#" @click.prevent="logout">退出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState({
        user: state => state.AuthUser
      })
    },
    methods: {
      logout() {
        this.$store.dispatch('logoutRequest').then(() => {
          this.$router.push({name: 'index'});
        })
      }
    }
  }
</script>
