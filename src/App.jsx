import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
import './index.css'

const users = [
  {
    userName: 'elonmusk',
    imageSrc: 'https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg',
    isFollowing : false,
    name: 'Elon Musk'
  },
  {
    userName: 'sabumafuc',
    imageSrc: 'https://pbs.twimg.com/profile_images/1742037358802038784/3gnbuT9w_400x400.jpg',
    isFollowing : true,
    name: 'sabumafuc'
  },

]


function App() {
  const format = (userName) => `@${userName}`

  return (
    <section className="App">
      <h1 className="tw-card-title">You might like</h1>
        {users.map(user => {
          const { userName, imageSrc, isFollowing, name} = user
          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              imageSrc={imageSrc}
              formatUserName={format}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        })}
    </section>
  )
}

export default App
