import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import ReactProfile from 'react-profile'
import Header from 'next/head'

export default function Demo() {
    const [img, setImg] = useState<HTMLImageElement>();
    const [lan, setLanguage] = useState<string>();
    const [loaded, setLoaded] = useState(false);
    const router = useRouter();
    const { theme, language } = router.query;

    
    const loadTheme = (theme: string) => import(`react-profile/themes/${theme}.min.css`);

    useEffect(() => {
        if(router.isReady) {
            setLanguage(language as string || "en")
            const loadDefault = () => loadTheme("default").then(() => setLoaded(true)).catch(() => alert('Error loading styles'))
            if(theme) loadTheme(theme as string).then(() => setLoaded(true)).catch(loadDefault)
            else loadDefault()
        }
    }, [theme, language, router.isReady])

    useEffect(() => {
        if(typeof window) {
            window.addEventListener("pushImage", (event: any) => {
                const file = event.detail.dataTransfer.file as File;
                if(file.type.startsWith("image/")) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const img = new Image();
                        if(e.target) {
                            img.src = e.target.result as any;
                            img.onload = () => setImg(img);
                        }
                    }
                    reader.readAsDataURL(file)
                }
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