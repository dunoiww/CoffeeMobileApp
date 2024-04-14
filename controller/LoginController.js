import { err } from "react-native-svg";
import { db } from "../firebase";
import { ref, onValue, get, child, getDatabase } from "firebase/database";

const handleLogin = async (username, password) => {
    const dbRef = ref(getDatabase());
    try {
        // Get users from database
        const usersSnapshot = await get(child(dbRef, 'NguoiDung/'));
        const users = usersSnapshot.val();
        let account = null;
        
        if (users) {
            // Login
            for (const [userId, userData] of Object.entries(users)) {
                if (userId.slice(0, 2) === 'KH' && userData.TaiKhoan === username && userData.MatKhau === password) {
                    account = {username, password}
                    return account;
                }
            }
            return account;
        } else {
            return ("Không có dữ liệu người dùng");
        }
    } catch (error) {
        console.error(error);
        return error;
    }
};

export { handleLogin };
