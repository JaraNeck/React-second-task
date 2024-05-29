import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const DetailContainer = styled.div`
  border: 1px solid;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 50px;
`;

const DetailHeader = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const DetailItem = styled.div`
  margin-bottom: 10px;
`;

const Detail = ({ expenses, setExpenses }) => {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [editedExpense, setEditedExpense] = useState({});
  const expense = expenses.find((item) => item.id === id);

  const handleDelete = () => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((item) => item.id !== id)
    );
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditedExpense(expense);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedExpense({});
  };

  const handleSaveEdit = () => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((item) => (item.id === id ? editedExpense : item))
    );
    setIsEditing(false);
    setEditedExpense({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
  };

  return (
    <DetailContainer>
      <DetailHeader>지출 상세 정보</DetailHeader>
      <DetailItem>
        날짜:{" "}
        {isEditing ? (
          <input
            type="date"
            name="date"
            value={editedExpense.date}
            onChange={handleChange}
          />
        ) : (
          expense.date
        )}
      </DetailItem>
      <DetailItem>
        항목:{" "}
        {isEditing ? (
          <input
            type="text"
            name="item"
            value={editedExpense.item}
            onChange={handleChange}
          />
        ) : (
          expense.item
        )}
      </DetailItem>
      <DetailItem>
        금액:{" "}
        {isEditing ? (
          <input
            type="number"
            name="amount"
            value={editedExpense.amount}
            onChange={handleChange}
          />
        ) : (
          `${expense.amount}원`
        )}
      </DetailItem>
      <DetailItem>
        내용:{" "}
        {isEditing ? (
          <input
            type="text"
            name="description"
            value={editedExpense.description}
            onChange={handleChange}
          />
        ) : (
          expense.description
        )}
      </DetailItem>
      {isEditing ? (
        <>
          <button onClick={handleSaveEdit}>저장</button>
          <button onClick={handleCancelEdit}>취소</button>
        </>
      ) : (
        <>
          <button onClick={handleEdit}>수정</button>
          <button onClick={handleDelete}>삭제</button>
          <button onClick={() => window.history.back()}>뒤로가기</button>
        </>
      )}
    </DetailContainer>
  );
};

export default Detail;
