import { useState } from "react";


const Check = () => {
    const [cat, setCat] = useState(false);
    const [dog, setDog] = useState(false);

    const handleChangeCat = () => {

        setCat(!cat);
    };
    const handleChangeDog = () => {

        setDog(!dog);
    };

    return (
    <div>
        <div>
            <input type="checkbox" onChange={handleChangeCat}/>
            <label htmlFor="katt">Katt</label>
        </div>

        <div>
            <input type="checkbox" onChange={handleChangeDog}/>
            <label htmlFor="hund">Hund</label>
        </div>
        <p>{cat && "Katt"} {dog && "Hund"}</p>
    </div>
    )
};

export default Check;