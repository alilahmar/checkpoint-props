import React from "react";
import "./App.css";
import Introduction from "./profile/component";

function App() {
  
  function handleMe(name) {
    alert('this is' +' ' + (name) +' ' + 'profile');
  }
  const JenniferProps = {
    fullName: "Jennifer douda",
    Fontcolor: "red",
    biog:
      "born February 19, 1964 is an American biochemist known for her pioneering work in CRISPR gene editing, for which she was awarded the 2020 Nobel Prize in Chemistry After her PhD, she held research fellowships in molecular biology at the Massachusetts General Hospital and in genetics at Harvard Medical School.From 1991 to 1994, she was Lucille P. Markey Postdoctoral Scholar in Biomedical Science at the University of Colorado Boulder, where she worked with Thomas Cech.",
    profession: "biochemist",
  };

  const WilliamProps = {
    fullName:"William Shakespeare",
    Fontcolor:"green",
    biog:"was a renowned English poet, playwright, and actor born in 1564 in Stratford. His birthday is most commonly celebrated on 23 April, which is also believed to be the date he died in 1616.Shakespeare was a prolific writer during the Elizabethan and Jacobean ages of British theatre.",
    profession:"English playwright, poet, and actor"
  };
  return (
    <div className="App">
      <Introduction
        fullName={JenniferProps.fullName}
        Fontcolor={JenniferProps.Fontcolor}
        biog={JenniferProps.biog}
        profession={JenniferProps.profession}
        handleName={handleMe(JenniferProps.fullName)}
      >
        <img src="/source/jennifer.jpg" alt="jnf" width="300" height='300' />
      </Introduction>
      <Introduction
        fullName={WilliamProps.fullName}
        Fontcolor={WilliamProps.Fontcolor}
        biog={WilliamProps.biog}
        profession={WilliamProps.profession} >
        <img src="/source/WILLIAM.jpg" alt="sheks" width='300' height='300' />
      </Introduction>
    </div>
  );
}
import { FaBeer } from 'react-icons/fa';
class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}

export default App;
