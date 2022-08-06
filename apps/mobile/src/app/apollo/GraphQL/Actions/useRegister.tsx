import {
    MutationResult,
  } from '@apollo/client';
  import { IResultRegister} from '../types';
  import {useAccessToken} from '../../../customHooks/useAuthToken';
  import { useIsUser } from '../../../customHooks/useIsUser';
  import { useDispatch } from 'react-redux';
  import { Dispatch } from 'redux';
  import { setIsLoggedIn } from '../../../redux/actions/login';
  import { IRegisterUser, RegisterMutation, useRegisterMutation } from '@medixbot/types';
  
  export const useRegister = (): [IResultRegister, MutationResult<RegisterMutation>] => {
    const dispatch = useDispatch<Dispatch>();
    const [setAuthToken] = useAccessToken();
    const [setUser, ] = useIsUser();
    const [mutation, mutationResults] = useRegisterMutation({
      onCompleted: (data) => {
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
  
  