import { Component, ReactNode } from 'react';

interface IErrorBoundaryProps {
  children?: ReactNode | Element;
}

interface IErrorBoundaryState {
  error: any;
  errorInfo: any;
}

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    const { error, errorInfo } = this.state;
    if (error || errorInfo) {
      return <>Что-то пошло не так</>;
    }
    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;