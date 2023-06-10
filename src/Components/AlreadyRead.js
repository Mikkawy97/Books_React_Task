import React from 'react';
import '../Pages/Home/Home.css';
import Book from './Book';

class AlreadyRead extends React.Component {
    constructor() {
      super();
      this.state={};
    }
    render() {
      const arr=this.props.shelve;
      return(
        <>
          <div className='row m-0'> 
            <div className='col-md-12'>
              <h3>Read</h3>
              <hr />
              
              </div> 
        
          </div>
          <div className='row m-0 justify-content-center books_container'>
          {arr?.map((item) => {
                        return (
                            <div key={item.key} className='col-md-2 pb-4 '>
                                <Book selectedShelf="read" item={item} handleShelves={this.props.handleShelves}/>
                            </div>    
                        );
                        })}
            </div>
          
        </>  
         )
    }
  }
  export default AlreadyRead;