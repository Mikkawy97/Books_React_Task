import React from 'react';
import './Search.css';
import { AiOutlineArrowLeft} from "react-icons/ai";
import { Link } from 'react-router-dom';
import Book from '../../Components/Book';
import { debounce } from 'throttle-debounce';




class Search extends React.Component {
    
    constructor() {
       
      super();
      this.loading=false;
      this.state = {};
      this.setquery=this.setquery.bind(this);
    }

    setquery = debounce(750, (text) => {

        return fetch('http://openlibrary.org/search.json?q='+text+'')
        .then((result) => result.json())
        .then((result) => result)
        .then((data) => this.setState({ ...this.state, data}))
        .catch((error) => console.log(error));   
    
      });
    render() {
    
        const shelves=this.props.shelves;
      return(
        <>
            <div className='row input-header '>
                <div className='col-md-1'>
                    <Link to='/'><AiOutlineArrowLeft color='#ccc' size={30} /></Link>
                </div>
                <div className='col-md-11'>
                    <input placeholder='Search By Title or Author..' onChange={(e) =>this.setquery(e.target.value)} />
                </div>
                </div>
               
                    <div className='row gx-5  m-0'>
                        {this.state.data?.docs.map((item) => {
                        return (
                            <div key={item.key} className='col-md-2 pb-4 '>
                                <Book  shelves={shelves} item={item} handleShelves={this.props.handleShelves}/>
                            </div>    
                        );
                        })}

                    </div>

        
            </>
         )
    }
  }
  export default Search;