import Link from "./Link";
import { SelectedPage } from "@/shared/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (page: SelectedPage) => void;
};

export default function MenuItems({ selectedPage, setSelectedPage }: Props) {
  const staticPageVals = ["Home", "Benefits", "Our Classes", "Contact Us"];
  return (
    <>
      {staticPageVals.map((page, idx: number) => {
        return (
          <Link
            page={page}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            key={idx}
          />
        );
      })}
    </>
  );
}
