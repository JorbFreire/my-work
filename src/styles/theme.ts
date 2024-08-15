type StaticSizedTuple<T> = [T, T, T, T, T, T, T]

type themeType = {
  breakpoints: StaticSizedTuple<breakpointType>
  page: {
    horizontal_padding: StaticSizedTuple<number>
    vertical_padding: StaticSizedTuple<number>
    external_radius: StaticSizedTuple<`${number}px`>
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
    external_radius: ['32px', '32px', '32px', '32px', '32px', '32px', '32px'],
  },
  pallete: {
    primary: {
      darker: '#76464c',
      dark: '#ad767d',
      main: '#f8a9b3',
      light: '#f9bac2',
    },
    secondary: {
      dark: '#2a373c',
      main: '#455a64',
      light: '#546e7a',
    },
    grey: {
      dark: '#000',
      main: '#000',
      light: '#fff',
    },
  },
}
