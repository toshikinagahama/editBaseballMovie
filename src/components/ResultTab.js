import React from 'react';
import ResultTimeTable from './ResultTimeTable';
import InputBasicInfomation from './InputBasicInfomation';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ResultTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="タイムライン" {...a11yProps(0)} />
          <Tab label="打者結果" {...a11yProps(1)} />
          <Tab label="基本情報" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ResultTimeTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        味方・相手の打席結果を載せる。 →CSVにて吐き出し可能、また読み込み可能。
      </TabPanel>
      <TabPanel value={value} index={2}>
        <InputBasicInfomation />
        {/* 先攻か後攻かを入力させる。先発オーダーを入力させる。
        →CSVにて吐き出し可能、また読み込み可能。また、試合結果も表示できるように。 */}
      </TabPanel>
    </div>
  );
}

export default ResultTab;
