import React, {useEffect, useRef, useState} from 'react'

const UseRefTest = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("man");

  const useInput = useRef(null);

  const handleChangeName = (ev) => {
    setName(ev.target.value);
  }

  const handleChangeGender = (ev) => {
    setGender(ev.target.value);
  }

  const handleSubmit = (ev) => {
    alert(`이름 : ${name}, 성별 : ${gender}`);
    ev.preventDefault(); 
  }

  const handleReset = () => {
    setName("");
    setGender("man");

  }

  useEffect(() => {
    useInput.current?.focus();
  }, [name, gender])
  //name또는 gender의 값이 변경되면 해당 함수를 한번 실행해줘.

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        이름 :
        <input
          type="text"
          value={name}
          onChange={handleChangeName} 
          ref={useInput}
        />
      </label>
      <br /><br />
      <label>
        성별 :
        <select value={gender} onChange={handleChangeGender}>
          <option value="man">남자</option>
          <option value="woman">여자</option>
        </select>
      </label>
      <br /><br />
      <button type='submit'>제출</button>
      <button type='button' onClick={handleReset}>초기화</button>
    </form>
  )
}

export default UseRefTest