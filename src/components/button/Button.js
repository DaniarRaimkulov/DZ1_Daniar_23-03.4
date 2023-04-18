import './Buttons.css'

const Buttons = (props) => (
    <div className={'btnBlock'}>
        <div className={'container'}>
            <div className={'btnBox'}>
                {props.text}
            </div>
        </div>
    </div>
);

export default Buttons;
