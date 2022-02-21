import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
  setOption: () => void
}

export const ExtraModal = ({ isOpen, handleClose, setOption }: Props) => {
  return (
      <BaseModal title="" isOpen={isOpen} handleClose={handleClose}>
      <h1 className="text-xl font-bold">Would you like another shot?</h1>
          <p className="text-base" style={{ marginTop: '0.4cm', marginBottom: '0.3cm' }}>
            In the spirit of teaching Wolastoqey to as many people as possible...
          </p>
          <p className="text-base" style={{ marginTop: '0.3cm', marginBottom: '0.3cm' }}>
              We would like to give you the translation and description of the word.
          </p>
          <p className="text-base" style={{ marginTop: '0.3cm', marginBottom: '0.4cm' }}>
              Will you please try again?
          </p>
          <button className="mx-auto mt-4 flex items-center px-2.5 py-1.5 text-base font-bold rounded variant-outline border-indigo-700 text-indigo-700 bg-white hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 select-none" style={{ width: '5cm', height: '1.5cm', justifyContent: 'center', }} onClick={() => handleClose()} >No thanks</button>
          <button className="mx-auto mt-4 flex items-center px-2.5 py-1.5 border border-transparent text-base font-bold rounded text-white bg-blue-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 select-none" style={{ width: '5cm', height: '1.5cm', justifyContent: 'center', }} onClick={() => setOption()} > Try again</button>
    </BaseModal>
  )
}
