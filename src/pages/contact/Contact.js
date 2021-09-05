import React, { useContext, useState } from 'react'
import './contact.scss'
import TextField from '@material-ui/core/TextField';
import { Backdrop, Button, CircularProgress } from '@material-ui/core';
import { Context } from '../../context/Context';
import emailjs from 'emailjs-com';
import Alert from '@material-ui/lab/Alert';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DiaLog from '../../components/dialog/Dialog';

export default function Contact() {
    const {user} = useContext(Context)
    const [name, setName] = useState(user? user.username : '');
    const [checkName, setCheckName] = useState(true);
    const [email, setEmail] = useState(user? user.email : '');
    const [checkEmail, setCheckEmail] = useState(true);
    const [phone, setPhone] = useState('');
    const [checkPhone, setCheckPhone] = useState(true);
    const [address, setAddress] = useState('');
    const [checkAddress, setCheckAddress] = useState(true);
    const [message, setMessage] = useState('');

    const [loading, setLoading] = useState(true);
    const [diaLog, setDiaLog] = useState(true)

    const handleName = (e) => {
        const valueName = e.target.value;
        const regex = /[A-z]+/g;
        if(valueName != '' && regex.test(valueName)){
            setName(valueName);
            setCheckName(true);
        }else{
        setCheckName(false);
    }}

    const handlePhone = (e) => {
        const valuePhone = e.target.value;
        const regexPhone = /((0)+([0-9]{9})\b)/g;
        if(regexPhone.test(valuePhone)){
          setPhone(valuePhone);
          setCheckPhone(true);
        }else{
            setCheckPhone(false)
    }}

    const handleEmail = (e) => {
        const valueEmail = e.target.value;
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regexEmail.test(String((valueEmail).toLowerCase()))){
          setEmail(valueEmail);
          setCheckEmail(true);
        }else{
            setCheckEmail(false)
    }}

    const handleAddress = (e) => {
        const valueAddress = e.target.value;
        const regex = /[A-z]+/g;
        if(valueAddress != '' && regex.test(valueAddress)){
            setAddress(valueAddress);
            setCheckAddress(true);
        }else{
            setCheckAddress(false);
    }}

    const handleSubmit = (e) => {
       e.preventDefault();
       setLoading(false)
       if(name  && phone  && email  && address && message){
       emailjs.sendForm('service_16or8k8', 'template_noj4y2e', e.target, 'user_tAnd6vxmGTA480vCSTdsm')
       .then((result) => {
           console.log(result.text);
       }, (error) => {
           console.log(error.text);
       });
       e.target.reset();
       setTimeout(() => {
        setLoading(true);
        },3000)
        setTimeout(() => {
            setDiaLog(false);
        },4000)   
    }else{
        e.preventDefault();
        toast.error("Bạn không được bỏ trống thông tin liên hệ")
        setLoading(true);
    }
}
    
    toast.configure();
    return (
        <div className="contact">
            <h2>Contact</h2>
            <form className="contact__form" onSubmit={handleSubmit}>
            <TextField
            className="contact__form__input"
            label="Name"
            name="name"
            value={user? user.username : null}
            placeholder="Name..."
            onChange={handleName}
            multiline
            variant="outlined"
            />
            {
                checkName ? '' : <Alert style={{fontSize: "14px"}} severity="error">Yêu cầu bạn nhập tên của mình</Alert>
            }
            <TextField
            className="contact__form__input"
            label="Email"
            name="email"
            type="email"
            value={user? user.email : null}
            placeholder="Email..."
            onChange={handleEmail}
            multiline
            variant="outlined"
            />
             {
                checkEmail ? '' : <Alert style={{fontSize: "14px"}} severity="error">Yêu cầu bạn nhập đúng địa chỉ email (ex: quoc@gmail.com)</Alert>
            }
            <TextField
            className="contact__form__input"
            label="Phone"
            name="phone"
            placeholder="Phone..."
            onChange={handlePhone}
            multiline
            variant="outlined"
            />
             {
                checkPhone ? '' : <Alert style={{fontSize: "14px"}} severity="error">Yêu cầu bạn nhập số điện thoại bắt đầu bằng số 0 và đủ 10 số</Alert>
            }
            <TextField
            className="contact__form__input"
            label="Address"
            name="address"
            placeholder="Address..."
            onChange={handleAddress}
            multiline
            variant="outlined"
            />
             {
                checkAddress ? '' : <Alert style={{fontSize: "14px"}} severity="error">Yêu cầu bạn nhập địa chỉ của mình</Alert>
            }
            <TextField
            className="contact__form__input"
            label="Message"
            name="message"
            placeholder="Message..."
            onChange={e => setMessage(e.target.value)}
            multiline
            variant="outlined"
            />
            <Button type="submit" variant="contained" color="primary">Submit</Button>
            </form>

            {
                loading ? '' : 
            <Backdrop style={{zIndex:'777'}} open='true' >
                <CircularProgress color="inherit" />
            </Backdrop>
            }
            {
                diaLog ? '' :
                <DiaLog setDiaLog={setDiaLog} />
            }
        </div>
    )
}
