import React, { useState } from 'react';
import Form from './components/Form';
import UserInfo from './components/UserInfo';
import './styles.css';
import ImageLoader from './components/Loaders/ImageLoader';
import InfoLoader from './components/Loaders/InfoLoader';
import { User } from '../../core/types/User';
import { makeRequest } from '../../core/utils/request';


const Search = () => {
    const [userInfo, setUserInfo] = useState<User>();
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = (search: string) => {
        setIsLoading(true);
        makeRequest({ url: `users/${search}` })
            .then(response => setUserInfo(response.data))
            .catch(() => {
                alert('Usuário não encontrado');
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return (
        <div className="search-container" >
            <Form onSearch={handleSearch} />
            {isLoading ? (
                <div className="loaders-content">
                    <ImageLoader />
                    <InfoLoader />
                </div>
            ) : (
                    <>
                        {
                            userInfo && (
                                <UserInfo user={userInfo}  />
                            )
                        }
                    </>

                )}

        </div>
    );
};


export default Search;