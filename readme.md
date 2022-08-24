[![React](https://img.shields.io/badge/-ReactJs-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://zh-hant.reactjs.org/)
[![React](https://img.shields.io/badge/Less-1d365d?style=for-the-badge&logo=less&logoColor=white)](https://lesscss.org/)
[![React](https://img.shields.io/badge/Typescript-4277c0?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3schools.com/html/)
[![React](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3schools.com/css/)
[![NPM](https://img.shields.io/badge/NPM-ba443f?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![React](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![NPM](https://img.shields.io/badge/DEV-Jameshsu1125-9cf?style=for-the-badge)](https://www.npmjs.com/~jameshsu1125)

# Why use it?

a simple process loading of react component.

look like this.

<img src='http://archive.lesca.net/loading.gif' width='200' height='200' />

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
      { uploading && (
        <LoadingProcess backgroundColor='#00ff66' iconColor='#f60' scale={0.8}>
          <span className='inner'>uploading...</span>
        </LoadingProcess>
      )}
    </div>
  );
};
```

## Development

### Porps

| props                        |        description        |          default |
| :--------------------------- | :-----------------------: | ---------------: |
| **position**:_string_        | set position of component |          'fixed' |
| **scale**:_number_           |        icon scale         |                1 |
| **backgroundColor**:_string_ |   set background color    | 'rgba(0,0,0,.8)' |
| **iconColor**:_object_       |      set icon color       |           '#fff' |

### Features

- maintain if necessary
