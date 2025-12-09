import { useState } from "react"
import "../../styles/index.css"


const Luces = () => {

    const [luzOnRojo, setLuzOnRojo] = useState(false)
    const [luzOnAmarillo, setLuzOnAmarillo] = useState(false)
    const [luzOnVerde, setLuzOnVerde] = useState(false)


    const handleClickRojo = () => {

        setLuzOnRojo(!luzOnRojo)
        setLuzOnAmarillo(false)
        setLuzOnVerde(false)


    }

    const handleClickAmarillo = () => {

        setLuzOnAmarillo(!luzOnAmarillo)
        setLuzOnRojo(false)
        setLuzOnVerde(false)



    }

    const handleClickVerde = () => {

        setLuzOnVerde(!luzOnVerde)
        setLuzOnAmarillo(false)
        setLuzOnRojo(false)




    }



    console.log("soy luz roja! ---->", luzOnRojo);
    console.log("soy luz amarilla ---->", luzOnAmarillo);
    console.log("soy luz verde! ---->", luzOnVerde);





    return (
        <div className="wrapper">
            <div className="palito">
            </div>
            <div className="semaforo">

                <div className={luzOnRojo === true ? "iluminarRojo" : "rojo"}
                    onClick={handleClickRojo}>
                </div>

                <div className={luzOnAmarillo === true ? "iluminarAmarillo" : "amarillo"}
                    onClick={handleClickAmarillo}>

                </div>

                <div className={luzOnVerde === true ? "iluminarVerde" : "verde"}
                    onClick={handleClickVerde}>

                </div>
            </div>
        </div>
    )
}

export default Luces