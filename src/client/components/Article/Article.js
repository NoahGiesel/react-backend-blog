import React from 'react';
import "./Article.css"
import icon from '../../../images/Twitter-icon.png';

const  Article = () =>  {
    return (
      <div className="Article">
        <div className="informations">
            <h2>This twitter post is cool</h2>
        </div> 
        <p className="author">January 13 2021, by Noah Giesel </p>
        <br/>
        <div className="container">
            <div className="image-section">
                <img src={icon} alt="icon" />
            </div>
            <div className="text-section">
                <p>
                Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.

                </p>
             </div>
        </div> 
      </div>
    );
  }
  
  export default Article;
  