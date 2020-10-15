
import React from "react";

class CounterErrorBoundaries extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(err) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <iframe
            src="https://giphy.com/embed/f6JH3qn4W8iL3tN0E8"
            width="480"
            height="270"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
      );
    }
    return <>{this.props.children}</>;
  }
}
export default CounterErrorBoundaries;