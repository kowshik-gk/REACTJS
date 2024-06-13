import React from "react";

function MemoComponent(props){

    console.log("Rendering Meme"+props.name12);

    return(
        <div>
            Memo Component
        </div>
    )
}

//avoid unwanted rerendring
export default React.memo(MemoComponent);