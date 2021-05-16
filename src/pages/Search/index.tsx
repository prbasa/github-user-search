import React, { useState } from 'react';
import UserInfo from './components/UserInfo';
import Form from './components/Form';
import axios from 'axios';
import './styles.css';
import { User } from './types';

const BASE_URL = 'https://api.github.com/users';

function Search(){

    const [userInfo, setUserInfo] = useState<User>();

    const handleSearch = (search: string) => {
        axios(`${BASE_URL}/${search}`)
           .then(response => {
               setUserInfo(response.data);
           })
    }

    return (
        <div className="search-container">
            <Form onSearch={handleSearch} />
            {
                userInfo && (
                    <UserInfo user={userInfo} />
                )
            }
        </div>
    )
}

export default Search;