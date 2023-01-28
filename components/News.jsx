import React, { useState } from 'react'
import MailChimpSubscribe from 'react-mailchimp-subscribe'

import NewsStyle from '../styles/news.style'

const CustomForm = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState('')
    // console.log(status, message, onValidated)

    const handleSubmit = () => {
        // e.preventDefault()
        console.log(email)
        email &&
        // email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email
        });
    }

    return (
        <div>
            {status === "sending" && (
                <div
                    className="mc__alert mc__alert--sending"
                >sending...</div>
            )}
            {status === "error" && (
                <div
                    className="mc__alert mc__alert--error"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    className="mc__alert mc__alert--success"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            <div className="news-form">
                <input
                    type="text"
                    placeholder="signup for news"
                    label="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <button
                    onClick={() => handleSubmit()}
                >submit</button>
            </div>
        </div>
    )
}

const News = () => {
    return (
        <NewsStyle>
            <div className="news-wrapper">
                <MailChimpSubscribe
                    url="https://bernardbolter.us20.list-manage.com/subscribe/post?u=ce17997267ee3367ce2a5b033&amp;id=8494a2ce79"
                    render={({ subscribe, status, message }) => (
                        <div>
                            <CustomForm
                                status={status}
                                message={message}
                                onValidated={formData => {
                                    console.log(formData)
                                    subscribe(formData)
                                }}
                            />
                        </div>
                    )}
                />
            </div>
        </NewsStyle>
    )
}

export default News