import React, { useEffect, useRef } from "react";

interface ViewPatientModelProps {
  isOpen: boolean;
  onClose: () => void;
  patient: any;
}

const ViewPatientModel: React.FC<ViewPatientModelProps> = ({
  isOpen,
  onClose,
  patient,
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
    <div className="fixed inset-0 z-50">
      {/* Gray Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50" />

      {/* Popup Content - Centered on the right side (excluding sidebar) */}
      <div className="fixed inset-0 flex items-center justify-center pl-64">
        <div
          ref={popupRef}
          className="bg-white rounded-lg shadow-lg px-[42px] py-[52px] w-full max-w-[834px] gap-5 relative z-50 flex flex-col gap-y-4"
        >
          <h2 className="text-[32px] font-bold mb-4 text-center">
            Patient Record
          </h2>

          {/* Patient Name */}
          <div className="flex flex-row justify-between items-center">
            <h3 className="text-[24px] font-bold mb-4">{patient?.name}</h3>
            <span
              className={`px-5 py-1 rounded-full text-xs font-semibold ${
                patient.status === "Discharged"
                  ? "bg-tertiary-green bg-opacity-20 text-tertiary-green"
                  : patient.status === "Awaiting surgery"
                  ? "bg-blue-500 bg-opacity-20 text-blue-500"
                  : "bg-red-transparent text-tertiary-red"
              }`}
            >
              {patient.status}
            </span>
          </div>

          {/* History Section */}
          <div className="flex flex-col gap-y-4">
            <label
              className="px-4 text-xl font-normal bg-white"
              htmlFor="history"
            >
              History
            </label>
            <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-[17px]">
              <p className="w-full text-base font-normal">
                Lorem ipsum dolor sit amet consectetur. Sit ac dolor ultricies
                elit tincidunt id at. Consectetur sed id tincidunt consequat
                feugiat aenean. Sed aliquet nulla donec molestie aliquam donec
                ullamcorper. Turpis velit eget feugiat tincidunt nec dignissim.
              </p>
            </div>
          </div>

          {/* Prescription Section */}
          <div className="flex flex-col gap-y-4">
            <label
              className="px-4 text-xl font-normal bg-white"
              htmlFor="prescription"
            >
              Prescription
            </label>
            <div className="relative border border-gray-300 rounded-md">
              <table className="w-full text-sm  border-collapse">
                <thead>
                  <tr className="">
                    <th className="py-3 px-4 text-left font-medium text-sm  border border-gray-300">
                      Medicine
                    </th>
                    <th className="py-3 px-4 text-center font-medium text-sm  border border-gray-300">
                      Quantity
                    </th>
                    <th className="py-3 px-4 text-center font-medium text-sm  border border-gray-300">
                      Dosage
                    </th>
                    <th className="py-3 px-4 text-center font-medium text-sm  border border-gray-300">
                      Comments
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 text-left text-base  border border-gray-300">
                      Panadol
                    </td>
                    <td className="py-3 px-4 text-center text-base  border border-gray-300">
                      03
                    </td>
                    <td className="py-3 px-4 text-center text-base  border border-gray-300">
                      01 + 01 + 01
                    </td>
                    <td className="py-3 px-4 text-center text-base  border border-gray-300">
                      In case of pain
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-left text-base  border border-gray-300">
                      Panadol
                    </td>
                    <td className="py-3 px-4 text-center text-base  border border-gray-300">
                      03
                    </td>
                    <td className="py-3 px-4 text-center text-base  border border-gray-300">
                      01 + 01 + 01
                    </td>
                    <td className="py-3 px-4 text-center text-base  border border-gray-300">
                      In case of pain
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-left text-base  border border-gray-300">
                      Panadol
                    </td>
                    <td className="py-3 px-4 text-center text-base  border border-gray-300">
                      03
                    </td>
                    <td className="py-3 px-4 text-center text-base  border border-gray-300">
                      01 + 01 + 01
                    </td>
                    <td className="py-3 px-4 text-center text-base  border border-gray-300">
                      In case of pain
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Close Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={onClose}
              className="py-3 px-16 rounded-full bg-yellow text-white font-bold text-lg hover:bg-yellow-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPatientModel;
