function WelcomeDialog() {
    return (
        <FancyBorder>
            <h1 className="Dialog-title">Welcome</h1>
            <p>Thank you for visiting our website</p>
        </FancyBorder>
    );
}

export default WelcomeDialog;

function FancyBorder(props) {
    return <div>{props.children}</div>;
}
