import { Mode } from "fs";

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

type mode = 
{
  mode: string;
  BackGroundColor: string
  OnClick :  () => void;
  Color: string;
}

type Prop = 
{
  data: Userdata;
  mode: mode;
};

export default Prop;