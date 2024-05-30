import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const DetailContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DetailHeader = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const DetailItem = styled.div`
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 15px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  &:hover {
    background-color: #0056b3;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Detail = ({ expenses, setExpenses }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedExpense, setEditedExpense] = useState({});
  const [isDeleted, setIsDeleted] = useState(false);
  const expense = expenses.find((item) => item.id === id);

  const handleDelete = () => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((item) => item.id !== id)
    );
    setIsDeleted(true);
    // 삭제 버튼을 눌렀을 때 자동으로 뒤로가기
    navigate(-1);
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

  const handleKeyDown = (e) => {
    if (e.key === "Escape") handleCancelEdit();
    if (e.key === "Enter") handleSaveEdit();
  };

  if (isDeleted) {
    return null;
  }

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
            onKeyDown={handleKeyDown}
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
            onKeyDown={handleKeyDown}
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
            onKeyDown={handleKeyDown}
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
            onKeyDown={handleKeyDown}
          />
        ) : (
          expense.description
        )}
      </DetailItem>
      <ButtonContainer>
        {isEditing ? (
          <>
            <Button onClick={handleSaveEdit}>저장</Button>
            <Button
              onClick={handleCancelEdit}
              style={{ backgroundColor: "#ff4d4d" }}
            >
              취소
            </Button>
          </>
        ) : (
          <>
            <Button onClick={handleEdit}>수정</Button>
            <Button
              onClick={handleDelete}
              style={{ backgroundColor: "#ff4d4d" }}
            >
              삭제
            </Button>
            <Button onClick={() => navigate(-1)}>뒤로가기</Button>
          </>
        )}
      </ButtonContainer>
    </DetailContainer>
  );
};

export default Detail;
