import { useEffect } from 'react';
import Code from '../components/code';
import { name } from '../config';

const codes = [
  {
    title: '1. Installation',
    code: `npm install ${name} --save`,
    type: 'text',
  },
  {
    title: '2. add component',
    code: `import LoadingProcess from 'lesca-react-loading';
  
const Demo = () => {
  const [uploading, setUploading] = useState(false);

  return (
    <div>
      {uploading && (
        <LoadingProcess backgroundColor='#00ff66' iconColor='#f60' scale={0.8}>
          <span className='inner'>uploading</span>
        </LoadingProcess>
      )}
      <button
        onClick={() => {
          setUploading(true);
          uploadToServer().then(() => setUploading(false));
        }}
      >
        Update Something
      </button>
    </div>
  );
};
export default Demo;`,
    type: 'js',
  },
];

const Usage = () => {
  useEffect(() => {}, []);

  return (
    <div className='Usage'>
      <h2>Usage</h2>
      {codes.map((e) => (
        <div key={e.title}>
          <h3>{e.title}</h3>
          <Code code={e.code} theme={e.type} />
        </div>
      ))}
    </div>
  );
};
export default Usage;
