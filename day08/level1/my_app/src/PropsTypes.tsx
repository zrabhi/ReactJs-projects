
type Userdata = {
  Welcome: string;
  Title: string;
  Subtitle: string;
  author: {
    FirstName: string;
    LastName: string;
  };
  date: string;
  divStyle: React.CSSProperties;
};

type Footer = {
  date: Date;
  footerStyle: React.CSSProperties;
};
type HeaderContentProp = {
  data: Userdata;
};

type Button = {
  text: string;
  onClick: () => void;
  style: React.CSSProperties;
};

type MainContent = {
  techs: string[];
  greetPeople: () => void;
  handleTime: () => void;
  loggedIn: boolean;
  handleLogin: () => void;
  message: string;
  cardStyle: React.CSSProperties
};

type HeaderContent = {
  data: Userdata;
};

type techs = {
  techs: string[];
};
type Message = {
  message: string;
};
export type PropsType = {
  HeaderContent: HeaderContent;
  Message: Message;
  HeaderContentProp: HeaderContentProp;
  Footer: Footer;
  data: Userdata;
  Button: Button;
  MainContent: MainContent;
  techs: techs;
  date: string;
};

export default PropsType;
