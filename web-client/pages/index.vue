<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'
import { Client } from '~/plugins/feathers'

@Component({
  name: 'home'
})
export default class extends Vue {
  users: Array<any> = []

  async created () {
    const { data } = await Client.service('users').find()
    this.users = data
  }
}
</script>

<template lang="pug">
#home-page
  el-card(
    header="Users"
  )
    p(
      v-if="users.length == 0"
    ) no users
    ul
     li(
       v-for="user in users"
     ) {{ user.email }}
</template>
