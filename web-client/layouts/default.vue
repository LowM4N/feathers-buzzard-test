<script lang="ts">
import Vue from "vue"
import Component from 'nuxt-class-component'
import UiMenu from '~/components/layout/menu'

@Component({
  name: 'default-layout',
  components: {
    UiMenu
  }
})
export default class DefaultLayout extends Vue {
}
</script>

<template lang="pug">
div
  ui-menu
  main
    nuxt
</template>

<style lang="sass">
html
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
  font-size: 16px
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box

*, *:before, *:after
  box-sizing: border-box
  margin: 0

main
  padding: 1rem
</style>
