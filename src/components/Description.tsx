/* eslint-disable react/no-unescaped-entities */
import { useOrientation } from "@/hooks/useOrientation";
import { Title } from "./Title";

export const GITHUB_SVG = (
  <>
    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={31} fill="none">
      <path
        fill="red"
        fillOpacity={0.76}
        d="M10.034 24.036c0 .121-.139.218-.314.218-.2.018-.339-.079-.339-.218 0-.12.14-.218.315-.218.181-.018.338.08.338.218Zm-1.88-.272c-.043.121.078.26.26.297.157.06.338 0 .374-.122.037-.12-.078-.26-.26-.314-.157-.042-.332.018-.375.14Zm2.673-.103c-.176.043-.297.157-.279.297.018.12.176.2.357.157.176-.042.297-.157.279-.278-.019-.115-.182-.194-.357-.176ZM14.807.484C6.416.484 0 6.853 0 15.242 0 21.95 4.222 27.689 10.252 29.71c.774.139 1.046-.339 1.046-.732 0-.375-.018-2.444-.018-3.714 0 0-4.234.907-5.123-1.802 0 0-.69-1.76-1.681-2.214 0 0-1.385-.95.097-.931 0 0 1.506.12 2.334 1.56 1.325 2.335 3.545 1.663 4.41 1.264.139-.968.532-1.639.967-2.038-3.38-.375-6.792-.865-6.792-6.684 0-1.663.46-2.498 1.427-3.562-.157-.393-.671-2.014.158-4.107 1.264-.393 4.173 1.633 4.173 1.633a14.21 14.21 0 0 1 3.798-.514c1.289 0 2.59.175 3.799.514 0 0 2.909-2.032 4.173-1.633.829 2.099.315 3.714.157 4.107.968 1.07 1.56 1.905 1.56 3.562 0 5.837-3.562 6.303-6.943 6.684.557.478 1.029 1.385 1.029 2.806 0 2.039-.019 4.56-.019 5.057 0 .393.279.87 1.047.732C25.899 27.689 30 21.95 30 15.242 30 6.852 23.196.484 14.806.484Zm-8.928 20.86c-.079.061-.06.2.042.315.097.097.236.14.315.06.079-.06.06-.199-.042-.314-.097-.097-.236-.139-.315-.06Zm-.653-.49c-.043.08.018.176.139.237.097.06.218.042.26-.043.042-.078-.018-.175-.14-.235-.12-.037-.217-.019-.26.042Zm1.96 2.154c-.097.079-.061.26.078.375.14.14.315.157.393.06.079-.078.043-.26-.078-.375-.133-.139-.315-.157-.394-.06Zm-.69-.889c-.097.06-.097.218 0 .357.097.139.26.2.339.139.096-.079.096-.236 0-.375-.085-.14-.242-.2-.339-.121Z"
      />
    </svg>
  </>
);

export const NPM_SVG = (
  <>
    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={27} fill="none">
      <path
        stroke="red"
        strokeOpacity={0.76}
        d="M8.333 17.833H.5v-9h29v9h-15V19.5H8.833v-1.667h-.5Zm.5-7.833v-.5H1.167v7.667H5.5v-5h.667v5h2.666V10Zm8.334 0v-.5H9.5v9.333h4.333v-1.666h3.334V10Zm11.666 0v-.5h-11v7.667h4.334v-5h.666v5H25.5v-5h.667v5h2.666V10ZM14.5 14.5h-.667v-2.333h.667V14.5Z"
      />
    </svg>
  </>
);

export const OK_SVG = (
  <>
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={23} fill="none">
      <g clipPath="url(#a)">
        <path
          stroke="red"
          strokeOpacity={0.76}
          d="M17.916 5.059a.93.93 0 0 1 1.259-.052l.052.052a.93.93 0 0 1 0 1.315L7.798 17.803a.93.93 0 0 1-1.315 0L.77 12.088a.93.93 0 0 1 1.315-1.315l4.706 4.701.353.353.353-.353L17.916 5.06Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h20v22.857H0z" />
        </clipPath>
      </defs>
    </svg>
  </>
);

interface Props {
  goToGetStarted?: () => void;
  goToEditor?: () => void;
}

export function Description(props: Props) {
  const { isPortrait } = useOrientation();
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        width: isPortrait ? 300 : 450,
      }}
    >
      <div style={{ width: isPortrait ? 300 : 450 }}>
        <div style={{ marginLeft: isPortrait ? 0 : 40 }}>
          <Title>Don't Worry</Title>
        </div>
        <p
          style={{
            margin: 0,
            marginLeft: isPortrait ? 40 : 80,
            marginTop: 10,
            marginBottom: 10,
            fontSize: isPortrait ? 16 : 24,
          }}
        >
          about your user's photo
        </p>
        <div style={{ marginLeft: isPortrait ? 40 : 120 }}>
          <Title>This Editor</Title>
        </div>
        <p
          style={{
            margin: 0,
            marginTop: 10,
            marginBottom: 3,
            fontSize: isPortrait ? 16 : 24,
          }}
        >
          will give you exactly what user wants
        </p>
        <p
          style={{ margin: 0, marginLeft: 15, fontSize: isPortrait ? 16 : 24 }}
        >
          and your web application needs
        </p>
      </div>
      {isPortrait && (
        <div
          style={{
            marginTop: 27,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            style={{
              width: 143,
              height: 47,
              border: "1px solid rgba(255, 0, 0, 0.76)",
              borderRadius: 25,
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
            onClick={() => props.goToEditor && props.goToEditor()}
          >
            <Title fontSize={18}>Try Editor</Title>
          </button>
          <button
            style={{
              width: 143,
              height: 47,
              border: "1px solid #000",
              borderRadius: 25,
              backgroundColor: "transparent",
              fontSize: 18,
              cursor: "pointer",
            }}
            onClick={() => props.goToGetStarted && props.goToGetStarted()}
          >
            Get Started
          </button>
        </div>
      )}
      <div
        style={{
          width: 297,
          textAlign: "center",
          alignSelf: "center",
          justifySelf: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            marginTop: 37,
            marginBottom: 14,
            color: "rgba(0, 0, 0, 0.64)",
            fontSize: 16,
          }}
        >
          Developed as{" "}
          <b style={{ color: "#F00", cursor: "pointer" }}>
            open-source software
          </b>
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 37 }}>
          <div style={{ cursor: "pointer" }}>{NPM_SVG}</div>
          <div style={{ cursor: "pointer" }}>{GITHUB_SVG}</div>
        </div>
        <p
          style={{
            margin: 0,
            color: "rgba(0, 0, 0, 0.64)",
            fontSize: 16,
            marginTop: 10,
            marginBottom: 42,
          }}
        >
          Always open to contributions
        </p>
      </div>
      <div style={{ alignSelf: "center", justifySelf: "center" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          {OK_SVG}
          <p style={{ margin: 0, marginLeft: 1, fontSize: 12 }}>Crop</p>
          <div style={{ width: 8 }}></div>
          {OK_SVG}
          <p style={{ margin: 0, marginLeft: 1, fontSize: 12 }}>Square Image</p>
        </div>
        <p
          style={{
            fontSize: 8,
            color: "rgba(0, 0, 0, 0.64)",
            margin: 0,
            marginLeft: 28,
            marginBottom: 20,
          }}
        >
          Thanks to{" "}
          <b style={{ color: "#F00", cursor: "pointer" }}>react-image-crop</b>
        </p>
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: 20 }}
        >
          {OK_SVG}
          <p style={{ margin: 0, marginLeft: 1, fontSize: 12 }}>
            Adjust Colors
          </p>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: 20 }}
        >
          {OK_SVG}
          <p style={{ margin: 0, marginLeft: 1, fontSize: 12 }}>
            Size Optimization
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {OK_SVG}
          <p style={{ margin: 0, marginLeft: 1, fontSize: 12 }}>
            Apply Filters
          </p>
        </div>
        <p
          style={{
            fontSize: 8,
            color: "rgba(0, 0, 0, 0.64)",
            margin: 0,
            marginLeft: 28,
            marginBottom: 20,
          }}
        >
          Thanks to{" "}
          <b style={{ color: "#F00", cursor: "pointer" }}>Pixels.js</b>
        </p>
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: 20 }}
        >
          {OK_SVG}
          <p style={{ margin: 0, marginLeft: 1, fontSize: 12 }}>Theming</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {OK_SVG}
          <p style={{ margin: 0, marginLeft: 1, fontSize: 12 }}>
            Multi Language
          </p>
        </div>
      </div>
    </div>
  );
}
