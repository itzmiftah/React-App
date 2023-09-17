import React, {useState} from 'react'
import Footer from './Footer';

export default function TextForm(probs) {

    const handleUpClick = () => {
      let newText=text.toUpperCase();
      setText(newText);
      probs.showAlert("UpperCase enable","success");
    }

  const  toSentenceCase = () => {
    let newText=text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    setText(newText);
    probs.showAlert("Enable sentence case","success");
    }
   
    
    const handleLoClick = () => {
       let newText=text.toLocaleLowerCase();
       setText(newText);
       probs.showAlert("LowerCase enable","success");
     }

     const handleClearClick = () => {
       setText("");
      probs.showAlert("clear Text","success");
     }

     const handleCopy = ( ) => {
     let text =  document.getElementById('mybox');
     text.select();
     navigator.clipboard.writeText(text.value);
     probs.showAlert("Copy to Clipboard","success");
    }

    const handleExtraSpace = ( ) => {
      let newText= text.split(/[ ]+/);
      setText(newText.join(" "));
      probs.showAlert("Remove Extra Space ","success");

     }


    const handleOnChange = (event) => {
        setText(event.target.value);
      }

       
      const capitalizeWords = (str) => {
        
        let newText=text.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
         setText(newText);
         probs.showAlert("captalize ","success"); 
      };

           
    const [text,setText]=useState("");


    return (

    <>
      
      
     <div className="container" style={{color: probs.mode==='dark'? 'white' :'#042743' } } > 
     
       <h1> {probs.heading}</h1>

         <div className={`mb-2`}>
          <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" style={{color: probs.mode==='dark'? 'white' :'#042743', backgroundColor: probs.mode==='dark'? '#13778b' :'white'} }  rows="8" ></textarea>
        </div>
        <button
             type="button"
             className="inline-block rounded-full bg-primary mx-2 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]
                transition duration-150 ease-in-out hover:bg-primary-600 
               hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
                focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] 
                dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                 onClick={toSentenceCase}>Sentence Case
        </button>
        <button
  type="button"
  className="inline-block rounded-full bg-primary px-6 pb-2 mx-2 pt-2.5 text-xs font-medium uppercase leading-normal  text-white 
  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
  onClick={capitalizeWords}>Title Case
</button>
<button
  type="button"
  className="inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 mx-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d]
   transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 
   focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] 
   dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]
    dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
    onClick={handleUpClick}> Convert to UpperCase
</button>

    <button
  type="button"
  className="inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 mx-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64]
   transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] 
   focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700
    active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] 
    dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] 
    dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
    onClick={handleLoClick}> Convert to LowerCase
</button>      
    
<button
  type="button"
  className="inline-block rounded-full bg-warning px-6 pb-2 pt-2.5 mx-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b]
   transition duration-150 ease-in-out hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] 
   focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 
   active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)]
    dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] 
    dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)]"
    onClick={handleClearClick}>Clear Text
</button>
<button
  type="button"
  className="inline-block rounded-full bg-success btn-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] 
  transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]
   focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 
   active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]
    dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
    onClick={handleCopy}>Copy
</button>  

<button
  type="button"
  className="inline-block rounded-full bg-neutral-800 px-6 pb-2 pt-2.5 text-xs mx-2 font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] 
  transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)]
   focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)]
    dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 
    dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"
    onClick={handleExtraSpace}>Remove Extra Space 
</button>
           
       
           

         </div>

     <div className='container my-3' style={{color: probs.mode==='dark'? 'white' :'#042743'} }>
        <h1>Your Text Summary </h1>
         
         <p> {text.split (" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters </p>
          
         <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}  Minutes Read </p>

        <h3>Preview</h3>
        <p> {text.length>0?text: "Enter Something To Preview"} </p>
        

     </div>
  <div className='container'style={{color: probs.mode==='dark'? 'white' :'#042743'} } > 
   <Footer/>
   </div>

   </>  
 
  );
}
 
