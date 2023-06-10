import React from 'react';
import './Home.css';
import AlreadyRead from '../../Components/AlreadyRead';
import ContinueReading from '../../Components/ContinueReading';
import WantsToRead from '../../Components/WantsToRead';
import { AiOutlinePlus} from "react-icons/ai";
import { Link } from 'react-router-dom';
class Home extends React.Component {
    constructor() {
      super();
      this.state = {};
    }
    render() {
      const { shelves } = this.props;
 
      
      return(
        <>
          <div className='home_header'>
            <h3>My Reads</h3>
          </div>
          <ContinueReading shelve={shelves?.currently_reading} handleShelves={this.props.handleShelves} />
          <WantsToRead shelve={shelves?.want_to_read} handleShelves={this.props.handleShelves} />
          <AlreadyRead shelve={shelves?.read} handleShelves={this.props.handleShelves}/>
          <div className='row m-0 pb-5'>
            <div className='col-md-12 d-flex justify-content-end'>
            <Link to='/search'>
              <div className='add_btn'>
             <AiOutlinePlus size={30} color='white' />
              </div>
              </Link>
            
            </div>
          </div>

          
        </>  
         )
    }
  }
  export default Home;