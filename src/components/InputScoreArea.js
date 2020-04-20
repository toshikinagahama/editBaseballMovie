import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import FormControl from '@material-ui/core/FormControl';
import { useDispatch, useSelector } from 'react-redux';

import {
  scoreInningStart,
  scoreInningEnd,
  inningSelectChange,
  omoteSelectChange,
  batterChange,
  batterStart,
  batterEnd,
  batterScoreChange,
} from '../actions';

function InputScoreArea() {
  const dispatch = useDispatch();
  let selectedOmote = useSelector((state) => state.selectedOmote);
  let selectedInning = useSelector((state) => state.selectedInning);
  let currentBatter = useSelector((state) => state.currentBatter);
  let memberProfile = useSelector((state) => state.memberProfile);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [position, setPosition] = React.useState('');

  return (
    <div style={{ margin: 0 }}>
      <Grid container justify="center">
        <Grid item xs={3}>
          <Grid container justify="center">
            <Grid item xs={12} style={{}}>
              <InputLabel id="demo-simple-select-label">イニング</InputLabel>
              <Select
                onChange={(e) => dispatch(inningSelectChange(e.target.value))}
                value={selectedInning}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((val) => {
                  return <MenuItem value={val}>{val}回</MenuItem>;
                })}
              </Select>
            </Grid>
            <Grid item xs={12} style={{}}>
              <InputLabel id="demo-simple-select-label"></InputLabel>
              <Select
                onChange={(e) => dispatch(omoteSelectChange(e.target.value))}
                value={selectedOmote}
              >
                {['表', '裏'].map((val) => {
                  return <MenuItem value={val}>{val}</MenuItem>;
                })}
              </Select>
            </Grid>
            <Grid item xs={12} style={{}}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => dispatch(scoreInningStart(selectedInning + '回' + selectedOmote))}
              >
                開始
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => dispatch(scoreInningEnd(selectedInning + '回' + selectedOmote))}
              >
                終了
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container justify="center">
            <Grid item xs={12} style={{}}>
              <InputLabel id="demo-simple-select-label">打者 {currentBatter.batterNo}</InputLabel>
              <Select
                onChange={(e) => {
                  dispatch(batterChange(e.target.value));
                }}
                value={currentBatter.name}
              >
                {memberProfile.map((val) => {
                  return <MenuItem value={val}>{val.name}</MenuItem>;
                })}
              </Select>
              <Button variant="contained" color="primary">
                打者変更
              </Button>
            </Grid>
            <Grid item xs={12} style={{}}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => dispatch(batterStart(currentBatter))}
              >
                打席開始
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => dispatch(batterEnd(currentBatter))}
              >
                打席終了
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container justify="center">
            {/* メニュー */}
            <Menu
              id="scoreMenu1"
              anchorEl={anchorEl1}
              keepMounted
              open={Boolean(anchorEl1)}
              onClose={() => {
                setAnchorEl1(null);
              }}
            >
              {['安打', 'ゴロ', 'フライ', 'エラー', '2塁打', '3塁打', '本塁打'].map(
                (val, index) => {
                  return (
                    <MenuItem
                      onClick={(e) => {
                        dispatch(batterScoreChange(position + val));
                        setAnchorEl1(null);
                      }}
                    >
                      {val}
                    </MenuItem>
                  );
                }
              )}
            </Menu>
            <Menu
              id="scoreMenu2"
              anchorEl={anchorEl2}
              keepMounted
              open={Boolean(anchorEl2)}
              onClose={() => {
                setAnchorEl2(null);
              }}
            >
              {[
                '三振',
                '四球',
                '死球',
                '安打',
                'ゴロ',
                'フライ',
                'エラー',
                '2塁打',
                '3塁打',
                '本塁打',
              ].map((val, index) => {
                if (val === '三振' || val === '四球' || val === '死球') {
                  return (
                    <MenuItem
                      onClick={(e) => {
                        dispatch(batterScoreChange(val));
                        setAnchorEl2(null);
                      }}
                    >
                      {val}
                    </MenuItem>
                  );
                } else {
                  return (
                    <MenuItem
                      onClick={(e) => {
                        dispatch(batterScoreChange(position + val));
                        setAnchorEl2(null);
                      }}
                    >
                      {val}
                    </MenuItem>
                  );
                }
              })}
            </Menu>

            {/* 外野 */}
            <Grid item xs={3}></Grid>
            <Grid item xs={2}>
              <Button
                onClick={(event) => {
                  setPosition('左');
                  setAnchorEl1(event.currentTarget);
                }}
              >
                左
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                onClick={(event) => {
                  setPosition('中');
                  setAnchorEl1(event.currentTarget);
                }}
              >
                中
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                onClick={(event) => {
                  setPosition('右');
                  setAnchorEl1(event.currentTarget);
                }}
              >
                右
              </Button>
            </Grid>
            <Grid item xs={3}></Grid>
            {/* マージン */}
            <Grid item xs={12}>
              <div style={{ margin: '1em' }}></div>
            </Grid>
            {/* セカンド、ショート */}
            <Grid item xs={1}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}>
              <Button
                onClick={(event) => {
                  setPosition('遊');
                  setAnchorEl1(event.currentTarget);
                }}
              >
                遊
              </Button>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}>
              <Button
                onClick={(event) => {
                  setPosition('二');
                  setAnchorEl1(event.currentTarget);
                }}
              >
                二
              </Button>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={1}></Grid>
            {/* サード、ファースト、投手 */}
            <Grid item xs={1}></Grid>
            <Grid item xs={2}>
              <Button
                onClick={(event) => {
                  setPosition('三');
                  setAnchorEl1(event.currentTarget);
                }}
              >
                三
              </Button>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}>
              <Button
                onClick={(event) => {
                  setPosition('投');
                  setAnchorEl2(event.currentTarget);
                }}
              >
                投
              </Button>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}>
              <Button
                onClick={(event) => {
                  setPosition('一');
                  setAnchorEl1(event.currentTarget);
                }}
              >
                一
              </Button>
            </Grid>
            <Grid item xs={1}></Grid>
            {/* 捕手 */}
            <Grid item xs={5}></Grid>
            <Grid item xs={2}>
              <Button
                onClick={(event) => {
                  setPosition('捕');
                  setAnchorEl1(event.currentTarget);
                }}
              >
                捕
              </Button>
            </Grid>
            <Grid item xs={5}></Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
}

export default InputScoreArea;
