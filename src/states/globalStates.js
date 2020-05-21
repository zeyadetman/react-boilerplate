import { atom } from 'recoil'

export const locale = atom({
  key: 'locale',
  default:
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage ||
    'en-US',
})
