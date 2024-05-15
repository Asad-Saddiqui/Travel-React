import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { FaChessBishop, FaPlusCircle } from 'react-icons/fa';
import { RiArrowLeftLine } from 'react-icons/ri';
import { withStyles } from 'react-jss';
import { Alert, Button, Divider, Input } from 'antd';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { Flex, Typography } from 'antd';
const { Title } = Typography;
const loginPageStyles = theme => ({
    loginCard: {
        boxShadow: '0 2px 20px 3px rgb(0 0 0 / 6%)',
        background: 'white',
        color: "black",
        width: '410px',
        padding: '2rem',
        position: 'relative'
    },
    cardHeader: {
        color: "blue",
        fontWeight: 600,
        fontSize: '1.6em'
    }
});

const labelStyles = theme => ({
    label: {
        fontSize: '.875rem',
        display: 'block',
        marginBottom: '1rem',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
        '& input': {
            marginTop: '.25rem',
        },
    },
});

const buttonStyles = theme => ({
    buttonMain: {
        width: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        paddingTop: '.75rem',
        paddingBottom: '.75rem',
        background: "skyblue",
        borderRadius: '.25rem',
        border: 'none',
        color: '#fff',
        fontFamily: 'inherit',
        outline: 'none',
        cursor: 'pointer',
        '&:hover': {
            filter: 'brightness(90%)'
        },
        '&:focus': {
            boxShadow: `0 0 0 3px ${"skyblue" + '42'}`,
            outlineColor: 'rgba(0,0,0,0)',
            outlineOffset: '2px',
            outlineStyle: 'solid',
            borderColor: "skyblue"
        }
    },
    iconLeft: {
        marginRight: '.5rem',
        display: 'flex',
        alignItems: 'center'
    }
});

const inputStyles = theme => ({
    inputMain: {
        color: "black",
        fontSize: '.875rem',
        padding: '.5rem .75rem',
        lineHeight: '1.5',
        display: 'block',
        borderRadius: '.25rem',
        outline: 'none',
        backgroundColor: "white",
        border: `1px solid ${"gray"}`,
        width: '100%',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
        marginTop: '.5rem',
        '&:focus': {
            boxShadow: `0 0 0 3px ${"blue" + '42'}`,
            outlineColor: 'rgba(0,0,0,0)',
            outlineOffset: '2px',
            outlineStyle: 'solid',
            borderColor: "blue"
        }
    },
    inputWrapper: {
        display: 'flex'
    },
});

function OTP(props) {
    const classes = props.classes;
    // const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formErrors, setFormErrors] = useState([]);
    const [isSuccessed, setSuccess] = useState(false);

    // const redirectToRegistration = () => {
    //     history.push('/registration');
    // }

    const emailValidate = (value) => {
        const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        if (!emailRegex.test(value)) return 'Wrong email';
        return undefined;
    }

    const passwordValidate = (value) => {
        if (!value || value.length < 6) return 'Password must be more than 6 characters';
        return undefined;
    }


    const loginSubmitHandler = async (e) => {
        e.preventDefault();

        let errors = [];
        let emailCheck = emailValidate(email);
        if (emailCheck) errors.push(emailCheck);

        let passwordCheck = passwordValidate(password);
        if (passwordCheck) errors.push(passwordCheck);

        setFormErrors(errors);
        if (!errors.length) setSuccess(true);
    }
    const onChange = (text) => {
        console.log('onChange:', text);
    };
    const sharedProps = {
        onChange,
    };

    return <>
        <Navbar />
        <div style={{ width: "100%", display: "flex", justifyContent: "center", }}>

            <div className={classes.loginCard} style={{ marginTop: "50px" }}>

                <div style={{ display: 'flex', alignItems: 'center', fontWeight: 100, marginBottom: '25px' }}>
                    {/* <FaChessBishop style={{ marginRight: '10px', fontSize: '1.3em', color: '#83afe0' }} /> */}
                    <span>Well Come To Travelocity</span>
                </div>

                <h1 className={classes.cardHeader} style={{ marginBottom: "30px" }}>One Time OTP</h1>

                <div className="form">
                    <form>


                        <div name="otp" validate={passwordValidate}>
                            <label>
                                <Input.OTP mask="🔒" {...sharedProps} />
                            </label>
                        </div>

                        <div style={{ marginTop: '30px' }}>
                            <Button type="primary" fullWidth>Verify account</Button>
                        </div>

                    </form>

                </div>

                <Divider />
                Already have and account. <Link to="/login">login</Link>


            </div>
        </div>

    </>
}
export default OTP = withStyles(loginPageStyles)(OTP);
