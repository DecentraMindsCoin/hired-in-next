import Head from 'next/head'
import Image from 'next/image'
import ShowHideElement from '../src/components/ShowHideElement'
import DataBinding from '../src/components/DataBinding'
import DisableButton from '../src/components/DisableButton'
import AddTwoNumbers from '../src/components/AddTwoNumber'
import CounterApp from '../src/components/CounterApp'
import Fetch from '../src/components/Fetch'
import UsingContextApi from '../src/components/UsingContextApi'
import ChangeFormText from '../src/components/ChangeFormText'
import UseEffect from '../src/components/UseEffectCounter'
import ConditionalRendering from '../src/components/ConditionalRendering'
import BetterCounter from '../src/components/BetterCounter'
import HowComponent from '../src/components/HowOther'
import ScrollEvent from '../src/components/ScrollEvent'
import Palindrome from '../src/components/Palindrome'
import LoginForm from '../src/components/LoginForm'
import Fibonacci from '../src/components/Fibonacci'
import Promises from '../src/components/Promises'
import DataStructures from '../src/components/DataStructures'
import GridTraveler from '../src/components/GridTraveler'
import CanSum from '../src/components/TargetSum'
import ImageSlider from '../src/components/Slider/ImageSlider'
import Parent from '../src/components/Parent'
import UseRef from '../src/components/UseRef'
import CodingInterview from '../src/components/CodingInterview'
import Link from 'next/link'
import PostsApi from '../src/components/PostsApi'
import CSRPosts from '../src/components/CSRPosts'
import CountVowels from '../src/components/CountVowels'
import Fishing from '../src/components/FishingData'
import TodoAddDelete from '../src/components/TodoAddDelete'
import FetchApi from '../src/components/Fetch/FetchApi'
import Axios from '../src/components/Fetch/Axios'
import UseSWR from '../src/components/Fetch/UseSWR'
import Modal from '../src/components/Modal/Modal'
import AutoComplete from '../src/components/AutoComplete'

// import TicTacComponent from '../src/components/TicTacComponent'
const Home = (props) => {
  return (
    <div className="">
      <Head>
        <title>Hire-Code-Examples</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex space-y-10">
        <div className="mx-auto grid w-full max-w-3xl grid-cols-2 bg-gradient-to-r from-cyan-500 to-blue-500">
          <div>
            <ImageSlider />
          </div>
          <div>
            <Palindrome />
          </div>
          <div>
            <Fibonacci />
          </div>
          <div>
            <ScrollEvent />
          </div>
          <div>
            <BetterCounter />
          </div>
          <div>
            <HowComponent />
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
            <Fetch />
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
          <div>
            <LoginForm />
          </div>
          <div>
            <Parent />
          </div>
          {/* <div>
            <PostsApi data={props.posts}/>
          </div>
          <div>
            <CSRPosts />
          </div>
          <div>
            <Fishing />
          </div> */}
          <div>
            <TodoAddDelete />
          </div>
          <div>
            <FetchApi />
          </div>
          <div>
            <Axios />
          </div>
          <div>
            <UseSWR />
          </div>
          <div>
            <Modal />
          </div>
          <div>
            <AutoComplete />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
export const getStaticProps = async () => {
  const url = 'https://jsonplaceholder.typicode.com/users/'
  const request = await fetch(url)
  const posts = await request.json()
  return { props: { posts }, revalidate : 60  }
}
