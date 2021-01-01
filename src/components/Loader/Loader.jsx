import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Loader.module.css';

export default function LoaderApi() {
  return (
    <div className={s.loader}>
      <Loader type="BallTriangle" color="#f7856f" height={300} />
    </div>
  );
}
