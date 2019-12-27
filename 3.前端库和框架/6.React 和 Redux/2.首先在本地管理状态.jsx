class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
  
      this.handleChange = this.handleChange.bind(this);
      this.submitMessage = this.submitMessage.bind(this);
    }
  // 请把 handleChange()、submitMessage() 写在这里
    handleChange(event){
      this.setState({
        input:event.target.value,
      })
    }
  
    submitMessage(){
      this.setState({
        input:'',
        messages:this.state.messages.concat([this.state.input])
      })
    }
  
    render() {
      return (
        <div>
          <h2>键入新 Message</h2>
          { /* 在此渲染 input、button、ul*/ }
          <input value={this.state.input} onChange={this.handleChange}/>
          <button onClick={this.submitMessage}>Add message</button>
          <ul>
            {
              this.state.messages.map(message=><li>{message}</li>)
            }
          </ul>
          { /* 请在本行以上添加你的代码 */ }
        </div>
      );
    }
  };