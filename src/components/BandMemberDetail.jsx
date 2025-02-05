import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import members from './data/memebrs';

function BandMemberDetail() {
  const { id } = useParams();
  const member = members.find((m) => m.id === parseInt(id));

  if (!member) return <h2 className="text-center text-white">Member not found!</h2>;

  return (
    <section
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      style={{ minHeight: '100vh' }}
    >
      <div className="bg-gray-800 rounded-lg p-8 max-w-lg w-full text-white shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
          onClick={() => window.history.back()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img
          src={member.photo}
          alt={member.name}
          className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-gray-600 mb-4"
        />
        <h3 className="text-3xl font-bold text-center">{member.name}</h3>
        <p className="text-lg text-gray-400 text-center mb-4">{member.role}</p>
        <p className="text-md leading-relaxed">{member.details}</p>
        <div className="text-center mt-4">
          <Link to="/" className="text-blue-400 hover:underline">Back to Band Members</Link>
        </div>
      </div>
    </section>
  );
}

export default BandMemberDetail;
