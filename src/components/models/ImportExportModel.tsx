import React, { useEffect, useRef } from "react";

interface ImportExportModelProps {
  isOpen: boolean;
  onClose: () => void;
}

const ImportExportModel: React.FC<ImportExportModelProps> = ({
  isOpen,
  onClose,
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
          className="bg-white rounded-lg shadow-lg px-[42px] py-[52px] w-full max-w-[834px] relative z-50 flex flex-col gap-y-4"
        >
          <h2 className="text-[32px] font-bold mb-4 text-center">
            Import/Export Data
          </h2>

          {/* Buttons */}
          <div className="flex justify-center gap-x-4 mt-6">
            <button className="py-3 px-6 rounded-full bg-yellow text-white font-bold text-[32px] hover:bg-yellow-600 transition flex items-center gap-x-2">
              <img
                src="/public/import-data.svg"
                alt="Import"
                className="w-[80px] h-[80px]"
              />
              Import Data
            </button>
            <button className="py-3 px-6 rounded-full bg-yellow text-white font-bold text-[32px] hover:bg-yellow-600 transition flex items-center gap-x-2">
              <img
                src="/public/export-data.svg"
                alt="Export"
                className="w-[80px] h-[80px]"
              />
              Export Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportExportModel;
