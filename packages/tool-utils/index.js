import { runtime } from '@tool/runtime';
import { runtimeHelper } from '@tool/runtime/setget';

export const runUtils = () => {
  runtime();
  const number = runtimeHelper();
  console.log('runUtils', number);
}