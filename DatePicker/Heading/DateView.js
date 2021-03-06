import React from 'react';
import styled from 'styled-components/native';
import getFullDayOfWeek from 'react-toolbox-core/lib/locale/getFullDayOfWeek';
import getShortMonth from 'react-toolbox-core/lib/locale/getShortMonth';

const DateView = ({ align, date, start }) => (
  <DateViewWrapper>
    <DateViewNode start={start}>
      {getTopLabel(date, start)}
    </DateViewNode>
    <DateViewNode start={start}>
      {getBottomLabel(date, start)}
    </DateViewNode>
  </DateViewWrapper>
);

const DateViewWrapper = styled.View`
  flex-direction: column;
  flex: 1;
`;

const DateViewNode = styled.Text`
  color: white;
  flex-grow: 1;
  font-size: 20;
  font-weight: 300;
  line-height: 36;
  text-align: ${props => props.start ? 'left' : 'right'};
`;

function getTopLabel(date, start) {
  return date
    ? `${getFullDayOfWeek(date.getDay())},`
    : (start ? 'Start' : 'End');
}

function getBottomLabel(date) {
  return date
    ? `${date.getDate()} ${getShortMonth(date)}`
    : 'Date';
}

export default DateView;
