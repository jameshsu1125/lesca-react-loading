[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/)

# Installation

```sh
$ npm install lesca-react-loading --save
```

# Usage

```javascript
import Loading from 'lesca-react-loading';

constructor() {
    this.state = { loading: false };
}

submite() {
    this.setState({ loading: true });

    new Promise((res, rej) => {
        console.log('sending data...');
        setTimeout(() => res(), 3000);
    }).then(() => {
        this.setState({ loading: false }, () => {
            console.log('success');
        });
    });
}

append() {
    if (this.state.loading) return <Loading style='dark' text='update now...' />;
}

render() {
    return (
        <div className='page'>
            <button onClick={this.submite.bind(this)}> submite something</button>
            {this.append()}
        </div>
    );
}

```

# Porps

| props |  type  |                  description                   | default |
| :---- | :----: | :--------------------------------------------: | ------: |
| style | string | There are two basic themes. 'dark' and 'light' |  'dark' |
| text  | string |             description of loading             |         |

# Theme

<img src='http://linebot.lesca.net/data/git/02.gif' width='200' height='200' />

| class name                 |      style       |          description           |         default |
| :------------------------- | :--------------: | :----------------------------: | --------------: |
| .lesca-loading .background | background-color |        background color        | rgba(0,0,0,0.8) |
| .lesca-loading .ico > div  | background-color | loading icon line-streak color |            #fff |
| .lesca-loading .text       |      color       |     description text color     |         #f8f9fa |
