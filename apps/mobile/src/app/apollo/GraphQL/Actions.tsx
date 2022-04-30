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
import { useIsUser } from '../../customHooks/useIsUser';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { setIsLoggedIn } from '../../redux/actions/login';

export const useLoginMutation = (
  method: loginMethod,
): [IResult, MutationResult<TData>] => {
  const dispatch = useDispatch<Dispatch>();
  const [setAuthToken, getAuthToken] = useAccessToken();
  const [setUser, getUser] = useIsUser();
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
      const user =
          method === 'email'
            ? data.loginWithEmail?.user
            : data.loginWithTel?.user;
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
      // console.log( getAuthToken('accessToken'));
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

