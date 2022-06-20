import React, { Component } from 'react';
import { Button, Box } from '@material-ui/core';
import { inject, observer } from 'mobx-react'

@inject('counterStore')
@observer
class CounterComponent extends Component {

  render(){

    const { counterStore } = this.props;

    return(
      <div>
        <Button 
          onClick={() => counterStore.decrement()}
          variant='contained' color='primary' size='large'> - </Button>        
        
        <Box component='span' m={5}> {counterStore.count} </Box>
        
        <Button 
          onClick={() => counterStore.increment()}
          variant='contained' color='primary' size='large'> + </Button>
      </div>
    )
  }
}

export default CounterComponent;

/*
@inject('counterStore'): 
Provider로 제공되는 Store 중 counterStore를 컴포넌트가 사용할 수 있는 형태로 Props에 주입

@observer:
setState와 비슷한 개념으로 observable을 통해 관리되는 state를 react component에 적용
*/