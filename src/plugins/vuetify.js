import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#E8F1F2',
          btn: '#00173D',
          success: '#3cd1c2',
          info: '#ffaa2c',
          error: '#f83e70'
        },
        variables: {
          fontFamily: 'Poppins, sans-serif',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
  },
});
