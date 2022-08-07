import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import topicService from '../../services/TopicService';

const Topic = ( props ) => {

    let { id } = useParams();

    const [ topic, setTopic ] = useState(null);

    useEffect(() => {
        topicService.get(id)
            .then( resp => setTopic(resp))
            .catch( err => console.log(err))
    }, []);

    return (
        <div className='row'>
            {
                topic === null ?
                    <div className='col-12 text-center'>
                        Loding...
                    </div>
                    :
                    <>
                        <div className='col-12 col-md-6 mb-2'>
                            <h5>Title:</h5>
                            { topic.title || "none" }
                        </div>
                        <div className='col-12 col-md-6 mb-2'>
                            <h5>Players:</h5>
                            { topic.players || "none" }
                        </div>
                        <div className='col-12 col-md-6 mb-2'>
                            <h5>Setting:</h5>
                            { topic.setting || "none" }
                        </div>
                        <div className='col-12 col-md-6 mb-2'>
                            <h5>Plot:</h5>
                            { topic.plot || "none" }
                        </div>
                        <div className='col-12 col-md-6 mb-2'>
                            <h5>Conflict:</h5>
                            { topic.coflict || "none" }
                        </div>
                        <div className='col-12 col-md-6 mb-2'>
                            <h5>Theme:</h5>
                            { topic.theme || "none"}
                        </div>
                        <div className='col-12 col-md-6'>
                            <h5>Narrative Arc:</h5>
                            { topic.narrative_arc || "none" }
                        </div>
                    </>
                    
            }
        </div>
    )
}

export default Topic;