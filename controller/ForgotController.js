import { child, get, getDatabase, ref } from "firebase/database";
import { send, EmailJSResponseStatus } from '@emailjs/react-native';

const OTP = () => {
    const otp = Math.floor(Math.random() * 9000);
    return String(otp).padStart(4, '0');
}

const otp = OTP();

const sendEmail = async (email, user) => {
    try {
        console.log('sending email...')
        await send (
            'service_s8671sg',
            'template_wa15s4b',
            {
                to_name: user,
                message: otp,
                recipient: email,
            }, 
            {
                publicKey: '_TBVrvzhnGTqwNxVm'
            }
        )
        console.log('success');
    } catch (err) {
        if (err instanceof EmailJSResponseStatus) {
          console.log('EmailJS Request Failed...', err);
        }
  
        console.log('ERROR', err);
      }
}

const ForgotPassword = async (email) => {
    const dbRef = ref(getDatabase());
    try {
        // Get users from database
        const usersSnapshot = await get(child(dbRef, 'NguoiDung/'));
        const users = usersSnapshot.val();
        
        if (users) {
            for (const [userId, userData] of Object.entries(users)) {
                if (userData.Email == email) {
                    console.log('sending email...')
                    await sendEmail(email, userData.HoTen);
                    return [true, 'Gủi mã OTP thành công'];
                }
            }
        } else {
            return [false, "Không có dữ liệu người dùng"];
        }
    } catch (error) {
        console.error(error);
        return [false, error];
    }
};

export { ForgotPassword };