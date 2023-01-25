import PropTypes from 'prop-types';

import { Colum } from './TransactionHistory.styled';

export default function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <tr>
      <Colum>{type}</Colum>
      <Colum>{amount}</Colum>
      <Colum>{currency}</Colum>
    </tr>
  );
}

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
