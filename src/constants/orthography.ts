import { CONFIG } from './config'

export const ORTHOGRAPHY = ['e', "'", 'a', 'p', 's', 'k', 'm', 't', 'u', 'y', '-', 'w', 'n', 'l', 'c', 'o', 'q', 'h', 'i']

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
