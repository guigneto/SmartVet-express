import styled from "styled-components";

const colors = {
  primaryBlue: '#3498db',
  secondaryOrange: '#e67e22',
  lightBlue: '#81d4fa',
  lightOrange: '#ffcc80',
  darkGray: '#333',
  lightGray: '#f0f2f5',
  successGreen: '#2ecc71',
  warningYellow: '#f1c40f',
};

export const AnimalListDiv = styled.div`
  padding: 16px;
  background: #fdfdfd;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AnimalCardDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 80%;
  max-width: 75%;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
`

export const Card = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  background: #fdfdfd;
`;

export const AnimalInfo = styled.div`
  margin-bottom: 12px;
`;

export const AnimalName = styled.h3`
  margin: 0;
`;

export const AnimalSpecie = styled.p`
  margin: 4px 0;
`;

export const AnimalBreed = styled.p`
  margin: 4px 0;
`;

export const AnimalWeight = styled.p`
  margin: 4px 0;
`;

export const AnimalBirthYear = styled.p`
  margin: 4px 0;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

export const CardButton = styled.button`
  padding: 15px 30px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 1.05rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &.edit {
    background-color: ${colors.primaryBlue};
    color: white;
    &:hover {
      background-color: #2980b9;
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }

  &.delete {
    background-color: ${colors.secondaryOrange};
    color: white;
    &:hover {
      background-color: #d35400;
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

export const FormLabel = styled.label`
  font-size: 0.9rem;
  margin-bottom: 4px;
`;

export const FormInput = styled.input`
  padding: 6px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FilterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
  width: 80%;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

export const FilterInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 15px 20px;
  padding-left: 50px;
  border: 1px solid #ddd;
  border-radius: 25px;
  font-size: 1.05rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  outline: none;
  border-color: ${colors.lightBlue};
  box-shadow: 0 0 0 3px rgba(129, 212, 250, 0.3);
  margin-left: 4px
  margin-right: 4px
`;

export const Button = styled.button`
  padding: 15px 30px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 1.05rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 16px;
  margin-bottom: 16px;
  width: 190px;

  &.new-animal {
    color: white;
    background-color: ${colors.successGreen};
     &:hover {
    background-color: rgb(45, 175, 99);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  }

  &.edit {
    background-color: ${colors.primaryBlue};
    color: white;
    &:hover {
      background-color: #2980b9;
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }

  &.delete {
    background-color: ${colors.secondaryOrange};
    color: white;
    &:hover {
      background-color: #d35400;
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
`;


export const SearchContainer = styled.div`
  position: relative;
  width: 80%;
`;

export const SearchInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 15px 20px;
  padding-left: 50px;
  border: 1px solid #ddd;
  border-radius: 25px;
  font-size: 1.1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${colors.lightBlue};
    box-shadow: 0 0 0 3px rgba(129, 212, 250, 0.3);
  }

  &::placeholder {
    color: #999;
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  font-size: 1.2rem;
  content: "🔍";
`;