import React from "react";

function Error() {
  return (
    <div className="error-404 d-flex justify-content-start align-items-end p-2">
      <div>
        <div>
          <br />
          <p className="text-warning bg-dark border border-warning rounded p-2">
            ¡Vaya! Algo salió mal.
            <br />
            <br />
            Trata de volver a cargar esta página o no dudes en contactar con
            nosotros si el problema persiste.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Error;
