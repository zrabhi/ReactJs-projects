type Userdata = {
  Welcome: string;
  Title: string;
  Subtitle: string;
  author: {
    FirstName: string;
    LastName: string;
  };
  date: string;
  BackGround: string;
  color: string;
};

type Footer = {
    date: string;
    background: string;
    color: string;
};
type HeaderContentProp = {
  data: Userdata;
};

type Button = {
  onClick: () => void;
};
type Contries = {
 
    name: string;
    capital: string;
    language: string[];
    population: number;
    flag: string;
    currency: string
};

export type PropsType = {
  Footer: Footer;
  HeaderContentProp: HeaderContentProp;
  data: Userdata;
  Button: Button;
  Contries: Contries;
};

export default PropsType;
