import React from 'react';

import st from './Notification.module.css'

const Notification = ({message}) => (
    <p className={st.notification}>{message}</p>
)

export default Notification;