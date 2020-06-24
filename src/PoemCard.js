import React from 'react';
import { EditPoemButton } from './EditPoemButton';

export function PoemCard(props){
    // let handleClick = () => {
    //     props.deletePoem({name: props.name})
    // }

    return (
        <div className="ui card">
            <div className="content">
                <div className="header">{props.name}</div>
            </div>
            <div className="content">
                {props.content}
            </div>
            <div className="content">
                <button onClick={() => props.deletePoem({name: props.name})} className="ui red button">Delete</button>
                <EditPoemButton editContent={props.editContent} poem={  { name: props.name, content: props.content }  }/>
            </div>
        </div>
    )
}