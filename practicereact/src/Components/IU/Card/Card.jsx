import gatito from '../../../../src/images/gatito.jpg'
import './Card.css'
export const Card=()=>{
    return(
        <>
        <div className="divCatimage">
            <img clasName="imageCat" src={gatito} alt="" />
        </div>
        </>
    )
}