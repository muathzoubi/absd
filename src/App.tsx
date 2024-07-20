import viteLogo from './assets/rad-logo.png';
import './App.css';
import { firestore } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

function App() {
  const [ipAddress, setIpAddress] = useState('');
  const [location, setLocation] = useState('');
  const getIpAddress = async () => {
    try {
      const response = await fetch(
        'https://geo.ipify.org/api/v2/country,city?apiKey=at_P8a1MCHmnniqKtMPkJTWjDilhFNxd'
      );
      const data = await response.json();
      const ipAddress = data.ip;
      const country = data.location;
      country;
      setIpAddress(ipAddress);
      setLocation(country);
    } catch (error) {
      console.error('Error logging click:', error);
    }
  };
  const init = async () => {
    const db = firestore;

    try {
      const docRef = await addDoc(collection(db, 'users'), {
        ipAddress: ipAddress,
        location: location,
      });
      console.log('Document written with ID: ', docRef.id, ipAddress);
    } catch (e) {}
  };
  useEffect(() => {
    getIpAddress().then(() => {});
  }, []);
  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h2>الحل الأمثل لإنشاء شركتك وسجلها التجاري بسهولة </h2>
      <div className="card">
        <p>
          هل تحلم ببدء مشروعك الخاص ولكنك لا تعرف من أين تبدأ؟ هل تبحث عن طريقة
          بسيطة وسريعة لإنشاء شركتك والحصول على سجل تجاري دون عناء؟ لقد وصلت إلى
          المكان الصحيح!
        </p>
        <button
          onClick={() => {
            init().then(() => {
              console.log('dflg');
            });
          }}
        >
          المزيد
        </button>
      </div>
      <p className="read-the-docs">
        ! انضم إلينا اليوم واستفد من خدماتنا المميزة
      </p>
    </>
  );
}

export default App;
