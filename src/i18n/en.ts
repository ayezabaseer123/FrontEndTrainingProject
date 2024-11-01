import en from './en.json'

const enDictionary = en
enDictionary.local = {
  ...enDictionary.local,
}

export default {
  ...enDictionary,
}
