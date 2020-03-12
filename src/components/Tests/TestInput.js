import React from "react";

class Test extends React.Component {
    state = {
        myValue: ''
    };
    onChangeHandler = (e) => {
        this.setState({myValue: e.target.value})
    };

    onButtonClickHandler = () => {
        alert(this.state.myValue)
    };


    render()
    {
        return (
            <div>
                <input className="test-input"
                       placeholder = 'Введите значение'
                       onChange = {this.onChangeHandler}
                       value = {this.state.myValue}
                />
                       <button className="btn-success btn-sm" onClick={this.onButtonClickHandler}>Получить введенный текст</button>
            </div>

        )
    }
}
export default Test