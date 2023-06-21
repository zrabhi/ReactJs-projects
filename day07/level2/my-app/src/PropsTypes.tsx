



type data = {
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
}
type HeaderContentProp  = {
    data: data;
}

type Button = {
    onClick: () => void;
}

export type PropsType = {
    Footer: Footer;
    HeaderContentProp: HeaderContentProp;
    data: data;
    Button: Button;
};
  

export default PropsType;