import { CONFIG } from '../../constants/config'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
      <BaseModal title="" isOpen={isOpen} handleClose={handleClose}>
          <h1 className="text-xl font-bold"> Wolastoqey Wordle is brought  </h1>
          <h1 className="text-xl font-bold"> to you by </h1>
          <img className="w-60" src={require("./wlccLogo.png")} style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '0.3cm', marginBottom: '0.3cm' }} />

       <p className="text-sm text-black font-bold" >
              Coming 2023: WLCC Language Nest
       </p>

          <p className="text-sm text-black" style={{ marginTop: '0.3cm', marginBottom: '0.3cm' }} >
            <ul>
                <li>{'\u2022'} Wolas-Talk language app</li>
                <li>{'\u2022'} Teacher classroom resources</li>
                <li>{'\u2022'} Home learning kits</li>
                <li>{'\u2022'} Elder stories</li>
            </ul>
        </p>


          <p className="text-sm text-black font-bold" >
              Visit {' '}
              <a href={"https://www.maliseet.org/"} className="underline" target="_blank">
                  www.maliseet.org
              </a>{' '}
              for more details
          </p>

          <img src={require("./3li_EnFr_Wordmark_C.png")} style={{height:'0.75cm', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '0.5cm', marginBottom: '0.5cm' }} />


       <p className="text-xs text-gray-500 " style={{marginBottom: '0.2cm' }}>
        This is an open source clone of the game Wordle adapted to{' '}
        {CONFIG.language} by{' '}
        <a href={CONFIG.authorWebsite} className="underline font-bold">
          {CONFIG.author}
              </a>{' '}
              with words sourced from the <a href={CONFIG.wordListSourceLink} className="underline font-bold">
                  {CONFIG.wordListSource}
              </a>.

          </p>



        <p className="text-xs text-gray-500">
         Check out{' '}
        <a
          href="https://github.com/hannahcode/wordle"
          className="underline font-bold"
        >
          the original code
        </a>{' '}
        by{' '}
        <a
          href="https://www.hannahmariepark.com/"
          className="underline font-bold"
        >
          Hannah Park
        </a>{' '}
        or have a look at{' '}
        <a
          href="https://github.com/roedoejet/AnyLanguage-Wordle"
          className="underline font-bold"
        >
          Aidan Pine's fork
        </a>{' '}
        and customize it for another language! 
        Or,
        {' you can also '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          play the original here
        </a>
      </p>
    </BaseModal>
  )
}
