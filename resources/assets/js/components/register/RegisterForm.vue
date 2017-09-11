<template>
    <form class="form-horizontal" method="POST" @submit.prevent="register">
        <!--{{ csrf_field() }}-->

        <div class="form-group" :class="{'has-error': errors.has('name')}">
            <label for="name" class="col-md-3 control-label">姓名</label>
            <div class="col-md-7">
                <input id="name"
                       v-validate="{ rules: { required: true, min: 4 } }"
                       v-model="name"
                       type="text"
                       class="form-control"
                       name="name"
                       required
                       autofocus>
                <span class="help-block" v-show="errors.has('name')">{{errors.first('name')}}</span>
            </div>
        </div>

        <div class="form-group" :class="{'has-error': errors.has('email')}">
            <label for="email" class="col-md-3 control-label">邮箱</label>
            <div class="col-md-7">
                <input id="email"
                       v-validate="{ rules: { required: true, email: true } }"
                       v-model="email" type="email" class="form-control" name="email" required>
                <span class="help-block" v-show="errors.has('email')">{{errors.first('email')}}</span>
            </div>
        </div>

        <div class="form-group" :class="{'has-error': errors.has('password')}">
            <label for="password" class="col-md-3 control-label">密码</label>
            <div class="col-md-7">
                <input id="password"
                       v-validate="{ rules: { required: true, min: 6 } }"
                       v-model="password" type="password" class="form-control" name="password" required>
                <span class="help-block" v-show="errors.has('password')">{{errors.first('password')}}</span>
            </div>
        </div>

        <div class="form-group" :class="{'has-error': errors.has('password_confirmation')}">
            <label for="password-confirm" class="col-md-3 control-label">确认密码</label>
            <div class="col-md-7">
                <input id="password-confirm"
                       v-validate="{ rules: { required: true, min: 6, confirmed: 'password' } }"
                       type="password" class="form-control" name="password_confirmation" required>
                <span class="help-block" v-show="errors.has('password_confirmation')">{{errors.first('password_confirmation')}}</span>
            </div>
        </div>

        <div class="form-group">
            <div class="col-md-7 col-md-offset-3">
                <button type="submit" class="btn btn-primary btn-block">
                    注册
                </button>
            </div>
        </div>
    </form>
</template>
<script>
    export default {
        data() {
            return {
                name: '',
                email: '',
                password: ''
            }
        },
        methods: {
            register() {
                let formData = {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }
                axios.post('/api/register', formData).then(response => {
                    console.log("response.data---", response.data);
                    this.$router.push({name: 'confirm'});
                }).catch(error => {
                    console.log("error---", error);
                })
            }
        }
    }
</script>