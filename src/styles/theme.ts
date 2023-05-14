type StaticSizedTuple<T> = [T, T, T, T, T, T, T]

type themeType = {
  breakpoints: StaticSizedTuple<breakpointType>
  page: {
    horizontal_padding: StaticSizedTuple<number>
    vertical_padding: StaticSizedTuple<number>
  }
  pallete: {
    primary: palleteItemType
    secondary: palleteItemType
    grey: palleteItemType
  }
}

export const theme: themeType = {
  breakpoints: [
    {
      name: 'mobile-extra-small',
      media: 320,
    },
    {
      name: 'mobile-small',
      media: 375,
    },
    {
      name: 'mobile-large',
      media: 425,
    },
    {
      name: 'tablet-small',
      media: 768,
    },
    {
      name: 'tablet-large',
      media: 1050,
    },
    {
      name: 'desktop-small',
      media: 1440,
    },
    {
      name: 'desktop-large',
      media: 1900,
    },
  ],
  page: {
    horizontal_padding: [8, 16, 16, 32, 64, 64, 128],
    vertical_padding: [8, 8, 8, 16, 32, 32, 32],
  },
  pallete: {
    primary: {
      main: '#f8a9b3',
      dark: '#f8a9b3',
      light: '#f8a9b3',
    },
    secondary: {
      main: '#2a373c',
      dark: '#2a373c',
      light: '#546e7a',
    },
    grey: {
      main: '#000',
      dark: '#000',
      light: '#fff',
    },
  },
}
