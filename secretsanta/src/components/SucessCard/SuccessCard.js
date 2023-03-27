import React from "react";
import PropTypes from "prop-types";

export default function SuccessCard({ error, success, loading }) {
  return (
    <div className="success-message">
      <h3>Your Santas have been sent their gift recipient!</h3>
      {loading && <p>Sending...</p>}
      {success && (
        <div className="email-success">
          <p>Emails sent!</p>
        </div>
      )}
      {error && <p>Error!</p>}
    </div>
  );
}

SuccessCard.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  loading: PropTypes.bool,
};
