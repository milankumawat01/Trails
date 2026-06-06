import { useCallback, useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailJs } from '../data/site';

const TEMPLATE_FOR = {
  HOLIDAY: emailJs.holidayTemplateId,
  VILLA: emailJs.holidayTemplateId,
  FLIGHT: emailJs.flightTemplateId,
  VISA: emailJs.flightTemplateId,
};

export function useInquiry(kind) {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [error, setError] = useState(null);

  const send = useCallback(
    async (payload) => {
      setStatus('sending');
      setError(null);
      try {
        await emailjs.send(
          emailJs.serviceId,
          TEMPLATE_FOR[kind] || emailJs.holidayTemplateId,
          { from_category: `${kind} INQUIRE`, ...payload },
          emailJs.publicKey,
        );
        setStatus('success');
        return true;
      } catch (err) {
        setStatus('error');
        setError(err?.text || err?.message || 'Something went wrong');
        return false;
      }
    },
    [kind],
  );

  const reset = useCallback(() => {
    setStatus('idle');
    setError(null);
  }, []);

  return { send, status, error, reset };
}
