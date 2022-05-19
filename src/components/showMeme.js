
export default function ShowMeme(props) {
    const { id, url } = props.probData[props.id];
    return (
        <div className="show-meme">
            <img src={url} alt="meme" />
        </div>
    );
}