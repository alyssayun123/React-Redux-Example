import * as React from 'react';
import * as classNames from 'classnames';
import './style';

export enum ContainerSize {
  LG = 'lg',
  XL = 'xl',
  MD = 'md',
  SM = 'sm'
}
export interface ContainerProps {
  size?: ContainerSize;
  className?: string;
}

export default class Contaier extends React.Component<ContainerProps> {
  constructor(props: ContainerProps) {
    super(props);
  }

  render() {
    const containerClass = classNames(
      'container',
      this.props.className,
      this.props.size || 'xl'
    );
    return <div className={containerClass}>{this.props.children}</div>;
  }
}
