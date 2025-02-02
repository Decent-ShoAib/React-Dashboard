import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const UserDetail = () => {

    const [userData, setUserData] = useState(null);

    const { id } = useParams();

    const getData = () => {
        axios.get(`https://fakestoreapi.com/users/${id}`)
            .then((res) => {
                setUserData(res.data);
            })
    }

    useEffect(() => {
        getData();
    }, [id])

    if(!userData){
        return <h2>loading....</h2>
    }

    return (
        <>
        
        <div style={styles.card}>
            <h2 style={styles.name}>{userData.name.firstname} {userData.name.lastname}</h2>
                <p style={styles.detail}><strong>Email:</strong> {userData.email}</p>
            <p style={styles.detail}><strong>Username:</strong> {userData.username}</p>
            <p style={styles.detail}><strong>Password:</strong> {userData.password}</p>
            <p style={styles.detail}><strong>Phone:</strong> {userData.phone}</p>
            <p style={styles.detail}><strong>Version:</strong> {userData.version}</p>
        </div>
        
        </>
    );
};

// Inline CSS styles
const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '300px',
        margin: '20px auto',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
    },
    name: {
        fontSize: '24px',
        marginBottom: '16px',
        color: '#333',
    },
    detail: {
        fontSize: '14px',
        margin: '8px 0',
        color: '#555',
    },
};

export default UserDetail;