/* eslint-disable @next/next/next-script-for-ga */
import { DeviceDemo } from "@/components/Demo";
import "./global.css";
import { Title } from "@/components/Title";
import { useEffect, useState, createRef } from "react";
import { Logo } from "@/components/Logo";
import { Nav } from "@/components/Nav";
import { Description } from "@/components/Description";
import { useOrientation } from "@/hooks/useOrientation";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import {
  openContact,
  openContribute,
  openDocs,
  openGithub,
  openLicense,
  openNpm,
} from "@/utils";
import Head from "next/head";

const README =
  "https://api.github.com/repos/mdjfs/react-profile/contents/docs/GET_STARTED.md";

const ICON_CUSTOM_IMG = (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={20}
      height={20}
      fill="#F00"
    >
      <path d="M448 80c8.8 0 16 7.2 16 16v319.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3l-83 107.4-30.5-42.7c-4.5-6.3-11.7-10-19.5-10s-15 3.7-19.5 10.1l-80 112-4.5 6.2V96c0-8.8 7.2-16 16-16h384zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </svg>
  </>
);

export const GITHUB_SVG_BLACK = (
  <>
    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={31} fill="none">
      <path
        fill="black"
        fillOpacity={0.76}
        d="M10.034 24.036c0 .121-.139.218-.314.218-.2.018-.339-.079-.339-.218 0-.12.14-.218.315-.218.181-.018.338.08.338.218Zm-1.88-.272c-.043.121.078.26.26.297.157.06.338 0 .374-.122.037-.12-.078-.26-.26-.314-.157-.042-.332.018-.375.14Zm2.673-.103c-.176.043-.297.157-.279.297.018.12.176.2.357.157.176-.042.297-.157.279-.278-.019-.115-.182-.194-.357-.176ZM14.807.484C6.416.484 0 6.853 0 15.242 0 21.95 4.222 27.689 10.252 29.71c.774.139 1.046-.339 1.046-.732 0-.375-.018-2.444-.018-3.714 0 0-4.234.907-5.123-1.802 0 0-.69-1.76-1.681-2.214 0 0-1.385-.95.097-.931 0 0 1.506.12 2.334 1.56 1.325 2.335 3.545 1.663 4.41 1.264.139-.968.532-1.639.967-2.038-3.38-.375-6.792-.865-6.792-6.684 0-1.663.46-2.498 1.427-3.562-.157-.393-.671-2.014.158-4.107 1.264-.393 4.173 1.633 4.173 1.633a14.21 14.21 0 0 1 3.798-.514c1.289 0 2.59.175 3.799.514 0 0 2.909-2.032 4.173-1.633.829 2.099.315 3.714.157 4.107.968 1.07 1.56 1.905 1.56 3.562 0 5.837-3.562 6.303-6.943 6.684.557.478 1.029 1.385 1.029 2.806 0 2.039-.019 4.56-.019 5.057 0 .393.279.87 1.047.732C25.899 27.689 30 21.95 30 15.242 30 6.852 23.196.484 14.806.484Zm-8.928 20.86c-.079.061-.06.2.042.315.097.097.236.14.315.06.079-.06.06-.199-.042-.314-.097-.097-.236-.139-.315-.06Zm-.653-.49c-.043.08.018.176.139.237.097.06.218.042.26-.043.042-.078-.018-.175-.14-.235-.12-.037-.217-.019-.26.042Zm1.96 2.154c-.097.079-.061.26.078.375.14.14.315.157.393.06.079-.078.043-.26-.078-.375-.133-.139-.315-.157-.394-.06Zm-.69-.889c-.097.06-.097.218 0 .357.097.139.26.2.339.139.096-.079.096-.236 0-.375-.085-.14-.242-.2-.339-.121Z"
      />
    </svg>
  </>
);

export const NPM_SVG_BLACK = (
  <>
    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={27} fill="none">
      <path
        stroke="black"
        strokeOpacity={0.76}
        d="M8.333 17.833H.5v-9h29v9h-15V19.5H8.833v-1.667h-.5Zm.5-7.833v-.5H1.167v7.667H5.5v-5h.667v5h2.666V10Zm8.334 0v-.5H9.5v9.333h4.333v-1.666h3.334V10Zm11.666 0v-.5h-11v7.667h4.334v-5h.666v5H25.5v-5h.667v5h2.666V10ZM14.5 14.5h-.667v-2.333h.667V14.5Z"
      />
    </svg>
  </>
);

export default function Home() {
  const [readme, setReadme] = useState<string>();
  const [customImg, setCustomImg] = useState<File>();
  const [lan, setLanguage] = useState<string>("en");
  const [theme, setTheme] = useState<string>("default");
  const { isPortrait } = useOrientation();
  const docsRef = createRef<HTMLDivElement>();
  const editorRef = createRef<HTMLDivElement>();

  const goToEditor = () =>
    editorRef &&
    editorRef.current &&
    editorRef.current.scrollIntoView({ behavior: "smooth" });

  const goToGetStarted = () =>
    docsRef &&
    docsRef.current &&
    docsRef.current.scrollIntoView({ behavior: "smooth" });

  const inputFile = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/jpeg, image/png";
    input.oninput = () => input.files && setCustomImg(input.files[0]);
    input.click();
  };

  useEffect(() => {
    fetch(README)
      .then((res) => res.json())
      .then((json) => setReadme(atob(json.content)));
  }, []);

  useEffect(() => {
    if (readme && typeof window === "object") {
      const { hljs } = window as any;
      if (hljs) hljs.highlightAll();
    }
  }, [readme]);

  return (
    <>
      <Head>
        <title>React Avatar Editor</title>
        <meta
          name="description"
          content="React Avatar Editor for crop, filter and adjust image colors using React"
        />
        <link rel="canonical" href="https://medium.com/p/f45547351b70" />
        <link rel="icon" type="image/x-icon" href="react-profile.ico"></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/default.min.css"
        />
        <script
          async
          src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"
        ></script>
        <meta
          name="keywords"
          content="react, avatar, editor, image, crop, pixelsjs, pixels, profile, avatar, filter, filters, colors, adjust, brightness, saturation, contrast, library, npm, editor, github, react avatar editor, npm library"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DNHKY777BV"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-DNHKY777BV');`,
          }}
        ></script>
      </Head>
      <Nav goToEditor={goToEditor} goToGetStarted={goToGetStarted} />
      {isPortrait && (
        <div
          style={{
            width: "100vw",
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Description
            goToEditor={goToEditor}
            goToGetStarted={goToGetStarted}
          />
          <div
            style={{
              marginTop: 39,
              textAlign: "center",
              display: "grid",
              justifyContent: "center",
            }}
            ref={editorRef}
          >
            <div style={{ marginBottom: 46 }}>
              <Title>Playground</Title>
            </div>
            <DeviceDemo
              type="mobile"
              language={lan as any}
              theme={theme}
              customImage={customImg}
            />
            <div style={{ marginTop: 29, width: 211, textAlign: "left" }}>
              <div style={{ fontSize: 16 }}>Themes</div>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  marginLeft: 10,
                  marginBottom: 6,
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    cursor: "pointer",
                    color: theme === "default" ? "#F00" : "#000",
                  }}
                  onClick={() => setTheme("default")}
                >
                  Default
                </div>
                <div
                  style={{
                    fontSize: 12,
                    cursor: "pointer",
                    color: theme === "dark" ? "#F00" : "#000",
                  }}
                  onClick={() => setTheme("dark")}
                >
                  Dark
                </div>
              </div>
              <div style={{ fontSize: 8, color: "rgba(0, 0, 0, 0.64)" }}>
                You can aslo create your own themes and even suggest them to
                make this list of themes even bigger
              </div>
              <div
                style={{ fontSize: 8, color: "#F00", cursor: "pointer" }}
                onClick={() => openContribute()}
              >
                Learn more here
              </div>
              <div style={{ marginTop: 10, fontSize: 16 }}>Language</div>
              <div
                style={{
                  marginLeft: 10,
                  marginBottom: 6,
                  overflowX: "auto",
                  overflowY: "hidden",
                  width: 200,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    cursor: "pointer",
                    marginRight: 8,
                    fontSize: 12,
                    color: lan === "en" ? "#F00" : "#000",
                  }}
                  onClick={() => setLanguage("en")}
                >
                  English(EN)
                </div>
                <div
                  style={{
                    display: "inline-block",
                    cursor: "pointer",
                    marginRight: 8,
                    fontSize: 12,
                    color: lan === "es" ? "#F00" : "#000",
                  }}
                  onClick={() => setLanguage("es")}
                >
                  Español(ES)
                </div>
                <div
                  style={{
                    display: "inline-block",
                    cursor: "pointer",
                    marginRight: 8,
                    fontSize: 12,
                    color: lan === "ja" ? "#F00" : "#000",
                  }}
                  onClick={() => setLanguage("ja")}
                >
                  Japanese(JA)
                </div>
                <div
                  style={{
                    display: "inline-block",
                    cursor: "pointer",
                    marginRight: 8,
                    fontSize: 12,
                    color: lan === "zh" ? "#F00" : "#000",
                  }}
                  onClick={() => setLanguage("zh")}
                >
                  Chinese(ZH)
                </div>
                <div
                  style={{
                    display: "inline-block",
                    cursor: "pointer",
                    marginRight: 8,
                    fontSize: 12,
                    color: lan === "fr" ? "#F00" : "#000",
                  }}
                  onClick={() => setLanguage("fr")}
                >
                  Francais(FR)
                </div>
                <div
                  style={{
                    display: "inline-block",
                    cursor: "pointer",
                    marginRight: 8,
                    fontSize: 12,
                    color: lan === "it" ? "#F00" : "#000",
                  }}
                  onClick={() => setLanguage("it")}
                >
                  Italiano(IT)
                </div>
                <div
                  style={{
                    display: "inline-block",
                    cursor: "pointer",
                    marginRight: 8,
                    fontSize: 12,
                    color: lan === "hin" ? "#F00" : "#000",
                  }}
                  onClick={() => setLanguage("hin")}
                >
                  हिंदू(HIN)
                </div>
              </div>
              <div style={{ fontSize: 8, color: "rgba(0, 0, 0, 0.64)" }}>
                You can also suggest corrections for language packs or suggest
                more
              </div>
              <div
                style={{ fontSize: 8, color: "#F00", cursor: "pointer" }}
                onClick={() => openContribute()}
              >
                Learn more here
              </div>
              <button
                onClick={inputFile}
                style={{
                  marginTop: 10,
                  marginLeft: "auto",
                  marginRight: "auto",
                  padding: "4px 10px",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  backgroundColor: "transparent",
                  border: "1px solid #F00",
                  borderRadius: 5,
                  cursor: "pointer",
                  fontSize: 16,
                  color: "#F00",
                }}
              >
                {ICON_CUSTOM_IMG} Custom Image
              </button>
            </div>
          </div>
        </div>
      )}
      {!isPortrait && (
        <div
          style={{
            width: "calc(100vw - 160px)",
            marginLeft: 80,
            marginRight: 80,
            marginTop: 50,
            display: "flex",
          }}
        >
          <div>
            <Description />
          </div>
          <div style={{ marginLeft: 67, width: "calc(100vw - 610px)" }}>
            <div
              style={{ marginBottom: 30, width: "100%", textAlign: "center" }}
            >
              <Title>Playground</Title>
            </div>
            <div
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <DeviceDemo
                type="desktop"
                theme={theme}
                language={lan as any}
                customImage={customImg}
              />
              <div style={{ justifySelf: "center", marginTop: 30, width: 483 }}>
                <div style={{ fontSize: 24 }}>Themes</div>
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    marginLeft: 30,
                    marginBottom: 9,
                  }}
                >
                  <div
                    style={{
                      fontSize: 18,
                      cursor: "pointer",
                      color: theme === "default" ? "#F00" : "#000",
                    }}
                    onClick={() => setTheme("default")}
                  >
                    Default
                  </div>
                  <div
                    style={{
                      fontSize: 18,
                      cursor: "pointer",
                      color: theme === "dark" ? "#F00" : "#000",
                    }}
                    onClick={() => setTheme("dark")}
                  >
                    Dark
                  </div>
                </div>
                <div style={{ fontSize: 9, color: "rgba(0, 0, 0, 0.64)" }}>
                  You can aslo create your own themes and even suggest them to
                  make this list of themes even bigger
                </div>
                <div
                  style={{ fontSize: 9, color: "#F00", cursor: "pointer" }}
                  onClick={() => openContribute()}
                >
                  Learn more here
                </div>
                <div style={{ marginTop: 10, fontSize: 24 }}>Language</div>
                <div
                  style={{
                    marginLeft: 30,
                    marginBottom: 9,
                    overflowX: "auto",
                    overflowY: "hidden",
                    width: 500,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      cursor: "pointer",
                      marginRight: 8,
                      fontSize: 18,
                      color: lan === "en" ? "#F00" : "#000",
                    }}
                    onClick={() => setLanguage("en")}
                  >
                    English(EN)
                  </div>
                  <div
                    style={{
                      display: "inline-block",
                      cursor: "pointer",
                      marginRight: 8,
                      fontSize: 18,
                      color: lan === "es" ? "#F00" : "#000",
                    }}
                    onClick={() => setLanguage("es")}
                  >
                    Español(ES)
                  </div>
                  <div
                    style={{
                      display: "inline-block",
                      cursor: "pointer",
                      marginRight: 8,
                      fontSize: 18,
                      color: lan === "ja" ? "#F00" : "#000",
                    }}
                    onClick={() => setLanguage("ja")}
                  >
                    Japanese(JA)
                  </div>
                  <div
                    style={{
                      display: "inline-block",
                      cursor: "pointer",
                      marginRight: 8,
                      fontSize: 18,
                      color: lan === "zh" ? "#F00" : "#000",
                    }}
                    onClick={() => setLanguage("zh")}
                  >
                    Chinese(ZH)
                  </div>
                  <div
                    style={{
                      display: "inline-block",
                      cursor: "pointer",
                      marginRight: 8,
                      fontSize: 18,
                      color: lan === "fr" ? "#F00" : "#000",
                    }}
                    onClick={() => setLanguage("fr")}
                  >
                    Francais(FR)
                  </div>
                  <div
                    style={{
                      display: "inline-block",
                      cursor: "pointer",
                      marginRight: 8,
                      fontSize: 18,
                      color: lan === "it" ? "#F00" : "#000",
                    }}
                    onClick={() => setLanguage("it")}
                  >
                    Italiano(IT)
                  </div>
                  <div
                    style={{
                      display: "inline-block",
                      cursor: "pointer",
                      marginRight: 8,
                      fontSize: 18,
                      color: lan === "hin" ? "#F00" : "#000",
                    }}
                    onClick={() => setLanguage("hin")}
                  >
                    हिंदू(HIN)
                  </div>
                </div>
                <div style={{ fontSize: 9, color: "rgba(0, 0, 0, 0.64)" }}>
                  You can also suggest corrections for language packs or suggest
                  more
                </div>
                <div
                  style={{ fontSize: 9, color: "#F00", cursor: "pointer" }}
                  onClick={() => openContribute()}
                >
                  Learn more here
                </div>
                <button
                  onClick={inputFile}
                  style={{
                    marginTop: 10,
                    marginLeft: 30,
                    padding: "4px 10px",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    backgroundColor: "transparent",
                    border: "1px solid #F00",
                    borderRadius: 5,
                    cursor: "pointer",
                    fontSize: 16,
                    color: "#F00",
                  }}
                >
                  {ICON_CUSTOM_IMG} Custom Image
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div style={{ marginTop: 80, display: "grid", justifyContent: "center" }}>
        <div
          style={{ width: "100%", textAlign: "center", marginBottom: 45 }}
          ref={docsRef}
        >
          <Title>Get Started</Title>
        </div>
        {readme && (
          <ReactMarkdown className="react-markdown">{readme}</ReactMarkdown>
        )}
        <button
          style={{
            width: 206,
            height: 47,
            marginTop: 20,
            alignSelf: "center",
            justifySelf: "center",
            border: "1px solid rgba(255, 0, 0, 0.76)",
            borderRadius: 25,
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
          onClick={() => openDocs()}
        >
          <Title fontSize={18}>Documentation</Title>
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: 200,
          backgroundColor: "rgba(255, 0, 0, 0.76)",
          paddingLeft: 39,
          paddingRight: 20,
          marginTop: 49,
          width: "calc(100vw - 59px)",
        }}
      >
        <div
          style={{
            marginTop: 49,
            alignSelf: "start",
            flexDirection: "column",
            display: "flex",
            color: "white",
            gap: 10,
            fontSize: 20,
          }}
        >
          <a style={{ cursor: "pointer" }} onClick={() => openContact()}>
            Contact
          </a>
          <a style={{ cursor: "pointer" }} onClick={() => openDocs()}>
            Docs
          </a>
          <a style={{ cursor: "pointer" }} onClick={() => openGithub()}>
            Repo
          </a>
          <a style={{ cursor: "pointer" }} onClick={() => openLicense()}>
            License
          </a>
        </div>
        <div style={{ alignSelf: "end" }}>
          <div>
            <Logo type="mobile" footer={true} />
          </div>
          <div style={{ display: "flex", gap: 30, marginBottom: 20 }}>
            <div style={{ cursor: "pointer" }} onClick={() => openNpm()}>
              {NPM_SVG_BLACK}
            </div>
            <div style={{ cursor: "pointer" }} onClick={() => openGithub()}>
              {GITHUB_SVG_BLACK}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
