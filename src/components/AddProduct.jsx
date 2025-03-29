import { useState } from "react";

export const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
    category_id: "",
    supplier_id: ""
  });

  const [isOpen, setIsOpen] = useState(false);  // Estado para controlar la visibilidad del modal

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);  // Cambiar el estado de visibilidad del modal
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        className="text-white bg-blue-900 hover:bg-blue-950 focus:outline-none focus:ring-4 focus:ring-blue-950 font-medium rounded-xl px-5 py-2.5 sm:w-aut"
        type="button"
      >
        <i className="mr-2 fa-lg fa-solid fa-plus"></i> <span>Añadir productos</span>
      </button>

      {/* Modal */}
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden={!isOpen}  // Cambiar visibilidad según el estado
        className={`${isOpen ? '' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="modal-content">
          <h2>Contenido del Modal</h2>
          <button onClick={toggleModal}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};
