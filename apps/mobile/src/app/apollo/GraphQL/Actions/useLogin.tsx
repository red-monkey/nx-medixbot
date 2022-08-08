import { MutationResult } from '@apollo/client';
import { IResult } from '../types';
import { useAccessToken } from '../../../customHooks/useAuthToken';
import { useIsUser } from '../../../customHooks/useIsUser';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { setIsLoggedIn } from '../../../redux/actions/login';
import { LoginMutation, useLoginMutation } from '@medixbot/types';

export const useLogin = (): [IResult, MutationResult<LoginMutation>] => {
  const dispatch = useDispatch<Dispatch>();
  const [setAuthToken, _] = useAccessToken();
  const [setUser] = useIsUser();
  const [mutation, mutationResults] = useLoginMutation({
    onCompleted: (data) => {
      const accessToken = data.login?.tokens.access;
      const refreshToken = data.login?.tokens.refresh;
      const user = data.login?.user;
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
  const login = (username: string, password: string) => {
    return mutation({
      variables: {
        username: username,
        password: password,
      },
    });
  };
  return [login, mutationResults];
};
