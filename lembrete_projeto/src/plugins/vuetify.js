import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  iconfont: 'md',
  primary: colors.lightBlue.base,
  secondary: colors.cyan.base,
  accent: colors.yellow.base,
  error: colors.red.base,
  warning: colors.orange.base,
  info: colors.blueGrey.base,
  success: colors.indigo.base
})
