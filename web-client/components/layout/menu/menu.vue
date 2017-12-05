<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'
import LanguageSwitcher from '~/components/language-switcher'

@Component({
  name: 'menu',
  components: {
    LanguageSwitcher
  }
})
export default class Menu extends Vue { }
</script>

<template lang="pug" src="./menu.pug"></template>
