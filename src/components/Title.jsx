import React, { useState } from "react";

const Title = ({
  title,
  onOpen,
  showbutton = true,
  showaccessbutton = false,
  showassign_dd = false,
  showfollowup = false,
  assignOptions = [],
  onAssignChange,
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleAssignChange = (event) => {
    const selected = event.target.value;
    setSelectedOption(selected);
    if (onAssignChange) {
      onAssignChange(selected);
    }
  };

  return (
    <div className="flex z-10 justify-between items-center my-4 sm:px-2">
      <p className="sm:text-4xl text-xl font-Exo font-semibold">{title}</p>
      {showbutton && (
        <button
          className="border sm:px-6 sm:py-2 rounded-md bg-orange  text-sm p-1 sm:text-lg text-white font-Source_Sans_Pro"
          onClick={onOpen}
        >
          Add {title}
        </button>
      )}
      {showaccessbutton && (
        <button className="border sm:px-6 px-3 sm:py-2 py-1   rounded-md bg-orange text-lg text-white font-base">
          Add Access
        </button>
      )}
      {showassign_dd && (
        <div className="flex items-center space-x-2">
          <label htmlFor="assign-dropdown" className="text-gray-500">
            Assign
          </label>
          <select
            id="assign-dropdown"
            value={selectedOption}
            onChange={handleAssignChange}
            className="border rounded-md px-3 py-1 text-gray-600 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              name
            </option>
            {assignOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}
      {showfollowup && (
        <button
          className="border px-6 py-2 rounded-md bg-orange text-base text-white font-Source_Sans_Pro"
          onClick={onOpen}
        >
          Add Follow-up
        </button>
      )}
    </div>
  );
};

export default Title;
