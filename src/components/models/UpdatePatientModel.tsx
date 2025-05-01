import React, { useEffect, useRef } from "react";

interface UpdatePatientModelProps {
  isOpen: boolean;
  onClose: () => void;
  patient: any;
  onSave: () => void;
}

const UpdatePatientModel: React.FC<UpdatePatientModelProps> = ({
  isOpen,
  onClose,
  patient,
  onSave,
}) => {
  const popupRef = useRef<HTMLDivElement>(null);

  // Handle outside click to close popup
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Gray Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50" />

      {/* Popup Content */}
      <div
        ref={popupRef}
        className="bg-white rounded-lg shadow-lg px-[42px] py-[52px] w-full max-w-[834px] relative z-50 flex flex-col gap-y-4"
      >
        <h2 className="text-[32px] font-bold mb-4 text-center">
          Update Patient Record
        </h2>

        {/* Update Record */}
        <div className="mb-4 relative">
          <label
            className="absolute -top-3 left-5 px-4 text-base font-bold bg-white z-10"
            htmlFor="updateRecord"
          >
            Update Record
          </label>
          <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-[17px]">
            <textarea
              id="updateRecord"
              placeholder="Brief history"
              className="w-full outline-none text-base font-normal resize-none h-24"
            />
          </div>
        </div>

        {/* Update Medication */}
        <div className="mb-4 relative">
          <label
            className="absolute -top-3 left-5 px-4 text-base font-bold bg-white z-10"
            htmlFor="updateMedication"
          >
            Update Medication
          </label>
          <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-[17px]">
            <textarea
              id="updateMedication"
              placeholder="Brief history"
              className="w-full outline-none text-base font-normal resize-none h-24"
            />
          </div>
        </div>

        <div className="flex flex-row gap-x-5">
          {/* Change Ward */}
          <div className="mb-4 relative w-full">
            <label
              className="absolute -top-3 left-5 px-4 text-base font-bold bg-white z-10"
              htmlFor="changeWard"
            >
              Change Ward
            </label>
            <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-[17px]">
              <select
                id="changeWard"
                className="w-full outline-none text-base font-normal bg-transparent"
                defaultValue=""
              >
                <option value="" disabled>
                  Select ward
                </option>
                <option value="orthopedic">Orthopedic</option>
                <option value="cardiology">Cardiology</option>
                <option value="neurology">Neurology</option>
              </select>
            </div>
          </div>

          {/* Change Status */}
          <div className="mb-4 relative w-full">
            <label
              className="absolute -top-3 left-5 px-4 text-base font-bold bg-white z-10"
              htmlFor="changeStatus"
            >
              Change Status
            </label>
            <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-[17px]">
              <select
                id="changeStatus"
                className="w-full outline-none text-base font-normal bg-transparent"
                defaultValue="Discharge"
              >
                <option value="Discharge">Discharge</option>
                <option value="Awaiting surgery">Awaiting surgery</option>
                <option value="On treatment">On treatment</option>
              </select>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={onSave}
            className="py-3 px-16 rounded-full bg-yellow text-white font-bold text-lg hover:bg-yellow-600 transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePatientModel;
