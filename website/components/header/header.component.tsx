import { Icon } from "@iconify/react";
import cn from "classnames";
import Link from "next/link";
import { createRef, useEffect } from "react";
import { useSidebar } from "../../shared/hooks/useSidebar.hook";
import { menuItems, Item } from "../../shared/utils/menu-items";
import { Button } from "../button/button.component";
import { Logo } from "../logo/logo.component";

export const Header = () => {
  const navBarRef = createRef<HTMLElement>();
  useEffect(() => {
    scrollHandler();
    document.addEventListener("scroll", scrollHandler);
    return () => document.removeEventListener("scroll", scrollHandler);
  });

  const scrollHandler = () => {
    const isTop = window.scrollY < 100;
    const staticClass = "bg-transparent";
    const scrollClass = "bg-white/90";
    if (isTop) {
      navBarRef.current?.classList.add(staticClass);
      navBarRef.current?.classList.remove(scrollClass);
    } else {
      navBarRef.current?.classList.remove(staticClass);
      navBarRef.current?.classList.add(scrollClass);
    }
  };

  const { toggle } = useSidebar();

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 pt-4 flex justify-center">
      <nav
        className="h-16 flex w-full justify-center items-center transition duration-200 ease-out rounded-md max-w-6xl px-4"
        ref={navBarRef}
      >
        <Logo />
        <span className="flex grow"></span>
        <ul className="hidden md:flex justify-center md:justify-end items-center h-full w-full">
          {menuItems.map((item: Item, i: number) => (
            <li key={i} className="mx-2">
              <Link href={item.route} passHref={true}>
                <Button type="link" as="a">
                  {item.label}
                </Button>
              </Link>
            </li>
          ))}
          <li>
            <Button
              type="icon"
              as="a"
              href="https://github.com/polyflix"
              rel="noopener"
              target="_blank"
            >
              <Icon
                icon="ant-design:github-outlined"
                style={{ fontSize: "20px" }}
              />
            </Button>
          </li>
        </ul>
        <Button
          className="block md:hidden"
          type="icon"
          onClick={() => toggle()}
        >
          <Icon icon="ant-design:menu-outlined" style={{ fontSize: "20px" }} />
        </Button>
      </nav>
    </header>
  );
};
