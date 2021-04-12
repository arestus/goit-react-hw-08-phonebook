import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ email, onLogout }) => (
  <div style={styles.container}>
    <span style={styles.name}>Welcome, {email}</span>
    <button type="button" onClick={onLogout}>
      Выйти
    </button>
  </div>
);
const mapStateToProps = state => ({
  email: authSelectors.getUseremail(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
