import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (val: SelectedPage) => void;
};

function Benefit({ description, icon, title, setSelectedPage }: Props) {
  const handleClick = () => {
    setSelectedPage(SelectedPage.ContactUs);
  };

  return (
    <div className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full boder-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold ">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        href={`#${SelectedPage.ContactUs}`}
        onClick={handleClick}
      >
        Learn More
      </AnchorLink>
    </div>
  );
}

export default Benefit;
