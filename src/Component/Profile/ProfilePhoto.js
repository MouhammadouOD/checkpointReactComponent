//import { render } from '@testing-library/react';
import React, {Component} from 'react';
import myphoto from './myphoto.jpeg';

class ProfilePhoto extends Component {

    render(){

        return(
            <div>
                <img src={myphoto} alt='profile' width='300px'></img>
            </div>
        );
    }
}
export default ProfilePhoto;