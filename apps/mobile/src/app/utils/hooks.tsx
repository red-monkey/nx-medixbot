import {AppState} from '../redux/store/ConfigureStore';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
