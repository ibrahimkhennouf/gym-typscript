import Link from "@/scenes/navbar/Link";
import { SelectedPage } from "./types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (page: SelectedPage) => void;
};

export default function MenuItems({ selectedPage, setSelectedPage }: Props) {
  const staticPageVals = Object.keys(SelectedPage);
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
