import { Component, ReactNode } from "react";
import React from "react";
interface ErrorBoundaryProps {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  isError: boolean;
  error: Error | null;
}

export default class ErrorBoundaryPattern extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { isError: false, error: null };
  }
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { isError: true, error };
  }

  render(): ReactNode {
    if (this.state.isError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

interface ErrorFallbackProps {
  errorMessage?: string;
  resetError?: () => void;
}

export const ErrorFallback = ({
  errorMessage,
  resetError,
}: ErrorFallbackProps) => (
  <div className="error-container">
    <h2>Something went wrong</h2>
    <p>{errorMessage}</p>
    {resetError && <button onClick={resetError}>Try again</button>}
  </div>
);
