import React from "react";

class TestInput2 extends React.Component {

    constructor(props) {
        super(props);
        this.input = React.createRef();
    }
    onButtonClickHandler = () =>
    {
        alert(this.input.current.value);
    };


    render() {
        return (
            <div>
                <input className="test-input"
                       type="text"
                       placeholder="Введите значение:"
                       defaultValue= ''
                       ref = {this.input}
                />
                <button onClick={this.onButtonClickHandler} className="btn-success btn-sm">Вывод данных</button>
            </div>
        );
    }
}
export default TestInput2