import React from 'react';
import { PoemCard } from './PoemCard';


export function PoemList(props){
    console.log(props.poems)
    return (
        <div className="ui cards" style={{ marginTop: 20 }}>
          {props.poems.map( (poem, idx) => (
            <PoemCard
                key={idx}
                name={poem.name}
                content={poem.content}
                editContent={props.editContent}
                deletePoem={props.deletePoem}
            />
          ))}
        </div>
    )
}