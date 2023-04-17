type styleProps = {
    style: React.CSSProperties;
};

const Style = ({ style }: styleProps) => {
    return <div style={style}>
        <p>This is the style components</p>
    </div>;
};
export default Style;
