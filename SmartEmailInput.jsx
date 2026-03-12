import React, { useState } from 'react';

// 🚀 Get your FREE API key here: https://rapidapi.com/yahyalazrek/api/emailguard-disposable-typosquatting-validator-api/
const RAPIDAPI_KEY = "YOUR_RAPIDAPI_KEY_HERE"; 
const RAPIDAPI_HOST = "emailguard-disposable-typosquatting-validator-api.p.rapidapi.com";

export default function SmartEmailInput() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');
  const [suggestion, setSuggestion] = useState(null);

  const validateEmail = async (emailToTest) => {
    if (!emailToTest) return;
    setStatus('loading');
    setSuggestion(null);
    setMessage('');

    try {
      const response = await fetch(`https://${RAPIDAPI_HOST}/?email=${encodeURIComponent(emailToTest)}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-key': RAPIDAPI_KEY,
          'x-rapidapi-host': RAPIDAPI_HOST
        }
      });

      const data = await response.json();

      if (data.status === 'success') {
        // 1. Block Disposable Emails
        if (data.checks.is_disposable) {
          setStatus('error');
          setMessage('Please use a permanent email address, not a temporary one.');
          return;
        }
        
        // 2. Block Dead Domains
        if (!data.checks.has_mx_records) {
          setStatus('error');
          setMessage('This email domain does not appear to be active.');
          return;
        }

        // 3. Block Role-Based Emails (NEW FEATURE)
        if (data.checks.is_role_based) {
          setStatus('error');
          setMessage('Please use a personal email address, not a generic role (like admin@ or info@).');
          return;
        }

        // 4. Suggest Typo Fixes
        if (data.checks.is_typo && data.suggestion) {
          setStatus('error');
          setSuggestion(data.suggestion);
          setMessage(`Did you mean ${data.suggestion}?`);
          return;
        }
        
        // All checks passed
        setStatus('success');
        setMessage('Looks good!');
      } else {
        setStatus('error');
        setMessage(data.message || 'Invalid email format.');
      }
    } catch (err) {
      setStatus('idle'); // Network error, fail gracefully and let them proceed
    }
  };

  const handleSuggestionClick = () => {
    setEmail(suggestion);
    validateEmail(suggestion);
  };

  return (
    <div className="flex flex-col max-w-sm gap-2 font-sans">
      <label className="text-sm font-semibold text-gray-700">Work Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={() => validateEmail(email)}
        placeholder="you@company.com"
        className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
          status === 'error' ? 'border-red-500 focus:ring-red-200' :
          status === 'success' ? 'border-green-500 focus:ring-green-200' :
          'border-gray-300 focus:ring-blue-200'
        }`}
      />
      
      {status === 'loading' && <span className="text-xs text-gray-500">Validating...</span>}
      
      {status === 'error' && !suggestion && (
        <span className="text-xs text-red-500">{message}</span>
      )}

      {/* The Magic "Did you mean?" Button */}
      {status === 'error' && suggestion && (
        <div className="text-xs text-red-500">
          {message}{' '}
          <button 
            onClick={handleSuggestionClick}
            className="font-bold text-blue-600 underline cursor-pointer hover:text-blue-800"
          >
            Yes, fix it.
          </button>
        </div>
      )}

      {status === 'success' && <span className="text-xs text-green-600">✓ Valid email address</span>}
    </div>
  );
}
