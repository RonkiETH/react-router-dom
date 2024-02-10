import { useParams, useNavigate } from "react-router-dom"

export function ProductoDetalle({ productos }) {

    const navigate = useNavigate();
    const { id } = useParams();

    const producto = productos.find((producto) => producto.id === parseInt(id));

    const handleGoBack = () => {
        navigate(-1);
    }
    
    return (
        <section>
            <h1>Detalle del Producto</h1>
            <h2>{producto.nombre}</h2>
            <h3>{producto.id}</h3>
            <h4>${producto.precio}</h4>
            <button onClick={handleGoBack}>Regresar</button>
        </section>
    )
}