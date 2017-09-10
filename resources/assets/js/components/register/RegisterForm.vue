<template>
    <form class="form-horizontal" method="POST" @submit.prevent="register">
        <!--{{ csrf_field() }}-->

        <div class="form-group">
            <label for="name" class="col-md-4 control-label">姓名</label>
            <div class="col-md-6">
                <input id="name"
                       v-model="name"
                       type="text"
                       class="form-control"
                       name="name"
                       required
                       autofocus>
            </div>
        </div>

        <div class="form-group">
            <label for="email" class="col-md-4 control-label">邮箱</label>
            <div class="col-md-6">
                <input id="email" v-model="email" type="email" class="form-control" name="email" required>
            </div>
        </div>

        <div class="form-group">
            <label for="password" class="col-md-4 control-label">密码</label>
            <div class="col-md-6">
                <input id="password" v-model="password" type="password" class="form-control" name="password" required>
            </div>
        </div>

        <div class="form-group">
            <label for="password-confirm" class="col-md-4 control-label">确认密码</label>
            <div class="col-md-6">
                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
            </div>
        </div>

        <div class="form-group">
            <div class="col-md-6 col-md-offset-4">
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
                }).catch(error=>{
                    console.log("error---", error);
                })
            }
        }
    }
</script>