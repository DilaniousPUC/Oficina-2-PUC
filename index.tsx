type HelloWorldProps = {
    text: string;
};

const HelloWorld = (props: HelloWorldProps) => {
    return (
        <>
            <p>{props.text}</p>
        </>
    )
}

export default HelloWorld