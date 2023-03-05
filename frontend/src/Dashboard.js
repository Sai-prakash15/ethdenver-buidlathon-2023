// import logo from './logo.svg';
import { Grid } from '@mui/material';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import CustomizedInputBase from './Components/CustomizedInputBase';
import ColumnGroupingTable from './Components/table';
import { backend_url } from './constants';

function DashboardComponent(props) {
  const [ sending_request, set_sending_request] = useState(false)
  const {wallet_address} = props;
  // const saveDashboard = async ()=>{

  //   try{
  //     set_sending_request("true")
  //     const res = await axios.post(`${backend_url}/api/v1/dashboard/${data?.id}`, {
  //     wallet_address: wallet_address,
  //   })
  //   // enqueueSnackbar('Saved Dashboard');
  //   set_sending_request(false)
  // }
  //   catch{
  //     set_sending_request(false)
  //     enqueueSnackbar('Server error!!');
  //   }
  // }
  const { enqueueSnackbar } = useSnackbar();
    const getData = async ()=>{
      if(wallet_address){
    try{
      // set_sending_request("true")
      const res = await axios.get(`${backend_url}/api/v1/dashboard/user/${wallet_address}`, {
      wallet_address: wallet_address,
    })
    // enqueueSnackbar('Saved Dashboard');
    set_sending_request(false)
    
  }
    catch{
      set_sending_request(false)
      enqueueSnackbar('Retrieving data failed!!');
    }
  }}
  

  useEffect(() => {
    getData()
  }, [wallet_address]);

  return (
    <></>
    // <Grid
    // className="grid"
    // container
    // spacing={0}
    // direction="column"
    // alignItems="center"
    // justifyContent="center"
    // style={{ minHeight: '100vh' }}>

    // <CustomizedInputBase />
    // <ColumnGroupingTable/>
    // </Grid>
  );
}
const mapStateToProps = state => {
  return {
    wallet_address: state.counter.wallet_address,
  }
}
export default connect(mapStateToProps)(DashboardComponent);
