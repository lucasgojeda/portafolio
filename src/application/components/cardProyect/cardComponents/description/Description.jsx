import React from 'react'

import DoneIcon from '@mui/icons-material/Done';

import './Description.scss';


export const Description = ({ description }) => {
    return (
        <div className="descripcion">

            <ul>
                {
                    description.items.map((e, i) =>
                        <li key={i}> <span><DoneIcon />{e}</span></li>
                    )
                }
            </ul>

        </div>
    )
}
