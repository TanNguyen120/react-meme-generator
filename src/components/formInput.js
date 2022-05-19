import { FcFrame } from 'react-icons/fc';
import { useState } from 'react';
import data from './probdata';


export default function FormInput() {
    const [imgUrl, setImgUrl] = useState('./meme1.jpg');
    const clickHandler = () => {
        const newImg = data[Math.floor(Math.random() * data.length)];
        setImgUrl(newImg.url);
    }
    return (
        <div className='webContend'>
            <div className="form-input">


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
            </div >
            <div className="show-meme">
                <img src={imgUrl} alt="meme-img" />
            </div>
        </div>

    );
}