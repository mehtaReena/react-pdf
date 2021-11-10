import React from 'react';
import './App.css';
import ReactToPdf from "react-to-pdf";
import jsPDF from 'jspdf';

function App() {

  const ref = React.createRef();
 

    const generatePDF = () => {
      var doc = new jsPDF('p', 'pt');  
      doc.setTextColor("brown");    
      doc.text(100, 50, 'Coffee Facts !')  
      doc.addImage("https://images.unsplash.com/photo-1546379753-abb7fd8cfb93?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29mZmVlJTIwY3VwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "JPEG", 100, 70, 180, 180);  

      doc.addFont('helvetica', 'normal')
      
      doc.text(100, 290, 'Coffee Lands :')
      doc.setTextColor(100);
      doc.setFontSize(12);
      doc.text(100, 315, "We all have our routines to get our coffee fixbwhether it be a  \n" +
      "homebrew or at a local cafe. we can be blissfully ignorant of the \n" +
      "efforts that  have gone  into providing us with that delicious hit of  \n" +
      "caffeine. Coffee Lands’ literature illustrates the ethical trade of coffee \n" +
       "and introduces us to the grinding work of kickstarting coffee production.")      

      
      doc.save('demo.pdf')
     
};
  return (
    <div className="App">


     
      
        <div className="box" ref={ref} >
          <img src="https://images.unsplash.com/photo-1546379753-abb7fd8cfb93?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29mZmVlJTIwY3VwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
           alt="" className="image"></img>      

        </div>


        <ReactToPdf targetRef={ref} filename="div-blue.pdf"  >
          {({ toPdf }) => (
            <button onClick={generatePDF} className="btn">Generate pdf</button>
          )}
        </ReactToPdf>

      </div>
    
  );
}

export default App;
