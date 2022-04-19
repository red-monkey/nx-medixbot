import {
  DocumentNode,
  FetchResult,
  MutationHookOptions,
  MutationResult,
  MutationTuple,
  OperationVariables,
  useMutation,
} from '@apollo/client';
import {
  LOGIN_WITH_EMAIL_MUTATION,
  LOGIN_WITH_PHONE_MUTATION,
} from './Mutations';
import {AUTH_TOKEN} from '../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {loginMethod} from '../../utils/types';
import {IResult, TData, TVariables} from './types';
import {useAccessToken} from '../../customHooks/useAuthToken';
import {setAuthToken} from '../../redux/crud';

export const useLoginMutation = (
  method: loginMethod,
): [IResult, MutationResult<TData>] => {
  const [token, setToken] = useState(null);
  const [setAuthToken, getAuthToken] = useAccessToken();
  const MUTATION =
    method === 'email' ? LOGIN_WITH_EMAIL_MUTATION : LOGIN_WITH_PHONE_MUTATION;
  const [mutation, mutationResults] = useMutation<TData, TVariables>(MUTATION, {
    onCompleted: data => {
      console.log(data);
      const accessToken =
        method === 'email'
          ? data.loginWithEmail?.tokens.access
          : data.loginWithTel?.tokens.access;
      const refreshToken =
        method === 'email'
          ? data.loginWithEmail?.tokens.refresh
          : data.loginWithTel?.tokens.refresh;
      if (accessToken !== undefined) {
        setAuthToken(accessToken, 'accessToken');
      }
      if (refreshToken !== undefined) {
        setAuthToken(refreshToken, 'refreshToken');
      }
      // console.log( getAuthToken('accessToken'));
      getAuthToken('accessToken').then(item => {
        console.log(item);
      });
      getAuthToken('refreshToken').then(item => {
        console.log(item);
      });
    },
  });

  //we have rewritten the function to have a cleaner interface
  const login = (password: string, email?: string, phone?: string) => {
    if (method === 'phone') {
      return mutation({
        variables: {
          tel: phone,
          password: password,
        },
      });
    } else {
      return mutation({
        variables: {
          email: email,
          password: password,
        },
      });
    }
  };
  return [login, mutationResults];
};
