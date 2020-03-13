import React from "react";

class TestBlock extends React.Component{
    state = {
        myValue: ''
    }

    onChangeHandler = (e) =>
    {
        this.setState(
            {
                myValue: e.target.value
            }
        )
    }

    onButtonClickHandler = () =>
    {
        alert(this.state.myValue)
    }

    render() {
        return (
            <div className="test-block">

                    <h2>This is test block</h2>
                    <input className="test-input"
                           placeholder = 'Введите значение'
                           onChange = {this.onChangeHandler}
                           value = {this.state.myValue}
                    />
                    <button className="btn-danger btn-sm" onClick={this.onButtonClickHandler}>Получить введенный текст</button>

            </div>
        );
    }
}
export default TestBlock;