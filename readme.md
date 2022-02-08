[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/)

# Installation

```sh
$ npm install lesca-react-loading --save
```

# Usage

```javascript
import { useState } from 'react';
import LoadingProcess from 'lesca-react-loading';

const Page = () => {
	const [uploading, setUploading] = useState(false);
	return <div>{uploading && <LoadingProcess text='uploading...' />}</div>;
};
```

# Porps

| props    |  type  |                  description                   | default |
| :------- | :----: | :--------------------------------------------: | ------: |
| theme    | string | There are two basic themes. 'dark' and 'light' |  'dark' |
| position | string |             'fixed' or 'absulote'              | 'fixed' |
| text     | string |             description of loading             |      '' |
| style    | object |                  inline-style                  |      {} |

# Theme

<img src='http://linebot.lesca.net/data/git/02.gif' width='200' height='200' />
