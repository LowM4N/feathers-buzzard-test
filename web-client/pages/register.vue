<script lang="ts">
import Vue from "vue"
import Component from "nuxt-class-component"
import { Client } from '~/plugins/feathers'

@Component({
  name: 'sign-up',
})
export default class extends Vue {
  email: string = ''
  password: string = ''

  $router: any

  async submit () {
    const {
      $router,
      email,
      password
    } = this
    const users = Client.service('users')

    const user = await users.create({
      email,
      password
    })

    console.log('submit', user)
    $router.push('/')
  }
}
</script>

<template lang="pug">
#register-page
  el-card(
    header="Register"
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
    ) Submit
</template>
