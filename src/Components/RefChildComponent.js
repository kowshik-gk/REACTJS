import React from "react";

export class RefChildComponent extends React.Component {
    render() {
        return (
            <div>
                <input type="text" ref={this.props.FocusRef} placeholder="Child Input" />
            </div>
        );
    }
}

export default RefChildComponent;
