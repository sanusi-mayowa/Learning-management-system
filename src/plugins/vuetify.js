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
          diploma: '#0a5f6f',
          list: '#cze8f8',
          error: '#f83e70',
          user: '#26235C',
          comment: '#F9F871',
          email: '#9082ECA6',
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

