module.exports = {
  theme: {
    fontFamily: {
      display: ['Inter'],
      body: ['Inter'],
      code: ['Anonymous Pro']
    },
    extend: {
      colors: {
        blue: '#56CCF2',
        coral: '#EB5757',
        white: '#f2f2f2',
        darkbg: '#131518',
        defaultbg: '#1A1D22',
        lightbg: '#292C33',
        bluegrey: '#B5BAD0',
        lightgrey: '#E0E0E0',
        grey: '#828282',
        error: '#EB5757',
        warning: '#F2C94C',
        info: '#56CCF2',
        success: '#6FCF97'
      },
      gridTemplateRows: {
        'mobile-home-grid': 'minmax(48px, 1fr) 25vh repeat(8, auto) 100px',
        'home-grid': 'minmax(48px, 1fr) 50vh repeat(8, auto) 100px',
        roadmap: '80px 1fr'
      },
      gridTemplateColumns: {
        roadmap: '1fr 80px 1fr'
      },
      minHeight: {
        '150': '150px',
        '200': '200px',
        '300': '300px'
      },
      minWidth: {
        '150': '150px',
        '200': '200px',
        '300': '300px'
      },
      maxWidth: {
        '350': '350px'
      },
      fontSize: {
        '7xl': '96px'
      },
      flex: {
        feature: '0.4'
      }
    }
  },
  variants: {},
  plugins: []
}
