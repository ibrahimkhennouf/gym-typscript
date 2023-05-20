export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourClasses",
  ContactUs = "contactUs",
}

export interface IBenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
