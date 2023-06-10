import React from 'react';

import Home from './Pages/Home/Home';
import Search from './Pages/Search/Search';
import {Routes,Route} from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = JSON.parse( localStorage.getItem('Shelves') );
    this.handleShelves=this.handleShelves.bind(this)
    if(this.state){
      this.myobj = JSON.parse( localStorage.getItem('Shelves') );
    }
    else{
  
      this.myobj={
        currently_reading:[],
        want_to_read:[],
        read:[]
      };
    }
  
  }
  handleShelves (book,shelve){

      switch (shelve) {
        case "Currently Reading":
          
       if(!(this.myobj.currently_reading.some(e => e.key === book.key))){
        this.myobj.currently_reading.push(book);
         }
         
          this.removeBooks('want_to_read',book);
          this.removeBooks('read',book);


          break;
        case "Wants to Read":
          if(!(this.myobj.want_to_read.some(e => e.key === book.key))){
          this.myobj.want_to_read.push(book);
          }
          this.removeBooks('currently_reading',book);
          this.removeBooks('read',book);
      
        
          break;
      
        case "Read":
          if((!this.myobj.read.some(e => e.key === book.key))){
          this.myobj.read.push(book);
          }
          this.removeBooks('currently_reading',book);
          this.removeBooks('want_to_read',book);
  
      
      

          break;

        case "None":
          this.removeBooks('none',book);
          break;
          
        default:
          break;  
        
      }
     
      localStorage.setItem( 'Shelves', JSON.stringify(this.myobj) );
      var arr = JSON.parse( localStorage.getItem('Shelves') );
      this.setState(arr);
      
  }
  removeBooks(shelf,book){
    if (shelf!=='none'){
    for (let index = 0; index < this.myobj[shelf].length; index++) {
      if (this.myobj[shelf][index].key===book.key) {
  
        this.myobj[shelf].splice(index,1);
      }
   }
  }
  else{
    if(shelf==='none'){
      for (let index = 0; index < this.myobj.currently_reading.length; index++) {
        if (this.myobj.currently_reading[index].key===book.key) {
    
          this.myobj.currently_reading.splice(index,1);
        }
     }
     for (let index = 0; index < this.myobj.want_to_read.length; index++) {
      if (this.myobj.want_to_read[index].key===book.key) {
  
        this.myobj.want_to_read.splice(index,1);
      }
   }
   for (let index = 0; index < this.myobj.read.length; index++) {
    if (this.myobj.read[index].key===book.key) {

      this.myobj.read.splice(index,1);
    }
 }
    }
  }

  

  }

  render(){
   
    return (
        
        <div className='container-fluid'>
          <Routes>
            <Route path='/' element={<Home shelves={this.state} handleShelves={this.handleShelves}  />} />
            <Route path='/search' element={<Search shelves={this.state}  handleShelves={this.handleShelves} />} />
          </Routes>
        </div>
   
    )
  }

}

export default App;
