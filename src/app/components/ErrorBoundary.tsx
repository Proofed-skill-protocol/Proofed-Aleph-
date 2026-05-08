'use client';

import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onReset?: () => void;
  context?: string; // e.g. "Screen5Eval", "Screen6Results"
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({ errorInfo: info });
    // In production you'd send this to Sentry / your logging service
    console.error(`[ErrorBoundary:${this.props.context ?? 'unknown'}]`, error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    this.props.onReset?.();
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    if (this.props.fallback) return this.props.fallback;

    return (
      <div className="eb-wrap">
        <div className="eb-icon">⚠</div>
        <p className="eb-title">Something went wrong</p>
        <p className="eb-msg">
          {this.state.error?.message ?? 'An unexpected error occurred.'}
        </p>
        {this.props.context && (
          <p className="eb-ctx">in {this.props.context}</p>
        )}
        <button className="btn btn-ghost eb-btn" onClick={this.handleReset}>
          Try again
        </button>
        <style>{`
          .eb-wrap {
            display: flex; flex-direction: column; align-items: center;
            justify-content: center; padding: 56px 24px; text-align: center;
            border: 1px solid var(--border); border-radius: 12px;
            background: rgba(255,255,255,0.02); margin: 32px 0;
          }
          .eb-icon { font-size: 2rem; color: orange; margin-bottom: 16px; }
          .eb-title { font-size: 1rem; font-weight: 700; color: var(--text); margin: 0 0 8px; }
          .eb-msg { font-size: 0.85rem; color: var(--muted); line-height: 1.6; max-width: 320px; margin: 0 0 6px; }
          .eb-ctx { font-size: 0.72rem; color: var(--muted); font-family: var(--mono); margin: 0 0 24px; }
          .eb-btn { min-width: 120px; }
        `}</style>
      </div>
    );
  }
}