import { createElement, FC, ReactNode } from 'react';
import { getHeader } from './utils';
import classNames from 'classnames';

export type Level = 1 | 2 | 3 | 4 | 5 | 6;

interface Props {
  level: Level;
  children?: ReactNode;
  className?:string;
}

export const Header: FC<Props> = ({ level, children,className }) => {
  const _className = classNames(`tdl-header-${level}`,className)
  const header = getHeader[level];
  return createElement(header, {className:_className}, children);
};