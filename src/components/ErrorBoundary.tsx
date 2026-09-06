import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: '',
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      errorMessage: error?.message || 'An unexpected error occurred.',
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('Caught by ErrorBoundary:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, errorMessage: '' });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-[#F7FAF8] flex items-center justify-center p-6 font-['Outfit']">
          <div className="max-w-md w-full bg-white rounded-2xl p-8 border border-[#D2DFD8] shadow-lg text-center">
            <div className="w-12 h-12 rounded-full bg-[#EDF3EE] text-[#0E3333] flex items-center justify-center mx-auto mb-4 font-semibold text-xl">
              !
            </div>
            <h2 className="text-xl font-semibold text-[#0E3333] mb-2">
              Temporary Display Issue
            </h2>
            <p className="text-sm text-[#3D5A59] mb-6">
              We encountered a minor issue loading this section. Please reload or click retry below.
            </p>
            <button
              onClick={this.handleReset}
              className="px-6 py-2.5 bg-[#0E3333] text-white text-sm font-medium rounded-full hover:bg-[#184545] transition-colors cursor-pointer"
            >
              Retry
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
