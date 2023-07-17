import { BiLogoBehance, BiLogoYoutube, BiLogoLinkedin, BiLogoGithub } from 'react-icons/bi';
import { PiNumberFiveBold } from 'react-icons/pi';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'Shihab Raafat',
    job: 'React Front-End Developer',
    birthday: '11 April 1999',
    email: 'shihabraafat7@gmail.com',
    phone: '+20 155-598-9677',

    socials:{
        Behance: {
            link: 'https://www.behance.net/shihabraafat',
            text: 'shihabraafat',
            icon: <BiLogoBehance/>,
        },
        Youtube: {
            link: 'https://www.youtube.com/channel/UC9vOkdgeXy1l3FcjnY4mAwg',
            text: '@shihab_raafat',
            icon: <BiLogoYoutube/>,
        },
        LinkedIn: {
            link: 'https://www.linkedin.com/in/shihab-raafat/',
            text: 'shihab-raafat',
            icon: <BiLogoLinkedin/>,
        },
        Github: {
            link: 'https://github.com/ShihabRaafatTechnology',
            text: 'ShihabRaafatTechnology',
            icon: <BiLogoGithub/>,
        },
        Khamsat: {
            link: 'https://khamsat.com/user/shihab_raafat',
            text: 'shihab_raafat',
            icon: <PiNumberFiveBold/>,
        },
    }
}