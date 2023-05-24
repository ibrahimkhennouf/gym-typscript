import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import MenuItems from "./MenuItems";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (val: SelectedPage) => void;
};

function NavBar({ isTopOfPage, selectedPage, setSelectedPage }: Props) {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");
  const navBarBackground = !isTopOfPage
    ? "bg-primary-100 drop-shadow"
    : "bg-transparent";

  const handleClick = () => {
    setIsMenuToggled(!isMenuToggled);
  };
  return (
    <nav>
      <div
        className={`${navBarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side */}
            <img src={Logo} alt="logo" className="object-cover" />
            {/* right side  */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <MenuItems
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <p>signin</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    become a member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={handleClick}
              >
                <Bars3Icon className="w-6 h-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 w-[250px] h-full bg-primary-100 drop-shadow-lg">
          {/* CLOSE ICONE */}
          <div className="flex justify-end p-12">
            <button onClick={handleClick}>
              <XMarkIcon className="w-6 h-6 text-gray-400" />
            </button>
          </div>
          {/* Menu Items */}
          <div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
            <MenuItems
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
