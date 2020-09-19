import React, { Component } from "react";
import s from "./card.module.scss";
import cl from "classnames";

class Card extends Component {
  state = {
    done: false,
  };

  handleCardClick = () => {
    this.setState({ done: !this.state.done });
  };

  render() {
    const { eng, rus } = this.props;
    const { done } = this.state;

    return (
      <div
        className={cl(s.card, { [s.done]: done })}
        onClick={this.handleCardClick}
      >
        <div className={s.cardInner}>
          <div className={s.cardFront}>{eng}</div>
          <div className={s.cardBack}>{rus}</div>
        </div>
      </div>
    );
  }
}

export default Card;
