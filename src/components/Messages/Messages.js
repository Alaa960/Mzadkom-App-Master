import React, { useState } from 'react'
import NavBar from '../Navbar/Navbar'
import Side from '../Side/Side'
import axios from 'axios'
import { getTokens } from '../../services/LocalStorage'
export default function Messages(props) {
    console.log(props.user_id)
    const [message_content, setMessage] = useState('')
    const config = {
        headers: {
            token: getTokens()
        }
    }
    const data = {
        message_content: message_content
    }
    //send message
    const SentMessage = () => {
        axios.post(`http://localhost:3001/api/messages/sendmessage/${props.user_id}`, data, config)
            .then(res => {
                console.log(res.data)
            })
    }
    return (
        <div >
            <Side />
            <main style={{ display: 'flex' }}>
                <div>
                    <input
                        value={message_content}
                        onChange={e => setMessage(e.target.value)}
                        placeholder='enter message ....'
                    />
                    <button className='btn btn-success' onClick={SentMessage}>send</button>
                </div>
            </main>

        </div>
    )
}
