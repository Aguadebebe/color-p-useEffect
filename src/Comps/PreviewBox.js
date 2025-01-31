import { useEffect } from "react";

const PreviewBox = ({ color }) => {

    useEffect(() => {
      document.body.style.backgroundColor = color;
    }, [color]);
    
    return(
        <div> colorName: {color} </div>
    );
};

export default PreviewBox;
