import React from "react";
import styled from "styled-components";

const MonthSelectorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* 월 간의 간격 설정 */
  flex-direction: row; /* 가로로 정렬 */
  border: 1px solid;
  justify-content: center;
  border-radius: 5px;
  margin-bottom: 50px;
  padding: 30px;
`;

const MonthTab = styled.div.attrs((props) => ({
  isselected: props.isselected ? "true" : undefined,
}))`
  background-color: ${(props) =>
    props.isselected === "true" ? "#cbffcb" : "white"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border: 1px solid;
  &: hover {
    background-color: #cbffcb;
  }
`;

const MonthSelector = ({ selectedMonth, setSelectedMonth }) => {
  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  const handleMonthClick = (month) => {
    setSelectedMonth((prevMonth) => (prevMonth === month ? "" : month)); // 선택된 월과 클릭한 월이 동일한 경우 선택을 취소
  };

  return (
    <MonthSelectorContainer>
      {months.map((month) => (
        <MonthTab
          key={month}
          isselected={selectedMonth === month}
          onClick={() => handleMonthClick(month)}
        >
          {month}
        </MonthTab>
      ))}
    </MonthSelectorContainer>
  );
};

export default MonthSelector;
