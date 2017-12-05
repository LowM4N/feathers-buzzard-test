<script lang="ts">
import Vue from "vue"
import Component from "nuxt-class-component"
import { Client } from '~/plugins/feathers'

@Component({
  name: 'login-page',
})
export default class extends Vue {
  email: string = ''
  password: string = ''

  async submit () {
    const { accessToken } = await Client.authenticate({
      strategy: 'local',
      email: this.email,
      password: this.password
    })

    console.log('token', accessToken)
  }
}
</script>

<template lang="pug">
#login-page
  el-card(
    header="Login"
  )
    el-input(
      style="margin-bottom: 0.5rem"
      placeholder="E-Mail"
      v-model="email"
    )
    el-input(
      style="margin-bottom: 0.5rem"
      placeholder="Password"
      v-model="password"
      type="password"
    )
    el-button(
      @click="submit"
    ) Login
</template>
