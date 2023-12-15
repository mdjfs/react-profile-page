interface TitleProps {
    children?: React.ReactNode;
    fontSize?: number;
    header?: boolean;
    subheader?: boolean;
}

export const Title: React.FC<TitleProps> = ({ children, fontSize, header, subheader }: TitleProps) => {
    const props = {
        className: "app-title",
        style: {
            color: 'white', 
            textShadow: '-1px -1px 0 #FF0000, 0   -1px 0 #FF0000, 1px -1px 0 #FF0000, 1px  0   0 #FF0000, 1px  1px 0 #FF0000, 0    1px 0 #FF0000, -1px  1px 0 #FF0000, -1px  0   0 #FF0000', 
            letterSpacing: 2, 
            fontSize: fontSize, 
            margin: 0
        }
    }
    if(subheader) return <h2 {...props}>{children}</h2>
    if(header) return <h1 {...props}>{children}</h1>
    return <p {...props}>{children}</p>
}