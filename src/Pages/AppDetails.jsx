import React from 'react';
import { useParams } from 'react-router';

const AppDetails = () => {
    const {id} = useParams()
    console.log(id);
    return (
        <div>
            App Details
        </div>
    );
};

export default AppDetails;