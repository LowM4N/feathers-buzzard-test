import Vue from 'vue'
import VueI18n from 'vue-i18n'
import LocaleMessages from '~/locales'

Vue.use(VueI18n)

export default ctx => {
  const { app, store } = ctx

  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: LocaleMessages
  })
}
