import React from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import TwitterIcon from '@mui/icons-material/Twitter';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import Card from '../Card/Card';

const Cards = ({data}) => {
    return (
        <div className='container'>
            <div className='row'>
                    {
                        data.map((element, index) => {
                            return (
                                <div className='col-4' key={index}>
                                <Card 
                                title={element.titulo} 
                                text={element.texto} 
                                valor={element.valor} 
                                icon={element.icon}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    )
}

export { Cards }