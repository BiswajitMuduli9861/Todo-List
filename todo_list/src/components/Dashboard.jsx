import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(circle at 20% 40%, #232526 0%, #0f2027 100%)',
      padding: '60px 0',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <div style={{
        background: 'rgba(30,30,30,0.95)',
        boxShadow: '0 8px 32px rgba(79,140,255,0.18)',
        borderRadius: 24,
        padding: '48px 36px',
        maxWidth: 420,
        width: '100%',
        textAlign: 'center',
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: -30,
          right: -30,
          width: 80,
          height: 80,
          background: 'linear-gradient(135deg, #4f8cff 60%, #232526 100%)',
          borderRadius: '50%',
          opacity: 0.15,
          zIndex: 0
        }} />
        <img
          src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
          alt="Todo Icon"
          style={{ width: 72, marginBottom: 28, zIndex: 1, position: 'relative', filter: 'brightness(0.85)' }}
          />
        <h1 style={{
          marginBottom: 18,
          color: '#4f8cff',
          fontWeight: 800,
          letterSpacing: 2,
          fontSize: 32,
          zIndex: 1,
          position: 'relative'
        }}>Todo List</h1>
        <p style={{
          color: '#bbb',
          marginBottom: 36,
          fontSize: 17,
          zIndex: 1,
          position: 'relative'
        }}>
          Organize your day with style.<br />
          Add, track, and complete your tasks easily!
        </p>
        <Link to='/todolist'>
        <button
          
          style={{
            background: 'linear-gradient(90deg, #4f8cff 60%, #232526 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            padding: '14px 36px',
            fontSize: 17,
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(79,140,255,0.18)',
            transition: 'transform 0.2s',
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          >
          Get Started
        </button>
          </Link>
      </div>
      {/* Extra content for scroll */}
      <div style={{
        maxWidth: 420,
        margin: '48px auto 0 auto',
        background: 'rgba(30,30,30,0.92)',
        borderRadius: 20,
        boxShadow: '0 4px 16px rgba(79,140,255,0.12)',
        padding: '32px 36px',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          left: -25,
          bottom: -25,
          width: 60,
          height: 60,
          borderRadius: '50%',
          opacity: 0.12,
          zIndex: 0,
          
        }} />
        <h2 style={{
          color: '#4f8cff',
          marginBottom: 20,
          fontWeight: 700,
          fontSize: 22,
          zIndex: 1,
          position: 'relative'
        }}>Today's Inspiration</h2>
        <blockquote style={{
          fontStyle: 'italic',
          color: '#bbb',
          marginBottom: 24,
          background: '#232526',
          borderLeft: '4px solid #4f8cff',
          padding: '12px 18px',
          borderRadius: 8,
          zIndex: 1,
          position: 'relative'
        }}>
          "Success is the sum of small efforts, repeated day in and day out."
        </blockquote>
        <ul style={{
          textAlign: 'left',
          color: '#eee',
          paddingLeft: 24,
          fontSize: 16,
          zIndex: 1,
          position: 'relative'
        }}>
          <li>Buy groceries</li>
          <li>Finish React project</li>
          <li>Read a book</li>
          <li>Exercise for 30 minutes</li>
          <li>Call a friend</li>
        </ul>
      </div>
    </div>

    <div className="flex justify-between bg-[#08284D] h-68 sm:h-47 md:h-27">
      <div className='mt-9 text-white ml-14 lg:ms-30 xl:ms-52'>© 2025  Gravity Company. All rights reserved. | Built with ❤️ using the MERN Stack.</div>
      <div>

      <Footer/>
      </div>

    </div>
          </>
  );
};

export default Dashboard;
