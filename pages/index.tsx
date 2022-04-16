import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Yarn from '../src/components/Yarn'
import ShowHideElement from '../src/components/ShowHideElement'
import DataBinding from '../src/components/DataBinding'
import DisableButton from '../src/components/DisableButton'
import AddTwoNumbers from '../src/components/AddTwoNumber'
import CounterApp from '../src/components/CounterApp'
import FetchApi from '../src/components/FetchAPI'
import UsingContextApi from '../src/components/UsingContextApi'
import ChangeFormText from '../src/components/ChangeFormText'
import UseEffect from '../src/components/UseEffectCounter'
import ConditionalRendering from '../src/components/ConditionalRendering'
import BetterCounter from '../src/components/BetterCounter'
import HowComponent from '../src/components/HowOther'

// import TicTacComponent from '../src/components/TicTacComponent'
const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Hire-Code-Examples</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="flex space-y-10">
        <div className="mx-auto grid w-full max-w-3xl grid-cols-2">
          <div>
            <BetterCounter />
          </div>
          <div>
            <HowComponent />
          </div>
          <div>
            <Yarn />
          </div>
          <div>
            <ShowHideElement />
          </div>
          <div>
            <DataBinding />
          </div>
          <div>
            <DisableButton />
          </div>
          <div>
            <AddTwoNumbers />
          </div>
          <div>
            <CounterApp />
          </div>
          <div>
            <FetchApi />
          </div>
          <div>
            <UsingContextApi />
          </div>
          <div>
            <ChangeFormText />
          </div>
          <div>
            <UseEffect />
          </div>
          <div>
            <ConditionalRendering />
          </div>

          {/* <div>
               <TicTacComponent />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Home
