import { CSSProperties } from 'react';
import './style.less';

type Props = {
  position: CSSProperties;
  scale: CSSProperties;
  backgroundColor: CSSProperties;
  iconColor: CSSProperties;
  children?: JSX.Element;
};

const LoadingProcess = ({ children, position, scale, backgroundColor, iconColor }: Props) => {
  const style = { position };
  const backgroundStyle = { backgroundColor };
  const iconStyle = { backgroundColor: iconColor };
  const iconScale = { transform: `scale(${scale})` };
  return (
    <div className='lesca-loading' style={style as unknown as CSSProperties}>
      <div className='background' style={backgroundStyle as CSSProperties} />
      <div className='content' style={iconScale as CSSProperties}>
        <div className='ico'>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((e) => (
            <div key={e} style={iconStyle as CSSProperties} />
          ))}
        </div>
        <div className='text'>{children}</div>
      </div>
    </div>
  );
};

LoadingProcess.defaultProps = {
  position: 'fixed',
  scale: 1,
  backgroundColor: 'rgba(0,0,0,.8)',
  iconColor: '#fff',
};

export default LoadingProcess;
