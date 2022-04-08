[![NPM](https://img.shields.io/badge/NPM-ba443f?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![React](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![React](https://img.shields.io/badge/-ReactJs-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://zh-hant.reactjs.org/)
[![React](https://img.shields.io/badge/Less-1d365d?style=for-the-badge&logo=less&logoColor=white)](https://lesscss.org/)
[![React](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3schools.com/html/)
[![React](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3schools.com/css/)
[![NPM](https://img.shields.io/badge/DEV-Jameshsu1125-9cf?style=for-the-badge)](https://www.npmjs.com/~jameshsu1125)

# Why use it?

a simple process loading of react component.

look like this.

<img src='http://linebot.lesca.net/data/git/02.gif' width='200' height='200' />

#### [Live Demo](https://jameshsu1125.github.io/lesca-react-loading/)

# Installation

```sh
npm install lesca-react-loading --save
```

## Usage

As a Node module:

```JSX
import { useState } from 'react';
import LoadingProcess from 'lesca-react-loading';

const Page = () => {
  const [uploading, setUploading] = useState(false);
  return (
    <div>
      { uploading && <LoadingProcess text='uploading...' />}
    </div>
  );
};
```

## Development

### Porps

| props                 |                  description                   | default |
| :-------------------- | :--------------------------------------------: | ------: |
| **theme**:_string_    | There are two basic themes. 'dark' and 'light' |  'dark' |
| **position**:_string_ |             'fixed' or 'absulote'              | 'fixed' |
| **text**:_string_     |             description of loading             |      '' |
| **style**:_object_    |                  inline-style                  |      {} |

### Features

- TypeScript
- maintain if necessary
