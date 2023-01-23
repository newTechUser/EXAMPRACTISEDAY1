import React from 'react'
import './Messageus.css'

function Messageus() {
  return (
    <div className='msgmainclass'>
        <div className='msgus'>
        <div className='msgtitletext'>
            Message Us
        </div>
        <div className='msgmaintext'>
            Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia <br/>quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
        </div>
        <div className='msgbtnside'>
            <div className='divnamebtn'>
                <input type='text' placeholder='Firstname' className='namebtn' />
                <input type='text' placeholder='Lastname' className='namebtn' />
            </div>
            <input type='text' placeholder='Subject' className='subbtn' />
            <input type='text' placeholder='Email' className='subbtn' />
            <input type='text' placeholder='Write your message here.' className='msginput' />
            <button className='msgbtn'>Send</button>
        </div>
    </div>
    </div>
    
  )
}

export default Messageus