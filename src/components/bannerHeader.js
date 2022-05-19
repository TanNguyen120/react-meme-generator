export default function BannerHeader(props) {
    return (
        <div className="banner-header">
            <div className="banner-header-image">
                <img src={props.image} alt={props.alt} />
            </div>
            <div className="banner-header-text">
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </div>
            <div className="banner-header-link">
                <a href={props.link}>Best Meme Click Here</a>
            </div>
        </div>
    );
}