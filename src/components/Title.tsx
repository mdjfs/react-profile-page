interface TitleProps {
    children?: React.ReactNode;
    fontSize?: number;
}

export const Title: React.FC<TitleProps> = ({ children, fontSize }: TitleProps) => {
    return <h1 style={{color: 'white', textShadow: '-1px -1px 0 #FF0000, 0   -1px 0 #FF0000, 1px -1px 0 #FF0000, 1px  0   0 #FF0000, 1px  1px 0 #FF0000, 0    1px 0 #FF0000, -1px  1px 0 #FF0000, -1px  0   0 #FF0000', letterSpacing: 2, fontSize: fontSize, margin: 0}}>{children}</h1>
}