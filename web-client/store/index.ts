import { Client } from '~/plugins/feathers'
import feathersVuex from 'feathers-vuex'

const { service, auth } = feathersVuex(Client, { idField: 'id' })

export const plugins = [
  auth({
    userService: 'users',
    state: {
      accessToken: null,
      errorOnAuthenticate: null,
      errorOnLogout: null,
      payload: null,
      user: null
    }
  }),
  service('users')
]

export const state = () => ({
  locale: 'de',
  locales: ['de', 'en']
})

export const mutations = {
  setLocale (state, locale) {
    state.locale = locale
  }
}

export const getters = {
}

export const actions = {
  setLanguage (ctx, lang) {
    const { app } = this
    const { i18n, router } = app
    const { currentRoute } = router
    const { commit, state } = ctx
    const { locale, locales } = state

    if (locales.indexOf(lang) === -1) {
      return
    }

    if (locale !== lang) {
      commit('setLocale', lang)
      i18n.locale = lang
    }
  }
}
