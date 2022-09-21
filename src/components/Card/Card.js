import React from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import TwitterIcon from '@mui/icons-material/Twitter';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';

const getIcon = (name) => {
    const icons = {
        "ArticleIcon": <ArticleIcon/>,
        "TwitterIcon": <TwitterIcon/>,
        "AttachMoneyRoundedIcon": <AttachMoneyRoundedIcon/>
    }
    return icons[name]
}

const Card = ({ title, text, valor, icon}) => {
    return (
        <div className='card-body'>
            <h4 className='card-title'>{title}</h4>
            <div className='card-icon'>{getIcon(icon)}</div>
            <p className='card-text'>{text}</p>
            <p className='card-text'>{valor}</p>
        </div>
    )
}

export default Card