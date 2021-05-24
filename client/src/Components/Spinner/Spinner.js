import './Spinner.scss';

const Spinner = () => {
    return (
        <div className="spinner">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Spinner;