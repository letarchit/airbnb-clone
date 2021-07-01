import React, {useState} from 'react'
import './Banner.css'
import Button from '@material-ui/core/Button';
import Search from './Search'

function Banner() {
    const [showSearch, setShowSearch] = useState(false);

    
    return (
        <div className='banner'>
            <div className='banner_search'>
                {showSearch && <Search />}
                <Button onClick = {()=> setShowSearch(!showSearch)} className="banner_searchButton" variant='outlined'>Search Dates</Button>
            </div>
            <div className='banner_info'>
                 <h1> Get out and strech your imagination </h1> 
                 <h5> Plan a different kind of getway to uncover the hidden gems near you </h5>
                 <Button variant = "contained" > Explore Nearby </Button>

            </div>
            
        </div>
    )
}

export default Banner
