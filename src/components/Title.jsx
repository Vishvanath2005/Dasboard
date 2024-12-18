import React from "react";

const Title = ({
  title,
  onOpen,
  showbutton = true,
  showaccessbutton = false,
}) => {

  return (
    <div className="flex  justify-between items-center my-8 px-2">
      <p className="text-4xl font-Exo font-semibold">{title}</p>
      {showbutton && (
        <button
          className="border px-6 py-2 rounded-md bg-orange text-lg text-white font-Source_Sans_Pro"
          onClick={onOpen}
        >
          Add {title}
        </button>
      )}
      {showaccessbutton && (
        <button
          className="border px-6 py-2 rounded-md bg-orange text-lg text-white font-base"
        >
          Add Access
        </button>
      )}
    </div>
  );
};

export default Title;
