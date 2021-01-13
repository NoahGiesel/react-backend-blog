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
                
                <p>Loredkopfdosif elkmgerklr gkleg elkmrdgmkleg  gelmkrgklmre mgkerlkmfmlkrmmk remklgklmrem merklm relkmeglkmerlkmg lkmerg lkmergkl re gmermkgl </p>
            </div>
        </div> 
      </div>
    );
  }
  
  export default Article;
  