import React, { useState } from 'react'
import MailChimpSubscribe from 'react-mailchimp-subscribe'

import styles from '../styles/news.module.scss'

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
            <input
                type="text"
                placeholder="enter email"
                label="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <button
                onClick={() => handleSubmit()}
            >submit</button>
        </div>
    )
}

const News = () => {
    
    return (
        <div className={styles.container}>
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
    )
}



        //     <div id="mc_embed_signup">
        //         <form action="https://bernardbolter.us20.list-manage.com/subscribe/post?u=ce17997267ee3367ce2a5b033&amp;id=8494a2ce79" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" noValidate>
        //         <h2>Subscribe</h2>

        //         <div class="mc-field-group">
        //             <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span></label>
        //             <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" />
        //             <div id="mce-responses" className="clear foot">
        //                 <div className="response" id="mce-error-response" style={{display: "none"}} />
        //                 <div className="response" id="mce-success-response" style={{display: "none"}} />
        //             </div> 
        //         </div>  

        //             <div style={{position: 'absolute', left: -5000 }} ariaHidden="true">
        //                 <input type="text" name="b_ce17997267ee3367ce2a5b033_8494a2ce79" tabIndex="-1" value="" />
        //             </div>
                    
        //             <div class="optionalParent">
        //                 <div class="clear foot">
        //                     <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
        //                     <p className="brandingLogo"><a href="http://eepurl.com/hSjvVP" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" /></a></p>
        //                 </div>
        //             </div>
        //         </form>
        //     </div>
        // </div>
//     )
// }

export default News