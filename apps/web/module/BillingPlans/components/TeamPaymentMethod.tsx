/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/common/components/shadcn/ui/button";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition, RadioGroup } from "@headlessui/react";

const settings = [
  {
    imageUrl:
      "https://static.canva.com/web/images/934c2639d286967bdb29841f51225005.png",
  },
  {
    name: "Credit or debit card",
  },
  {
    imageUrl:
      "https://static.canva.com/web/images/edee8ac1c2c58cf974293a88a944b1e2.svg",
  },
  {
    name: "4242****4242",
    MasterCardImg: "https://www.svgrepo.com/show/303248/mastercard-2-logo.svg",
  },

  {
    name: "4242****4242",
    VisaImg:
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
  },

  {
    name: "4242****4242",
    AmExImg:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg",
  },

  {
    name: "4242****4242",
    DiscoverImg:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Discover_Card_logo.svg",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const TeamPaymentMethod = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState(settings[0]);
  const cancelButtonRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-left mb-4 pt-4">
      <div className="font-semibold text-lg">Billing Plans</div>
      <div className="font-semibold text-lg pt-4 pb-4">
        Payment Method for your Team: Personal
      </div>
      <div>
        <Button
          variant="link"
          className="p-0 mr-1 h-auto text-base"
          onClick={openModal}
        >
          Add a payment method
        </Button>
        so you can purchase premium images and vectors for ₱50 a piece.
      </div>
      <div className="pt-4">
        Canva credits
        <div className="pt-1">You have 0 Canva credits.</div>
      </div>

      {/* Payment Method Modal */}
      <Transition.Root show={isModalOpen}>
        <Dialog as="div" className="relative z-10" onClose={setIsModalOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 w-full z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="flex flex-col items-center relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                  <div className="absolute top-0 right-0 z-50">
                    <button
                      type="button"
                      className="bg-white rounded-full p-2 text-gray-600 hover:bg-gray-100 focus:outline-none"
                      onClick={closeModal}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="black"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div>
                    <div className="flex justify-center text-lg p-2 font-bold">
                      Add Payment Method
                    </div>

                    <div className="mt-3 text-center sm:mt-5">
                      <RadioGroup value={selected} onChange={setSelected}>
                        <RadioGroup.Label className="sr-only">
                          Privacy setting
                        </RadioGroup.Label>
                        <div className="-space-y-px rounded-md bg-white">
                          {settings.map((setting, settingIdx) => (
                            <RadioGroup.Option
                              key={setting.name}
                              value={setting}
                              className={({ checked }) =>
                                classNames(
                                  settingIdx === 0
                                    ? "rounded-tl-md rounded-tr-md"
                                    : "",
                                  settingIdx === settings.length - 1
                                    ? "rounded-bl-md rounded-br-md"
                                    : "",
                                  checked
                                    ? "z-10 border-indigo-200 bg-indigo-50"
                                    : "border-gray-200",
                                  "flex items-center relative cursor-pointer border p-4 focus:outline-none",
                                )
                              }
                            >
                              {({ checked }) => (
                                <>
                                  <span
                                    className={classNames(
                                      checked
                                        ? "bg-indigo-600 border-transparent"
                                        : "bg-white border-gray-300",
                                      "mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-full border flex items-center justify-center",
                                    )}
                                    aria-hidden="true"
                                  >
                                    <span className="rounded-full bg-white w-1.5 h-1.5" />
                                  </span>
                                  {setting.imageUrl && (
                                    <img
                                      src={setting.imageUrl}
                                      alt={setting.name}
                                      className="flex items-start h-auto w-20"
                                      style={{ paddingLeft: "8px" }}
                                    />
                                  )}
                                  {setting.MasterCardImg && (
                                    <img
                                      src={setting.MasterCardImg}
                                      alt={setting.name}
                                      className="flex items-start h-8 w-auto"
                                      style={{
                                        paddingLeft: "8px",
                                        paddingRight: "5px",
                                      }}
                                    />
                                  )}
                                  {setting.VisaImg && (
                                    <img
                                      src={setting.VisaImg}
                                      alt={setting.name}
                                      className="flex items-start h-auto w-12"
                                      style={{
                                        paddingLeft: "8px",
                                        paddingRight: "5px",
                                      }}
                                    />
                                  )}
                                  {setting.AmExImg && (
                                    <img
                                      src={setting.AmExImg}
                                      alt={setting.name}
                                      className="flex items-start h-auto w-10"
                                      style={{
                                        paddingLeft: "8px",
                                        paddingRight: "5px",
                                      }}
                                    />
                                  )}
                                  {setting.DiscoverImg && (
                                    <img
                                      src={setting.DiscoverImg}
                                      alt={setting.name}
                                      className="flex items-start h-auto w-12"
                                      style={{
                                        paddingLeft: "8px",
                                        paddingRight: "5px",
                                      }}
                                    />
                                  )}
                                  {!setting.imageUrl &&
                                    ![3, 4, 5, 6].includes(settingIdx) && (
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-credit-card flex justify-start items-center w-auto pr-1"
                                        style={{ paddingLeft: "8px" }}
                                      >
                                        <rect
                                          width="20"
                                          height="14"
                                          x="2"
                                          y="5"
                                          rx="2"
                                        />
                                        <line x1="2" x2="22" y1="10" y2="10" />
                                      </svg>
                                    )}

                                  <span className="ml-1 flex flex-col">
                                    <RadioGroup.Label
                                      as="span"
                                      className={classNames(
                                        checked
                                          ? "text-gray-800"
                                          : "text-black",
                                        "block text-sm font-medium",
                                      )}
                                    >
                                      {setting.name}
                                    </RadioGroup.Label>
                                  </span>
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                      <div className="mt-2">
                        <p className="text-sm text-gray-800">
                          This payment method will be available for all team
                          members with purchasing rights to use.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-3 mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3 w-1/3">
                    <Button
                      variant="default"
                      type="button"
                      className="inline-flex h-10 items-center  justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      onClick={() => setIsModalOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="default"
                      type="button"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Save
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default TeamPaymentMethod;
