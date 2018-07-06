<template>
  <div class="container">
    <div class="form">
      <div class="form-group" :class="{ 'has-error': hasError }">
        <textarea class="form-control" v-model="msg" placeholder="请输入留言信息"></textarea>
      </div>
      <div>
        <span v-show="hasError" class="text-danger">留言信息不能为空</span>
        <div class="tip text-muted pull-right">已输入{{msg.length}}个字符</div>
      </div>
      <button type="button" class="btn btn-primary" @click="submit">提交</button>
    </div>
    <ul class="list-group">
      <li class="list-group-item" v-for="item in list">{{ item.name }}<span class="text-muted pull-right">{{ item.createdAt | timeago }}</span></li>
    </ul>
    <div class="loading" v-show="loading">
      <img src="./assets/Radio-1s-200px.gif" />
    </div>
  </div>
</template>

<script>
  import * as api from './api';

  export default {
    data () {
      return {
        list: [],
        msg: '',
        loading: true,
        hasError: false
      }
    },
    created() {
      this.init()
    },
    methods: {
      init () {
        api.initWilddogListener((snapshot, prev) => {
          console.log('data change', snapshot.val(), prev)
          this.getlist()
        })
        this.getlist()
      },
      getlist () {
        this.loading = true
        api.getList().then(res => {
          this.list = res
          this.loading = false
        })
      },
      submit () {
        if (!this.msg) {
          this.hasError = true
          setTimeout(() => this.hasError = false, 2000)
          return ;
        }
        this.loading = true
        api.saveData(this.msg).then(res => {
            console.log("create object success", res)
            this.msg = ''
            api.triggerNode(res)
          })
          .catch(err => {
            console.log("create object fail")
            this.loading = false
          })
      }
    }
  }
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
}
.form-group {
  margin-bottom: 5px;
}
.form .tip {
  text-align: right;
  margin-bottom: 5px;
}
.loading {
  position: fixed;
  top: 50%;
  left: 50%;
}
.loading img {
  width: 80px;
  transform: translate(-50%, -50%)
}
</style>
