import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
// import colors from 'vuetify/util/colors'

export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#E8F1F2',
          success: '#3cd1c2',
          info: '#ffaa2c',
          error: '#f83e70'
        }
      }
    }
  },
    icons: {
      defaultSet: 'mdi',
    },
    
})