import React from 'react';
import styles from './Frame.css'

const Frame = (props) => {
        console.log(props)
  const getDataList = () => {
    if(props.data){
      return( props.data.map((item, i) => <div key={i} className={styles.message}>{item.text}</div> ))
    }else{
      return <div>Add soome information</div>
    }
  }

  const dataList = getDataList();

  return(
    <div className={styles.frame}>
      <h1 className={styles.title}>Some text ...</h1>
      {dataList}
    </div>
  )
}

export default Frame;
