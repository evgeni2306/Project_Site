import React from 'react';
import { Link } from '@inertiajs/inertia-react';

import './sphereDirection.scss';

export default function SphereDirection({spheres}) {

    let spheresInfo = spheres;
    console.log(spheresInfo)
    
    return (
        <div className="wrapper">
            {spheresInfo.map((sphere) => <Link href={route(sphere.url, sphere.id)} key={sphere.id}>
                <div className="sphere">
                    <div className="sphere__container">
                        <div className="sphere__icon">
                            <svg width="31" height="27" viewBox="0 0 31 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.9713 5.57814L21.4312 7.30492L28.012 13.1389L21.4312 18.9729L22.9713 20.6997L30.5321 14.0258C30.7756 13.8047 30.9143 13.4912 30.9143 13.1624C30.9143 12.8336 30.7756 12.5201 30.5321 12.2991L22.9713 5.57814Z" fill=""/>
                            <path d="M7.94298 5.57814L0.382202 12.2521C0.138683 12.4731 0 12.7866 0 13.1154C0 13.4442 0.138691 13.7577 0.382202 13.9788L7.94298 20.6996L9.48315 18.9728L2.90232 13.1388L9.48315 7.30484L7.94298 5.57814Z" fill=""/>
                            <path d="M11.6368 25.7854L16.9297 0L19.1927 0.46457L13.8997 26.25L11.6368 25.7854Z" fill=""/>
                            </svg>
                        </div>
                        <div className="sphere__name">{sphere.name}</div>
                    </div>
                </div>
            </Link>)}
        </div>   
    );
}