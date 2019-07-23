import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus {
  outline: 0;
}

html, body, #root {
  height: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font: 14px 'Roboto', sans-serif;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
}

.react-datepicker, .react-datepicker__time-container, .react-datepicker__time {
  font-family: Roboto, sans-serif !important;
  font-size: 14px !important;
  color: #fff !important;
  background: linear-gradient(180deg, #22202c, #402845) !important;
  border: 1px solid #22202c !important;

  .react-datepicker__triangle {
    border-bottom-color: #22202c !important;

    &:before {
      border-bottom-color: #22202c !important;
    }
  }

  .react-datepicker__header {
    background-color: #22202c !important;
    border: 1px solid #22202c !important;

    .react-datepicker__current-month, .react-datepicker-time__header {
      color: #fff !important;
    }

    .react-datepicker__day-names {
      .react-datepicker__day-name {
        color: #fff !important;
      }
    }
  }

  .react-datepicker__month, .react-datepicker__time {
    .react-datepicker__day--disabled, .react-datepicker__month-text--disabled {
      color: #fff !important;
      opacity: 0.7 !important;
    }

    .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
      color: #fff !important;
    }

    .react-datepicker__day--selected,
    .react-datepicker__day--in-selecting-range,
    .react-datepicker__day--in-range,
    .react-datepicker__month-text--selected,
    .react-datepicker__month-text--in-selecting-range,
    .react-datepicker__month-text--in-range,
    .react-datepicker__time-list-item--selected {
      background-color: #d44059 !important;
    }

    .react-datepicker__day:hover,
    .react-datepicker__month-text:hover,
    .react-datepicker__time-list-item:hover {
      background-color: #22202c !important;
      opacity: 0.7 !important;
    }
  }
}
`;
