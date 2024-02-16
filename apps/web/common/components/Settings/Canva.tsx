"use client";
import { ChevronDown } from "lucide-react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const Canva = () => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="mt-5 border-gray-200 border-b-2 pt-4 pb-4">
      <div className="font-semibold pb-2">
        What will you be using Canva for?
      </div>

      <Menu as="div" className="w-1/2 relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full bg-white px-3 py-2 border-gray-300 rounded border-2 text-gray-900 hover:bg-gray-50 justify-between items-center">
            <span>Small business</span>
            <ChevronDown className="h-5 w-5" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-black" : "text-black",
                      "block px-4 py-2 text-sm",
                    )}
                  >
                    Large Company
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-black" : "text-black",
                      "block px-4 py-2 text-sm",
                    )}
                  >
                    Student
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-black" : "text-black",
                      "block px-4 py-2 text-sm",
                    )}
                  >
                    Personal
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-black" : "text-black",
                      "block px-4 py-2 text-sm",
                    )}
                  >
                    Teacher
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
export default Canva;
