



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

export type PropsType = {
    Footer: Footer;
    HeaderContentProp: HeaderContentProp;
    data: data;
};
  

export default PropsType;