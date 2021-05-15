import './Spinner.css';

const Spinner = () => {
    return (
        <div className="spinner">
            <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Spinner;