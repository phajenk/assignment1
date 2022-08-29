import React, {Component} from 'react';

class KeyPadComponent extends Component {

    render() {
        return (
            <div className="button">
                {/* row 1 */}
                <button name="CE" onClick={e => this.props.onClick(e.target.name)} style={{width:"37.5%"}}>CE</button>
                <button name="C" onClick={e => this.props.onClick(e.target.name)} style={{width:"37.5%"}}>C</button>
                <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>

                {/* row 2     */}
                <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>  
                

                {/* row 3     */}
                <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>

                {/* row 4     */}
                <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>

                {/* row 5     */}
                <button name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button name="=" onClick={e => this.props.onClick(e.target.name)} style={{backgroundColor: "#f58742", width: "50%"}}>=</button><br/>
            </div>
        );
    }
}


export default KeyPadComponent;
