import tw from 'twin.macro';
import {AppLayout} from '../Layout';

const CookMode = () => <div>test</div>;

CookMode.getLayout = () => AppLayout;

export default CookMode;
