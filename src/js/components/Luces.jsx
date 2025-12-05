import { useState } from "react"



const Luces = () => {

    const [luzOnRojo, setLuzOnRojo] = useState(null)
    const [luzOnAmarillo, setLuzOnAmarillo] = useState(null)
    const [luzOnVerde, setLuzOnVerde] = useState(null)

    const [contadorLuzRojo, setContadorLuzRojo] = useState(0)
    const [contadorLuzAmarillo, setContadorLuzAmarillo] = useState(0)
    const [contadorLuzVerde, setContadorLuzVerde] = useState(0)

    const handleClickRojo = () => {

        setContadorLuzRojo(contadorLuzRojo + 1)
        setLuzOnRojo(true)
        setLuzOnAmarillo(false)
        setLuzOnVerde(false)
        if (contadorLuzRojo === 1) {
            setLuzOnRojo(false)
            setContadorLuzRojo(0)
            setContadorLuzAmarillo(0)
            setContadorLuzVerde(0)
        }
    }

    const handleClickAmarillo = () => {
        setContadorLuzAmarillo(contadorLuzAmarillo + 1)
        setLuzOnAmarillo(true)
        setLuzOnRojo(false)
        setLuzOnVerde(false)
        if (contadorLuzAmarillo === 1) {
            setLuzOnAmarillo(false)
            setContadorLuzAmarillo(0)
            setContadorLuzRojo(0)
            setContadorLuzVerde(0)
        }
    }

    const handleClickVerde = () => {
        setContadorLuzVerde(contadorLuzVerde + 1)
        setLuzOnVerde(true)
        setLuzOnAmarillo(false)
        setLuzOnRojo(false)

        if (contadorLuzVerde === 1) {
            setLuzOnVerde(false)
            setContadorLuzVerde(0)
            setContadorLuzRojo(0)
            setContadorLuzAmarillo(0)
        }

    }



    console.log("soy luz roja! ---->", luzOnRojo + "      soy----> ", contadorLuzRojo);
    console.log("soy luz amarilla ---->", luzOnAmarillo + "       soy---->", contadorLuzAmarillo);
    console.log("soy luz verde! ---->", luzOnVerde + "        soy---->", contadorLuzVerde);
    




    return (
        <div className="text-center">
            <div className="bg-danger" onClick={handleClickRojo}>
                <p>Quiero ser un circulo uwu</p>
            </div>
            <div className="bg-warning" onClick={handleClickAmarillo}>
                <p>Quiero ser un circulo uwu</p>
            </div>
            <div className="bg-success" onClick={handleClickVerde}>
                <p>Quiero ser un circulo uwu</p>
            </div>
        </div>
    )
}

export default Luces