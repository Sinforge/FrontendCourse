import React from 'react';
import Category from './Category/Category';

const Categories = ({listNames}) => {
    return (
        <div>
            <h2>Категории</h2>
            <ul>
                {
                    listNames.map((name) => <Category name={name}/>)                  
                }
                
            </ul>
        </div>
    )
    
}

export default Categories;