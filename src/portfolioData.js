import BioPic from "./Images/BioPic.jpg";
import DogPic from "./Images/dog-1.jpg";
import NotePic from "./Images/noteMonkey.jpg";
import CalendarPic from "./Images/readmeGenerator.png";
import Peoplespurse from "./Images/peoplespurse.png";
import NBAPic from "./Images/nba-logo.jpg"

export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name: 'Samuel Thompson',
        headerTagline: [//Line 1 For Header
            'FullStack Web Developer',
            //Line 3 For Header
            'from Shaker Heights'
        ],
        //Contact Email
        contactEmail: 'thomps9012@gmail.com',
        //contact phone
        contactPhone: '216.970.1203',
        // Add Your About Text Here
        abouttext: "Full Stack Web Developer with experience working in a remote environment alongside individuals from a diverse set of backgrounds with client, server, database, and systems engineering experience. I enjoy learning new practices and applying them to solve novel challenges and problems that arise within the work environment. Thank you for the opportunity to bring a dedicated work ethic and commitment of excellence to your team.",
        aboutImage: BioPic,
        //Skills Text
        languages: "HTML, AJAX, CSS, JavaScript, SQL, jQuery, Bootstrap, Python, Node.js, HTTP, ReST API, GitHub, Express.js, Sequelize, No SQL, MongoDB, React, JSX, React Chart.js, Google Fonts",
        frameworks: "Responsive Design, Object Oriented Programming, Test Driven Development, Node Test-Driven Development, Data Manipulation, Server-Data Connections, State and Prop Components",
        //Change This To Hide The Image of About Section (True Or False)
        ShowAboutImage: true,//true or false (Change Here)
        // Change Projects Here 
        projects: [
            {
                id: 1,
                title: "The People's Purse", 
                description: 'A MERN stack, non-profit application dedicated to collecting data about how individuals would spend their tax dollars. The app features an educational component about the governments different departments in addition to a data visualization piece.', // Add Your Service Type Here
                //Project Image - Add Your Project Image Here
                tech: 'Tech Stack: React/JSX, CSS/SCSS, Node, Express, Axios APIs (USAspending), React Chart.js, Sequelize, MySQL DB, Github',
                imageSrc: Peoplespurse,
                //Project URL - Add Your Project Url Here
                url: 'https://secret-hollows-25957.herokuapp.com/',
                repo: 'https://github.com/evigliucci/final-project'
            },
            {
                id: 2,
                title: 'Trail Tails', //Project Title - Add Your Project Title Here
                description: 'A web-based application that helps users find local trails using geolocation or a typed in location. The application will return ten different hiking options based off user preferences once a selection is made the app shows weather and trail conditions.', // Add Your Service Type Here
                //Project Image - Add Your Project Image Here
                tech: 'Tech Stack: HTML, CSS, JSON, SQL, and API routes',
                imageSrc: DogPic,
                //Project URL - Add Your Project Url Here
                url: 'http://trailtails.herokuapp.com/',
                repo: 'https://github.com/thomps9012/TrailTails'
            },
            {
                id: 3,//DO NOT CHANGE THIS (Please)😅
                title: 'NoteTaker',
                description: 'A simple note taking app that allows the user to create and delete notes in an online database.',
                tech: 'Tech Stack: HTML, CSS, JSON, SQL, Express, and API routes',
                imageSrc: NotePic,
                url: 'https://radiant-cliffs-00329.herokuapp.com/',
                repo: 'https://github.com/thomps9012/NoteTaker'
            },
            {
                id: 4,//DO NOT CHANGE THIS (Please)😅
                title: 'Calendar',
                description: 'A daily calendar application that allows users to schedule out their days from 9-5, changing colors with the hours and saving items in local storage',
                tech: 'Tech Stack: HTML, CSS, JSON, Local Storage, and API routes',
                imageSrc: CalendarPic,
                url: 'https://thomps9012.github.io/CalendarHW/',
                repo: 'https://github.com/thomps9012/CalendarHW'
            },
            {
                id: 5,
                title: "NBA Player Stats", 
                description: 'A simple node.js application that uses sequelize and api calls to give the user random statistics for an NBA player, or stats for all NBA players. The model uses 538 RAPTOR scores which is explained here https://fivethirtyeight.com/features/introducing-raptor-our-new-metric-for-the-modern-nba/', // Add Your Service Type Here
                //Project Image - Add Your Project Image Here
                tech: 'Tech Stack: HTML, CSS/SCSS, Node, Express, Sequelize, MySQL DB, Github',
                imageSrc: NBAPic,
                //Project URL - Add Your Project Url Here
                url: 'https://immense-inlet-28745.herokuapp.com/',
                repo: 'https://github.com/thomps9012/nbaStats'
            }

        ],
        social: [
            {
                name: 'Github',
                url: 'https://github.com/thomps9012'
            },
            {
                name: 'Facebook',
                url: 'https://www.facebook.com/samuel.thompson.16503'
            },
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/samuel-joseph-thompson/'
            }

        ]
    }