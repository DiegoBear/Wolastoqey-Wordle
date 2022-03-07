import { Cell } from './Cell'
import { CONFIG } from '../../constants/config'
import { wordLength } from '../../lib/words'

export const EmptyRow = () => {
  //const emptyCells = Array.from(Array(CONFIG.wordLength))
    const emptyCells = Array.from(Array(wordLength))

  return (
    <div className="flex justify-center mb-1">
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
