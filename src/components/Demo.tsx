/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect, createRef } from 'react';
import { SUPPORTED_LANGUAGES } from 'react-profile/dist/types'

interface DemoProps {
    language?: SUPPORTED_LANGUAGES,
    theme?: string
    type: "desktop" | "mobile",
    customImage?: File
}

export function DeviceDemo(props: DemoProps) {
    const ref = createRef<HTMLIFrameElement>()
    const [src, setSrc] = useState<string>()

    useEffect(() => {
        let src = "demo";
        if(props.language || props.theme) src += "?"
        if(props.language) src += "language="+props.language+"&"
        if(props.theme) src += "theme="+props.theme
        setSrc(src);
    }, [props.language, props.theme])

    useEffect(() => {
        if(ref.current &&  ref.current.contentWindow && props.customImage) {
            const event = new CustomEvent("pushImage", {
                detail: {
                    dataTransfer: {
                        file: props.customImage
                    }
                }
            })
            ref.current.contentWindow.dispatchEvent(event)
        }
    }, [ref.current, props.customImage])


    return <div style={props.type === "desktop" ? { width: 483.2, height: 363.2, display: "inline-block", overflow: 'hidden'} : {width: 213.2, height: 453.2, display: "inline-block", overflow: 'hidden'}}>
        {props.type === "desktop" && <iframe ref={ref} src={src} width={800} height={600} style={{border: "1px solid #FF0000", borderRadius: 5, transform: 'scale(0.6) translateX(-265px) translateY(-200px)'}}/>}
        {props.type === "mobile" && <iframe ref={ref} src={src} width={350} height={750} style={{border: "1px solid #FF0000", borderRadius: 20, transform: 'scale(0.6) translateX(-115px) translateY(-250px)'}}/>}
    </div>
}
