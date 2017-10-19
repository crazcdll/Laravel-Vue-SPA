<template>
  <form class="form-horizontal" method="POST" @submit.prevent="login">
    <!--{{ csrf_field() }}-->

    <div class="form-group" :class="{'has-error': errors.has('email')}">
      <label for="email" class="col-md-3 control-label">邮箱</label>
      <div class="col-md-7">
        <input id="email"
               v-validate
               data-vv-rules="required|email"
               data-vv-as="邮箱"
               v-model="email" type="email" class="form-control" name="email" required>
        <span class="help-block" v-show="errors.has('email')">{{errors.first('email')}}</span>
      </div>
    </div>

    <div class="form-group" :class="{'has-error': errors.has('password')}">
      <label for="password" class="col-md-3 control-label">密码</label>
      <div class="col-md-7">
        <input id="password"
               v-validate
               data-vv-rules="required|min:6"
               data-vv-as="密码"
               v-model="password" type="password" class="form-control" name="password" required>
        <span class="help-block" v-show="errors.has('password')">{{errors.first('password')}}</span>
      </div>
    </div>


    <div class="form-group">
      <div class="col-md-7 col-md-offset-3">
        <button type="submit" class="btn btn-primary btn-block">
          登录
        </button>
      </div>
    </div>
  </form>
</template>
<script>
  import JWTToken from '../../helpers/jwt'

  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login() {
        let formData = {
//          client_id: '2',
//          client_secret: '4KRE3XE315MABOPnDTVAyLl4tkBPwoW51QdbrJfa',
//          grant_type: 'password',
//          scope: '',
          email: this.email,
          password: this.password
        }
        axios.post('/api/login', formData).then(response => {
          console.log("response.data---", response.data);
          JWTToken.setToken(response.data.token);
//          this.$router.push({name: 'confirm'});
        }).catch(error => {
          console.log("error---", error);
        })
      }
    }
  }
</script>