
const DarkModeHandler = (mode: string, Color: string) => 
{
    if (Color === "#ffffff")
        Color = "#000000";
    else if (Color === "#000000")
        Color = "#ffffff";

    console.log("before : ", Color);
    // console.log (Color === "#fff")
    // Color === "#fff" ? Color = "#000" : Color = "#000";
    // Color === "#000" ? Color = "#fff" : Color = "#000";
    // console.log(Color);
}

export default DarkModeHandler;