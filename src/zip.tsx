import * as React from 'react';
import axios from 'axios';

const ZIP_ENDPOINT='https://api.zipaddress.net';

type ZipProps = {
  text?: string;
}

type ZipState = {
  status:  boolean;
  textValue?: string;
  result?: string;
}

class Zip extends React.Component<ZipProps, ZipState> {

  static defaultProps: ZipProps = {
    text: 'Welcome to React',
  };

  constructor(props: ZipProps) {
    super(props);
    this.state = {
      status: false,
      result: '',
    };
    // 下記のようにコンストラクタで全てのイベントをbindする必要がある。
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ textValue: event.currentTarget.value });
  }

  handleClick(event: React.MouseEvent) {
    console.debug(this.state.textValue);
    axios.get(ZIP_ENDPOINT, { params: { zipcode: this.state.textValue } })
    .then(
    (response) => {
      const body = response.data;
      console.debug(body.data);
      this.setState({
        status: true,
        result: body.data.fullAddress
      });
    },
    )
    .catch((e) => {
      console.error(e);
      this.setState({
        status: false,
        result: e,
      });
    });
  }

  render() {
    const result = (this.state.status) ? (<div>{this.state.result}</div>) : (<div>Not Yet</div>);
    console.debug(result);
    return (
      <div>
        <h1>郵便番号検索</h1>
        郵便番号を入れてください。<br />
        <input id="zip" name="zip" type="text" ref="inputText" defaultValue="192-0000" onChange={this.handleChange} /><br />
        <button onClick={this.handleClick}>Get Data</button>
        <p>{result}</p>
      </div>
    );
  }
}

export default Zip
