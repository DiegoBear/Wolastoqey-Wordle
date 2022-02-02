import { CONFIG } from './config'

export const ORTHOGRAPHY = ["'", '-', 'a', 'c', 'e', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 's', 't', 'u', 'w', 'y']

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
