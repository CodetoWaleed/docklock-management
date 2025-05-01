import React, { useEffect, useRef } from "react";

interface BookNewTestModelProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const BookNewTestModel: React.FC<BookNewTestModelProps> = ({
  isOpen,
  onClose,
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
    <div className="fixed inset-0 z-50">
      {/* Gray Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50" />

      {/* Popup Content - Centered on the right side (excluding sidebar) */}
      <div className="fixed inset-0 flex items-center justify-center pl-64">
        <div
          ref={popupRef}
          className="bg-white rounded-lg shadow-lg px-[201px] pt-[28px] pb-[46px] w-full max-w-[1119px] relative z-50 flex flex-col gap-y-4"
        >
          <h2 className="text-[32px] font-bold mb-4 text-center">
            Patient Record
          </h2>

          {/* Form Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="relative">
              <label
                className="absolute -top-3 left-5 px-4 text-base font-bold bg-white z-10"
                htmlFor="firstName"
              >
                First Name
              </label>
              <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-3">
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter your first name"
                  className="w-full outline-none text-base font-normal"
                />
                <span className="!rounded-full bg-yellow flex p-[10px] items-center justify-center">
                  <img src="/public/User.svg" className="h-4 w-4" alt="" />
                </span>
              </div>
            </div>

            {/* Last Name */}
            <div className="relative">
              <label
                className="absolute -top-3 left-5 px-4 text-base font-bold bg-white z-10"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-[17px]">
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter your first name"
                  className="w-full outline-none text-base font-normal"
                />
                <img src="/public/User-gray.svg" className="h-4 w-4" alt="" />
              </div>
            </div>

            {/* DOB */}
            <div className="relative">
              <label
                className="absolute -top-3 left-5 px-4 text-base font-bold bg-white z-10"
                htmlFor="dob"
              >
                DOB
              </label>
              <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-[17px]">
                <input
                  type="text"
                  id="dob"
                  placeholder="1994/08/08"
                  className="w-full outline-none text-base font-normal"
                />
                <img src="/public/calendar.svg" alt="" />
              </div>
            </div>

            {/* Gender */}
            <div className="relative">
              <label
                className="absolute -top-3 left-5 px-4 text-base font-bold bg-white z-10"
                htmlFor="gender"
              >
                Gender
              </label>
              <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-[17px]">
                <select
                  id="gender"
                  className="w-full outline-none text-base font-normal bg-transparent"
                >
                  <option value="" disabled selected>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Select Test */}
            <div className="relative">
              <label
                className="absolute -top-3 left-5 px-4 text-base font-bold bg-white z-10"
                htmlFor="test"
              >
                Select Test
              </label>
              <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-[17px]">
                <select
                  id="test"
                  className="w-full outline-none text-base font-normal bg-transparent"
                >
                  <option value="" disabled selected>
                    Blood CP etc
                  </option>
                  <option value="blood-cp">Blood CP</option>
                  <option value="urine-re">Urine R/E</option>
                  <option value="acr-bcr">ACR BCR</option>
                  <option value="cancer">Cancer</option>
                  <option value="typhoid">Typhoid</option>
                </select>
              </div>
            </div>

            {/* Contact Number */}
            <div className="relative">
              <label
                className="absolute -top-3 left-5 px-4 text-base font-bold bg-white z-10"
                htmlFor="contact"
              >
                Contact Number
              </label>
              <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-[17px]">
                <input
                  type="text"
                  id="contact"
                  placeholder="xxxxxxxxxxxx"
                  className="w-full outline-none text-base font-normal"
                />
                <img src="/public/phone.svg" alt="" />
              </div>
            </div>

            {/* Insurance No */}
            <div className="relative">
              <label
                className="absolute -top-3 left-5 px-4 text-base font-bold bg-white z-10"
                htmlFor="insurance"
              >
                Insurance No.
              </label>
              <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-[17px]">
                <input
                  type="text"
                  id="insurance"
                  placeholder="Enter your first name"
                  className="w-full outline-none text-base font-normal"
                />
                <img src="/public/shield.svg" alt="" />
              </div>
            </div>

            {/* Referred Doctor */}
            <div className="relative">
              <label
                className="absolute -top-3 left-5 px-4 text-base font-bold bg-white z-10"
                htmlFor="doctor"
              >
                Referred Doctor
              </label>
              <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-[17px]">
                <input
                  type="text"
                  id="doctor"
                  placeholder="Enter your first name"
                  className="w-full outline-none text-base font-normal"
                />
                <img src="/public/User-gray.svg" className="h-4 w-4" alt="" />
              </div>
            </div>
          </div>

          {/* Additional Requirement (Brief History) */}
          <div className="relative mt-6">
            <label
              className="absolute -top-3 left-5 px-4 text-base font-bold bg-white z-10"
              htmlFor="additionalRequirement"
            >
              Additional Requirement
            </label>
            <div className="relative flex items-center border border-gray-300 rounded-md px-[18px] py-[17px]">
              <textarea
                id="additionalRequirement"
                placeholder="Brief history"
                className="w-full outline-none text-base font-normal resize-none h-24"
              />
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
    </div>
  );
};

export default BookNewTestModel;
