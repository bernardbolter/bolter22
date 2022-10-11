import React, { useState, useContext} from 'react'
import { ArtContext } from '../providers/ArtProvider'
import SwitchMode from './SwitchMode'

import { motion, AnimatePresence } from 'framer-motion'
import { fadeLinks, fadeLink } from '../animations/name'

import styles from '../styles/name.module.scss'

const Name = () => {
    const [art, setArt] = useContext(ArtContext)
    const [showLinks, setShowLinks] = useState(false)

    return (
        <AnimatePresence>
            {Object.keys(art.artistInfo).length !== 0 && (
                    <motion.div
                        className={styles.container}
                    >    
                        <motion.h1
                            className={styles.name}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        >{art.artistInfo.name}</motion.h1>
                        <motion.h2 
                            className={styles.info}
                            initial={{ x: -200 }}
                            animate={{ x: 0 }}
                            exit={{ x: 0 }}
                            transition={{ duration: 1 }}
                        >b.{art.artistInfo.birthYear}, {art.artistInfo.birthCity}</motion.h2>
                        <motion.h2 
                            className={styles.info}
                            initial={{ x: -200 }}
                            animate={{ x: 0 }}
                            exit={{ x: 0 }}
                            transition={{ duration: 1.2 }}
                        >lives and works in {art.artistInfo.workCities[0]} {art.artistInfo.workCities[1] !== undefined && `and ${art.artistInfo.workCities[1]}`} {art.artistInfo.workCities[2]!== undefined && ` and ${art.artistInfo.workCities[2]}`}</motion.h2>

                    <SwitchMode />   

                    <a className={styles.instagram} href="https://www.instagram.com/bernardbolter" alt="Bernard Bolter's Instagram">
                        <div className={styles.arrow}>
                            <span className={styles.top} />
                            <span className={styles.shaft} />
                            <span className={styles.bottom} />
                        </div>
                        <svg className={styles.instaSvg} viewBox="0 0 17 17" fill="none">
                            <path d="M13.3351 0H2.66695C1.9596 0 1.28129 0.280948 0.781121 0.781121C0.280948 1.28129 0 1.9596 0 2.66695V13.3351C0 14.0424 0.280948 14.7207 0.781121 15.2209C1.28129 15.7211 1.9596 16.002 2.66695 16.002H13.3351C14.0424 16.002 14.7207 15.7211 15.2209 15.2209C15.7211 14.7207 16.002 14.0424 16.002 13.3351V2.66695C16.002 1.9596 15.7211 1.28129 15.2209 0.781121C14.7207 0.280948 14.0424 0 13.3351 0V0ZM14.6686 13.335H14.6685C14.6685 13.6886 14.5281 14.0278 14.2779 14.2779C14.0279 14.528 13.6887 14.6684 13.3351 14.6684H2.66695C2.31333 14.6684 1.97412 14.528 1.72409 14.2779C1.47395 14.0278 1.33353 13.6886 1.33353 13.335V2.66689C1.33353 2.31327 1.47395 1.97406 1.72409 1.72403C1.97412 1.47389 2.31333 1.33347 2.66695 1.33347H13.3351C13.6887 1.33347 14.0279 1.47389 14.2779 1.72403C14.5281 1.97406 14.6685 2.31327 14.6685 2.66689L14.6686 13.335Z" />
                            <path d="M8.00102 4.00047C6.94007 4.00047 5.92255 4.42195 5.17223 5.17215C4.42203 5.92247 4.00055 6.93999 4.00055 8.00095C4.00055 9.0619 4.42203 10.0794 5.17223 10.8297C5.92255 11.5799 6.94007 12.0014 8.00102 12.0014C9.06198 12.0014 10.0795 11.5799 10.8298 10.8297C11.58 10.0794 12.0015 9.0619 12.0015 8.00095C12.0015 6.93999 11.58 5.92247 10.8298 5.17215C10.0795 4.42195 9.06198 4.00047 8.00102 4.00047V4.00047ZM8.00102 10.6678C7.29368 10.6678 6.61537 10.3869 6.1152 9.88671C5.61503 9.38654 5.33408 8.70823 5.33408 8.00089C5.33408 7.29355 5.61503 6.61524 6.1152 6.11507C6.61537 5.61489 7.29368 5.33395 8.00102 5.33395C8.70837 5.33395 9.38667 5.61489 9.88685 6.11507C10.387 6.61524 10.668 7.29355 10.668 8.00089C10.668 8.70823 10.387 9.38654 9.88685 9.88671C9.38667 10.3869 8.70837 10.6678 8.00102 10.6678Z" />
                            <path d="M13.3351 3.667C13.3351 4.21941 12.8873 4.66712 12.335 4.66712C11.7825 4.66712 11.3348 4.21941 11.3348 3.667C11.3348 3.11471 11.7825 2.66689 12.335 2.66689C12.8873 2.66689 13.3351 3.11471 13.3351 3.667Z" />
                        </svg>
                    </a>
                <div 
                    className={styles.linkButton}
                    onClick={() => setShowLinks(!showLinks)}
                >
                    <svg className={styles.linkSvg} viewBox="0 0 21 21">
                        <path d="M12.3981 14.0876L15.1862 14.0874C17.2198 14.0876 18.8743 12.4331 18.8741 10.3995C18.8743 8.36581 17.2198 6.71133 15.186 6.71147L11.1626 6.71147C9.12906 6.71126 7.47451 8.36581 7.47476 10.3994C7.47469 10.6997 7.51167 10.9914 7.57965 11.2712L9.73361 11.271C9.57748 11.0168 9.48639 10.7187 9.48642 10.3994C9.48642 9.47504 10.2386 8.72291 11.1628 8.72305L15.1861 8.72305C16.1105 8.72305 16.8626 9.47518 16.8625 10.3994C16.8625 11.3238 16.1104 12.0758 15.1861 12.0758L14.004 12.0758C13.6744 12.8927 13.1114 13.5904 12.3981 14.0876Z" />
                        <path d="M8.60204 6.7113L5.81402 6.71146C3.78028 6.71124 2.12581 8.36572 2.12595 10.3995C2.12573 12.4331 3.78029 14.0877 5.81402 14.0876L9.83718 14.0874C11.8708 14.0875 13.5252 12.4329 13.5251 10.3995C13.5253 10.0993 13.4883 9.8076 13.4202 9.52781L11.2663 9.52796C11.4221 9.78216 11.5134 10.08 11.5135 10.3996C11.5135 11.3239 10.7614 12.076 9.83712 12.0759L5.81357 12.0757C4.8892 12.0757 4.13715 11.3237 4.13721 10.3994C4.13721 9.47499 4.88926 8.72294 5.81357 8.723L6.99567 8.72308C7.32521 7.90619 7.88835 7.20831 8.60183 6.7112L8.60204 6.7113Z" />
                    </svg>

                    <AnimatePresence>
                        {showLinks && (
                            <motion.div 
                                className={styles.links}
                                variants={fadeLinks}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                {art.artistInfo.links.map(link => {
                                    console.log("link: ", link)
                                    return (
                                    <motion.a 
                                        className={styles.link}
                                        href={link.url} 
                                        key={link.title}
                                        variants={fadeLink}
                                    >
                                        <div className={styles.linkArrow}>
                                            <span className={styles.linkTop} />
                                            <span className={styles.linkShaft} />
                                            <span className={styles.linkBottom} />
                                        </div>
                                        <p className={styles.linkText}>{link.title}</p>
                                    </motion.a>
                                )})}
                            </motion.div>
                        )}
                        </AnimatePresence>
                </div>
                </motion.div>
            )}
        </AnimatePresence>
    )}

export default Name