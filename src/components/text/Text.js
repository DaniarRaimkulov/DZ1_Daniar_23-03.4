import './Text.css';

export default function Text(props) {
    return (
        <div className="text-container">
            <div className="text-box">
                <h1 className="text-heading">{props.txt}</h1>
                <span className="text-description">{props.about}</span>
            </div>
        </div>
    );
}
