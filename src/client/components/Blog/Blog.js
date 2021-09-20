import React from 'react';

import Article from "../Article/Article"
 

const  Blog = () =>  {

    // go /Article to read the comment. to map the articles once fetched
    return (
        <div className="Blog"> 
            <Article/>
            <Article/>
            <Article/>
            <Article/>
        </div>
            
    );
  }
  
  export default Blog;
  