import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 1440px;
  min-height: min(100vh, 800px);
  margin: 0 auto;
  background-image: url("/pattern-curve.svg");
  background-repeat: no-repeat;
  background-position: bottom left;
  main {
    min-height: min(100vh, 800px);
    padding: 50px 73px 50px 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 548px) {
      padding: 21px 24px 50px 21px;
      flex-direction: column-reverse;
    }
    .left {
      width: 55.45%;
      margin-right: -10%;
      z-index: 10;
      position: relative;
      @media (max-width: 548px) {
        width: 100%;
        margin-right: 0;
        text-align: center;
        margin-top: 58px;
      }
      q {
        width: min(643px, 120%);
        font-weight: 300;
        font-size: 35px;
        line-height: 125%;
        letter-spacing: -0.035em;
        color: var(--dark-2);
        @media (max-width: 548px) {
          width: 100%;
          font-size: 19px;
          text-align: center;
          letter-spacing: -0.02em;
        }
      }
      &_designation {
        display: flex;
        align-items: center;
        gap: 8px;
        padding-top: 37px;
        @media (max-width: 548px) {
          flex-direction: column;
          padding-top: 19px;
          justify-content: center;
          text-align: center;
          gap: 2px;
        }
        &_name {
          font-weight: 700;
          font-size: 21px;
          line-height: 125%;
          letter-spacing: -0.02em;
          color: var(--dark);
          @media (max-width: 548px) {
            font-size: 14px;
            letter-spacing: 0.04em;
          }
        }
        &_role {
          font-weight: 400;
          font-size: 21px;
          line-height: 125%;
          letter-spacing: -0.02em;
          color: var(--gray);
          @media (max-width: 548px) {
            font-size: 14px;
            letter-spacing: 0.04em;
          }
        }
      }
      &_illus {
        position: absolute;
        top: -65px;
        left: 96px;
        @media (max-width: 548px) {
          top: -26px;
          left: 50%;
          transform: translateX(-50%);
          width: min(60px, 100%);
          height: auto;
        }
      }
    }
    .right {
      width: 57.93%;
      position: relative;
      @media (max-width: 548px) {
        width: 100%;
      }
      img {
        width: 100%;
        height: auto;
        border-radius: 6px;
        filter: drop-shadow(2px 2px 40px rgba(0, 0, 0, 0.2));
      }
      &_shift {
        position: absolute;
        top: 87%;
        left: 20%;
        background: #ffffff;
        border-radius: 28px;
        height: 56px;
        width: 112px;
        padding: 5px 21px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
        @media (max-width: 548px) {
          top: 84%;
          left: 50%;
          transform: translateX(-50%);
          height: 40px;
          width: 80px;
          padding: 3px 13px 0;
        }
        &__button {
          @media (max-width: 548px) {
            .right_shift__button_image_prev {
              width: 9px;
            }
            .right_shift__button_image_next {
              width: 10px;
            }
          }
        }
      }
    }
  }
`;
