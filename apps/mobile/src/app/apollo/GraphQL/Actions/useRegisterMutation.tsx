import {
    MutationResult,
    useMutation,
  } from '@apollo/client';
  import { REGISTER_MUTATION } from '../Mutations';
  import { IResultRegister, TDataRegister} from '../types';
  import {useAccessToken} from '../../../customHooks/useAuthToken';
  import { useIsUser } from '../../../customHooks/useIsUser';
  import { useDispatch } from 'react-redux';
  import { Dispatch } from 'redux';
  import { setIsLoggedIn } from '../../../redux/actions/login';
  import { IRegisterUser, RegisterMutationVariables } from '@medixbot/types';
  
  export const useRegisterMutation = (): [IResultRegister, MutationResult<TDataRegister>] => {
    const dispatch = useDispatch<Dispatch>();
    const [setAuthToken, getAuthToken] = useAccessToken();
    const [setUser, ] = useIsUser();
    const MUTATION = REGISTER_MUTATION ;
    const [mutation, mutationResults] = useMutation<TDataRegister, RegisterMutationVariables>(MUTATION, {
      onCompleted: (data) => {
        console.log(data);
        alert("Register successful");
        const accessToken = data.register?.tokens.access;
        const refreshToken = data.register?.tokens.refresh;
        const user = data.register?.user;
        if (accessToken !== undefined) {
          setAuthToken(accessToken, 'accessToken');
        }
        if (refreshToken !== undefined) {
          setAuthToken(refreshToken, 'refreshToken');
        }
        if (user !== undefined) {
          setUser(user);
          dispatch(setIsLoggedIn(true));
        }
        getAuthToken('accessToken').then(item => {
          console.log(item);
        });
        getAuthToken('refreshToken').then(item => {
          console.log(item);
        });
      },
      onError(error) {
          alert(error.message);
      },
    });
  
    //we have rewritten the function to have a cleaner interface
    const register = (data: IRegisterUser) => {
        return mutation({
          variables: {
            data: data
          },
        });
    };
    return [register, mutationResults];
  };
  
  