import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='news_letter'>
      <h1>Get Exclusive Offers on Your Email</h1>
      <p>Subscribe to Our Newsletter and Stay Updated</p>
      <div>
        <input type="email" placeholder='Enter you Mail Id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
