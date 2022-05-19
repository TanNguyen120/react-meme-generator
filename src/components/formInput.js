import { FcFrame } from 'react-icons/fc';



export default function FormInput() {
    const clickHandler = () => {
        alert('Form submitted!');
    }
    return (
        <form className="form-input">


            <input
                type="text"
                id="upper"
                name="upper-text"
                placeholder="Upper Text Of The Image"
            />


            <input
                type="text"
                id="bottom"
                name="bottom-text"
                placeholder="Bottom Text Of The Image"
            />

            <button type="submit" onClick={clickHandler}>New Image <FcFrame /> </button>

        </form >
    );
}