import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FaPlay, FaCode, FaGithub } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

import placeholder from '../../../assets/png/placeholder.png';
import './SingleProject.css';

function SingleProject({ id, name, desc, tags, frontend,backend,code, demo, image, theme }) {
    const useStyles = makeStyles((t) => ({
        iconBtn: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: 50,
            border: `2px solid ${theme.tertiary}`,
            color: theme.tertiary,
            transition: 'all 0.2s',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.primary,
                transform: 'scale(1.1)',
                border: `2px solid ${theme.secondary}`,
            },
        },
        icon: {
            fontSize: '1.1rem',
            transition: 'all 0.2s',
            '&:hover': {},
        },
    }));

    const classes = useStyles();

    return (
        <div className="projects">
            <Card style={{ width: '20rem' }} className='card'>
                <Card.Img className="cardimage" src={image ? image : placeholder} alt={name}/>
                    <Card.Title className='title'>{name}</Card.Title>
                <Card.Body className='links'>
                    <Card.Text className='cardtext'>
                        {desc}
                    </Card.Text>
                    <Card.Text className='cardtext'>
                        Technologies: {tags}
                    </Card.Text>
                    <Card.Link href={frontend} target="_blank">Front-End</Card.Link>
                    <Card.Link href={backend} target="_blank">Back-End</Card.Link>
                    <Card.Link href={demo} target="_blank">Demo</Card.Link>
                </Card.Body>
                {/* <ListGroup className="list-group-flush">
                    <ListGroupItem>HTML, </ListGroupItem>
                    <ListGroupItem>React, </ListGroupItem>
                    <ListGroupItem>Node</ListGroupItem>
                </ListGroup> */}
            </Card>
        </div>
        // <Fade bottom>
        //     <div
        //         key={id}
        //         className='singleProject'
        //         style={{ backgroundColor: theme.primary400 }}
        //     >
        //         <div className='projectContent'>
        //             <h2
        //                 id={name.replace(' ', '-').toLowerCase()}
        //                 style={{ color: theme.tertiary }}
        //             >
        //                 {name}
        //             </h2>
        //             <img src={image ? image : placeholder} alt={name} />
        //             <div className='project--showcaseBtn'>
        //                 <a
        //                     href={demo}
        //                     target='_blank'
        //                     rel='noreferrer'
        //                     className={classes.iconBtn}
        //                     aria-labelledby={`${name
        //                         .replace(' ', '-')
        //                         .toLowerCase()} ${name
        //                             .replace(' ', '-')
        //                             .toLowerCase()}-demo`}
        //                 >
        //                     <FaPlay
        //                         id={`${name
        //                             .replace(' ', '-')
        //                             .toLowerCase()}-demo`}
        //                         className={classes.icon}
        //                         aria-label='Demo'
        //                     />
        //                 </a>
        //                 <a
        //                     href={code}
        //                     target='_blank'
        //                     rel='noreferrer'
        //                     className={classes.iconBtn}
        //                     aria-labelledby={`${name
        //                         .replace(' ', '-')
        //                         .toLowerCase()} ${name
        //                             .replace(' ', '-')
        //                             .toLowerCase()}-code`}
        //                 >
        //                     <FaCode
        //                         id={`${name
        //                             .replace(' ', '-')
        //                             .toLowerCase()}-code`}
        //                         className={classes.icon}
        //                         aria-label='Code'
        //                     />
        //                 </a>
        //             </div>
        //         </div>
        //         <p
        //             className='project--desc'
        //             style={{
        //                 background: theme.secondary,
        //                 color: theme.tertiary,
        //             }}
        //         >
        //             {desc}
        //         </p>
        //         <div
        //             className='project--lang'
        //             style={{
        //                 background: theme.secondary,
        //                 color: theme.tertiary80,
        //             }}
        //         >
        //             {tags.map((tag, id) => (
        //                 <span key={id}>{tag}</span>
        //             ))}
        //         </div>
        //     </div>
        // </Fade>
    );
}

export default SingleProject;
