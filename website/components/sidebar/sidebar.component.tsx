import { Icon } from "@iconify/react";
import cn from "classnames";
import Link from "next/link";
import { useSidebar } from "../../shared/hooks/useSidebar.hook";
import { menuItems, Item } from "../../shared/utils/menu-items";
import { Button } from "../button/button.component";

export const Sidebar = () => {
  const { open, toggle } = useSidebar();
  return (
    <div className="fixed inset-0 overflow-hidden z-50 pointer-events-none">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          onClick={() => toggle()}
          className={cn(
            "absolute inset-0 bg-gray-700 bg-opacity-75 transition-opacity ease-in-out duration-500",
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        ></div>
        <div
          className={cn(
            "fixed inset-y-0 right-0 max-w-full flex transform transition ease-in-out duration-500 sm:duration-700 pointer-events-auto",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="relative w-screen max-w-md">
            <div className="h-full flex flex-col py-6 bg-white/80 shadow-xl overflow-y-auto">
              <div className="flex justify-end pt-2 mr-8">
                <Button
                  className="block md:hidden"
                  type="icon"
                  onClick={() => toggle()}
                >
                  <Icon icon="eva:close-outline" style={{ fontSize: "20px" }} />
                </Button>
              </div>
              <div className="p-2 h-full flex justify-center items-center">
                <nav>
                  <ul className="flex flex-col justify-center md:justify-end items-center h-full w-full gap-4">
                    {menuItems.map((item: Item, i: number) => (
                      <li key={i} className="mx-2">
                        <Link href={item.route} passHref={true}>
                          <Button
                            type="link"
                            as="a"
                            className="text-2xl"
                            onClick={() => toggle()}
                          >
                            {item.label}
                          </Button>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
