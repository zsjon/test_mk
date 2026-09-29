import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

// PrimeVue 테마를 디자인 시스템 값으로 덮는다. 색 원본은 theme.css와 같은 키트 값.
const brandPrimary = {
  color: '{primary.600}',
  contrastColor: '#ffffff',
  hoverColor: '{primary.700}',
  activeColor: '{primary.700}',
}

export const SportagramPreset = definePreset(Aura, {
  primitive: {
    borderRadius: { none: '0', xs: '4px', sm: '6px', md: '8px', lg: '10px', xl: '12px' },
  },
  semantic: {
    primary: {
      50: '#eff8ff',
      100: '#d1e9ff',
      200: '#b3ddff',
      300: '#84caff',
      400: '#53b1fd',
      500: '#2e90fa',
      600: '#1570ef',
      700: '#175cd3',
      800: '#1849a9',
      900: '#194185',
      950: '#102a56',
    },
    focusRing: { width: '2px' },
    formField: { paddingX: '0.875rem', paddingY: '0.625rem' },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '#f9fafb',
          100: '#f2f4f7',
          200: '#eaecf0',
          300: '#d0d5dd',
          400: '#98a2b3',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: '#1d2939',
          900: '#101828',
          950: '#0c111d',
        },
        primary: brandPrimary,
        text: {
          color: '{surface.900}',
          hoverColor: '{surface.900}',
          mutedColor: '{surface.500}',
          hoverMutedColor: '{surface.700}',
        },
      },
      dark: {
        surface: {
          0: '#ffffff',
          50: '#f5f5f6',
          100: '#ececed',
          200: '#cecfd2',
          300: '#b4b6bb',
          400: '#9a9ca3',
          500: '#7c7f87',
          600: '#61646c',
          700: '#3d3f45',
          800: '#2e3035',
          900: '#26272b',
          950: '#1c1d20',
        },
        primary: brandPrimary,
        text: {
          color: '{surface.50}',
          hoverColor: '{surface.0}',
          mutedColor: '{surface.400}',
          hoverMutedColor: '{surface.200}',
        },
      },
    },
  },
})
