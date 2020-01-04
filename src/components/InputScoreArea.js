import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { scoreInningStart, scoreInningEnd, inningSelectChange, omoteSelectChange } from '../actions'

function InputScoreArea() {
    const dispatch = useDispatch();
    let selectedOmote = useSelector(state => state.selectedOmote);
    let selectedInning = useSelector(state => state.selectedInning);

    return (
        <div style={{ padding: 30 }}>
            <Grid item xs={4}>
                <Grid container justify="center">
                    <Grid item xs={12} style={{ paddingBottom: 30 }}>
                        <InputLabel id="demo-simple-select-label">イニング</InputLabel>
                        <Select onChange={(e) => dispatch(inningSelectChange(e.target.value))} value={selectedInning}>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((val) => {
                                return <MenuItem value={val}>{val}回</MenuItem>;
                            })
                            }
                        </Select>
                    </Grid>
                    <Grid item xs={12} style={{ paddingBottom: 30 }}>
                        <InputLabel id="demo-simple-select-label"></InputLabel>
                        <Select onChange={(e) => dispatch(omoteSelectChange(e.target.value))} value={selectedOmote}>
                            {["表", "裏"].map((val) => {
                                return <MenuItem value={val}>{val}</MenuItem>;
                            })
                            }
                        </Select>
                    </Grid>
                    <Grid item xs={12} style={{ paddingBottom: 10 }}>
                        <Button variant="contained" color="primary" onClick={() => dispatch(scoreInningStart(selectedInning + "回" + selectedOmote))}>開始</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick={() => dispatch(scoreInningEnd(selectedInning + "回" + selectedOmote))}>終了</Button>
                    </Grid>
                </Grid>

            </Grid>
            <Grid item xs={4}>
                <Grid container justify="center">
                </Grid>
            </Grid>
            <Grid item xs={4}>
            </Grid>
        </div>
    );
}

export default InputScoreArea;
