import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import cn from "classnames";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function DropdownMenu({
  trigger,
  items,
}: {
  trigger: React.ReactNode;
  items: { name: string; url: string }[];
}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>{trigger}</Menu.Button>
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {/* <div className="px-4 py-3">
            <p className="text-sm">Signed in as</p>
            <p className="truncate text-sm font-medium text-gray-900">
              tom@example.com
            </p>
          </div> */}
          <div className="py-1">
            {items.map((item, i) => (
              <Menu.Item key={i}>
                {({ active }) => (
                  <Link
                    href={item!.url || "#"}
                    className={cn(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  type="submit"
                  className={cn(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full px-4 py-2 text-left text-sm"
                  )}
                  onClick={() => signOut({ callbackUrl: "/" })}
                >
                  Logout
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
