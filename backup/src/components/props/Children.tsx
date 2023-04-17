type ChildProps = {
    children: React.ReactNode;
};

const Children = ({ children }: ChildProps) => {
    return <div>{children}</div>;
};
export default Children;
