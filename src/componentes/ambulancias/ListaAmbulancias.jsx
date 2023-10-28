import React from "react";

const ListaAmbulancias = ({ Ambulancia }) => {
  return (
    <tr className="grid grid-cols-[repeat(12,_1fr)] grid-rows-1 gap-4 justify-center items-center">
      <td>trujillo</td>
      <td>el porvenir</td>
      <td>1</td>
      <td>12a3df</td>
      <td>xxxx</td>
      <td>134ds</td>
      <td>toyota</td>
      <td>modeloX</td>
      <td>1244</td>
      <td>si</td>
      <td>bueno</td>
      
      
      <td>
        <button
          variant="danger"
          size="sm"
          className="me-1"
          // onClick={() => deleteSong(song.id)}
        >
          Delete
        </button>
        <button variant="warning" size="sm"
        //  onClick={() => selectSong(song)}
         >
          Update
        </button>
      </td>
    </tr>
  );
};

export default ListaAmbulancias;
