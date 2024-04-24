import { useState } from 'react'


export function TwitterFollowCard({userName = 'unknow', imageSrc = 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png' , children, initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const texto = isFollowing ? 'Following' : 'Follow'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
          <img className='tw-followCard-avatar' src={imageSrc} alt="" />
          <div className='tw-followCard-info'>
            <strong>{children}</strong>
            <span className='tw-followCard-infoUserName'>@{userName}</span>
          </div>
        </header>
  
        <aside>
          <button className={buttonClassName} onClick={handleClick}>
            <span className='tw-followCard-text'>{texto}</span>
            <span className='tw-followCard-stopFollow'>Unfollow</span>
          </button>
        </aside>
      </article>
    )
}