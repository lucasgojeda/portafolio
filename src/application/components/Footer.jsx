import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import './Footer.scss';


export const Footer = ({ position }) => {

    return (
        <div className={(position === 'absolute') ? "footerContainerAbsolute" : "footerContainerRelative"}>

            <p>Contacto</p>

            <div className="iconContainer">

                <a
                    href='https://www.linkedin.com/in/lucas-ojeda-687b6323b/'
                    target="_blank">
                    <LinkedInIcon className="icons raise" />
                </a>

                <a
                    href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWsdCtjwgbBWLjPCnzhDjhkhvxLZKLcbclBxKTMgPQsPTFFVkVzdVvTPXJnrddbPpXmbVCvQB'
                    target="_blank">
                    <MailIcon className="icons raise" />
                </a>

                <a
                    href='https://wa.me/542213173888/'
                    target="_blank">
                    <WhatsAppIcon className="icons raise" />
                </a>

                <a
                    href='https://www.instagram.com/lucass_ojedaa/'
                    target="_blank">
                    <InstagramIcon className="icons raise" />
                </a>

                <a
                    href='https://www.facebook.com/lucas.ojeda.10888'
                    target="_blank">
                    <FacebookIcon className="icons raise" />
                </a>

            </div>
        </div>
    )
}
