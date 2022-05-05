import {
  MutationResult,
  useMutation,
} from '@apollo/client';
import { LOGIN_MUTATION } from '../Mutations';
import {IResult, TData, TVariables} from '../types';
import {useAccessToken} from '../../../customHooks/useAuthToken';
import { useIsUser } from '../../../customHooks/useIsUser';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { setIsLoggedIn } from '../../../redux/actions/login';

export const useLoginMutation = (): [IResult, MutationResult<TData>] => {
  const dispatch = useDispatch<Dispatch>();
  const [setAuthToken, getAuthToken] = useAccessToken();
  const [setUser, ] = useIsUser();
  const MUTATION = LOGIN_MUTATION ;
  const [mutation, mutationResults] = useMutation<TData, TVariables>(MUTATION, {
    onCompleted: (data) => {
      console.log(data);
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

