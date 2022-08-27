
import React, { Component } from "react";
import Box from "./box.component.js";

// import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

    state = {
        box: []
    };

    createBox = () => {
        const { box } = this.state;
        this.setState({box: [...box,0]});
    }

    // deleteBox = () => {
    //     const {box} = this.state;
    //     this.setState({box: []});
    //     // box[-1];
    //     // {box}[box.length - 1];
    // }

    onDelete = id => {
        function filterArrray (number, index) {
            if(id === index) return false;
            else return true;
        }

        const updatedBox = this.state.box.filter(filterArrray);
        this.setState({ box: updatedBox });
    }

    onIncrement = id => {
        const arr = [...this.state.box];
        arr[id]++;

        this.setState({ box: arr });
    }

    onDecrement = id => {
        const arr = [...this.state.box];
        arr[id]--;

        this.setState({ box: arr });
    }



    render() {
        return(
            <div style={{ margin: "20px" }}>
                <button className="btn btn-secondary p-2" onClick={this.createBox}>Add New Box</button>
                <br />
                <br />
                {this.state.box.map((number, index)=>(
                    <div key={index}>
                        <Box 
                        num = {number}
                        id={index}
                        onDelete={this.onDelete}
                        onIncrement={this.onIncrement}
                        onDecrement={this.onDecrement}
                        />
                        
                        <br />
                        <br />
                        
                    </div>
                ))}

            </div>
        );
    }
}

export default App;
