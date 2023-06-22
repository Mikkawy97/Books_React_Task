import React from 'react';
import '../Pages/Search/Search.css';

class Book extends React.Component {
    constructor() {
      super();
      this.state = {color: "red"};
      
    }
    render() {
        const parantshelf=this.props.selectedShelf;
        const { item } = this.props;
        const img_url="https://covers.openlibrary.org/b/id/";
        const dropDownclass="dropdown-item";
        const shelves=this.props.shelves;
        var selectedShelf;
        if(shelves===undefined){
            selectedShelf=parantshelf;
        }
        else{
            for (let index = 0; index < shelves?.currently_reading?.length; index++) {
              if(shelves?.currently_reading[index]?.key===item.key){
                selectedShelf='continue reading';
              }
              
            }
            for (let index = 0; index < shelves?.want_to_read?.length; index++) {
              if(shelves?.want_to_read[index]?.key===item.key){
                selectedShelf='want to read';
                console.log('da');
              }
              
            }
            for (let index = 0; index < shelves?.read?.length; index++) {
              if(shelves?.read[index]?.key===item.key){
                selectedShelf='read';
              }
              
            }
            if(selectedShelf===undefined){
              selectedShelf='none';
            }
        }
     
      return(
        <div className='book_card'>
        <div className='img-wrapper dropdown'>
            <img className='img-fluid' src={item.cover_i===undefined ?  'https://th.bing.com/th/id/OIP.GhK0xqhcPT0DVriwmC4wOAHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' : img_url+item.cover_i+".jpg"} alt='' />
            <button className='drop_down_styles dropdown-toggle' data-bs-toggle="dropdown"></button>
            <ul className="dropdown-menu">
                <li><div className={dropDownclass+ (selectedShelf==="continue reading" ? ' active':'')} onClick={()=>this.props.handleShelves(item,"Currently Reading")} >Currently Reading</div></li>
                <li><div className={dropDownclass+ (selectedShelf==="want to read" ? ' active':'')} onClick={()=>this.props.handleShelves(item,"Wants to Read")} >Wants to Read</div></li>
                <li><div className={dropDownclass+ (selectedShelf==="read" ? ' active':'')}  onClick={()=>this.props.handleShelves(item,"Read")}>Read</div></li>
                <li><div className={dropDownclass+ (selectedShelf==="none" ? ' active':'')} onClick={()=>this.props.handleShelves(item,"None")}>None</div></li>
            </ul>
         </div>  
         <div className='title p-1'>{item.title_suggest}</div> 
         <div className='d-flex alig-items-center p-1'>
         {item.author_name?.map((item,index) => {
                        return (
                            <div key={index} className='author'>{item}</div>
                        );
                        })}
          </div>      
     </div>  
         )
    }
  }
  export default Book;