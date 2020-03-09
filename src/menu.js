import React from 'react'

function menu(props) {
    return (
        <div>
            <ul className="drop-button">
                {
                    props.liste.map(el=><ul className="drop-button1">
                        <li>{el.title}</li>
                {!el.drop?null:<li><ul className="drop-menu">{el.drop.map(ele=><li>{ele}</li>  
                        )}</ul></li>}
                        </ul>) 
                }
         </ul>  
      </div>
    )
}
export default menu
