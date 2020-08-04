import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList as List } from 'react-window';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 500,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
}));

function renderRow(props) {
  const { index, style } = props;
  const contentsArray = [
    {body: 2},
    {body: 3},
    {body: 3},
    {body: 4},
    {body: 5},
    {body: 6},
    {body: 7},
    {body: 8},
    {body: 9},
    {body: 9},
    {body: 9},
    {body: 9},
    {body: 9},
  ];
  return (    
    <ListItem button style={style} key={index}>
        <ListItemText primary={contentsArray[index].body}/>
    </ListItem>
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default function VirtualizedList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List height={400} width={300} itemSize={45} itemCount={14}>
        {renderRow}
      </List>
    </div>
  );
}
