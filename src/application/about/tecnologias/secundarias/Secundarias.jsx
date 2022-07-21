
import { Typography } from '@mui/material';

import Tooltip from '@mui/material/Tooltip';

import './Secundarias.scss';


export const Secundarias = () => {

  const materialUI = 'https://res.cloudinary.com/the-kings-company/image/upload/v1658181417/Portafolio/materialUI_g0mohp.png';
  const node = 'https://res.cloudinary.com/the-kings-company/image/upload/v1658181803/Portafolio/ACCL-NodeJS-300x300_ttxf8b.png';
  const mongoDB = 'https://res.cloudinary.com/the-kings-company/image/upload/v1658181925/Portafolio/mongodb-icon_ygxdzr.svg';

  return (
    <div className='secundariasContainer'>

      <div className="titleContainerSecundarias">
        <Typography variant='p'>
          Cuento con conocimientos en
        </Typography>
      </div>

      <div className="imagesContainerSecundarias">

        <Tooltip title="Material UI" arrow>
          <img className="raise" src={materialUI} />
        </Tooltip>

        <Tooltip title="Node Js" arrow>
          <img className="raise" src={node} />
        </Tooltip>

        <Tooltip title="Mongo DB" arrow>
          <img className="raise" src={mongoDB} />
        </Tooltip>
      </div>

    </div>
  )
}
