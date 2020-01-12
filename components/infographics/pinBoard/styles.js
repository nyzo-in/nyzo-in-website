import styled from 'styled-components';
import { PlainTextStyles } from '../plainText/styles';

const PinBoardBasicStyles = styled.div`
  position: relative;
  padding: 16px 10px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  font-size: 0.8em;
  /* background-color: #662928; */
  font-family: 'Lato', sans-serif;

  display: flex;
  flex-wrap: wrap;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 30px;
    bottom: 30px;
    left: 30px;
    right: 30px;
    background-color: #662928;
    background-image: url('/images/rectangle.svg');
    background-repeat: repeat;
    background-position: center;
    background-size: 80px;
    z-index: -2;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /* background-color: #662928; */
    border: 34px solid #662928;
    z-index: -1;
  }

  h1 {
    display: flex;
    margin: 0;
    padding: 10px;
    color: #ffffff;
    font-size: 120px;
    text-shadow: 0px 0px 500px #fff;
    text-align: center;
    align-items: center;
    width: 100%;
    @media (min-width: 800px) {
      width: 60%;
    }
    span {
      display: none;
    }
    img {
      display: inline-block;
      margin-left: auto;
      margin-right: auto;
      width: 90%;
      max-width: 100%;
      filter: drop-shadow(0px 0px 70px rgba(255, 255, 255, 0.8));
    }
  }

  .card-wrap {
    padding: 0 10px;
    width: 100%;

    @media (min-width: 500px) {
      width: 50%;
    }
    @media (min-width: 800px) {
      width: 20%;
      display: flex;
      &:nth-of-type(n + 7) {
        width: 25%;
      }
    }
    /* padding-right: 80px; */
    /* border: 1px solid lime; */
  }

  .card {
    position: relative;
    width: 300px;
    max-width: 100%;
    margin: 0 auto;
    margin-top: 16px;
    margin-bottom: 16px;
    @media (min-width: 800px) {
      margin-right: 0;
      width: 80%;
      width: 160px;
    }

    /* The circle */
    &:after {
      position: absolute;
      display: block;
      content: '';
      background-size: contain;
      background-image: url('/images/circle.svg');
      width: 30px;
      height: 30px;
      left: -18px;
      top: 0;
      background-repeat: no-repeat;
      transform: translateX(-50%);
    }

    h3 {
      margin-top: 0;
      color: #f1f1e9;
      @media (min-width: 800px) {
        text-align: left;
      }

      &:after,
      &:before {
        display: none;
        position: absolute;
        content: '';
        left: -17px;
        top: 28px;
        transform: translateX(100%);

        @media (min-width: 1000px) {
          display: block;
        }
      }

      /* The dot */
      &:after {
        background-size: contain;
        background-image: url('/images/dot.svg');
        background-position: right bottom;
        width: 65px;
        top: -3px;
        bottom: -3px;
        background-repeat: no-repeat;
        background-size: 10px;
      }

      /* The lines */
      &:before {
        width: 60px;
        bottom: 0;
        border: 3px solid #ffffff;
        border-top-width: 0;
        border-right-width: 0;
        background-repeat: no-repeat;
        background-size: 10px;
      }
    }

    /* Lets alter things */

    p {
      position: relative;
      display: block;
      padding: 38px 12px 12px;
      background-image: url('/images/paper.svg');
      background-repeat: no-repeat;
      background-size: 100% auto;
      text-align: center;
      border-radius: 0 0 15px 15px;

      &:after {
        display: block;
        display: none;
        content: '';
        background-size: contain;
        background-image: url('/images/tape.svg');
        width: 150px;
        height: 50px;
        background-repeat: no-repeat;
      }

      &:before {
        position: absolute;
        display: block;
        content: '';
        top: 30px;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f1f1e9;
        border-radius: 0 0 15px 15px;
        z-index: -1;
      }
    }
  }
`;

const PinBoardPlainStyles = styled(PlainTextStyles)``;

const arrows = [
  {
    width: 20,
    borderWidth: '0 0 3px 3px'
  },
  {
    width: 20,
    borderWidth: '3px  0 0 3px',
    left: '-25px',
    right: 'auto',
    top: 15,
    transform: 'translateX(-100%)',
    backgroundPosition: 'left bottom'
  },
  {
    width: 20,
    borderWidth: '0  0 0 3px',
    left: '0',
    right: 'auto',
    top: 30,
    transform: 'translateX(-100%)',
    backgroundPosition: 'left bottom'
  },
  {
    width: 20,
    borderWidth: '3px  3px 0 0',
    left: 'auto',
    right: '-30px',
    top: 15,
    transform: 'translateX(100%)',
    backgroundPosition: 'right bottom'
  },
  {
    width: 20,
    borderWidth: '0  3px 3px 0',
    left: '-16px',
    right: 'auto',
    top: 30,
    transform: 'translateX(-100%)',
    backgroundPosition: 'left bottom'
  },
  {
    width: 45,
    borderWidth: '3px  0 0 0',
    left: 'auto',
    right: '-30px',
    top: 15,
    transform: 'translateX(100%)',
    backgroundPosition: 'right top'
  },
  {
    width: 20,
    borderWidth: '0  3px 3px 0',
    left: 'auto',
    right: '-30px',
    top: 15,
    height: 80,
    transform: 'translateX(100%) translateY(-100%)',
    backgroundPosition: 'right top'
  },
  {
    width: 20,
    borderWidth: '0  0 3px 3px',
    left: '-30px',
    right: 'auto',
    top: 15,
    height: 80,
    transform: 'translateX(-100%) translateY(-100%)',
    backgroundPosition: 'left top'
  },
  {
    width: 20,
    borderWidth: '0 0 0 3px',
    left: 'auto',
    right: '-36px',
    top: 2,
    height: 80,
    transform: 'translateY(-100%)',
    backgroundPosition: 'left top'
  },
  {
    width: 50,
    borderWidth: '0  0 3px 3px',
    left: '-30px',
    right: 'auto',
    top: 15,
    height: 80,
    transform: 'translateX(-100%) translateY(-100%)',
    backgroundPosition: 'left top'
  }
];

const arrowsCss = arrows.map(
  arrow => `
  .card h3:before,
  .card h3:after {
    width: ${`${arrow.width}px`};
    border-width: ${arrow.borderWidth};
    top: ${`${arrow.top}px`};
    left: ${arrow.left};
    right: ${arrow.right};
    height: ${`${arrow.height}px`};
    transform: ${arrow.transform};
  }
  .card h3:before {

  }
  .card h3:after {
    top: ${`${arrow.top - 3}px`};
    width: ${`${arrow.width + 3}px`};
    background-position: ${arrow.backgroundPosition};
  }
  `
);

const PinBoardStyles = styled(PinBoardBasicStyles)`
  /*  add positioning for the arrows and dots here */
  .card-wrap {
    /* Move some of the cards to the right of the .card-wrap */
    &:nth-of-type(1),
    &:nth-of-type(4),
    &:nth-of-type(6),
    &:nth-of-type(7),
    &:nth-of-type(9) {
      .card {
        margin-left: 0;
        margin-right: auto;
        /* also move the circle to the right */
        &:after {
          left: auto;
          right: -18px;
          transform: translateX(50%);
        }
        h3 {
          /* align the heading right */
          text-align: right;
          &:after,
          &:before {
            /* and change the arrow line styles */
            left: auto;
            right: -17px;
            transform: translateX(100%);
          }
        }
      }
    }

    /* specifically style each line one at a time using values from the arrows array */
    &:nth-of-type(1) {
      ${arrowsCss[0]}
    }
    &:nth-of-type(2) {
      ${arrowsCss[1]}
    }
    &:nth-of-type(3) {
      ${arrowsCss[2]}
    }
    &:nth-of-type(4) {
      ${arrowsCss[3]}
    }
    &:nth-of-type(5) {
      ${arrowsCss[4]}
    }
    &:nth-of-type(6) {
      ${arrowsCss[5]}
    }
    &:nth-of-type(7) {
      ${arrowsCss[6]}
    }
    &:nth-of-type(8) {
      ${arrowsCss[7]}
    }
    &:nth-of-type(9) {
      ${arrowsCss[8]}
    }
    &:nth-of-type(10) {
      ${arrowsCss[9]}
    }
    /* &:nth-of-type(n + 10) {
      opacity: 0;
    } */
  }
`;

export { PinBoardStyles, PinBoardPlainStyles };
