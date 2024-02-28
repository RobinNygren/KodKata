

const RepeatText = ({ count, text }) => {
    const pTags = Array.from({length: count}, (index) => (
        <p key={index}>{text}</p>
    ));
    return <div>{pTags}</div>
};

export default RepeatText;