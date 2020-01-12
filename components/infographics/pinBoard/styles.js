import styled from 'styled-components';
import { PlainTextStyles } from '../plainText/styles';

const PinBoardBasicStyles = styled.div`
  position: relative;
  padding: 40px 16px 20px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  font-size: 0.8em;
  overflow: hidden;
  font-family: 'Lato', sans-serif;

  display: flex;
  flex-wrap: wrap;

  @media (min-width: 800px) {
    padding: 40px 35px 20px;
  }

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
    margin: 0 10px 30px;
    padding: 0;
    color: #ffffff;
    font-size: 120px;
    text-shadow: 0px 0px 500px #fff;
    text-align: center;
    align-items: center;
    width: 100%;
    @media (min-width: 1200px) {
      width: 60%;
      margin: 0;
    }
    span {
      display: none;
    }
    img {
      display: inline-block;
      margin-left: auto;
      margin-right: auto;
      width: 600px;
      @media (min-width: 1200px) {
        width: 95%;
      }
      max-width: 100%;
      filter: drop-shadow(0px 0px 70px rgba(255, 255, 255, 0.8));
    }
  }

  .card-wrap {
    padding: 0 10px;
    width: 100%;
    margin-bottom: 16px;
    display: flex;

    @media (min-width: 500px) {
      width: 50%;
    }
    @media (min-width: 900px) {
      /* width: 33%; */
    }
    @media (min-width: 1200px) {
      margin-bottom: 0;
      width: 20%;
      display: flex;
      /* &:nth-of-type(n + 7) {
        width: 25%;
      } */
    }
    /* padding-right: 80px; */
    /* border: 1px solid lime; */
  }

  .card {
    position: relative;
    width: 250px;
    max-width: 100%;
    margin: 0 auto;
    /* margin-top: 16px;
    margin-bottom: 16px; */
    @media (min-width: 1200px) {
      margin-right: 0;
      width: 80%;
      width: 160px;
    }

    /* The circle */
    &:after {
      position: absolute;
      display: none;
      content: '';
      background-size: contain;
      background-image: url('/images/circle.svg');
      width: 30px;
      height: 30px;
      left: -18px;
      top: 0;
      background-repeat: no-repeat;
      transform: translateX(-50%);
      @media (min-width: 1000px) {
        display: block;
      }
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

        @media (min-width: 1200px) {
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
        border: 2px solid #ffffff;
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
        position: absolute;
        display: block;
        /* display: none; */
        content: '';
        background-size: contain;
        background-image: url('/images/tape.svg');
        width: 150px;
        height: 50px;
        background-repeat: no-repeat;
        opacity: 0.2;
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
    width: 45,
    borderWidth: '0 0 2px 2px',
    bottom: -60,
    tapeStyle: `
    bottom: -20px;
    left: -42px;
    transform: rotate(34deg);
    `,
    wrapStyle: `
    align-self:flex-end;
    `
  },
  {
    width: 18,
    borderWidth: '2px  0 0 2px',
    left: '-25px',
    right: 'auto',
    top: 15,
    bottom: -20,
    transform: 'translateX(-100%)',
    backgroundPosition: 'left bottom',
    tapeStyle: `
    top: -12px;
    right: -50px;
    transform: rotate(34deg);
    `,
    wrapStyle: `
    align-self:center;
    `
  },
  {
    width: 20,
    borderWidth: '0  0 0 2px',
    left: '0',
    right: 'auto',
    top: 30,
    transform: 'translateX(-100%)',
    backgroundPosition: 'left bottom',
    tapeStyle: `
    top: -12px;
    right: -33px;
    transform: rotate(34deg);
    `
  },
  {
    width: 20,
    borderWidth: '2px  2px 0 0',
    left: 'auto',
    right: '-30px',
    top: 15,
    bottom: -30,
    transform: 'translateX(100%)',
    backgroundPosition: 'right bottom',
    tapeStyle: `
    top: -11px;
    left: -50px;
    transform: rotate(-25deg);
    `,
    wrapStyle: `
    align-self:center;
    `
  },
  {
    width: 30,
    borderWidth: '0  2px 2px 0',
    left: '-16px',
    right: 'auto',
    top: 30,
    bottom: -70,
    transform: 'translateX(-100%)',
    backgroundPosition: 'left bottom',
    tapeStyle: `
    top: 23px;
    left: -50px;
    transform: rotate(-25deg);
    `
  },
  {
    width: 30,
    borderWidth: '2px  0 0 0',
    left: 'auto',
    right: '-30px',
    top: 15,
    transform: 'translateX(100%)',
    backgroundPosition: 'right top',
    tapeStyle: `
    top: -11px;
    left: -50px;
    transform: rotate(-38deg);
    `,
    wrapStyle: `
    padding-top: 89px;
    max-height: 200px;
    ovefflow: visible;
    `
  },
  {
    width: 18,
    borderWidth: '0  2px 2px 0',
    left: 'auto',
    right: '-30px',
    top: 15,
    height: 60,
    transform: 'translateX(100%) translateY(-100%)',
    backgroundPosition: 'right top',
    tapeStyle: `
    bottom: 9px;
    right: -82px;
    transform: rotate(-34deg);
    `,
    wrapStyle: `
    padding-top: 30px;
    margin-left: 16%;
    `
  },
  {
    width: 20,
    borderWidth: '0  0 2px 2px',
    left: '-30px',
    right: 'auto',
    top: 15,
    height: 140,
    transform: 'translateX(-100%) translateY(-100%)',
    backgroundPosition: 'left top',
    tapeStyle: `
    top: -11px;
    left: -50px;
    transform: rotate(-38deg);
    `,
    wrapStyle: `
    padding-top: 100px;
    `
  },
  {
    width: 20,
    borderWidth: '0 0 0 2px',
    left: 'auto',
    right: '-36px',
    top: 2,
    height: 40,
    transform: 'translateY(-100%)',
    backgroundPosition: 'left top',
    tapeStyle: `
    bottom: -15px;
    right: -62px;
    transform: rotate(-10deg);
    `,
    wrapStyle: `
    padding-top: 30px;
    `
  },
  {
    width: 30,
    borderWidth: '0  0 2px 2px',
    left: '-30px',
    right: 'auto',
    top: 15,
    height: 90,
    transform: 'translateX(-100%) translateY(-100%)',
    backgroundPosition: 'left top',
    tapeStyle: `
    top: -12px;
    right: -33px;
    transform: rotate(34deg);
    `,
    wrapStyle: `
    padding-top: 60px;
    `
  }
];

const arrowsCss = arrows.map(
  arrow => `
  
  @media (min-width: 1200px) {
    ${arrow.wrapStyle ? arrow.wrapStyle : ''}
  }

  .card h3:before,
  .card h3:after {
    width: ${`${arrow.width}px`};
    border-width: ${arrow.borderWidth};
    top: ${`${arrow.top}px`};
    bottom: ${`${arrow.bottom}px`};
    left: ${arrow.left};
    right: ${arrow.right};
    height: ${`${arrow.height}px`};
    transform: ${arrow.transform};
  }
  .card h3:before {

  }
  .card h3:after {
    ${arrow.bottom ? `bottom: ${arrow.bottom - 3}px` : ``}
    top: ${`${arrow.top - 3}px`};
    width: ${`${arrow.width + 3}px`};
    background-position: ${arrow.backgroundPosition};
  }
  .card p:after {
    ${arrow.tapeStyle}
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
      @media (min-width: 1200px) {
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
    &:nth-of-type(n + 7) {
    }
  }
`;

export { PinBoardStyles, PinBoardPlainStyles };
