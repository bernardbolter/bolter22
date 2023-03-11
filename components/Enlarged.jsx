import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Draggable from 'react-draggable'
import { useWindowSize } from '../helpers/useWindowSize'

import EnlargedStyle from '../styles/enlarged.style'

const Enlarged = ({ url, alt, proportion }) => {
    const size = useWindowSize()
    const nodeRef = useRef(null)
    const [artWidth, setArtWidth] = useState(0)
    const [artHeight, setArtHeight] = useState(0)
    const [controlledPosition, setControlledPosition] = useState({ x: 0, y: 0 })
    const [bounds, setBounds] = useState({ left: 0, top: 0, right: 0, bottom: 0 })
    
    useEffect(() => {
        if (proportion > 1) {
            setArtWidth(1600)
            setArtHeight(1600 / proportion)
        } else if (proportion < 1) {
            setArtWidth(1600 * proportion)
            setArtHeight(1600)
        } else {
            setArtWidth(1600)
            setArtHeight(1600)
        }

        const newBounds = {
            left: size.width > artWidth
            ? -(((size.width - artWidth) / 2) - 40)
            : -(((artWidth - size.width) / 2) + 40),

            right: size.width > artWidth
            ? (((size.width - artWidth) / 2) - 40)
            : (((artWidth - size.width) / 2) + 40),

            top: size.height > artHeight
            ? -(((size.height - artHeight) / 2) - 40)
            : -(((artHeight - size.height) / 2) + 40),

            bottom: size.height > artHeight
            ? (((size.height - artHeight) / 2) - 40)
            : (((artHeight - size.height) / 2) + 40)
        }
        setBounds(newBounds)
    }, [size])

    const handleDrag = (e, position) => {
        const { x, y } = position;
        setControlledPosition({x: x, y: y})
    }

    const handleStop = (e, ui) => {
        console.log(ui)
        console.log(e)
    }

    return (
        <EnlargedStyle>
            <div className="enlarged-container" key="enlarged">
                <Draggable
                    onDrag={handleDrag}
                    onStop={handleStop}
                    position={controlledPosition}
                    nodeRef={nodeRef}
                    bounds={bounds}
                >
                    <div 
                        className="enlarged-image"
                        ref={nodeRef}
                    >
                        <Image
                            src={url}
                            alt={alt}
                            width={artWidth}
                            height={artHeight}
                            placeholder="blur"
                            blurDataURL="/green.png"
                            onError={() => setSrc('/red.png')}
                        />
                    </div>
                </Draggable>
            </div>
        </EnlargedStyle>
    )
}

export default Enlarged