import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to show error
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Error Occur</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
