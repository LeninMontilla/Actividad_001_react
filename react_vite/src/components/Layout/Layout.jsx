import React from "react";

// Creamos una plantilla por defecto para poder recorrer nuestras
// vistas o paginas sobre un mismo layout o diseño, (Opcional)

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center mt-16  bg-green-500">
      {children}
    </div>
  );
};

export default Layout;