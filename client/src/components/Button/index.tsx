import { CSSProperties, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

interface Props {
  onClick?: VoidFunction;
  width?: string;
  height?: string;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

export const Button: FC<PropsWithChildren<Props>> =
  ({
     children,
     width = '50px',
     height = '30px',
     onClick,
     className,
   }) => {
    const _className = classNames('tdl-button', className);
    const styles: CSSProperties = {
      width,
      height,
    };

    return (
      <button onClick={onClick} style={styles} className={_className}>{children}</button>
    );
  };

