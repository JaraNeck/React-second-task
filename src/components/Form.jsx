import React, { useContext } from "react";
import styled from "styled-components";
import { ExpenseContext } from "../contexts/ExpenseContext";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 5px;
  margin: 50px 0 50px 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row; /* 가로로 배치 */
  justify-content: center;
  align-items: center;
  max-width: 300px;
  margin: 20px auto;

  label {
    display: flex;
    flex-direction: column;
    margin-right: 10px; /* 각 입력 요소 사이의 간격 조정 */
    margin-bottom: 10px;
  }

  input {
    margin-top: 5px;
  }

  button {
    margin-top: 10px;
    white-space: nowrap; /* 텍스트가 가로로만 표시되도록 설정 */
  }
`;

const Form = () => {
  const { addExpense } = useContext(ExpenseContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const date = formData.get("date");
    const item = formData.get("item");
    const amount = formData.get("amount");
    const description = formData.get("description");

    if (!date.trim() || !item.trim() || !amount.trim() || !description.trim())
      return alert("빈칸을 채워주세요");

    const newExpense = {
      id: crypto.randomUUID(),
      date,
      item,
      amount,
      description,
    };

    addExpense(newExpense);
    e.target.reset();
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={onSubmit}>
        <label>
          날짜
          <input type="date" name="date" />
        </label>
        <label>
          항목
          <input type="text" name="item" placeholder="지출 항목" />
        </label>
        <label>
          금액
          <input type="number" name="amount" placeholder="지출 금액" />
        </label>
        <label>
          내용
          <input type="text" name="description" placeholder="지출 내용" />
        </label>
        <button type="submit">저장</button>
      </StyledForm>
    </FormContainer>
  );
};

export default Form;
