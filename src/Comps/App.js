 import ColorPicker from "./ColorPicker";
 import PreviewBox from "./PreviewBox";
 import {useState} from "react";
  

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const colors = [
    { id: 0, title: "purple" },
    { id: 1, title: "red"},
    { id: 2, title: "green" },
    { id: 3, title: "blanchedalmond"},
    { id: 4, title: "orange"},
    { id: 5, title: "blue"},
  ];

  const handlePick = () => {
      const nextIndex = (currentIndex + 1) % colors.length;
      setCurrentIndex(nextIndex);
  };

  const currentColor = colors[currentIndex].title;

  return (
     <div>
       <ColorPicker 
        handlePick={handlePick} 
       />
       <PreviewBox 
        color={currentColor}
       />
       <div style={{ fontFamily: "sans serif", fontSize: "3.5em"}}>COLOR PICKER APP</div>
     </div>
  );
};

export default App;

/**const handlePick = () => {
      const nextIndex = (currentIndex + 1) % colors.length;
      setCurrentIndex(nextIndex);
      document.body.style.backgroundColor = colors[nextIndex].title;
  }; */ //This works in without the use effect. But it updates the DOM directly when the page renders.
// which is not ideal best practices for React.