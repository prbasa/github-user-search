import React, { useState } from 'react';
import UserInfo from './components/UserInfo';
import Form from './components/Form';
import axios from 'axios';
import './styles.css';

const BASE_URL = 'https://api.github.com/users';

function Search(){

    const [userInfo, setUserInfo] = useState();

    const handleSearch = (search: string) => {
        axios(`${BASE_URL}/${search}`);
    }

    return (
        <div className="search-container">
            <Form onSearch={handleSearch} />
            <UserInfo />
        </div>
    )
}

export default Search;