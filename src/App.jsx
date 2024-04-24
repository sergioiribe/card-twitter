import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
import './index.css'

function App() {
  const format = (userName) => `@${userName}`

  return (
    <section className="App">
      <h1 className="tw-card-title">You might like</h1>
      <TwitterFollowCard
        formatUserName={format}
        initialIsFollowing={false}
        userName="elonmusk"
        imageSrc="https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg"
      >
        <strong>Elon Musk</strong>
      </TwitterFollowCard>
      <TwitterFollowCard
        formatUserName={format}
        initialIsFollowing={true}
        userName="sabumafuc"
        imageSrc="https://pbs.twimg.com/profile_images/1742037358802038784/3gnbuT9w_400x400.jpg"
      >
        <strong>sabumafuc</strong>
      </TwitterFollowCard>
      <TwitterFollowCard></TwitterFollowCard>
    </section>
  )
}

export default App
