import React from 'react'

import './Tecnologias.scss';


export const Tecnologias = ({tecnologias}) => {
    return (
        <div className="tecnologias">

            {(tecnologias?.html) && <button>Html</button>}
            {(tecnologias?.css) && <button>Css</button>}
            {(tecnologias?.javascript) && <button>Javascript</button>}
            {(tecnologias?.react) && <button>React</button>}

        </div>
    )
}
