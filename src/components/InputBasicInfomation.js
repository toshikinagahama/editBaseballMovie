import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setBasicInformation } from '../actions';

function InputBasicInfomation(props) {
  const dispatch = useDispatch();
  const [isSenkou, setIsSenkou] = useState(true);
  const orderNoList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let profiles = {};
  orderNoList.forEach(val => {
    profiles[val] = { batterNo: val, name: '', position: '', ref: React.createRef() };
  });

  const profileTableKeyDown = (val, e) => {
    if (e.keyCode == 13) {
      if (!e.shiftKey) {
        //ShiftKeyが押されていない場合
        //次のインプットエリアに移動
        let nextVal = val + 1;
        if (nextVal > orderNoList[orderNoList.length - 1]) nextVal = orderNoList[0];
        profiles[nextVal].ref.current.focus();
      } else {
        //ShiftKeyが押されている場合
        //次のインプットエリアに移動
        let nextVal = val - 1;
        if (nextVal < orderNoList[0]) nextVal = orderNoList[orderNoList.length - 1];
        profiles[nextVal].ref.current.focus();
      }
    }
  };

  const profileTablePaste = (val, e) => {
    e.preventDefault();
    let text = e.clipboardData.getData('Text');

    let strArray = text.split(/\n/);
    for (let i = 0; i < strArray.length; i++) {
      let tmpVal = val + i;
      if (tmpVal > orderNoList[orderNoList.length - 1]) break;
      profiles[tmpVal].name = strArray[i];
      profiles[tmpVal].ref.current.value = strArray[i];
    }
  };

  return (
    <div>
      <Grid container justify="center" spacing={1}>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Switch
                checked={isSenkou}
                onChange={e => {
                  setIsSenkou(!isSenkou);
                  console.log(isSenkou);
                }}
                value={isSenkou}
              />
            }
            label={isSenkou ? '先攻です' : '後攻です'}
          />
        </Grid>
        <Grid item xs={12}>
          <div>
            <table border="1">
              <tr>
                <th>打順</th>
                <th>名前</th>
              </tr>
              {orderNoList.map(val => {
                return (
                  <tr>
                    <td>{val}</td>
                    <td>
                      <input
                        ref={profiles[val].ref}
                        type="text"
                        onChange={e => {
                          if (!e.target.value.includes('¥n')) profiles[val].name = e.target.value;
                          // console.log(profiles[val].name);
                        }}
                        onPaste={e => profileTablePaste(val, e)}
                        onKeyDown={e => profileTableKeyDown(val, e)}
                      ></input>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(setBasicInformation(isSenkou, profiles))}
          >
            決定
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default InputBasicInfomation;
