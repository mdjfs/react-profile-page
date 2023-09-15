import { useState } from "react";
import { useOrientation } from "@/hooks/useOrientation";
import { Logo } from "./Logo";

const desk_bars = (
 <svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={52}
    fill="none"
  >
    <path
      stroke="red"
      strokeOpacity={0.76}
      d="M.5 9.643a2.71 2.71 0 0 1 2.714-2.714h38.572A2.71 2.71 0 0 1 44.5 9.643a2.71 2.71 0 0 1-2.714 2.714H3.214A2.71 2.71 0 0 1 .5 9.643Zm0 16.071A2.71 2.71 0 0 1 3.214 23h38.572a2.71 2.71 0 0 1 2.714 2.714 2.71 2.71 0 0 1-2.714 2.715H3.214A2.71 2.71 0 0 1 .5 25.714Zm44 16.072a2.71 2.71 0 0 1-2.714 2.714H3.214A2.71 2.71 0 0 1 .5 41.786a2.71 2.71 0 0 1 2.714-2.715h38.572a2.71 2.71 0 0 1 2.714 2.715Z"
    />
  </svg>
)

const mob_bars = (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={35}
    fill="none"
  >
    <path
      stroke="red"
      strokeOpacity={0.76}
      d="M.5 6.429c0-.91.734-1.643 1.643-1.643h25.714c.91 0 1.643.733 1.643 1.643a1.64 1.64 0 0 1-1.643 1.642H2.143A1.64 1.64 0 0 1 .5 6.43Zm0 10.714c0-.91.734-1.643 1.643-1.643h25.714c.91 0 1.643.734 1.643 1.643a1.64 1.64 0 0 1-1.643 1.643H2.143A1.64 1.64 0 0 1 .5 17.143Zm29 10.714a1.64 1.64 0 0 1-1.643 1.643H2.143A1.64 1.64 0 0 1 .5 27.857c0-.909.734-1.643 1.643-1.643h25.714c.91 0 1.643.734 1.643 1.643Z"
    />
  </svg>
)

export function Nav() {
    const [open, setOpen] = useState(false);
    const { isPortrait } = useOrientation();

    return <>
        <nav style={{position: "fixed", zIndex: 10,  backgroundColor: "rgba(255,255,255,0.8)", display: "flex", width: "95vw", alignContent: "center", justifyContent: "space-between", paddingLeft: "2.5vw", paddingRight: "2.5vw"}}>
        <Logo type={isPortrait ? "mobile" : "desktop"} withTitle={!isPortrait} />
        {!isPortrait && <div style={{alignSelf: "center", gap: 30, display: "flex", width: "65vw", justifyContent:"flex-end"}}>
            <a style={{color: "red", fontSize: 20, cursor: "pointer"}}>Contact</a>
            <a style={{color: "red", fontSize: 20, cursor: "pointer"}}>Documentation</a>
        </div>}
        <div style={{ justifySelf: "flex-end", alignSelf: "center", cursor: "pointer"}} onClick={() => setOpen(true)}>
            {isPortrait ? mob_bars : desk_bars}
        </div>
    </nav>
    <div style={{position:"relative", height: 160}}></div>
    {open && <>
        <div style={{width: "100vw", height: "100vh", backgroundColor: 'rgba(255, 0, 0, 0.76)', zIndex: 15, left: 0, top: 0, position: "fixed"}}></div>
        <div style={{width: "80vw", height: "100vh", backgroundColor: '#FFF', zIndex: 15, right: 0, top: 0, position: "fixed"}}>
        <div style={{display: "flex", width: "90%", marginLeft: "5%", justifyContent: "space-between"}}>
            <Logo type={isPortrait ? "mobile" : "desktop"}  />
            <div style={{ justifySelf: "flex-end", alignSelf: "center", cursor: "pointer"}} onClick={() => setOpen(false)}>
                {isPortrait ? mob_bars : desk_bars}
            </div>
        </div>
        {!isPortrait && <div style={{display: "flex", marginTop: 50, flexDirection: "column", textAlign: "center", width: "100%", justifyContent: "center", gap: 10}}>
            <a style={{color: "red", fontSize: 40, cursor: "pointer"}}>Get Started</a>
            <a style={{color: "red", fontSize: 40, cursor: "pointer"}}>Docs</a>
            <a style={{color: "red", fontSize: 40, cursor: "pointer"}}>Try Editor</a>
            <a style={{color: "red", fontSize: 40, cursor: "pointer"}}>Contact</a>
            <a style={{color: "red", fontSize: 40, cursor: "pointer"}}>License</a>
            <a style={{color: "red", fontSize: 40, cursor: "pointer"}}>Github</a>
            <a style={{color: "red", fontSize: 40, cursor: "pointer"}}>npm</a>
        </div>}
        {isPortrait && <div style={{display: "flex", marginTop: 10, flexDirection: "column", textAlign: "center", width: "100%", justifyContent: "center", gap: 10}}>
            <a style={{color: "red", fontSize: 20, cursor: "pointer"}}>Get Started</a>
            <a style={{color: "red", fontSize: 20, cursor: "pointer"}}>Docs</a>
            <a style={{color: "red", fontSize: 20, cursor: "pointer"}}>Try Editor</a>
            <a style={{color: "red", fontSize: 20, cursor: "pointer"}}>Contact</a>
            <a style={{color: "red", fontSize: 20, cursor: "pointer"}}>License</a>
            <a style={{color: "red", fontSize: 20, cursor: "pointer"}}>Github</a>
            <a style={{color: "red", fontSize: 20, cursor: "pointer"}}>npm</a>
        </div>}
        </div>
    </>}
    </>

}