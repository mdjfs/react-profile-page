import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import ReactProfile from 'react-profile'

export default function Demo() {
    const [img, setImg] = useState<HTMLImageElement|File>();
    const [lan, setLanguage] = useState<string>();
    const [loaded, setLoaded] = useState(false);
    const router = useRouter();
    const { theme, language } = router.query;

    const loadTheme = (name: "default"|"dark") => {
        if(name === "dark") return import("react-profile/themes/dark" as any)
        return import("react-profile/themes/default" as any)
    }

    useEffect(() => {
        if(router.isReady) {
            setLanguage(language as string || "en")
            const loadDefault = () => loadTheme("default").then(() => setLoaded(true)).catch(() => alert('Error loading styles'))
            if(theme) loadTheme(theme as any).then(() => setLoaded(true)).catch(loadDefault)
            else loadDefault()
        }
    }, [theme, language, router.isReady])

    useEffect(() => {
        if(typeof window === 'object') {
            window.addEventListener("pushImage", (event: any) => {
                const file = event.detail.dataTransfer.file as File;
                setImg(file)
            })
        }
    }, [])
    
    if(loaded && lan)
    return <>
        <ReactProfile src={img || 'avatar.png'} language={lan as any} onCancel={() => window.location.reload()} onDone={async (exportObject) => {
            if(exportObject) {
                const blob = await exportObject.getBlob();
                if(blob) {
                    const blobUrl = URL.createObjectURL(blob);
                    const download = document.createElement("a");
                    download.href = blobUrl;
                    download.download = "react-profile.png";
                    download.click()
                }
            }
            window.location.reload();
        }}/>
    </>
}