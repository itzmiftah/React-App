import React from 'react'
import Footer from './Footer';

export default function About(probs) { 

  return ( 

          <>
 
 
   <div className='container 'style={{color: probs.mode==='dark'? 'white' :'#042743', backgroundColor: probs.mode==='dark'? '#13778b' :'white'} }> 
     <div className="mt-5" >
     <h3>Know My Website</h3>

       <p> Certainly! Here's an example of how you can manipulate and modify text content using different operations:</p> 

      <h5>Original text:</h5><p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry."</p>

       <h5>Sentence Case: </h5><p>"Lorem ipsum is simply dummy text of the printing and typesetting industry."
      (The first letter of the sentence is capitalized, and the rest of the text is in lowercase.)</p>

      <h5> Uppercase:</h5> <p>"LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY."
      (All letters in the text are converted to uppercase.)</p>

     <h5>Lowercase:</h5> <p>"lorem ipsum is simply dummy text of the printing and typesetting industry."
        (All letters in the text are converted to lowercase.)</p>

     <h5>Clear Text: </h5><p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
       (No modifications made to the original text.)</p>

     <h5>Remove Extra Space:</h5><p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
       (Any additional spaces between words or characters are removed.)</p>

   <h5>Copy Text Content for Website:</h5><p>Copy Text Content for Website:</p>
 
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 
(The text is wrapped in HTML paragraph tags, which can be used to display the content on a website.)
Feel free to customize the operations based on your specific requirements or provide me with the actual text you'd like to modify, and I can assist you further!
</p>
    </div>  

      
     <h4> Sure! A text analyzer is a tool or software that analyzes the content of a given text and provides various insights and information about it. It can help in understanding the structure, sentiment, readability, and other characteristics of the text. Here are some common features and information that a text analyzer can provide:</h4> 

<h5>1. Word Count:</h5> <p>It determines the total number of words in the text, helping you assess the length or volume of the content.</p> 

<h5>2. Sentence Count:</h5> <p> It calculates the number of sentences in the text, which can be useful for evaluating the complexity or readability of the content.</p>

<h5>3. Readability Scores:</h5> <p>Text analyzers often provide readability scores such as the Flesch-Kincaid Readability Score, Gunning Fog Index, or Coleman-Liau Index. These scores indicate the readability level of the text based on factors like sentence length and word difficulty.</p>

<h5>4. Keyword Analysis:</h5> <p>It identifies the most frequent keywords or key phrases in the text. This can help you understand the main themes or topics covered in the content.</p>

<h5>5. Sentiment Analysis:</h5> <p>Text analyzers can determine the overall sentiment of the text, whether it is positive, negative, or neutral. This is done by analyzing the emotional tone of the words and sentences used.</p>

<h5>6. Part-of-Speech Tagging:</h5> <p>It assigns a grammatical category (noun, verb, adjective, etc.) to each word in the text, allowing for deeper analysis of the sentence structure and syntactic patterns.</p>

<h5>7. Named Entity Recognition:</h5> <p> It identifies and categorizes named entities such as people, organizations, locations, and dates mentioned in the text. This can be helpful for information extraction or topic classification.</p>

<h5>8. Language Detection:</h5> <p>Text analyzers can automatically detect the language in which the text is written. This is particularly useful when dealing with multilingual or diverse content.</p>

<h5>9. Read-Time Estimate:</h5> <p>By considering the average reading speed, a text analyzer can estimate the approximate time required to read the text.</p>

<h5>10. Summary Generation:</h5>  <p>Some advanced text analyzers can generate a concise summary or extractive summary of the text, capturing the main points and key information.

These are just a few examples of what a text analyzer can provide. The exact features and capabilities may vary depending on the specific tool or software being used..</p>
         
</div>

<div className='container'style={{color: probs.mode==='dark'? '#6c757d' :'#042743', backgroundColor: probs.mode==='dark'? '#13778b' :'white'} }> 
<Footer/>
</div>
 
          </>

  );
}
