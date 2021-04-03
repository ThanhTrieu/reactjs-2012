import { useState } from 'react';
import ButtonComponent from './components/button';
import InputComponent from './components/input';
import ResultComponent from './components/result';
import styled  from 'styled-components';

const DivContainer = styled.div`
  width: 300px;
  margin: 10px auto;
  padding: 20px;
  border: 1px solid #ccc;
`;
const GiaiPTBH = () => {
  const [hsa, setHsa] = useState(0);
  const [hsb, setHsb] = useState(0);
  const [hsc, setHsc] = useState(0);
  const [result, setResult] = useState("");

  const changeInput = (event) => {
    let nameInput = event.target.name;
    let val = event.target.value; // lay gia tri
    val = (!isNaN(val)) ? parseFloat(val) : 0; // ep ve so thuc
    if(nameInput === 'hsa'){
      setHsa(val);
    } else if(nameInput === 'hsb'){
      setHsb(val);
    } else if(nameInput === 'hsc') {
      setHsc(val);
    }
  }

  const giai = () => {
    let delta = (hsb*hsb) - (4*hsa*hsc);
    if(delta < 0){
      setResult('PT vo nghiem');
    } else if(delta === 0) {
      let x = (-hsb)/(2*hsa);
      setResult(`Phuong trinh co nghiem kep x1 = x2 = ${x}`);
    } else {
      let x1 = (-hsb + Math.sqrt(delta)) / (2*hsa);
      let x2 = (-hsb - Math.sqrt(delta)) / (2*hsa);
      setResult(`Phuong trinh co 2 nghiem phan biet: x1 = ${x1} va x2 = ${x2}`);
    }
  }

  return(
    <DivContainer>
      <h2>Giai PTBH</h2>
      <InputComponent
        label="HSA"
        name="hsa"
        change={changeInput}
      />
      <br/><br/>
      <InputComponent
        label="HSB"
        name="hsb"
        change={changeInput}
      />
      <br/><br/>
      <InputComponent
        label="HSC"
        name="hsc"
        change={changeInput}
      />
      <br/><br/>
      <ButtonComponent
        type="button"
        click={giai}
      > Giai </ButtonComponent>
      <ResultComponent result={result} />
    </DivContainer>
  )
}
export default GiaiPTBH;
