import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ExpenseContext } from "../contexts/ExpenseContext";

const ListContainer = styled.div`
  border: 1px solid;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 50px;
`;

const ListHeader = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const ListItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #eee;
  background-color: #dbdbdb;
  &:last-child {
    border-bottom: none;
  }
`;

const List = () => {
  const { expenses, selectedMonth } = useContext(ExpenseContext);

  // 월 이름을 월 숫자로 매핑
  const monthMap = {
    "1월": "01",
    "2월": "02",
    "3월": "03",
    "4월": "04",
    "5월": "05",
    "6월": "06",
    "7월": "07",
    "8월": "08",
    "9월": "09",
    "10월": "10",
    "11월": "11",
    "12월": "12",
  };

  // 선택된 월에 해당하는 지출 항목 필터링
  const filteredExpenses = selectedMonth
    ? expenses.filter(
        (expense) => expense.date.split("-")[1] === monthMap[selectedMonth]
      )
    : expenses; // selectedMonth가 없으면 모든 지출 항목을 표시

  const navigate = useNavigate();

  return (
    <ListContainer>
      <ListHeader>
        {selectedMonth ? `${selectedMonth} 지출 목록` : "전체 지출 목록"}
      </ListHeader>
      <ul>
        {filteredExpenses.map((expense) => (
          <ListItem
            key={expense.id}
            onClick={() => {
              navigate(`/detail/${expense.id}`);
            }}
          >
            {expense.date} - {expense.item} - {expense.description} -{" "}
            {expense.amount}원
          </ListItem>
        ))}
      </ul>
    </ListContainer>
  );
};

export default List;
