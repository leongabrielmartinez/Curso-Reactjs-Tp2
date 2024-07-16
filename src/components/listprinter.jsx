import React, { useState } from "react";
import "./listprinter.css";


function ListPrinter({ nombre, precio, id, sku, descripcion, foto }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  function handleClick() {
    setShowFullDescription(!showFullDescription);
  }

  return (
    <div className="listPrinterBody">
      <img src={foto} alt="z" width={200} height={200} />
      <div className="listPrinterText">
        <h3>{nombre}</h3>
        <p>
          {showFullDescription ? descripcion : `${descripcion.slice(0, 25)}...`}
        </p>
        <p>
          Precio: $ {precio} <br /> Codigo del producto: {sku}
        </p>
        <button onClick={handleClick}>
          {showFullDescription ? "Mostrar menos" : "Ver detalles"}
        </button>
      </div>
    </div>
  );
}

export default ListPrinter;
