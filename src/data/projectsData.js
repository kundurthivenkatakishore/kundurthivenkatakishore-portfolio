import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Ecommerce App',
        projectDesc: 'This project involves the development of an Web Application of Ecommerce online booking shop where user can order clothes',
        tags: 'HTML, CSS, JavaScript, React, Node, MongoDB, Express',
        frontend: 'https://github.com/kundurthivenkatakishore/Ecommerce-frontend',
        backend:"https://github.com/kundurthivenkatakishore/Ecommerce-backend",
        demo: 'https://ecommerce-mern1.netlify.app',
        image: "https://thumbs.dreamstime.com/b/online-shopping-smartphone-two-young-women-buy-fashionable-clothes-shoes-accessories-store-via-internet-dresses-169905400.jpg"
    },
    {
        id: 2,
        projectName: 'Hotel Booking App',
        projectDesc: 'This project is a Hotel Booking System that alows users to Book a hotel in different cities',
        tags: 'HTML, CSS, BootStrap, Material-UI, JavaScript, React, Node, Express, MongoDB',
        frontend: 'https://github.com/kundurthivenkatakishore/hotel-booking-frontend1',
        backend:"https://github.com/kundurthivenkatakishore/hotel-backend-mern",
        demo: 'https://hotel-booking-mern.netlify.app/',
        image: "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768"
    },
    {
        id: 3,
        projectName: 'Job Portal',
        projectDesc: 'This is a job portal where user can find and apply for the jobs where recruiter can see the applications ',
        tags: 'HTML, CSS, JavaScript, Material-UI ,React, Node, MongoDB, Express',
        frontend: 'https://github.com/kundurthivenkatakishore/job-portal-frontend',
        backend:"https://github.com/kundurthivenkatakishore/job-portal-backend",
        demo: 'https://job-portal-frontend1.vercel.app',
        image: "https://dynamic.placementindia.com/blog_images/20171027131359_image1.jpg"
    },
    {
        id: 4,
        projectName: 'InShots News App',
        projectDesc: 'This project aims to provide all the updated news of various categories',
        tags: 'HTML, CSS, BootStrap, JavaScript',
        frontend: 'https://github.com/kundurthivenkatakishore/Inshorts-news-app',
        backend:"https://github.com/kundurthivenkatakishore/Inshorts-news-app",
        demo: 'https://inshortsnewsapp.netlify.app/',
        image: "https://play-lh.googleusercontent.com/lvAGNNFIBMC3ZgS-JJcSwDzpSjOGMg7FGY14FrffJobLOed9-H2DiuZwknsIwVwKwTjo"
    },
    {
        id: 5,
        projectName: 'Chat App',
        projectDesc: 'This is a chat application where users can send messages',
        tags: 'HTML, CSS, Material Ui, JavaScript, React, Node, MongoDB, Express',
        frontend: 'https://github.com/kundurthivenkatakishore/chat-app-frontend',
        backend:"https://github.com/kundurthivenkatakishore/chat-app-backend",
        demo: 'https://chat-app-mern1.netlify.app/login',
        image: "data:image/png;base64,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"
    },
   
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/